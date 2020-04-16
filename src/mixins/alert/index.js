export default {
  template: `
  <v-alert type="success">msg</v-alert>
  `,
  data() {
    return {
    }
  },
  methods: {
    $alert(opt) {
      console.log(opt)
    }
  }
}
