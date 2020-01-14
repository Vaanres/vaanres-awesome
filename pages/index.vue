<template>
  <section class="content | scrollarea-ctn">
    <div class="scrollarea | slideshow">
      <ul class="slideshow-list">
        <li
          v-for="(item, index) in tiles"
          :key="`title-${index}`"
          class="slideshow-list__el"
        >
          <Tile :id="`title-${index}`" class="tile" :tile="item" />
        </li>
      </ul>
    </div>
    <div class="slideshow__progress-ctn">
      <span class="slideshow__progress"></span>
    </div>
  </section>
</template>

<script>
import Stage from '~/components/Stage'
import Tile from '~/components/Tile'

export default {
  name: 'Index',
  components: { Tile },
  extends: Stage,
  data() {
    return {
      tiles: [
        {
          src: '/img/tiles/woods/base.jpg',
          hover: '/img/tiles/woods/hover.jpg',
          title: 'Woods',
          title2: '& Forest'
        },
        {
          src: '/img/tiles/deserts/base.jpg',
          hover: '/img/tiles/deserts/hover.jpg',
          title: 'Sand',
          title2: '& Deserts'
        },
        {
          src: '/img/tiles/snow/base.jpg',
          hover: '/img/tiles/snow/hover.jpg',
          title: 'Snow',
          title2: '& Forzen'
        },
        {
          src: '/img/tiles/rocks/base.jpg',
          hover: '/img/tiles/rocks/hover.jpg',
          title: 'Rocks',
          title2: '& Mountain'
        },
        {
          src: '/img/tiles/cities/base.jpg',
          hover: '/img/tiles/cities/hover.jpg',
          title: 'Cities',
          title2: '& Skylines'
        }
      ]
    }
  }
}
</script>
