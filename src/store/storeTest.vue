<template>
  <div class="container">
    <p>
      js: state:{ s1: 1 } | vue: $store.state.s1:
      {{ $store.state.s1 }}
    </p>
    <p>
      js: getters: { g1(state) {return state.s1 * 2 }} | vue: $store.getters.g1:
      {{ $store.getters.g1 }}
    </p>

    <button @click="$store.commit('m1')">+</button>
    <button @click="$store.commit('m2')">-</button>
    <span>
      js: mutations: { m1(state) { state.s1 += 1 }}| vue:
      @click="$store.commit('m1')"
    </span>
    <!-- ------------------------------------------------------------ -->
    <hr />
    <p>
      <b>
        js : import { module1 } from '@/store/module1' | modules: { md1: module1
        }
      </b>
    </p>
    <p>
      md1.js: state: () => ({ ms1: 10 }) | vue: $store.state.md1.ms1:
      {{ $store.state.md1.ms1 }}
    </p>
    <button @click="$store.commit('md1/mm1', 10)">+</button>
    <span>
      md1.js: mutations: { mm1(state, p1) { state.ms1 += p1 } }<br />
      vue: @click="$store.commit('md1/mm1', 10)"
    </span>
    <!-- ------------------------------------------------------------ -->
    <hr />
    <p>
      <b>
        import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
      </b>
    </p>
    <p>
      md1.js: state: () => ({ ms1: 10 }) | vue: ...mapState({ ms1: (state) =>
      state.md1.ms1 }) | ms1: {{ ms1 }}
    </p>
    <button @click="$store.commit('mm1')">+</button>
    <span>
      js: mutations: { m1(state) { state.s1 += 1 }}| vue: ...mapMutations({ mm1:
      'md1/mm1' })
    </span>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

/* eslint-disable */
export default {
  computed: {
    ...mapState({ ms1: (state) => state.md1.ms1 })
  },
  methods: { ...mapMutations({ mm1: 'md1/mm1' }) }
}
</script>
