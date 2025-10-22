<template>
	<footer class="footer">
	  <div class="container mx-auto px-4">
		<div class="grid md:grid-cols-4 gap-12 mb-12">
  
		  <div class="space-y-4">
			<h3 class="text-2xl font-bold text-primary-light">AdotandoAi</h3>
			<p class="text-footer-light leading-relaxed">
			  Conectando corações e patinhas desde 2020. Trabalhamos para dar uma segunda chance a animais que merecem amor e um lar.
			</p>
			<div class="flex gap-3 pt-2">
			  <a
				href="#"
				class="social-icon"
				aria-label="Facebook"
			  >
				<SocialIcon icon="facebook" />
			  </a>
			  <a
				href="#"
				class="social-icon"
				aria-label="Instagram"
			  >
				<SocialIcon icon="instagram" />
			  </a>
			  <a
				href="#"
				class="social-icon"
				aria-label="Twitter"
			  >
				<SocialIcon icon="twitter" />
			  </a>
			</div>
		  </div>
  
		  <div>
			<h4 class="text-lg font-bold mb-6 text-primary-light">Links Rápidos</h4>
			<ul class="space-y-3">
			  <li><a href="#home" class="footer-link">Início</a></li>
			  <li><a href="#adocao" class="footer-link">Adotar</a></li>
			  <li><a href="#posts" class="footer-link">Blog</a></li>
			  <li><a href="#" class="footer-link">Como Ajudar</a></li>
			  <li><a href="#" class="footer-link">Voluntariado</a></li>
			</ul>
		  </div>
  
		  <div>
			<h4 class="text-lg font-bold mb-6 text-primary-light">Apoio</h4>
			<ul class="space-y-3">
			  <li><a href="#" class="footer-link">Doar</a></li>
			  <li><a href="#" class="footer-link">Apadrinhar</a></li>
			  <li><a href="#" class="footer-link">Eventos</a></li>
			  <li><a href="#" class="footer-link">FAQ</a></li>
			  <li><a href="#" class="footer-link">Contato</a></li>
			</ul>
		  </div>
  
		  <div>
			<h4 class="text-lg font-bold mb-6 text-primary-light">Contato</h4>
			<ul class="space-y-4">
			  <li class="flex items-start gap-3">
				<MapPinIcon class="w-6 h-6 text-primary-light flex-shrink-0"/>
				<span class="text-footer-light">
				  Rua dos Animais, 123<br />
				  São Paulo - SP, 01234-567
				</span>
			  </li>
			  <li class="flex items-center gap-3">
				<PhoneIcon class="w-6 h-6 text-primary-light flex-shrink-0"/>
				<a href="tel:+5511999999999" class="footer-link">
				  (11) 99999-9999
				</a>
			  </li>
			  <li class="flex items-center gap-3">
				<EnvelopeIcon class="w-6 h-6 text-primary-light flex-shrink-0"/>
				<a href="mailto:contato@adotandoai.org" class="footer-link">
				  contato@adotandoai.org
				</a>
			  </li>
			</ul>
		  </div>
		</div>
  
		<!-- Barra inferior -->
		<div class="pt-8 border-t border-footer-light/20">
		  <div class="flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-footer-light/60 text-sm">
			  © 2025 AdotandoAi. Todos os direitos reservados.
			</p>
			<div class="flex items-center gap-2 text-footer-light/60 text-sm">
			  <span>Feito com</span>
			  <HeartIcon class="w-5 h-5 text-primary-light" />
			  <span>para os animais</span>
			</div>
			<div class="flex gap-6 text-sm">
			  <a href="#" class="footer-link">Política de Privacidade</a>
			  <a href="#" class="footer-link">Termos de Uso</a>
			</div>
		  </div>
		</div>
	  </div>
	</footer>
  </template>
  
  <script>
  import { MapPinIcon, PhoneIcon, EnvelopeIcon, HeartIcon } from "@heroicons/vue/24/outline";
  
  export default {
	name: "Footer",
	components: {
	  MapPinIcon,
	  PhoneIcon,
	  EnvelopeIcon,
	  HeartIcon
	}
  };
  </script>
  
  <style scoped>
  :root {
	--color-primary-dark: #D3A652;    
	--color-primary-medium: #F4A261;  
	--color-primary-light: #FFF693;  
	--color-black: #000000;
	--color-footer-light: #f7ede2;
  }
  
  /* Footer */
  .footer {
	background-color: white;
	color: var(--color-footer-light);
	padding-top: 4rem;
	padding-bottom: 2rem;
  }
  
  .footer-link {
	color: var(--color-footer-light)/80;
	transition: color 0.3s;
  }
  .footer-link:hover {
	color: var(--color-primary-light);
  }
  
  .social-icon {
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 9999px;
	background-color: var(--color-primary-medium)/20;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s;
  }
  .social-icon:hover {
	background-color: var(--color-primary-medium);
  }
  </style>
  