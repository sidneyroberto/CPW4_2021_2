<template>
  <div id="container">
    <div id="areaPesquisa">
      <input
        type="text"
        v-model="filtro"
        placeholder="Digite o nome da série"
        @keyup="pesquisarSeries"
      />
    </div>
    <div id="areaResultado">
      <CardSerie
        v-for="serie in seriesEncontradas"
        v-bind:key="serie.id"
        :serie="serie"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Serie } from "@/models/Serie";
import { SeriesStore } from "@/store/modules/SeriesStore";
import { Options, Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import store from "../store/index";
import CardSerie from "../components/CardSerie.vue";

@Options({ components: { CardSerie } })
export default class Home extends Vue {
  filtro: string = "";
  seriesStore = getModule(SeriesStore, store);

  get seriesEncontradas(): Serie[] {
    return this.seriesStore.seriesEncontradas;
  }

  pesquisarSeries() {
    this.seriesStore.pesquisarSeries(this.filtro);
  }
}
</script>

<style lang="scss" scoped>
@import "../globals";

#container {
  padding: 20px;
}

#areaPesquisa {
  margin: auto auto 50px auto;
  text-align: center;

  input {
    width: 40%;
    height: 30px;
    border-radius: 20px;
    padding: 5px 20px;
    font-family: $fonte-padrao;
    font-size: 120%;
    border: 2px solid #aaa;

    // input:focus
    &:focus {
      outline: none;
      border: 2px solid #ccc;
      box-shadow: 2px 2px 5px #89c4f4, -2px -2px 5px #89c4f4;
    }
  }
}

#areaResultado {
  display: flex;
  flex-wrap: wrap;
}
</style>
