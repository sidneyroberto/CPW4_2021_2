import { Serie } from '@/models/Serie'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_URL_API
})

@Module({ name: 'SeriesStore' })
export class SeriesStore extends VuexModule {
    private _series: Serie[] = []

    get seriesEncontradas() {
        return this._series
    }

    @Action
    async pesquisarSeries(filtro: string) {
        if (filtro) {
            const resposta = await http.get('/', {
                params: {
                    q: filtro
                }
            })
            const resultado = resposta.data
            if (resultado) {
                const seriesEncontradas =
                    resultado.map((resultado: any) => new Serie(resultado['show']))
                this.context.commit('_atualizarSeries', seriesEncontradas)
            } else {
                this.context.commit('_atualizarSeries', [])
            }
        } else {
            this.context.commit('_atualizarSeries', [])
        }
    }

    @Mutation
    _atualizarSeries(series: Serie[]) {
        this._series = series
    }
}