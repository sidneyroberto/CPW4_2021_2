<template>
  <div id="detalhesSerie">
    <div id="cartazSerie">
      <img
        :src="
          serieEscolhida.urlThumb == 'noimage'
            ? imagemNaoEncontrada
            : serieEscolhida.urlThumb
        "
        alt="Cartaz da série"
      />
    </div>
    <div id="dadosSerie">
      <p>Nome: {{ serieEscolhida.nome }}</p>
      <p>Idioma: {{ serieEscolhida.idioma }}</p>
      <p>Gênero: {{ serieEscolhida.genero }}</p>
      <p>
        Data de estréia:
        {{ serieEscolhida.dataEstreia.toLocaleDateString("pt-Br") }}
      </p>
      <p>Status: {{ serieEscolhida.status }}</p>
      <p>País de origem: {{ serieEscolhida.paisOrigem }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { SeriesStore } from "../store/modules/SeriesStore";
import store from "../store/index";
import { getModule } from "vuex-module-decorators";
import { Serie } from "@/models/Serie";
import noimage from "../assets/img/noimage.png";

export default class DetalhesSerie extends Vue {
  seriesStore = getModule(SeriesStore, store);
  imagemNaoEncontrada = noimage;

  get serieEscolhida(): Serie {
    return this.seriesStore.serieEscolhida;
  }
}
</script>

<style lang="scss" scoped>
#detalhesSerie {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

#cartazSerie {
  width: 40%;
  text-align: center;

  img {
    width: 50%;
  }
}

#dadosSerie {
  p {
    font-size: 150%;
  }
}

@media only screen and (max-width: 600px) {
  #cartazSerie {
    width: 100%;

    img {
      width: 80%;
    }
  }

  #dadosSerie {
    width: 100%;
    text-align: center;
  }
}
</style>