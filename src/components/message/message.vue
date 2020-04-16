<template>
  <div
    class="alert_div"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <transition name="slide-fade">
      <v-alert
        v-model="value"
        :type="type"
        class="alert"
        :icon="icon"
        :border="border"
        close-label="fas fa-close"
        :elevation="elevation"
        :width="width"
        :dismissible="dismissible"
        transition="scale-transition"
      >
        <div class="content">
          <slot>{{ message }}</slot>
        </div>
      </v-alert>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      value: true,
      message: '',
      type: 'info',
      icon: '',
      border: 'right',
      dismissible: false,
      elevation: 1,
      width: 300,
      duration: 2000,
      onClose: null,
      timer: null
    }
  },
  created() {
    if (this.type === 'success') {
      this.icon = 'fa-check-circle'
    } else if (this.type === 'info') {
      this.icon = 'fa-info-circle'
    } else if (this.type === 'warning') {
      this.icon = 'fas fa-exclamation-triangle'
    } else if (this.type === 'error') {
      this.icon = 'fa-exclamation-triangle'
    } else {
      this.type === 'info'
      this.icon = 'fa-info-circle'
    }
    this.startTimer()
  },
  watch: {
    value(val) {
      if (!val) {
        this.close()
      }
    }
  },
  methods: {
    close() {
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
      this.clearTimer()
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    clearTimer() {
      clearTimeout(this.timer)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (this.value) {
            this.value = false
          }
        }, this.duration)
      }
    }
  }
}
</script>

<style scoped>
.alert_div{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;

}
.alert{
  margin: 60px auto;
  animation: action .5s linear;
  /* Firefox: */
  -moz-animation: action .5s linear;
  /* Safari 和 Chrome: */
  -webkit-animation: action .5s linear;
  /* Opera: */
  -o-animation: action .5s linear;
}
@keyframes action{
  0%{
    margin: 5px auto;
    opacity: 0;
  }
  100%{
    margin: 60px auto;
    opacity: 1;
  }
}
</style>
