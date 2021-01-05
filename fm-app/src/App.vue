<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-bar>
        <q-toolbar-title>
          My site
        </q-toolbar-title>

          <a href="/"><q-btn name="Home" :label="$t('buttons.home')" /></a>
          <span v-if="this.$store.getters.getAuth">
            <a @click="logout"><q-btn name="LogOut" :label="$t('buttons.logout')" /></a>
          </span>
         <span v-else>
            <a href="/login"><q-btn name="Login" :label="$t('buttons.enter')" /></a>
            <a href="/register"><q-btn name="SignIn" :label="$t('buttons.registration')" /></a>
        </span>
        
      <q-btn color="accent" :label="$t('labels.language')">

        <q-menu fit>
          <q-list>
            <q-item clickable>
              <q-btn color="primary" label="en" @click="changeToEn()"></q-btn>
            </q-item>
            <q-item clickable>
              <q-btn color="primary" label="ru" @click="changeToRu()"></q-btn>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      </q-bar>
    </q-header>


    <q-page-container>
      <div id="app">
        <span v-if="this.$store.getters.getAuth">
        {{$t('labels.profile')}} <br>
        {{$t('reg.firstname')}}: {{this.$store.getters.getUsername.name}}<br>
        {{$t('reg.email')}}: {{this.$store.getters.getUsername.email}}<br>
        {{$t('reg.password')}}: {{this.$store.getters.getUsername.password}}<br>
        {{$t('reg.country')}}: {{this.$store.getters.getUsername.country}}<br>
        {{$t('reg.id_user')}}: {{this.$store.getters.getUsername.id_user}}<br>
        </span>
        <router-view></router-view>
        }
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
      methods: {
      logout () {
        this.$store.dispatch('unsetStorage')
        .then(() => {
          this.$router.push('/login')
        })
      },
      changeToEn() {
        this.$store.dispatch('setLang', 'en')
        location.reload()
      },
      changeToRu(){
        this.$store.dispatch('setLang', 'ru')
        location.reload()
      }
    },


}
</script>

<style>
</style>
