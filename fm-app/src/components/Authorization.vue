<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h4>{{$t('auth.title')}}</h4>
     <label>{{$t('auth.enter_email_ph')}}</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>{{$t('auth.enter_pass_ph')}}</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <q-btn color="primary" :label="$t('buttons.enter')" @click="login()"></q-btn>
     <span v-if="this.errors!=''">
      <br>
      {{this.errors}}
     </span>
   </form>
 </div>
</template>
<script>
  export default {
    data(){
      return {
        email : "",
        password : "",
        errors: ""
      }
    },
    methods: {
      login () {
        let email = this.email 
        let password = this.password
        if (this.$store.getters.getUsername.email == email &&
          this.$store.getters.getUsername.password == password){
          this.$store.dispatch('setAuth')
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
        }
        else if (typeof this.$store.getters.getUsername.email == 'undefined'){
          this.errors = this.$t('errors.load_settings')
        }
        else {
          this.errors = this.$t('errors.auth')
        }
      }
    }
  }
</script>