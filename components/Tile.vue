<template>
  <article class="tile">
    <figure class="tile__figure">
      <img
        data-src="/img/tiles/woods/base.jpg"
        data-hover="/img/tiles/woods/hover.jpg"
        src="/img/tiles/woods/base.jpg"
        loading="lazy"
        class="tile__image"
        alt="My image"
      />
    </figure>
  </article>
</template>

<script>
export default {
  name: 'SlideItem',
  props: {
    tile: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss"></style>
