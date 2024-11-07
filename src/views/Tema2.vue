<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Pasos para la administración
    
    p.mb-4 Todo proceso para la administración de comunicaciones oficiales se encuentra bien estructurado en un conjunto de pasos o etapas que resultan necesarios como plena garantía para la realización de esta actividad, con el fin de simplificar el trabajo, mediante las orientaciones entregadas en este paso a paso, a manera de principios, métodos y procedimientos que van a facilitar una gestión documental rápida y segura. 

    //Tarjetaslocas

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
