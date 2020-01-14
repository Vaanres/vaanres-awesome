<template>
  <div>
    <section class="container">
      <article class="tile">
        <figure class="tile__figure">
          <img
            data-src="path/to/my/image.jpg"
            data-hover="path/to/my/hover-image.jpg"
            class="tile__image"
            alt="My image"
            width="400"
            height="300"
          />
        </figure>
      </article>
    </section>

    <canvas id="stage"></canvas>
  </div>
</template>

<script>
// import gsap from 'gsap'
// import * as three from 'three'

// console.log('gsap', gsap)
// console.log('three', three)

export default {
  name: 'Index',
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

.tile {
  width: 35vw;
  flex: 0 0 auto;
}

.tile__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
}
</style>
