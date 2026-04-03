/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Star,
  Menu as MenuIcon,
  X,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const MENU_ITEMS = [
  {
    category: "Entradas",
    items: [
      { name: "Bruschetta de Tomate", price: "R$ 28", description: "Pão artesanal tostado, tomates cereja, manjericão e azeite extra virgem." },
      { name: "Carpaccio de Carne", price: "R$ 42", description: "Lâminas de filé mignon, rúcula, alcaparras e lascas de parmesão." }
    ]
  },
  {
    category: "Pratos Principais",
    items: [
      { name: "Risoto de Cogumelos", price: "R$ 65", description: "Arroz arbóreo, mix de cogumelos frescos e finalizado com azeite de trufas." },
      { name: "Salmão Grelhado", price: "R$ 78", description: "Filé de salmão com crosta de ervas, purê de mandioquinha e legumes tostados." },
      { name: "Filé Mignon ao Poivre", price: "R$ 85", description: "Medalhão de filé mignon com molho de pimentas verdes e batatas rústicas." }
    ]
  },
  {
    category: "Sobremesas",
    items: [
      { name: "Petit Gâteau", price: "R$ 32", description: "Bolinho quente de chocolate com sorvete de baunilha artesanal." },
      { name: "Tiramisù", price: "R$ 35", description: "Clássica sobremesa italiana com café, mascarpone e cacau." }
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5544998470196"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center group"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
          WhatsApp
        </span>
      </motion.a>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-amber-600" />
            <span className="font-serif text-2xl font-bold tracking-tight">Sabor & Arte</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#inicio" className="hover:text-amber-600 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-amber-600 transition-colors">Sobre</a>
            <a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a>
            <a href="#contato" className="hover:text-amber-600 transition-colors">Contato</a>
            <button className="bg-stone-900 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all duration-300">
              Reservar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-stone-200 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sobre</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Menu</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contato</a>
            <button className="bg-stone-900 text-white px-6 py-3 rounded-xl">Reservar Agora</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
            alt="Ambiente do Restaurante" 
            className="h-full w-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-amber-400 font-medium tracking-[0.3em] uppercase mb-4"
          >
            Experiência Gastronômica Única
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl text-white font-bold mb-8 leading-tight"
          >
            Onde cada sabor conta uma <span className="italic text-amber-400">história</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#menu" className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all flex items-center gap-2 group">
              Ver Menu <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/5544998470196" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a href="#contato" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-stone-900 transition-all">
              Fazer Reserva
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1974" 
                alt="Chef preparando prato" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-600 text-white p-8 rounded-2xl hidden lg:block shadow-xl">
              <p className="text-4xl font-serif font-bold mb-1">15+</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Anos de Tradição</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-amber-600 font-semibold tracking-widest uppercase mb-4">Nossa História</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">Paixão pela culinária contemporânea</h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Fundado em 2010, o Sabor & Arte nasceu do desejo de unir técnicas clássicas com ingredientes locais frescos. Nossa cozinha é um laboratório de sabores onde a tradição encontra a inovação.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-2">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <h4 className="font-bold">Qualidade Premium</h4>
                <p className="text-sm text-stone-500">Ingredientes selecionados diariamente dos melhores produtores.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-2">
                  <Utensils className="h-6 w-6" />
                </div>
                <h4 className="font-bold">Chef Executivo</h4>
                <p className="text-sm text-stone-500">Menu assinado por especialistas premiados no setor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-stone-900 text-white px-6">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-amber-400 font-semibold tracking-widest uppercase mb-4">Cardápio</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">Sabores Inesquecíveis</h3>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Uma seleção cuidadosa de pratos que celebram a sazonalidade e a criatividade da nossa equipe.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-16">
          {MENU_ITEMS.map((category, idx) => (
            <div key={idx}>
              <h4 className="font-serif text-2xl text-amber-400 border-b border-stone-800 pb-4 mb-8 flex items-center gap-4">
                {category.category}
                <div className="h-px flex-1 bg-stone-800"></div>
              </h4>
              <div className="grid gap-8">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-start group">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-xl font-medium group-hover:text-amber-400 transition-colors">{item.name}</h5>
                      </div>
                      <p className="text-stone-500 text-sm">{item.description}</p>
                    </div>
                    <span className="text-xl font-serif text-amber-400">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border border-amber-400 text-amber-400 px-8 py-3 rounded-full hover:bg-amber-400 hover:text-stone-900 transition-all font-medium">
            Baixar Menu Completo (PDF)
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-amber-600 font-semibold tracking-widest uppercase mb-4">Contato</h2>
              <h3 className="font-serif text-4xl font-bold mb-8">Esperamos por você</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Localização</h4>
                    <p className="text-stone-600">Av. Gastronômica, 1234 - Jardins<br />São Paulo, SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Horário de Funcionamento</h4>
                    <p className="text-stone-600">Terça a Sábado: 12h - 23h<br />Domingo: 12h - 17h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Reservas</h4>
                    <p className="text-stone-600">(11) 98765-4321<br />contato@saborearte.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5544998470196" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-green-600 transition-colors"
                    >
                      (44) 99847-0196
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="h-12 w-12 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-12 w-12 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-stone-100 p-12 md:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-stone-500">Nome</label>
                    <input type="text" className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-stone-500">E-mail</label>
                    <input type="email" className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 outline-none transition-all" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-stone-500">Assunto</label>
                  <select className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 outline-none transition-all appearance-none">
                    <option>Reserva de Mesa</option>
                    <option>Eventos Privados</option>
                    <option>Dúvidas e Sugestões</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-stone-500">Mensagem</label>
                  <textarea rows={4} className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-500 py-12 px-6 border-t border-stone-800">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <Utensils className="h-5 w-5 text-amber-600" />
            <span className="font-serif text-xl font-bold">Sabor & Arte</span>
          </div>
          <p className="text-sm">© 2026 Sabor & Arte Restaurante. Todos os direitos reservados.</p>
          <div className="flex gap-8 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
