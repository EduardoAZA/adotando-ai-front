<template>
	<div class="min-h-screen bg-gradient-to-b  py-10 px-6">
	  <div class="max-w-5xl mx-auto">
		<div class="text-center mb-10">
		  <h1 class="text-4xl font-bold text-orange-600 mb-2">Adote um Amigo</h1>
		  <p class="text-gray-600">
			Encontre seu novo melhor amigo! Conheça os cachorros disponíveis para adoção nas ONGs parceiras.
		  </p>
		</div>
  
		<div v-if="loading" class="flex justify-center items-center text-gray-500 py-20">
		  <ArrowPathIcon class="w-6 h-6 animate-spin mr-2" />
		  Carregando empresas e cães...
		</div>
  
		<div v-else class="space-y-6">
		  <div
			v-for="company in companies"
			:key="company.uuid"
			class="border border-orange-100 rounded-xl bg-gradient-to-r from-white to-white shadow-sm"
		  >
			<button
			  @click="toggleCompany(company.uuid)"
			  class="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
			>
			  <div>
				<h2 class="text-xl font-semibold text-gray-800">{{ company.name }}</h2>
				<p class="text-sm text-gray-600 flex items-center mt-1">
				  <MapPinIcon class="w-4 h-4 mr-1 text-orange-500" />
				  {{ company.address.city }}, {{ company.address.state }}
				</p>
				<p class="text-sm text-gray-600 flex items-center">
				  <PhoneIcon class="w-4 h-4 mr-1 text-orange-500" />
				  ({{ company.phoneNumber?.[0]?.areaCode }}) {{ company.phoneNumber?.[0]?.phoneNumber }}
				</p>
				<p class="text-sm text-gray-600 flex items-center">
				  <EnvelopeIcon class="w-4 h-4 mr-1 text-orange-500" />
				  {{ company.email }}
				</p>
			  </div>
  
			  <ChevronDownIcon
				:class="[
				  'w-6 h-6 text-orange-500 transition-transform duration-300',
				  expandedCompany === company.uuid ? 'rotate-180' : ''
				]"
			  />
			</button>
  
			<transition name="expand">
			  <div v-if="expandedCompany === company.uuid" class="px-6 pb-6">
				<h3 class="text-lg font-semibold text-gray-700 mb-3 border-b border-orange-100 pb-1">
				  Cachorros disponíveis para adoção
				</h3>
  
				<div v-if="company.dogs.length" class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
				  <div
					v-for="dog in company.dogs"
					:key="dog.uuid"
					class="bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
				  >
					<img 
					  :src="dog.images && dog.images.length ? dog.images[0].data : '/default-dog.png'"
					  alt="Dog"
					  class="w-full h-48 object-cover"
					/>
					<div class="p-4">
					  <h4 class="font-semibold text-gray-800 text-lg">{{ dog.name }}</h4>
					  <p class="text-sm text-gray-500">{{ dog.breed }} | {{ dog.age }} anos</p>
					</div>
				  </div>
				</div>
  
				<p v-else class="text-gray-400 italic text-sm mt-3">
				  Nenhum cachorro cadastrado para esta empresa.
				</p>
			  </div>
			</transition>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from 'axios'
  import {
	ArrowPathIcon,
	ChevronDownIcon,
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon
  } from '@heroicons/vue/24/outline'
  
  export default {
	name: 'DogListByCompany',
	components: {
	  ArrowPathIcon,
	  ChevronDownIcon,
	  MapPinIcon,
	  PhoneIcon,
	  EnvelopeIcon
	},
	data() {
	  return {
		companies: [],
		loading: true,
		expandedCompany: null 
	  }
	},
	async created() {
	  await this.fetchCompanies()
	},
	methods: {
	  async fetchCompanies() {
		try {
		  const res = await axios.get('http://localhost:4200/api/company',
		  	{
				headers: {
				Authorization: `Bearer ${this.$store.state.token}`
				}
			}
		  )
		  const allCompanies = res.data.data.companies
  
		  const withDogs = await Promise.all(
			allCompanies.map(async company => {
			  try {
				const dogsRes = await axios.get(`http://localhost:4200/api/company/${company.uuid}/dogs`,
				{
					headers: {
					Authorization: `Bearer ${this.$store.state.token}`
					}
				}
				)
				console.log(dogsRes.data.data)
				return { ...company, dogs: dogsRes.data.data || [] }
			  } catch {
				return { ...company, dogs: [] }
			  }
			})
		  )
  
		  this.companies = withDogs
		} catch (error) {
		  console.error('Erro ao buscar empresas:', error)
		} finally {
		  this.loading = false
		}
	  },
	  toggleCompany(uuid) {
		this.expandedCompany = this.expandedCompany === uuid ? null : uuid
	  }
	}
  }
  </script>
  
  <style scoped>
  /* Animação suave de expansão */
  .expand-enter-active,
  .expand-leave-active {
	transition: all 0.3s ease;
  }
  .expand-enter-from,
  .expand-leave-to {
	opacity: 0;
	max-height: 0;
	overflow: hidden;
  }
  .expand-enter-to,
  .expand-leave-from {
	opacity: 1;
	max-height: 800px;
  }
  </style>
  