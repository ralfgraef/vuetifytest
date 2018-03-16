<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" fixed>
      <v-list>
         <v-list-tile v-for="item in menueItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor:pointer">EinkaufsListe</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menueItems" :key="item.title" router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content> 
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menueItems: [
          { icon: 'list', title: 'EinkaufsListe', link: '/list' },
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'face', title: 'Register', link: '/register' },
          { icon: 'lock_open', title: 'Log in', link: '/login' }
        ]
      }
    }
  }
</script>
