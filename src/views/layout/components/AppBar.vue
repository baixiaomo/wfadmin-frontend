<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">mdi-view-quilt</v-icon>
      <v-icon v-else>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name"/>

    <v-spacer />
    <!--搜索框-->
    <v-text-field :label="$t('search')" color="secondary" hide-details style="max-width: 200px;">
      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:append-outer>
        <v-btn class="mt-n2" elevation="1" fab small>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <div class="mx-3" />

    <!--消息提醒-->
    <v-menu bottom left offset-y origin="top right" transition="scale-transition">
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-badge color="red" overlap bordered>
            <template v-slot:badge>
              <span>5</span>
            </template>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <div>
          <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>
    <!--系统设置-->
    <v-menu bottom left offset-y origin="top right" transition="scale-transition">
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-card class="text-center ma-0" width="300">
        <v-card-text>
          <strong class="mb-3 d-inline-block">SIDEBAR FILTERS</strong>
          <v-item-group v-model="color">
            <v-item v-for="color in colors" :key="color" :value="color">
              <template v-slot="{ active, toggle }">
                <v-avatar :class="active && 'v-settings__item--active'" :color="color" class="v-settings__item px-2" size="25" @click="toggle"/>
              </template>
            </v-item>
          </v-item-group>

          <v-divider class="my-4" />

          <v-row align="center" no-gutters>
            <v-col cols="auto">Dark Mode</v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="$vuetify.theme.dark"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <v-row
            align="center"
            no-gutters
          >
            <v-col cols="auto">
              Sidebar Image
            </v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="showImg"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <strong class="mb-3 d-inline-block">IMAGES</strong>

          <v-item-group
            v-model="image"
            class="d-flex justify-space-between mb-3"
          >
            <v-item
              v-for="image in images"
              :key="image"
              :value="image"
              class="mx-1"
            >
              <template v-slot="{ active, toggle }">
                <v-sheet
                  :class="active && 'v-settings__item--active'"
                  class="d-inline-block v-settings__item"
                  @click="toggle"
                >
                  <v-img
                    :src="image"
                    height="100"
                    width="50"
                  />
                </v-sheet>
              </template>
            </v-item>
          </v-item-group>

          <v-btn
            block
            class="mb-3"
            color="success"
            href="https://www.creative-tim.com/product/vuetify-material-dashboard"
            default
            rel="noopener"
            target="_blank"
          >
            Free Download
          </v-btn>

          <v-btn
            block
            class="mb-3"
            color="grey darken-1"
            dark
            href="https://vuetifyjs.com/components/api-explorer"
            default
            rel="noopener"
            target="_blank"
          >
            Documentation
          </v-btn>

          <div class="my-12" />

          <div>
            <strong class="mb-3 d-inline-block">THANK YOU FOR SHARING!</strong>
          </div>

          <v-btn
            class="ma-1"
            color="#55acee"
            dark
            default
            rounded
          >
            <v-icon>mdi-twitter</v-icon>
            - 45
          </v-btn>

          <v-btn
            class="ma-1"
            color="#3b5998"
            dark
            default
            rounded
          >
            <v-icon>mdi-facebook</v-icon>
            - 50
          </v-btn>
        </v-card-text>
      </v-card>
    </v-menu>
    <!--账户按钮-->
    <v-menu bottom left offset-y origin="top right" transition="scale-transition">
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-card class="ma-0">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" alt="John">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Jane White</v-list-item-title>
              <v-list-item-subtitle>lover of Vuetify.js</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon href="/pages/user">
                <v-icon color="lighten-1">mdi-message-text</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider class="my-2" />
          <v-list-item>
            <v-list-item-content>
              <v-btn color="primary" @click="logout">退出</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
// Components
import { VHover, VListItem } from 'vuetify/lib'

// Utilities
import { mapState, mapMutations } from 'vuex'
import Proxyable from 'vuetify/lib/mixins/proxyable'

export default {
  name: 'DashboardCoreAppBar',
  mixins: [Proxyable],
  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) => {
              return h(VListItem, {
                attrs: this.$attrs,
                class: {
                  'black--text': !hover,
                  'white--text secondary elevation-12': hover
                },
                props: {
                  activeClass: '',
                  dark: hover,
                  link: true,
                  ...this.$attrs
                }
              }, this.$slots.default)
            }
          }
        })
      }
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    notifications: [
      'Mike John Responded to your email',
      'You have 5 new tasks',
      'You\'re now friends with Andrew',
      'Another Notification',
      'Another one'
    ],
    color: '#E91E63',
    colors: [
      '#9C27b0',
      '#00CAE3',
      '#4CAF50',
      '#ff9800',
      '#E91E63',
      '#FF5252'
    ],
    image: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    images: [
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-2.jpg',
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg',
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg'
    ],
    menu: false,
    saveImage: '',
    showImg: true
  }),

  computed: {
    ...mapState(['drawer', 'barImage'])
  },
  watch: {
    color(val) {
      this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
    },
    showImg(val) {
      if (!val) {
        this.saveImage = this.barImage
        this.setBarImage('')
      } else if (this.saveImage) {
        this.setBarImage(this.saveImage)
        this.saveImage = ''
      } else {
        this.setBarImage(val)
      }
    },
    image(val) {
      this.setBarImage(val)
    }
  },
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
      setBarImage: 'SET_BAR_IMAGE'
    }),
    logout() {
      this.$confirm('确定退出系统？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$utils.permission.removeToken()
        this.$router.push('/login')
      }).catch(() => {

      })
    }
  }
}
</script>
