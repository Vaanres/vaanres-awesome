<template>
  <article :id="id" class="tile | js-tile">
    <a href="#">
      <figure class="tile__fig">
        <img
          :src="tile.src"
          :data-hover="tile.hover"
          :alt="tile.title"
          loading="lazy"
          class="tile__img"
        />
      </figure>
      <div class="tile__content">
        <h2 class="tile__title | title title--medium ">
          {{ tile.title }}
          <span class="title__offset title__offset--medium">
            {{ tile.title2 }}</span
          >
        </h2>
        <div class="tile__cta">
          <span class="btn-inline">See more</span>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
import * as THREE from 'three'
import gsap from 'gsap'
import Scrollbar from 'smooth-scrollbar'
import { clamp, getRatio, wrap, ev } from '~/assets/js/utils/utils'

console.log(THREE, gsap, Scrollbar, clamp, getRatio, wrap, ev)

export default {
  name: 'Tile',
  props: {
    id: {
      type: String,
      default: ''
    },
    tile: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      scroll: null,
      Scroll: null
    }
  },
  mounted() {
    this.init()
    this.bindEvent()
  },
  methods: {
    init() {},
    bindEvent() {}
  }
}
</script>
