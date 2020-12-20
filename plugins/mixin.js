import Vue from 'vue'
import {mapState} from 'vuex'

Vue.mixin({
  computed: {
    demo() {
      return this.$store.state.demo
    },
  },
 
})

