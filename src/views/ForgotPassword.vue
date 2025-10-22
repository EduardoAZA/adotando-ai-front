<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100 py-10">
	  <div class="max-w-md w-full bg-white shadow-sm rounded-md p-8 flex flex-col gap-6">
		<h2 class="text-3xl font-bold text-left">Redefinir Senha</h2>
		<p class="text-gray-600 text-left">
		  Informe seu e-mail para receber o link de redefinição de senha.
		</p>
  
		<form @submit.prevent="handleSendEmail" class="flex flex-col gap-4">
		  <div class="relative">
			<input
			  v-model="email"
			  type="email"
			  placeholder="Seu e-mail"
			  required
			  class="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<EnvelopeIcon class="w-5 h-5 text-gray-400 absolute right-3 top-3"/>
		  </div>
  
		  <button
			type="submit"
			class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors"
		  >
			Enviar
			<ArrowRightIcon class="w-5 h-5"/>
		  </button>
		</form>
  
		<p class="text-gray-600 text-center mt-4">
		  Lembrou a senha?
		  <router-link to="/login" class="text-blue-500 hover:underline">Faça login</router-link>
		</p>
	  </div>
	</div>
  </template>
  
  <script>
  import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
  
  export default {
	name: "ResetPasswordEmail",
	components: { ArrowRightIcon, EnvelopeIcon },
	data() {
	  return {
		email: ""
	  };
	},
	methods: {
	  handleSendEmail() {
		if (!this.email) {
		  alert("Preencha o campo de e-mail!");
		  return;
		}
  
		console.log("Email enviado para:", this.email);
		alert("Email de redefinição enviado com sucesso!");
		this.email = "";
	  }
	}
  };
  </script>
  
  <style scoped>
  </style>
  