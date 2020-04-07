<template>
  <v-app id="login">
    <particle/>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" >
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{ $t('m.login.title') }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field :label="$t('m.login.account')" name="login" prepend-icon="fas fa-user" type="text"/>
                  <v-text-field id="password" :label="$t('m.login.password')" name="password" prepend-icon="fas fa-lock" type="password"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="success" @click="login">{{ $t('m.login.loginButton') }}</v-btn>
                <v-btn color="primary">{{ $t('m.login.registerButton') }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import particle from '../../components/particles'
export default {
  name: 'Login',
  components: { particle },
  data() {
    return {
      windowHeight: '800px'
    }
  },
  mounted() {
    this.windowHeight = window.innerHeight
  },
  methods: {
    login() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
