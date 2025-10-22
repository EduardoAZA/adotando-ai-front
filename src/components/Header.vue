<template>
	<header class="header">
	  <router-link to="/" class="text-2xl font-bold text-[#3d2c24]">
		AdotandoAi
	  </router-link>
  
	  <nav class="nav">
		<router-link to="/">Landing</router-link>
		<router-link to="/adocao">Adoção</router-link>
	  </nav>
  
	  <div class="actions">
		<div v-if="isLoggedIn" class="user-menu relative">
		  <div
			@click="toggleDropdown"
			class="flex items-center gap-2 cursor-pointer bg-[#D3A652] text-white px-4 py-2 rounded"
		  >
			<span>Olá, {{ firstName }}</span>
		  </div>
  
		  <div
			v-if="dropdownOpen"
			class="absolute right-0 mt-2 w-48 bg-white p-2 rounded shadow-md z-10"
			>
			<router-link to="/perfil" class="block px-4 py-2 hover:bg-gray-100">
				Perfil
			</router-link>

			<router-link
				v-if="$store.state.isCompany"
				to="/cachorros"
				class="block px-4 py-2 hover:bg-gray-100"
			>
				Cachorros
			</router-link>

			<button
				@click="logoutUser"
				class="w-full text-left px-4 py-2 hover:bg-gray-100"
			>
				Sair
			</button>
			</div>
		</div>
  
		<router-link v-else to="/login" class="login-link">
		  Entrar
		</router-link>
	  </div>
	</header>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
	name: "Header",
	data() {
	  return {
		dropdownOpen: false,
		userName: "Usuário",
	  };
	},
	computed: {
	  isLoggedIn() {
		return !!this.$store.state.token;
	  },
	  firstName() {
		return this.userName.split(" ")[0];
	  },
	},
	methods: {
	  toggleDropdown() {
		this.dropdownOpen = !this.dropdownOpen;
	  },
	  logoutUser() {
		this.$store.commit("logout");
		this.$router.push("/login");
	  },
	  async fetchUserName() {
		if (!this.$store.state.userId) return;
  
		try {
		  let res;
  
		  if (this.$store.state.isCompany === true) {
			res = await axios.get(
			  `http://localhost:4200/api/company/${this.$store.state.userId}`,
			  {
				headers: {
				  Authorization: `Bearer ${this.$store.state.token}`,
				},
			  }
			);
		  } else {
			res = await axios.get(
			  `http://localhost:4200/api/user/${this.$store.state.userId}`,
			  {
				headers: {
				  Authorization: `Bearer ${this.$store.state.token}`,
				},
			  }
			);
		  }
  
		  this.userName = res.data.data.name || "Usuário";
		} catch (err) {
		  console.error("Erro ao buscar nome do usuário:", err);
		}
	  },
	},
	mounted() {
	  this.fetchUserName();
	},
  };
  </script>
  
  <style>
  .header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px 35px;
	height: 70px;
	background-color: rgb(255, 255, 255);
  }
  
  .nav {
	display: flex;
	gap: 30px;
	justify-content: center;
	flex: 1;
  }
  
  .nav a {
	color: black;
	text-decoration: none;
	font-weight: 500;
  }
  
  .nav a:hover {
	color: #00bcd4;
  }
  
  .actions .login-link {
	padding: 8px 16px;
	background-color: #00bcd4;
	border-radius: 5px;
	color: white;
	font-weight: bold;
	text-decoration: none;
  }
  
  .actions .login-link:hover {
	background-color: #0097a7;
  }
  </style>
  