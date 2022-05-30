<template>
   <div class="LoginAccess">
      <div class="container">
         <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-9 card mx-auto">
               <div class="card-body py-5 px-4">
                  <h4 class="card-title text-center mb-5">Iniciar Sesion</h4>
                  <!-- <img src="img/displayport.png" class="mx-auto d-block mb-4"> -->
                  <!-- <div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                    </div> -->
                  <form @submit.prevent="login">
                     <div class="form-group">
                        <input
                           type="email"
                           class="form-control"
                           placeholder="Correo"
                           v-model="user.email"
                        />
                     </div>
                     <div class="form-group">
                        <input
                           type="password"
                           class="form-control"
                           placeholder="Contraseña"
                           v-model="user.password"
                        />
                     </div>
                     <div class="form-group">
                        <button
                           type="submit"
                           class="btn btn-primary btn-block btn-lg"
                        >
                           Ingresar
                        </button>
                     </div>
                  </form>
                  ¿No tiene una cuenta?
                  <a href="#" class="text-primary">Registrese aqui</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "LoginAccess",
   data() {
      return {
         user: {
            email: "",
            password: "",
         }
      };
   },
   methods: {
      login() {
         this.axios.post("http://localhost:8000/api/login", this.user)
         .then((response) => {
            this.axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
            localStorage.setItem("token", response.data.token);
            this.$router.push({ name: "escritorio-component" });
            console.log(response);
         }).catch((error) => {
            console.log(error);
         });
      }
   }
};
</script>

<style scoped>
.LoginAccess {
   background: url("@/assets/login-gray-bg.jpg");
   background-size: cover;

   /* para que body ocupe todo el alto de la pantalla */
   height: 100vh;

   /* para centrar el login verticalmente */
   display: flex;
   flex-direction: column;
   align-items: center; /* creo que no es necesario */
   justify-content: center;
}
</style>