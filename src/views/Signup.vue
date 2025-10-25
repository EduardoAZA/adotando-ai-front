<template>
	<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
	  <div class="max-w-[600px] w-full bg-white shadow-sm rounded-sm p-8 flex flex-col gap-4">
		<h2 class="text-3xl font-bold mb-1 text-left">Cadastro</h2>
		<h3 class="text-lg text-left text-gray-600">Crie sua conta</h3>
  
		<div class="flex gap-4 mt-4 mb-6">
		  <button
			@click="userType = 'person'"
			:class="userType === 'person' ? 'bg-blue-500 text-white' : 'bg-gray-200'"
			class="flex-1 py-2 rounded font-medium transition-colors"
		  >
			Pessoa
		  </button>
		  <button
			@click="userType = 'ong'"
			:class="userType === 'ong' ? 'bg-blue-500 text-white' : 'bg-gray-200'"
			class="flex-1 py-2 rounded font-medium transition-colors"
		  >
			ONG
		  </button>
		</div>
  
		<form @submit.prevent="handleRegister" class="flex flex-col gap-4">
		  <input v-model="form.name" type="text" placeholder="Nome completo" class="input" />
		  <input v-model="form.email" type="email" placeholder="E-mail" class="input" />
  
		  <input v-if="userType === 'person'" v-model="form.cpf" type="text" placeholder="CPF" class="input" />
		  <input v-else v-model="form.cnpj" type="text" placeholder="CNPJ" class="input" />
  
		  <input v-model="form.password" type="password" placeholder="Senha" class="input" />
		  <input v-model="form.confirmPassword" type="password" placeholder="Confirmar senha" class="input" />
  
		  <input v-if="userType === 'person'" v-model="form.birthday" type="date" placeholder="Data de nascimento" class="input" />
  
		  <input v-model="form.street" type="text" placeholder="Rua" class="input" />
		  <div class="flex gap-2">
			<input v-model="form.number" type="text" placeholder="Número" class="input flex-1" />
			<input v-model="form.complement" type="text" placeholder="Complemento" class="input flex-1" />
		  </div>
		  <input v-model="form.neighborhood" type="text" placeholder="Bairro" class="input" />
		  <input v-model="form.city" type="text" placeholder="Cidade" class="input" />
		  <input v-model="form.zipCode" type="text" placeholder="CEP" class="input" />
		  <input v-model="form.state" type="text" placeholder="Estado" class="input" />
  
		  <div class="flex gap-2">
			<input v-model="form.areaCode" type="text" placeholder="DDD" class="input w-1/5 max-w-1/5" />
			<input v-model="form.phoneNumber" type="text" placeholder="Telefone" class="input" />
		  </div>
  
		  <button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium">
			Cadastrar
		  </button>
		</form>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from "axios";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  
  export default {
	name: "SignupForm",
	setup() {
	  const store = useStore();
	  const router = useRouter();
	  return { store, router };
	},
	data() {
	  return {
		userType: "person",
		form: {
		  name: "",
		  email: "",
		  cpf: "",
		  cnpj: "",
		  password: "",
		  confirmPassword: "",
		  birthday: "",
		  street: "",
		  number: "",
		  complement: "",
		  neighborhood: "",
		  city: "",
		  zipCode: "",
		  state: "",
		  phoneNumber: "",
		  areaCode: "",
		},
	  };
	},
	methods: {
	  async handleRegister() {
		try {
		  const payload =
			this.userType === "person"
			  ? {
				  name: this.form.name,
				  email: this.form.email,
				  cpf: this.form.cpf,
				  password: this.form.password,
				  confirmPassword: this.form.confirmPassword,
				  birthday: this.form.birthday,
				  street: this.form.street,
				  number: this.form.number,
				  complement: this.form.complement,
				  neighborhood: this.form.neighborhood,
				  city: this.form.city,
				  zipCode: this.form.zipCode,
				  state: this.form.state,
				  phoneNumber: this.form.phoneNumber,
				  areaCode: this.form.areaCode,
				}
			  : {
				  name: this.form.name,
				  email: this.form.email,
				  cnpj: this.form.cnpj,
				  password: this.form.password,
				  confirmPassword: this.form.confirmPassword,
				  street: this.form.street,
				  number: this.form.number,
				  complement: this.form.complement,
				  neighborhood: this.form.neighborhood,
				  city: this.form.city,
				  zipCode: this.form.zipCode,
				  state: this.form.state,
				  phoneNumber: this.form.phoneNumber,
				  areaCode: this.form.areaCode,
				};
  
		  const url =
			this.userType === "person"
			  ? "http://localhost:4200/api/user"
			  : "http://localhost:4200/api/company";
  
		  await axios.post(url, payload);
  
		  this.router.push("/login");
		} catch (error) {
		  console.error("Erro ao cadastrar:", error);
		  alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
		}
	  },
	},
  };
  </script>
  
  <style>
  .input {
	width: 100%;
	background-color: #f3f4f6;
	border: 1px solid #d1d5db;
	padding: 0.5rem;
	border-radius: 0.25rem;
	outline: none;
  }
  .input:focus {
	border-color: #3b82f6;
	box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
  </style>
  