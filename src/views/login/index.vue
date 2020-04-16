<template>
  <v-app class="login">
    <!--<particle/>-->
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" >
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{ $t('m.login.title') }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="form.account"
                    :rules="[v => !!v || $t('m.login.account_required')]"
                    :label="$t('m.login.account')"
                    prepend-icon="fas fa-user"
                    type="text"
                    required
                    :disabled="loading"
                  />
                  <v-text-field
                    v-model="form.password"
                    :rules="[v => !!v ||$t('m.login.password_required')]"
                    :label="$t('m.login.password')"
                    prepend-icon="fas fa-lock"
                    type="password"
                    required
                    :disabled="loading"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="success" @click="login">{{ $t('m.login.loginButton') }}</v-btn>
                <v-btn color="primary" @click="register">{{ $t('m.login.registerButton') }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { setToken } from '../../utils/permission'
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      windowHeight: '800px',
      valid: true,
      loading: false,
      form: {
        account: 'ADMIN',
        password: 'ADMIN'
      }
    }
  },
  mounted() {
    this.windowHeight = window.innerHeight
  },
  methods: {
    register() {
      this.$message('register')
    },
    login() {
      const params = Object.assign({}, this.form)
      params['password'] = this.$md5(params['password'])
      console.log(this.form, params)
      if (this.$refs['form'].validate()) {
        this.loading = true
        this.$http.app.login(params).then(res => {
          if (res.code === 200) {
            console.log(res)
            setToken(res.token)
            this.$router.push('/')
          } else {
            this.$message({
              type: 'warning',
              message: '登陆失败'
            })
          }
          this.loading = false
        }).catch(err => {
          console.log(err)
          this.loading = false
        })
      }
    }
  }
}
</script>

<style>
.login::-webkit-scrollbar{
  width: 0 !important;
  display: none;
}
</style>
