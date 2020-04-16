<template>
  <v-dialog v-model="value" :width="width">
    <v-card class="text-center">
      <v-card-title>
        <span>{{ title }}</span>
        <v-spacer />
        <v-icon aria-label="Close" @click="cancel">
          mdi-close
        </v-icon>
      </v-card-title>

      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="ok" small text>{{ okBtnText }}</v-btn>
        <v-btn color="normal" v-if="dialogType === 'confirm'" @click="cancel" small text>{{ cancelBtnText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      value: true,
      icon: 'fa-info-circle',
      width: 300,
      title: '提示',
      message: '',
      dialogType: 'alert',
      type: 'info',
      okBtnText: '确定',
      cancelBtnText: '取消',
      onOk: null,
      onCancel: null
    }
  },
  watch: {
    value(val) {
      if (!val) {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }
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
  },
  methods: {
    ok() {
      this.value = false
      if (typeof this.onOk === 'function') {
        this.onOk(this)
      }
    },
    cancel() {
      this.value = false
      if (typeof this.onOk === 'function') {
        this.onCancel(this)
      }
    }
  }
}
</script>

<style scoped>
  .dialog_div{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }
</style>
