<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Addresses/>
  </div>
</template>

<script>
// @ ＝ /src
import Addresses from '@/components/Addresses.vue'

export default {
  name: 'home',
  components: {
    Addresses
  }
}
</script>
