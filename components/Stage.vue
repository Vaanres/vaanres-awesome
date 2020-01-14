<script>
import gsap from 'gsap'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '~/assets/js/utils/HorizontalScrollPlugin'
import { map } from '~/assets/js/utils/utils'

Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)

export default {
  name: 'Stage',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      progress: 0,
      offsetTitle: 100,
      Scroll: null,
      els: {
        title: null,
        progress: null,
        progressCtn: null,
        scene: null
      }
    }
  },
  mounted() {
    this.initRefs()
    this.initScroll()
    this.bindEvents()
  },
  methods: {
    initRefs() {
      this.progress = 0
      this.els.title = document.querySelector('.page-title')
      this.els.progress = document.querySelector('.slideshow__progress')
      this.els.progressCtn = document.querySelector('.slideshow__progress-ctn')
      this.els.scene = document.getElementById('scene')
    },
    initScroll() {
      this.Scroll = Scrollbar.init(document.querySelector('.scrollarea'), {
        delegateTo: document,
        continuousScrolling: false,
        overscrollEffect: 'bounce',
        damping: 0.1,
        plugins: {
          horizontalScroll: {
            events: [/wheel/]
          }
        }
      })

      this.Scroll.track.xAxis.element.remove()
      this.Scroll.track.yAxis.element.remove()

      Scrollbar.detachStyle()

      this.updateScrollBar()
    },
    bindEvents() {
      document.addEventListener('lockScroll', ({ detail }) => {
        this.lockScroll(detail)
      })

      this.Scroll.addListener((s) => {
        this.onScroll(s)
      })
    },

    onScroll({ limit, offset }) {
      this.progress = offset.x / limit.x

      gsap.to(this.els.title, 0.3, {
        x: -this.progress * this.offsetTitle,
        force3D: true
      })

      this.updateScrollBar()
    },

    updateScrollBar() {
      const progress = map(this.progress * 100, 0, 100, 5, 100)
      gsap.to(this.els.progress, 0.3, { xPercent: progress, force3D: true })
    },

    lockScroll({ lock }) {
      const duration = lock ? 0 : 1.8

      gsap.delayedCall(duration, () => {
        this.Scroll.updatePluginOptions('horizontalScroll', {
          events: lock ? [] : [/wheel/]
        })

        gsap.to(this.els.progressCtn, 0.5, {
          alpha: lock ? 0 : 1,
          force3D: true
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
