<script setup lang="ts">
import { ref } from 'vue'
import CountUp from 'vue-countup-v3';
import { hello, randomString } from 'common'

defineProps<{ msg: string }>()

const count = ref(0)
hello()
console.log('randomString:', randomString())
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <count-up :endVal="1000" :duration="2" />
  
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

  </div>



</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
