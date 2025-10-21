<template>
	<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
	  <div class="max-w-[400px] w-full bg-white shadow-sm rounded-sm p-10 flex flex-col">
		<h2 class="text-3xl font-bold mb-2 text-left">Login</h2>
		<h3 class="text-lg text-left">Seja bem-vindo de volta</h3>
		<div class="h-[300px]">
		  <form @submit.prevent="handleLogin" class="flex flex-col h-full gap-4 flex-1 justify-center">
			<!-- Email -->
			<div class="flex flex-col">
			  <label for="email" class="mb-1 font-medium">Email</label>
			  <input
				id="email"
				v-model="form.email"
				type="email"
				placeholder="Digite seu email"
				class="bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			  />
			</div>
  
			<!-- Senha -->
			<div class="flex flex-col">
			  <label for="password" class="mb-1 font-medium">Senha</label>
			  <div class="relative">
				<input
				  :type="showPassword ? 'text' : 'password'"
				  id="password"
				  v-model="form.password"
				  placeholder="Digite sua senha"
				  class="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
				  type="button"
				  @click="showPassword = !showPassword"
				  class="absolute right-2 top-3 text-gray-500 text-sm hover:cursor-pointer hover:text-gray-700"
				>
				  {{ showPassword ? 'Ocultar' : 'Mostrar' }}
				</button>
			  </div>
			  <div class="flex justify-between">
				<span class="text-blue-500 text-sm mt-1 cursor-pointer">Esqueci a senha</span>
				<a href="/cadastro" class="text-blue-500 text-sm mt-1 cursor-pointer">Cadastrar-se</a>
			  </div>
			</div>
  
			<button
			  type="submit"
			  class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors"
			>
			  Entrar
			</button>
		  </form>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
	name: "Login",
	data() {
	  return {
		form: {
		  email: "",
		  password: ""
		},
		showPassword: false
	  };
	},
	methods: {
	  async handleLogin() {
		if (!this.form.email || !this.form.password) {
		  alert("Preencha todos os campos!");
		  return;
		}
  
		try {
		  const response = await axios.post("http://localhost:4200/api/login", this.form);
  
		  // Atualiza a store com token e userId
		  this.$store.dispatch("login", {
			token: response.data.token,
			userId: response.data.uuid,
			isCompany: response.data.role === "company"
		  });
  
		  this.$router.push("/");
		} catch (error) {
		  console.error("Erro ao logar:", error);
		  alert("Erro ao logar. Verifique os dados e tente novamente.");
		}
	  }
	}
  };
  </script>
  