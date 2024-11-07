<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La gestión de comunicaciones y documentación oficial es un área de especial cuidado dentro de la administración documental, al explicar las clases que existen y las características que puede tener un documento, se da cuenta de la importancia de saber identificarlos para realizar los procesos adecuados y poder cumplir a cabalidad las normas establecidas para su tratamiento. En el siguiente diagrama, se presentan los contenidos del componente formativo:

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama menciona el contenido del componente que se centra en las características, normas y embalaje de las comunicaciones oficiales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
