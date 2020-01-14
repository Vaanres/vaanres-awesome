<template>
  <div>
    <section class="container">
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

      <article
        v-for="(item, index) in tiles"
        :id="'title-`${index}`'"
        :key="index"
        class="tile"
      >
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
    </section>

    <!-- <canvas id="stage"></canvas> -->
  </div>
</template>

<script>
// import gsap from 'gsap'
// import * as three from 'three'

// console.log('gsap', gsap)
// console.log('three', three)

export default {
  name: 'Index',
  data() {
    return {
      tiles: [
        {
          src: '/img/tiles/woods/base.jpg',
          hover: '/img/tiles/woods/hover.jpg',
          title: 'Lost in The Woods'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 10;
}

canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
}

.tile {
  width: 35vw;
  flex: 0 0 auto;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
