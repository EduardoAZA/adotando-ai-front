<template>
	<div class="min-h-screen flex flex-col">
		<div
    	class="relative w-full min-h-[850px] bg-cover bg-center rounded-lg  flex flex-col justify-end p-6"
    	style="background-image: url('../../public/foto-landing.avif');"
  	  >
		<div class="absolute left-20 top-60">
			<h1 class="text-3xl font-medium max-w-lg">
				“Quem disse que não se pode adotar felicidade esqueceu-se dos cachorros.”
			</h1>
		</div>
	    <div class="absolute top-20 right-140">
			<h1 class="max-w-2xl text-center text-5xl font-meidum lily-font">Adote aquele amigo que você tanto buscava</h1>
		</div>
		<div class="absolute left-20 bottom-40">
			<span class="font-semibold">ONG's parceiras:</span>
			<div class="flex gap-2 mt-2">
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>
				<span class="w-6 h-6 bg-white rounded-full flex items-center justify-center border">F</span>

			</div>
		</div>

		<div class="absolute right-10 flex flex-col gap-10 bottom-40 max-w-2xl">
			<h1 class="text-3xl font-medium">
				Cada cão merece um lar cheio de amor. Descubra os peludos que estão esperando por você hoje!
			</h1>
			<div class="flex gap-5">
				<button class="bg-yellow-200 hover:bg-yellow-400 text-black px-6 py-3 rounded font-semibold">Adote Agora</button>
				<button class="bg-yellow-200 hover:bg-yellow-400 text-black px-6 py-3 rounded font-semibold">Adote Agora</button>
			</div>
		</div>
  	</div>
	  <section class="py-24 bg-[#ffffff]">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#3d2c24] mb-6">
          Nossa Missão
        </h2>
        <p class="text-xl text-[#6b5a4d] leading-relaxed">
          Acreditamos que todo animal merece uma segunda chance. Nossa missão é resgatar, cuidar e encontrar
          lares amorosos para animais abandonados
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#e0d4c8]">
          <div class="w-16 h-16 bg-[#f4a261]/10 rounded-full flex items-center justify-center mb-6">
            <HeartIcon class="w-8 h-8 text-[#f4a261]" />
          </div>
          <h3 class="text-xl font-bold text-[#3d2c24] mb-4">Amor e Cuidado</h3>
          <p class="text-[#6b5a4d] leading-relaxed">
            Tratamos cada animal com amor e respeito, oferecendo cuidados veterinários e carinho enquanto aguardam um lar.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#e0d4c8]">
          <div class="w-16 h-16 bg-[#f4a261]/10 rounded-full flex items-center justify-center mb-6">
            <HomeIcon class="w-8 h-8 text-[#f4a261]" />
          </div>
          <h3 class="text-xl font-bold text-[#3d2c24] mb-4">Lares Responsáveis</h3>
          <p class="text-[#6b5a4d] leading-relaxed">
            Conectamos animais a famílias comprometidas, garantindo que cada adoção seja o início de uma relação duradoura.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#e0d4c8]">
          <div class="w-16 h-16 bg-[#f4a261]/10 rounded-full flex items-center justify-center mb-6">
            <UsersIcon class="w-8 h-8 text-[#f4a261]" />
          </div>
          <h3 class="text-xl font-bold text-[#3d2c24] mb-4">Comunidade Ativa</h3>
          <p class="text-[#6b5a4d] leading-relaxed">
            Trabalhamos com parceiros, voluntários e ONGs para ampliar nosso impacto e salvar mais vidas.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#e0d4c8]">
          <div class="w-16 h-16 bg-[#f4a261]/10 rounded-full flex items-center justify-center mb-6">
            <ShieldCheckIcon class="w-8 h-8 text-[#f4a261]" />
          </div>
          <h3 class="text-xl font-bold text-[#3d2c24] mb-4">Proteção Animal</h3>
          <p class="text-[#6b5a4d] leading-relaxed">
            Lutamos contra maus-tratos e abandono, promovendo conscientização sobre posse responsável e bem-estar animal.
          </p>
        </div>
      </div>

      <div class="mt-16 max-w-4xl mx-auto bg-[#fcec15]/40 p-8 md:p-12 rounded-2xl border-2 border-[#f4a261]/30">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold text-[#000000] mb-2">500+</div>
            <div class="text-[#6b5a4d] font-medium">Animais Resgatados</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-[#000000] mb-2">350+</div>
            <div class="text-[#6b5a4d] font-medium">Adoções Realizadas</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-[#000000] mb-2">20+</div>
            <div class="text-[#6b5a4d] font-medium">ONGs Parceiras</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="adocao" class="py-24 bg-[#D3A652]">
      <div class="container mx-auto px-4">
        <div class="text-center mb-4">
          <p class="text-[#6b5a4d] text-lg mb-2">Ajude um Aumigo</p>
          <h2 class="text-4xl md:text-5xl font-bold text-[#000000]">
            Adote agora mesmo
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          <div
            v-for="animal in dogs"
            :key="animal.uuid"
            class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#e0d4c8]"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="animal?.image"
                :alt="`${animal.name} - ${animal.breed}`"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-[#3d2c24] mb-2">{{ animal.name }}</h3>
              <div class="text-[#6b5a4d] mb-4 space-y-1">
                <p>{{ animal.breed }}</p>
                <p>{{ animal.age }} anos</p>
              </div>
              <button
                class="w-full bg-[#f4a261] text-[#f7ede2] py-3 rounded-lg font-semibold hover:bg-[#f4a261]/90 transition-colors"
              >
                Adotar {{ animal.name }}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

	  <Footer />
	</div>
  </template>
  
  <script>
import Footer from '../components/Footer.vue';
import { HeartIcon, HomeIcon, UsersIcon, ShieldCheckIcon } from "@heroicons/vue/24/outline";
import axios from 'axios';

export default {
  name: "LandingPage",
  data() {
    return {
      dogs: [],
      currentDogIndex: 0
    };
  },
  components: {
    Footer,
    HeartIcon,
    HomeIcon,
    UsersIcon,
    ShieldCheckIcon,
  },
  async mounted() {
    try {
      const companyId = this.$store.state.userId; 
      
      const response = await axios.get(`http://localhost:4200/api/company/${companyId}/dogs`, {
        headers: { Authorization: `Bearer ${this.$store.state.token}` }
      });
      console.log(response.data.data)
      this.dogs = response.data.data.map(dog => ({
        uuid: dog.uuid,
        name: dog.name,
        breed: dog.breed,
        age: dog.age,
        image: dog.images[0]?.data || dog.images[0] || 'default-image.jpg'
      }));

    } catch (error) {
      console.error("Erro ao carregar cães:", error);
    }
  }
};
</script>
  
  <style scoped>
  .scrollbar-hide::-webkit-scrollbar {
	display: none;
  }
  .scrollbar-hide {
	-ms-overflow-style: none;
	scrollbar-width: none;
  }
  </style>
  