<template>
  <div class="bg" style="position: absolute;left: 0;top: 0;width: 100%">
    <img
      src="@/assets/pricing.jpg"
      :height="height"
      style="display:block;position: absolute;left: 0;top: 0;width: 100%;"
    />
    <vue-particles
      color="#4CAF50"
      :particle-opacity="0.7"
      :particles-number="80"
      shape-type="circle"
      :particle-size="2"
      lines-color="#00CAE3"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    />
  </div>
</template>

<script>
export default {
  name: 'Particles',
  data() {
    return {
      height: 300
    }
  },
  created() {
    this.height = document.documentElement.clientHeight
  }
}
</script>

<style>
  .bg::-webkit-scrollbar {
    display: none;
  }
</style>
