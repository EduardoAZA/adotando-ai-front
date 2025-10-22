<template>
	<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
	  <div class="max-w-[500px] w-full bg-white shadow-sm rounded-sm p-8 flex flex-col gap-6">
		<h2 class="text-3xl font-bold mb-1 text-left">Perfil</h2>
		<h3 class="text-lg text-left text-gray-600">Seus dados cadastrados</h3>
  
		<form @submit.prevent="handleUpdateProfile" class="flex flex-col gap-6">
		  <div class="flex gap-2">
			<input
			  v-model="form.documento"
			  :placeholder="isCompany ? 'CNPJ' : 'CPF'"
			  readonly
			  class="flex-1 cursor-not-allowed opacity-60 bg-gray-400 border border-gray-300 rounded px-3 py-2 focus:outline-none"
			/>
			<input
			  v-model="form.nome"
			  type="text"
			  placeholder="Nome"
			  readonly
			  class="flex-1 cursor-not-allowed opacity-60 bg-gray-400 border border-gray-300 rounded px-3 py-2 focus:outline-none"
			/>
		  </div>
  
		  <div class="flex gap-2" v-if="!isCompany">
			<input
			  v-model="form.email"
			  type="email"
			  placeholder="Seu email"
			  readonly
			  class="flex-1 cursor-not-allowed opacity-60 bg-gray-400 border border-gray-300 rounded px-3 py-2 focus:outline-none"
			/>
			<input
			  v-model="form.nascimento"
			  type="date"
			  placeholder="Data de nascimento"
			  readonly
			  class="flex-1 cursor-not-allowed opacity-60 bg-gray-400 border border-gray-300 rounded px-3 py-2 focus:outline-none"
			/>
		  </div>

		  <div v-else>
			<input
			  v-model="form.email"
			  type="email"
			  placeholder="Email da empresa"
			  readonly
			  class="w-full cursor-not-allowed opacity-60 bg-gray-400 border border-gray-300 rounded px-3 py-2 focus:outline-none"
			/>
		  </div>
  
		  <h4 class="font-semibold text-gray-700">Endereço</h4>
		  <input v-model="form.cep" type="text" placeholder="CEP" class="bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
		  <div class="flex gap-2">
			<input v-model="form.estado" type="text" placeholder="UF" class="w-1/4 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
			<input v-model="form.cidade" type="text" placeholder="Cidade" class="flex-1 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
		  </div>
		  <div class="flex gap-2">
			<input v-model="form.bairro" type="text" placeholder="Bairro" class="flex-1 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
			<input v-model="form.rua" type="text" placeholder="Rua" class="flex-1 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
		  </div>
		  <div class="flex gap-2">
			<input v-model="form.numero" type="text" placeholder="Número" class="flex-1 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
			<input v-model="form.complemento" type="text" placeholder="Complemento" class="flex-1 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
		  </div>
  
		  <div class="flex gap-2">
			<input v-model="form.ddd" type="text" placeholder="DDD" class="w-1/4 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
			<input v-model="form.telefone" type="text" placeholder="Telefone" class="flex-1 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
		  </div>
  
		  <div class="flex  gap-3 mt-6">
			<button
			  type="submit"
			  class="flex w-1/2 items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors"
			>
			  Atualizar Perfil
			  <CheckIcon class="w-5 h-5"/>
			</button>

			<button
			  type="button"
			  @click="handleDeleteProfile"
			  class="flex w-1/2 items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded font-medium transition-colors"
			>
			  Excluir Conta
			  <TrashIcon class="w-5 h-5"/>
			</button>
		  </div>
		</form>
	  </div>
	</div>
  </template>
  
  <script>
  import { CheckIcon, TrashIcon } from '@heroicons/vue/24/outline'
  import axios from 'axios'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
	name: "Profile",
	components: { CheckIcon, TrashIcon },
	data() {
	  return {
		isCompany: false,
		phoneNumberUuid: null,
		form: {
		  documento: "",
		  nome: "",
		  email: "",
		  nascimento: "",
		  rua: "",
		  numero: "",
		  complemento: "",
		  bairro: "",
		  cidade: "",
		  cep: "",
		  estado: "",
		  telefone: "",
		  ddd: ""
		}
	  }
	},
	async created() {
	  const store = useStore()
	  const uuid = store.state.userId
	  this.isCompany = store.state.isCompany

	  if (!uuid) return
  
	  try {
		const token = store.state.token
		const url = this.isCompany
		  ? `http://localhost:4200/api/company/${uuid}`
		  : `http://localhost:4200/api/user/${uuid}`
  
		const response = await axios.get(url, {
		  headers: { Authorization: `Bearer ${token}` }
		})
  
		const data = response.data.data
  
		this.form.nome = data.name || ""
		this.form.email = data.email || ""
		this.form.documento = this.isCompany ? data.cnpj : data.cpf
		this.form.nascimento = !this.isCompany && data.birthday ? data.birthday.split('T')[0] : ""
  
		this.form.rua = data.address?.street || ""
		this.form.numero = data.address?.number || ""
		this.form.complemento = data.address?.complement || ""
		this.form.bairro = data.address?.neighborhood || ""
		this.form.cidade = data.address?.city || ""
		this.form.estado = data.address?.state || ""
		this.form.cep = data.address?.zipCode || ""
  
		this.form.ddd = data.phoneNumber?.[0]?.areaCode || ""
		this.form.telefone = data.phoneNumber?.[0]?.phoneNumber || ""
		this.phoneNumberUuid = data.phoneNumber?.[0]?.uuid || null
  
	  } catch (error) {
		console.error("Erro ao carregar perfil:", error)
		alert("Não foi possível carregar os dados do perfil.")
	  }
	},
	methods: {
	  async handleUpdateProfile() {
		try {
		  const token = this.$store.state.token
		  const uuid = this.$store.state.userId
  
		  const payload = {
			street: this.form.rua,
			number: this.form.numero,
			city: this.form.cidade,
			zipCode: this.form.cep,
			state: this.form.estado,
			areaCode: this.form.ddd,
			phoneNumber: this.form.telefone,
			complement: this.form.complemento,
			neighborhood: this.form.bairro,
			phoneNumberUuid: this.phoneNumberUuid
		  }
  
		  const url = this.isCompany
			? `http://localhost:4200/api/company/${uuid}`
			: `http://localhost:4200/api/user/${uuid}`
  
		  await axios.patch(url, payload, {
			headers: { Authorization: `Bearer ${token}` }
		  })
  
		  alert("Perfil atualizado com sucesso!")
		} catch (error) {
		  console.error("Erro ao atualizar perfil:", error)
		  alert("Não foi possível atualizar o perfil.")
		}
	  },

	  async handleDeleteProfile() {
		const confirmar = confirm("Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita!")
		if (!confirmar) return
  
		try {
		  const token = this.$store.state.token
		  const uuid = this.$store.state.userId
		  const url = this.isCompany
			? `http://localhost:4200/api/company/${uuid}`
			: `http://localhost:4200/api/user/${uuid}`
  
		  await axios.delete(url, {
			headers: { Authorization: `Bearer ${token}` }
		  })
  
		  alert("Conta excluída com sucesso!")
  
		  this.$store.commit("logout")
		  this.$router.push("/login")
		} catch (error) {
		  console.error("Erro ao excluir conta:", error)
		  alert("Não foi possível excluir a conta.")
		}
	  }
	}
  }
  </script>
