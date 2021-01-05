<template>
 <div>
   <form class="change" @submit.prevent="change">
     <h4>{{$t('changa_state.title')}}</h4>
     <label>{{$t('changa_state.new_email')}}</label>
     <input required v-model="email" type="email" placeholder="Name"/><br>
     <label>{{$t('changa_state.new_password')}}</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <q-btn color="primary" :label="$t('buttons.refresh')" @click="change()"></q-btn>
   </form>
 </div>
</template>
<script>
  export default {
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
      change() {
        let email = this.email 
        let password = this.password
        let newUsr = this.$store.getters.getUsername
        newUsr.email = email
        newUsr.password = password
        //  this.$store.dispatch('setAuth')
        this.$store.dispatch('setUsername', newUsr)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
        
      }
    }
  }
</script>