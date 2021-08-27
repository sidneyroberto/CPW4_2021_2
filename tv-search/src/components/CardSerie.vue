<template>
  <div class="cardSerie">
    <router-link @click.prevent="aoAbrirDetalhes" to="/serie">
      <img
        :src="
          serie.urlThumb == 'noimage' ? imagemNaoEncontrada : serie.urlThumb
        "
        alt="Cartaz da série"
      />
    </router-link>
    <router-link @click.prevent="aoAbrirDetalhes" to="/serie">
      <span class="titulo">{{ serie.nome }}</span>
    </router-link>
    <span class="dataEstreia"
      >Estreiou em: {{ serie.dataEstreia.toLocaleDateString("pt-BR") }}</span
    >
  </div>
</template>

<script lang="ts">
import { Serie } from "@/models/Serie";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import noimage from "../assets/img/noimage.png";
import { SeriesStore } from "../store/modules/SeriesStore";
import store from "../store/index";
import { getModule } from "vuex-module-decorators";

export default class CardSerie extends Vue {
  @Prop()
  serie!: Serie;
  imagemNaoEncontrada = noimage;
  seriesStore = getModule(SeriesStore, store);

  aoAbrirDetalhes() {
    this.seriesStore.atualizarSerie(this.serie);
  }
}
</script>

<style lang="scss" scoped>
.cardSerie {
  margin-bottom: 50px;
  text-align: center;
  width: 20%;

  img {
    width: 80%;
  }

  span {
    display: block;
  }

  .titulo {
    font-size: 120%;
  }

  .dataEstreia {
    font-size: 80%;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: #59abe3;
    }
  }
}
</style>