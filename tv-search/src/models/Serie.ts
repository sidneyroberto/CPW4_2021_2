export class Serie {
    private _id: number
    private _nome: string
    private _idioma: string
    private _genero: string
    private _dataEstreia: Date
    private _urlThumb: string
    private _status: string
    private _paisOrigem: string

    constructor(objSerie: any) {
        this._id = objSerie['id']
        this._nome = objSerie['name']
        this._idioma = objSerie['language']
        this._status = objSerie['status']
        this._dataEstreia = new Date(objSerie['premiered'])
        this._genero =
            objSerie['genres']
                ? objSerie['genres'].join(', ')
                : 'No genres informed'
        this._urlThumb =
            objSerie['image']
                ? objSerie['image']['medium']
                : 'noimage'
        const objCanal =
            objSerie['webChannel']
                ? objSerie['webChannel']['country']
                : objSerie['network']
        this._paisOrigem = objCanal ? objCanal['name'] : 'No country informed'
    }

    get id() {
        return this._id
    }

    get nome() {
        return this._nome
    }

    get idioma() {
        return this._idioma
    }

    get genero() {
        return this._genero
    }

    get dataEstreia() {
        return this._dataEstreia
    }

    get urlThumb() {
        return this._urlThumb
    }

    get status() {
        return this._status
    }

    get paisOrigem() {
        return this._paisOrigem
    }


}