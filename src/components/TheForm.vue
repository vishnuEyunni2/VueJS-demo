<template>
  <form @submit.prevent="submitData" v-if="!formValid">
    <div class="form-control" :class="{invalid:!userNameValid}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="enteredName" @blur="verifyUserName"/>
      <p v-if="!userNameValid" class="invalid">Enter a valid name</p>
    </div>
    <div class="form-control" :class="{invalid:!phoneNumberValid}">
      <label for="phone-number">Phone Number</label>
      <input id="phone-number" name="phone-number" type="text" v-model.trim="enteredNumber" @blur="verifyMobileNumber"/>
      <p v-if="!phoneNumberValid" class="invalid">Enter a valid number</p>
    </div>
    <div class="form-control" :class="{invalid:!emailValid}">
      <label for="email">Email ID</label>
      <input id="email" name="email" type="email" v-model.trim="enteredEmail" @blur="verifyEmail"/>
      <p v-if="!emailValid" class="invalid">Enter a valid Email ID</p>
    </div>
    <div class="form-control" :class="{invalid:!passwordValid}">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" v-model.trim="enteredpassword" @blur="verifyPassword"/>
      <p v-if="!passwordValid" class="invalid">Enter a valid password</p>
    </div>
 <div>
      <button>Save Data</button>
    </div>
  </form>
  <div class="formcomplete" v-else> Registration completed!!!
    <button @click="goBack">Register Again</button>
  </div>

</template>
<script>

export default ({
  data() {
    return {
      enteredName:'',
      userNameValid:true,
      enteredNumber:'',
      phoneNumberValid:true,
      enteredpassword:'',
      passwordValid:true,
      enteredEmail:'',
      emailValid:true,
      formValid:false
    }
  },
  methods:{
    goBack(){
      this.formValid=false
    },
    submitData(){
      console.log(this.$touched,"form")
      this.verifyUserName();
      this.verifyMobileNumber();
      this.verifyEmail();
      this.verifyPassword();
      if(this.userNameValid && this.phoneNumberValid && this.passwordValid && this.emailValid){
        this.formValid=true;
        this.enteredName='';
        this.enteredEmail='';
        this.enteredpassword='';
        this.enteredNumber='';
      }
    },
    verifyUserName(){
      if(this.enteredName.length>=8){
        this.userNameValid=true
      }else{
        this.userNameValid=false
      }
    },
    verifyMobileNumber(){
      var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      if(re.test(this.enteredNumber)){
        this.phoneNumberValid=true
      }else{
        this.phoneNumberValid=false
      }
    },
    verifyPassword(){
      if(this.enteredpassword.length>=8){
        this.passwordValid=true
      }else{
        this.passwordValid=false
      }
    },
    verifyEmail(){
      var validEmailRegex = /\S+@\S+\.\S+/;
      if(validEmailRegex.test(this.enteredEmail)){
        this.emailValid=true
    }else{
      this.emailValid=false
    }
  }
}})
</script>

<style scoped>
form,.formcomplete {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}
.form-control.invalid input,label{
  border-color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
.invalid{
  color:red
}
</style>