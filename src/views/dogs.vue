<template>
	<div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
	  <div class="max-w-5xl w-full bg-white shadow-sm rounded-2xl p-8 flex flex-col gap-6">
  
		<div class="flex justify-between items-center border-b pb-4">
		  <h1 class="text-4xl font-bold">Gerenciar Cachorros</h1>
		  <div class="flex gap-2">
			<button
			  @click="activeTab = 'create'"
			  :class="activeTab === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'"
			  class="px-4 py-2 rounded font-medium"
			>
			  Criar
			</button>
			<button
			  @click="activeTab = 'list'"
			  :class="activeTab === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'"
			  class="px-4 py-2 rounded font-medium"
			>
			  Listar
			</button>
		  </div>
		</div>
  
		<div v-if="activeTab === 'create'" class="mt-6">
		  <h2 class="text-2xl font-semibold mb-4">Adicionar Cachorro</h2>
  
		  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
			<input v-model="dog.name" type="text" placeholder="Nome" class="input" required />
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			  <select v-model="dog.gender" class="input" required>
				<option value="" disabled>Selecione o sexo</option>
				<option value="M">Macho</option>
				<option value="F">Fêmea</option>
			  </select>
			  <input v-model.number="dog.age" type="number" placeholder="Idade (anos)" class="input" required />
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			  <input v-model="dog.breed" type="text" placeholder="Raça" class="input" required />
			  <input v-model="dog.color" type="text" placeholder="Cor" class="input" required />
			</div>
			<textarea v-model="dog.description" placeholder="Descrição" class="input" rows="4" required></textarea>
			<select v-model="dog.status" class="input" required>
			  <option value="available">Disponível</option>
			  <option value="adopted">Adotado</option>
			  <option value="unavailable">Indisponível</option>
			</select>
  
			<div class="flex gap-2 items-center">
				<div 
					class="flex-1 border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer hover:border-blue-400"
					@dragover.prevent
					@drop.prevent="handleDrop"
					@click="$refs.fileInput.click()"
				>
					<p v-if="!draggedFile">Arraste ou clique para adicionar imagem (PNG/JPG)</p>
					<p v-else>{{ draggedFile.name }}</p>
				</div>

				<input 
					type="file"
					ref="fileInput"
					class="hidden"
					accept="image/png, image/jpeg"
					@change="handleFileChange"
				/>
				</div>

				<div v-if="dog.images.length > 0" class="space-y-2 mt-2">
				<div
					v-for="(url, index) in dog.images"
					:key="index"
					class="flex items-center gap-2 bg-gray-200 rounded px-3 py-1"
				>
					<img :src="url" class="w-10 h-10 rounded object-cover" />
					<span class="truncate flex-1">{{ url.slice(0, 40) }}...</span>
					<button type="button" @click="removeImageUrl(index)" class="text-red-500">x</button>
				</div>
				</div>
  
			<button type="submit" class="bg-blue-500 text-white py-2 rounded font-medium mt-4">
			  Adicionar Cachorro
			</button>
		  </form>
		</div>
  
		<div v-else class="mt-6">
		  <h2 class="text-2xl font-semibold mb-4">Cachorros Cadastrados</h2>
  
		  <div v-if="loading" class="text-gray-600">Carregando...</div>
		  <div v-else-if="dogs.length === 0" class="text-gray-500">Nenhum cachorro cadastrado ainda.</div>
  
		  <div v-else class="grid md:grid-cols-2 gap-4">
			<div
			  v-for="dog in dogs"
			  :key="dog.uuid"
			  class="rounded-lg p-4 shadow-sm bg-gray-50 hover:shadow-md transition cursor-pointer"
			  @click="openEditModal(dog)"
			>
			  <img
				v-if="dog.images && dog.images.length"
				:src="dog.images[0].data"
				alt="Imagem do cachorro"
				class="w-full h-48 object-cover rounded"
			  />
			  <div class="mt-2">
				<h3 class="text-xl font-bold">{{ dog.name }}</h3>
				<p class="text-sm text-gray-600">Raça: {{ dog.breed }}</p>
				<p class="text-sm text-gray-600">Idade: {{ dog.age }} anos</p>
				<p class="text-sm text-gray-600">Status: {{ dog.status }}</p>
			  </div>
			</div>
		  </div>
		</div>
  
		<div v-if="modalOpen" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
		  <div class="bg-white rounded-xl w-full max-w-2xl p-6 relative">
			<button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold">×</button>
			<h2 class="text-2xl font-semibold mb-4">Editar Cachorro</h2>
  
			<form @submit.prevent="handleUpdate" class="flex flex-col gap-4">
			  <input v-model="selectedDog.name" type="text" placeholder="Nome" class="input" required />
			  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<select v-model="selectedDog.gender" disabled class="input cursor-not-allowed" required>
				  <option value="" disabled>Selecione o sexo</option>
				  <option value="M">Macho</option>
				  <option value="F">Fêmea</option>
				</select>
				<input v-model.number="selectedDog.age" type="number" placeholder="Idade (anos)" class="input" required />
			  </div>
			  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<input v-model="selectedDog.breed" type="text" placeholder="Raça" disabled class="input cursor-not-allowed" required />
				<input v-model="selectedDog.color" type="text" placeholder="Cor" class="input" required />
			  </div>
			  <textarea v-model="selectedDog.description" placeholder="Descrição" class="input" rows="4" required></textarea>
			  <select v-model="selectedDog.status" class="input" required>
				<option value="available">Disponível</option>
				<option value="adopted">Adotado</option>
				<option value="unavailable">Indisponível</option>
			  </select>
  
			  <button type="submit" class="bg-green-500 text-white py-2 rounded font-medium mt-4">
				Atualizar Cachorro
			  </button>
			  <button
					@click="handleDelete"
					class="bg-red-500 text-white py-2 px-4 rounded font-medium"
				>
					Excluir Cachorro
				</button>
			</form>
		  </div>
		</div>
  
	  </div>
	</div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
	name: "ManageDogs",
	data() {
	  return {
		activeTab: "create",
		loading: false,
		dogs: [],
		dog: {
		  name: "",
		  gender: "",
		  age: null,
		  breed: "",
		  color: "",
		  description: "",
		  status: "available",
		  companyUuid: this.$store.state.userId,
		  images: [],
		},
		fileInput: null,
		draggedFile: null,
		modalOpen: false,
		selectedDog: null,
	  };
	},
	methods: {
		handleFileChange(event) {
			const file = event.target.files[0];
			if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
			this.convertToBase64(file);
			} else {
			alert("Apenas arquivos PNG ou JPG são permitidos.");
			}
		},

		handleDrop(event) {
			const file = event.dataTransfer.files[0];
			if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
			this.convertToBase64(file);
			} else {
			alert("Apenas arquivos PNG ou JPG são permitidos.");
			}
		},

		convertToBase64(file) {
			const reader = new FileReader();
			reader.onload = (e) => {
			this.dog.images.push(e.target.result);
			};
			reader.readAsDataURL(file); 
		},

		removeImageUrl(index) {
			this.dog.images.splice(index, 1);
		},

		async handleSubmit() {
			try {
			const response = await axios.post("http://localhost:4200/api/dog", this.dog, {
				headers: { Authorization: `Bearer ${this.$store.state.token}` },
			});

			alert("Cachorro cadastrado com sucesso!");
			this.dog = {
				name: "",
				gender: "",
				age: null,
				breed: "",
				color: "",
				description: "",
				status: "available",
				companyUuid: this.$store.state.userId,
				images: [],
			};
			this.fetchDogs();
			this.activeTab = "list";
			} catch (err) {
			console.error(err);
			alert("Erro ao cadastrar cachorro.");
			}
		},
	  async fetchDogs() {
		try {
		  this.loading = true;
		  const res = await axios.get(`http://localhost:4200/api/company/${this.$store.state.userId}/dogs`, {
			headers: { Authorization: `Bearer ${this.$store.state.token}` },
		  });
		  this.dogs = res.data.data || [];
		} catch (err) {
		  console.error(err);
		} finally {
		  this.loading = false;
		}
	  },
	  openEditModal(dog) {
			this.selectedDog = { ...dog };
			this.selectedDogId = dog.uuid;
			this.modalOpen = true;
	  },
	  closeModal() {
		this.modalOpen = false;
		this.selectedDog = null;
		this.draggedFile = null;
	  },
	  async handleUpdate() {
		try {  
			const payload = {
				name: this.selectedDog.name,
				age: this.selectedDog.age,
				color: this.selectedDog.color,
				description: this.selectedDog.description,
				status: this.selectedDog.status,
				images: this.selectedDog.images,
			};
			await axios.patch(
				`http://localhost:4200/api/dog/${this.selectedDogId}`, 
				payload,
				{ headers: { Authorization: `Bearer ${this.$store.state.token}` } }
			);
			alert("Cachorro atualizado com sucesso!");
			this.closeModal();
			this.fetchDogs();
		} catch (err) {
			console.error(err);
			alert("Erro ao atualizar cachorro.");
		}
	  },
	  async handleDelete() {
		if (!confirm("Tem certeza que deseja excluir este cachorro?")) return;
		try {
			await axios.delete(`http://localhost:4200/api/dog/${this.selectedDogId}`, {
			headers: { Authorization: `Bearer ${this.$store.state.token}` },
			});
			alert("Cachorro excluído com sucesso!");
			this.closeModal();
			this.fetchDogs();
		} catch (err) {
			console.error(err);
			alert("Erro ao excluir cachorro.");
		}
	  },
	},
	mounted() {
	  this.fileInput = this.$refs.fileInput;
	  this.fetchDogs();
	},
  };
  </script>
  
  <style>
  .input {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #d1d5db;
	border-radius: 0.25rem;
	outline: none;
  }
  .input:focus {
	border-color: #3b82f6;
	box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
  </style>
