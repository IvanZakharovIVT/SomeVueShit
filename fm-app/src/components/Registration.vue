<template>
  <div>
    <h4>{{$t('reg.title')}}</h4>
    <form @submit.prevent="register">
      <label for="name">{{$t('reg.firstname')}}</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus>
      </div>

      <label for="email" >{{$t('reg.email')}}</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>

      <label for="country" type="text">{{$t('reg.country')}}</label>
      <div>
        <select name="country" id="country" v-model="country">
          <option>Russia</option>
          <option>Australia</option>
          <option>China</option>
          <option>Italia</option>
        </select>
      </div>
    <label for="id_user" type="text">{{$t('reg.id_user')}}</label>
      <div>
        <q-input
          filled
          v-model="id_user"
          mask="###/###/###/###"
          hint="###/###/###/###"
        />
      </div>

      <label for="password">{{$t('reg.password')}}</label>
      <div>
          <input id="password" type="password" v-model="password" required> 
      </div>
      <label for="password-confirm">{{$t('reg.password_confirm')}}</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name : "",
        email : "",
        password : "",
        password_confirmation : "",
        id_user: null,
        country: null
      }
    },
    methods: {
      register: function () {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          id_user: this.id_user,
          country: this.country
        }
        this.$store.dispatch('setUsername', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
</script>