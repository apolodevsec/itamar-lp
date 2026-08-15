"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import logoImg from "@/img/5V5A1364.png";
import heroImg from "@/img/5V5A1329.png";
import bioImg from "@/img/5V5A1389.png";
import municipiosImg from "@/img/5V5A1295.png";
import marconiImg from "@/img/5V5A1297.png";

const whatsappUrl = "https://wa.me/5562000000000";
const instagramUrl = "https://instagram.com/";
const facebookUrl = "https://facebook.com/";
const materialUrl = "#";
const cnpjCampanha = "XX.XXX.XXX/0001-XX";
const empresaResponsavel = "[Nome da Empresa/Agência]";
const cnpjEmpresa = "YY.YYY.YYY/0001-YY";

const razoes = [
  { n: "01", titulo: "Experiência para representar", texto: "Conhecimento de gestão pública e dos desafios enfrentados pelos municípios." },
  { n: "02", titulo: "Presença para ouvir", texto: "Política se faz perto das pessoas, ouvindo comunidades, lideranças e quem vive os problemas todos os dias." },
  { n: "03", titulo: "Força para buscar recursos", texto: "Um deputado federal precisa abrir portas em Brasília e lutar para que investimentos cheguem aos municípios." },
  { n: "04", titulo: "Trabalho para entregar resultados", texto: "Menos discurso. Mais capacidade de realização." }
];

const prioridades = [
  { titulo: "Municípios mais fortes", texto: "Fortalecer as cidades goianas, ampliando a busca por recursos, investimentos e parcerias que possam melhorar diretamente a vida da população." },
  { titulo: "Saúde", texto: "Trabalhar por mais estrutura, equipamentos, atendimento especializado e recursos para fortalecer hospitais, unidades de saúde e serviços públicos nos municípios." },
  { titulo: "Infraestrutura", texto: "Defender investimentos em rodovias, pavimentação, mobilidade, saneamento e obras capazes de gerar desenvolvimento e qualidade de vida." },
  { titulo: "Desenvolvimento e emprego", texto: "Apoiar iniciativas que estimulem o empreendedorismo, fortaleçam empresas, movimentem a economia e criem novas oportunidades de trabalho." },
  { titulo: "Agricultura e produção", texto: "Valorizar quem produz, apoiar o agronegócio, a agricultura familiar e políticas que fortaleçam a vocação produtiva de Goiás." },
  { titulo: "Educação e oportunidades", texto: "Buscar investimentos que ampliem o acesso à educação, qualificação profissional, tecnologia e oportunidades para os jovens." }
];

const materiais = [
  { titulo: "Santinhos virtuais", texto: "Artes prontas para enviar no WhatsApp e nos grupos da sua cidade.", formato: "PNG · JPEG", url: materialUrl },
  { titulo: "Foto de perfil", texto: "Molduras e avatares para Instagram, Facebook e WhatsApp.", formato: "PNG", url: materialUrl },
  { titulo: "Propostas e prioridades", texto: "Documento com as bandeiras da candidatura para Goiás.", formato: "PDF", url: materialUrl },
  { titulo: "Artes para adesivos", texto: "Arquivos autorizados para impressão de adesivos e cartazes.", formato: "ZIP", url: materialUrl }
];

export default function Home() {
  const [enviado, setEnviado] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileBtn, setShowMobileBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const propostasSection = document.getElementById("quem-sou");
      if (propostasSection) {
        if (window.scrollY >= propostasSection.offsetTop - window.innerHeight / 1.5) {
          setShowMobileBtn(true);
        } else {
          setShowMobileBtn(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      // Pula a primeira seção (Hero) para ela já nascer visível
      if (index > 0) {
        section.classList.add("reveal");
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="w-full overflow-x-hidden font-barlow">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#062A5E] border-b-[3px] border-[#FFC400]">
        <div className="max-w-[1240px] mx-auto px-6 py-3 flex items-center justify-between gap-y-3 gap-x-5">
          <a href="#topo" className="flex items-center gap-2 sm:gap-3 flex-none">
            <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-full overflow-hidden border-2 border-[#FFC400] flex-none relative">
              <Image src={logoImg} alt="Itamar Leão" fill className="object-cover object-[center_3px]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-archivo font-extrabold text-[14px] sm:text-base text-white tracking-[0.02em]">ITAMAR LEÃO</span>
              <span className="font-barlow font-semibold text-[10px] sm:text-xs text-[#9FC2F0] tracking-[0.14em] mt-1">DEPUTADO FEDERAL</span>
            </div>
            <span className="font-archivo font-black text-[22px] sm:text-[26px] text-[#FFC400] tracking-[-0.02em] ml-1">4551</span>
          </a>

          <button 
            className="lg:hidden text-white p-2 ml-auto" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden lg:flex ml-auto items-center flex-wrap gap-y-2 gap-x-5 whitespace-nowrap">
            <a href="#quem-sou" className="font-barlow font-semibold text-sm text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">QUEM SOU</a>
            <a href="#propostas" className="font-barlow font-semibold text-sm text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">PROPOSTAS</a>
            <a href="#material" className="font-barlow font-semibold text-sm text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">MATERIAL</a>
            <a href="#contato" className="font-barlow font-semibold text-sm text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">CONTATO</a>
            <div className="flex items-center gap-2.5 pl-2 border-l border-white/20">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[34px] h-[34px] rounded-lg grid place-items-center bg-white/10 hover:bg-[#FFC400] text-white hover:text-[#062A5E] transition-colors">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[34px] h-[34px] rounded-lg grid place-items-center bg-white/10 hover:bg-[#FFC400] text-white hover:text-[#062A5E] transition-colors">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7.2c0-.9.2-1.3 1.4-1.3H17V3h-2.6C11.5 3 10.4 4.4 10.4 7v2H8.5v3h1.9v9H14v-9h2.5l.4-3H14z"></path></svg>
              </a>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-archivo font-extrabold text-[13px] tracking-[0.06em] text-[#062A5E] bg-[#FFC400] px-[18px] py-[11px] rounded-lg hover:bg-white transition-colors">QUERO APOIAR</a>
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#04203F] border-t border-white/10 px-6 py-5 flex flex-col gap-4">
            <a href="#quem-sou" onClick={() => setIsMenuOpen(false)} className="font-barlow font-semibold text-[15px] text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">QUEM SOU</a>
            <a href="#propostas" onClick={() => setIsMenuOpen(false)} className="font-barlow font-semibold text-[15px] text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">PROPOSTAS</a>
            <a href="#material" onClick={() => setIsMenuOpen(false)} className="font-barlow font-semibold text-[15px] text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">MATERIAL</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="font-barlow font-semibold text-[15px] text-white tracking-[0.08em] hover:text-[#FFC400] transition-colors">CONTATO</a>
            
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[40px] h-[40px] rounded-lg grid place-items-center bg-white/10 text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[40px] h-[40px] rounded-lg grid place-items-center bg-white/10 text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7.2c0-.9.2-1.3 1.4-1.3H17V3h-2.6C11.5 3 10.4 4.4 10.4 7v2H8.5v3h1.9v9H14v-9h2.5l.4-3H14z"></path></svg>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ml-auto font-archivo font-extrabold text-[14px] tracking-[0.06em] text-[#062A5E] bg-[#FFC400] px-5 py-3 rounded-lg text-center flex-1">
                QUERO APOIAR
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="topo" className="relative bg-[#062A5E] overflow-hidden">
        <div className="absolute inset-0 hidden md:block" style={{ background: "radial-gradient(120% 90% at 78% 40%, rgba(11,79,168,.55), transparent 60%)" }}></div>
        <div className="absolute inset-0 md:hidden" style={{ background: "radial-gradient(120% 90% at 50% 100%, rgba(11,79,168,.55), transparent 60%)" }}></div>
        <div className="relative max-w-[1240px] mx-auto px-6 grid md:grid-cols-[1.05fr_.95fr] gap-10 md:gap-10 items-end min-h-[auto] md:min-h-[660px] pt-12 md:pt-0">
          <div className="pb-0 md:py-[90px] max-w-[620px] mx-auto text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2.5 bg-[#FFC400]/10 border border-[#FFC400]/40 rounded-full px-4 py-[7px] mb-6">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FFC400]"></span>
              <span className="font-barlow font-semibold text-[13px] tracking-[0.16em] text-[#FFC400]">GOIÁS PODE MUITO MAIS</span>
            </div>
            <h1 className="font-archivo font-black text-5xl md:text-[74px] leading-[0.94] tracking-[-0.035em] text-white m-0">ITAMAR<br className="hidden md:block"/> LEÃO <br className="hidden md:block"/><span className="text-[#FFC400]">4551</span></h1>
            <p className="font-archivo font-bold text-xl md:text-[22px] leading-[1.3] text-[#9FC2F0] mt-6 tracking-[0.01em]">O Federal do Marconi —<br className="hidden md:block"/> Firme, Leal e Presente.</p>
            <p className="font-barlow text-lg md:text-[19px] leading-[1.6] text-white/80 mt-5 max-w-[520px]">Candidato a Deputado Federal para representar Goiás em Brasília, defender os municípios e transformar experiência em resultados para quem mais precisa.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3.5 mt-9 w-full sm:w-auto">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-3 bg-[#FFC400] text-[#062A5E] font-archivo font-black text-[17px] tracking-[0.02em] px-[30px] py-[19px] rounded-lg hover:bg-white transition-colors w-full sm:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.1.8 2.1.6 2.5.5a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.2-.2-.4-.3z"></path></svg>
                QUERO FAZER PARTE
              </a>
              <a href="#propostas" className="inline-flex justify-center items-center bg-transparent border-2 border-white/35 text-white font-archivo font-bold text-[17px] px-[28px] py-[17px] rounded-lg hover:border-[#FFC400] hover:text-[#FFC400] transition-colors w-full sm:w-auto">Ver as propostas</a>
            </div>
          </div>
          <div className="relative self-end h-[540px] md:h-[650px] w-full md:w-[85%] mx-auto md:ml-auto mt-6 md:mt-0">
            <Image src={heroImg} alt="Itamar Leão Principal" fill className="object-cover object-bottom" priority />
          </div>
        </div>
        <div className="relative bg-[#FFC400] px-6 py-3.5 overflow-hidden">
          <div className="max-w-[1240px] mx-auto flex flex-wrap gap-x-10 gap-y-3.5 justify-center font-archivo font-extrabold text-sm tracking-[0.18em] text-[#062A5E] text-center">
            <span>EXPERIÊNCIA PARA REPRESENTAR</span><span className="opacity-40 hidden md:inline">◆</span>
            <span>FORÇA PARA TRABALHAR</span><span className="opacity-40 hidden md:inline">◆</span>
            <span>COMPROMISSO PARA FAZER ACONTECER</span>
          </div>
        </div>
      </section>

      {/* Quem Sou */}
      <section id="quem-sou" className="bg-white px-6 py-16 md:py-[110px]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-[.9fr_1.1fr] gap-10 md:gap-[70px] items-center">
          <div className="relative min-w-0">
            <div className="w-full h-[400px] md:h-[560px] rounded-[16px] overflow-hidden relative">
              <Image src={bioImg} alt="Quem é Itamar Leão" fill className="object-cover object-[center_3px]" />
            </div>
            <div className="absolute -right-4 -bottom-4 bg-[#062A5E] text-white p-[22px_26px] rounded-[14px] border-b-4 border-[#FFC400] max-w-[250px] shadow-xl hidden md:block">
              <div className="font-archivo font-black text-[34px] leading-none text-[#FFC400]">4551</div>
              <div className="font-barlow font-semibold text-sm tracking-[0.1em] mt-2 text-[#9FC2F0]">DEPUTADO FEDERAL<br/>PSDB · GOIÁS</div>
            </div>
          </div>
          <div className="min-w-0">
            <div className="font-barlow font-bold text-[13px] tracking-[0.22em] text-[#0B4FA8] mb-[18px]">QUEM É ITAMAR LEÃO</div>
            <h2 className="font-archivo font-black text-4xl md:text-[52px] leading-[1.02] tracking-[-0.03em] text-[#062A5E] m-0">Uma história construída com trabalho</h2>
            <p className="font-barlow text-lg md:text-[19px] leading-[1.68] text-[#33465F] mt-7">Itamar Leão conhece de perto os desafios enfrentados pelos municípios. Sua trajetória pública foi construída com presença, responsabilidade e capacidade de realização. Como gestor, mostrou que é possível administrar colocando alma, coração e consciência a serviço do povo.</p>
            <p className="font-barlow text-lg md:text-[19px] leading-[1.68] text-[#33465F] mt-5">Agora, essa experiência ganha um novo propósito. Itamar quer chegar à Câmara dos Deputados para ser uma voz ativa de Goiás em Brasília, abrir caminhos para novos investimentos e ajudar os municípios a transformar projetos em realidade.</p>
            <div className="flex items-center gap-4 mt-8 p-[20px_24px] bg-[#F2F6FC] border-l-4 border-[#FFC400] rounded-r-lg">
              <span className="font-archivo font-black text-[22px] text-[#0B4FA8]">✓</span>
              <span className="font-archivo font-bold text-[19px] md:text-[21px] text-[#062A5E] tracking-[-0.01em]">Quem já fez, sabe como fazer mais.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Por que Itamar */}
      <section className="bg-[#F5F6F8] px-6 py-16 md:py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[720px] mb-[40px] md:mb-[54px]">
            <div className="font-barlow font-bold text-[13px] tracking-[0.22em] text-[#0B4FA8] mb-4">POR QUE ITAMAR LEÃO?</div>
            <h2 className="font-archivo font-black text-4xl md:text-[48px] leading-[1.04] tracking-[-0.03em] text-[#062A5E] m-0">Goiás precisa de quem conhece a realidade das cidades</h2>
            <p className="font-barlow text-[19px] leading-[1.6] text-[#33465F] mt-5">Um deputado federal preparado para trabalhar desde o primeiro dia.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {razoes.map((r, i) => (
              <div key={i} className="bg-white rounded-[14px] p-[32px_26px_34px] border-t-4 border-[#FFC400] shadow-[0_1px_3px_rgba(6,42,94,.08)] hover:shadow-[0_12px_30px_rgba(6,42,94,.13)] transition-shadow">
                <div className="w-[42px] h-[42px] rounded-lg bg-[#062A5E] text-[#FFC400] grid place-items-center font-archivo font-black text-[18px] mb-[22px]">{r.n}</div>
                <h3 className="font-archivo font-extrabold text-[22px] leading-[1.15] tracking-[-0.02em] text-[#062A5E] m-0">{r.titulo}</h3>
                <p className="font-barlow text-[16.5px] leading-[1.6] text-[#4A5C74] mt-3.5">{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propostas */}
      <section id="propostas" className="bg-[#062A5E] px-6 py-16 md:py-[110px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mb-[40px] md:mb-[56px]">
            <div className="max-w-[680px]">
              <div className="font-barlow font-bold text-[13px] tracking-[0.22em] text-[#FFC400] mb-4">NOSSAS PRIORIDADES</div>
              <h2 className="font-archivo font-black text-4xl md:text-[50px] leading-[1.02] tracking-[-0.03em] text-white m-0">As bandeiras que vamos levar para o Congresso Nacional</h2>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-archivo font-extrabold text-[15px] text-[#062A5E] bg-[#FFC400] px-6 py-4 rounded-lg hover:bg-white transition-colors self-stretch md:self-auto text-center">Apoiar essa pauta</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {prioridades.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[14px] p-[34px_30px_36px] hover:bg-white/10 hover:border-[#FFC400]/50 transition-colors">
                <div className="font-archivo font-black text-[20px] text-[#FFC400] mb-[18px]">◆</div>
                <h3 className="font-archivo font-extrabold text-[25px] leading-[1.1] tracking-[-0.02em] text-white m-0">{p.titulo}</h3>
                <p className="font-barlow text-[17px] leading-[1.62] text-white/70 mt-4">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deputado dos Municípios */}
      <section className="relative min-h-[500px] md:min-h-[600px] grid">
        <div className="absolute inset-0">
          <Image src={municipiosImg} alt="Deputado dos Municípios" fill className="object-cover md:object-[center_-400px]" />
        </div>
        <div className="relative pointer-events-none bg-gradient-to-t md:bg-gradient-to-r from-[#062A5E]/95 via-[#062A5E]/90 to-[#062A5E]/30 md:to-[#062A5E]/15 flex items-center px-6 py-16 md:py-[100px]">
          <div className="max-w-[1240px] mx-auto w-full">
            <div className="max-w-[600px]">
              <div className="font-barlow font-bold text-[13px] tracking-[0.22em] text-[#FFC400] mb-4">UM DEPUTADO DOS MUNICÍPIOS</div>
              <h2 className="font-archivo font-black text-4xl md:text-[48px] leading-[1.03] tracking-[-0.03em] text-white m-0">Goiás não termina nas grandes cidades</h2>
              <p className="font-barlow text-lg md:text-[19px] leading-[1.65] text-white/85 mt-6">Cada município importa. Cada região precisa ser ouvida. Cada comunidade merece representação. É por isso que Itamar Leão percorre Goiás de cidade em cidade, conversando com as pessoas, ouvindo lideranças e construindo uma candidatura baseada nas necessidades reais de cada região.</p>
              <div className="mt-8 p-[22px_26px] bg-[#FFC400] rounded-xl inline-block">
                <span className="font-archivo font-extrabold text-[19px] leading-[1.35] text-[#062A5E]">Levar Brasília para mais perto dos municípios — e fazer os municípios serem ouvidos em Brasília.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marconi */}
      <section className="bg-white px-6 py-16 md:py-[110px]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-[1.05fr_.95fr] gap-10 md:gap-[70px] items-center">
          <div className="min-w-0">
            <div className="font-barlow font-bold text-[13px] tracking-[0.22em] text-[#0B4FA8] mb-4">JUNTOS POR GOIÁS</div>
            <h2 className="font-archivo font-black text-4xl md:text-[50px] leading-[1.02] tracking-[-0.03em] text-[#062A5E] m-0">Itamar Leão e Marconi Perillo</h2>
            <p className="font-barlow text-[19px] leading-[1.68] text-[#33465F] mt-[26px]">Esta caminhada também representa uma união de experiência, amizade e compromisso com o Estado. Itamar Leão, candidato a deputado federal, e seu companheiro e amigo Marconi Perillo, candidato a governador de Goiás, seguem juntos, município por município, levando uma mensagem de união, trabalho e desenvolvimento.</p>
            <p className="font-barlow text-[19px] leading-[1.68] text-[#33465F] mt-[18px]">Uma parceria para construir um Goiás que volte a avançar e uma representação federal que ajude cada região a crescer.</p>
            <div className="flex items-center gap-4 mt-[34px] p-[20px_24px] bg-[#062A5E] rounded-lg">
              <span className="font-archivo font-black text-[20px] text-[#FFC400]">✓</span>
              <span className="font-archivo font-bold text-[19px] text-white tracking-[-0.01em]">Juntos, município por município, por um Goiás mais forte.</span>
            </div>
          </div>
          <div className="w-full h-[400px] md:h-[540px] rounded-2xl overflow-hidden border-b-[6px] border-[#FFC400] relative">
            <Image src={marconiImg} alt="Itamar Leão e Marconi Perillo" fill className="object-cover object-[center_3px]" />
          </div>
        </div>
      </section>
      

      {/* Material */}
      <section id="material" className="bg-[#F5F6F8] px-6 py-16 md:py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[700px] mb-[32px] md:mb-[44px]">
            <div className="font-barlow font-bold text-[13px] tracking-[0.22em] text-[#0B4FA8] mb-4">MATERIAL DE CAMPANHA</div>
            <h2 className="font-archivo font-black text-4xl md:text-[46px] leading-[1.04] tracking-[-0.03em] text-[#062A5E] m-0">Ajude essa mensagem a chegar mais longe</h2>
            <p className="font-barlow text-[19px] leading-[1.6] text-[#33465F] mt-[18px]">Baixe os materiais oficiais autorizados e compartilhe nas suas redes, no seu bairro e na sua cidade.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {materiais.map((m, i) => (
              <a key={i} href={m.url} download className="bg-white border border-[#E1E6EE] rounded-[14px] p-[28px_24px_30px] flex flex-col gap-3 hover:border-[#0B4FA8] hover:shadow-[0_12px_28px_rgba(6,42,94,.1)] transition-all">
                <div className="w-[38px] h-[38px] rounded-lg bg-[#F2F6FC] text-[#0B4FA8] grid place-items-center font-archivo font-black text-[16px]">↓</div>
                <div className="font-archivo font-extrabold text-[19px] text-[#062A5E] tracking-[-0.01em]">{m.titulo}</div>
                <div className="font-barlow text-[15.5px] leading-[1.5] text-[#5A6C84]">{m.texto}</div>
                <div className="font-barlow font-semibold text-[12px] tracking-[0.14em] text-[#9AA8BC] mt-auto pt-3.5">{m.formato}</div>
              </a>
            ))}
          </div>
          <p className="font-barlow text-[14.5px] leading-[1.6] text-[#5A6C84] mt-[26px] max-w-[900px] p-[16px_20px] bg-[#EBEFF5] rounded-lg">Materiais de uso exclusivo da propaganda eleitoral de Itamar Leão — Deputado Federal 4551. A reprodução e a distribuição devem observar a legislação eleitoral vigente (Lei nº 9.504/97 e resoluções do TSE). É vedada a alteração do conteúdo, do número ou da identificação do candidato.</p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-[#0B4FA8] px-6 py-16 md:py-[100px]">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-12 md:gap-[60px] items-start">
          <div>
            <h2 className="font-archivo font-black text-4xl md:text-[46px] leading-[1.03] tracking-[-0.03em] text-white m-0">Faça parte dessa caminhada</h2>
            <p className="font-barlow text-[19px] leading-[1.65] text-white/85 mt-[22px] max-w-[480px]">Uma campanha não é construída por uma pessoa. Ela é feita por cada cidadão que acredita que a política pode voltar a produzir resultados.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-3 mt-[32px] bg-[#FFC400] text-[#062A5E] font-archivo font-black text-[17px] p-[19px_30px] rounded-lg hover:bg-white transition-colors w-full sm:w-auto">➜ QUERO APOIAR ITAMAR LEÃO</a>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-[38px_34px_34px] border-b-[6px] border-[#FFC400]">
            <div className="font-archivo font-black text-[26px] text-[#062A5E] tracking-[-0.02em]">Receba as novidades da campanha</div>
            <p className="font-barlow text-[16.5px] leading-[1.55] text-[#5A6C84] my-3">Agenda, propostas, encontros e os principais momentos desta caminhada por Goiás.</p>
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <input required name="nome" placeholder="Seu nome completo" className="font-barlow text-[16px] p-[15px_16px] border-[1.5px] border-[#DCE3ED] rounded-lg outline-none text-[#0B1B33] focus:border-[#0B4FA8] transition-colors" />
              <input required name="whatsapp" placeholder="WhatsApp com DDD" className="font-barlow text-[16px] p-[15px_16px] border-[1.5px] border-[#DCE3ED] rounded-lg outline-none text-[#0B1B33] focus:border-[#0B4FA8] transition-colors" />
              <input required name="cidade" placeholder="Sua cidade" className="font-barlow text-[16px] p-[15px_16px] border-[1.5px] border-[#DCE3ED] rounded-lg outline-none text-[#0B1B33] focus:border-[#0B4FA8] transition-colors" />
              <label className="flex gap-2.5 items-start font-barlow text-[13.5px] leading-[1.5] text-[#5A6C84] mt-1 cursor-pointer">
                <input type="checkbox" required className="mt-[3px] accent-[#0B4FA8] w-4 h-4 cursor-pointer" />
                <span>Autorizo o contato da campanha e o tratamento dos meus dados conforme a LGPD (Lei nº 13.709/2018).</span>
              </label>
              <button type="submit" className="mt-1.5 font-archivo font-black text-[16px] text-white bg-[#062A5E] border-none p-[17px] rounded-lg cursor-pointer hover:bg-[#0B4FA8] transition-colors">➜ QUERO RECEBER AS NOVIDADES</button>
            </form>
            {enviado && (
              <div className="mt-3.5 font-barlow font-semibold text-[15px] text-[#0B7A3B]">Cadastro recebido. Obrigado por caminhar com a gente!</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#062A5E] px-6 py-16 md:py-20 text-center border-b-4 border-[#FFC400]">
        <div className="max-w-[900px] mx-auto">
          <div className="font-archivo font-black text-4xl md:text-[64px] leading-none tracking-[-0.04em] text-white">ITAMAR LEÃO <span className="text-[#FFC400]">4551</span></div>
          <div className="flex justify-center flex-wrap gap-y-3 gap-x-8 mt-7 font-archivo font-bold text-[17px] md:text-[19px] text-[#9FC2F0]">
            <span>Experiência para representar.</span>
            <span>Força para trabalhar.</span>
            <span>Compromisso para fazer acontecer.</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-9 bg-[#FFC400] text-[#062A5E] font-archivo font-black text-[16px] md:text-[18px] p-[20px_40px] rounded-lg hover:bg-white transition-colors w-full sm:w-auto">➜ EU ESTOU COM ITAMAR</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04203F] px-6 pt-12 md:pt-[60px] pb-[120px] md:pb-[40px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10 md:gap-[44px] pb-9 border-b border-white/10">
            <div>
              <div className="font-archivo font-black text-[24px] text-white tracking-[-0.02em]">ITAMAR LEÃO <span className="text-[#FFC400]">4551</span></div>
              <p className="font-barlow text-[15.5px] leading-[1.6] text-white/60 mt-3 max-w-[330px]">O Federal do Marconi — Firme, Leal e Presente. Deputado Federal por Goiás, PSDB.</p>
              <div className="flex gap-2.5 mt-5">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="font-barlow font-semibold text-sm text-[#9FC2F0] border border-white/20 p-[9px_16px] rounded-lg hover:text-[#FFC400] hover:border-[#FFC400] transition-colors">Instagram</a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="font-barlow font-semibold text-sm text-[#9FC2F0] border border-white/20 p-[9px_16px] rounded-lg hover:text-[#FFC400] hover:border-[#FFC400] transition-colors">Facebook</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-barlow font-semibold text-sm text-[#9FC2F0] border border-white/20 p-[9px_16px] rounded-lg hover:text-[#FFC400] hover:border-[#FFC400] transition-colors">WhatsApp</a>
              </div>
            </div>
            <div>
              <div className="font-barlow font-bold text-xs tracking-[0.2em] text-[#FFC400] mb-4">NAVEGAÇÃO</div>
              <div className="flex flex-col gap-2.5">
                <a href="#quem-sou" className="font-barlow text-[15.5px] text-white/70 hover:text-[#FFC400] transition-colors">Quem sou</a>
                <a href="#propostas" className="font-barlow text-[15.5px] text-white/70 hover:text-[#FFC400] transition-colors">Propostas</a>
                <a href="#material" className="font-barlow text-[15.5px] text-white/70 hover:text-[#FFC400] transition-colors">Material de campanha</a>
                <a href="#contato" className="font-barlow text-[15.5px] text-white/70 hover:text-[#FFC400] transition-colors">Contato</a>
              </div>
            </div>
            <div>
              <div className="font-barlow font-bold text-xs tracking-[0.2em] text-[#FFC400] mb-4">COLIGAÇÃO</div>
              <p className="font-barlow text-[15.5px] leading-[1.6] text-white/70 m-0">Goiás Pode Muito Mais<br/>PSDB · Cidadania · PRTB · DC</p>
            </div>
          </div>
          <div className="pt-7 flex flex-col gap-2.5">
            <p className="font-barlow text-[13.5px] leading-[1.65] text-white/50 m-0 max-w-[980px]">Material digital da campanha de <strong className="text-white/80 font-semibold">Itamar Leão</strong>, CNPJ nº {cnpjCampanha}, produzido por {empresaResponsavel}, CNPJ nº {cnpjEmpresa}, por solicitação do comitê financeiro do candidato.</p>
            <p className="font-barlow text-[13.5px] leading-[1.65] text-white/40 m-0">Propaganda eleitoral em conformidade com a Lei nº 9.504/97 e resoluções do TSE. Dados coletados neste site são tratados conforme a LGPD (Lei nº 13.709/2018).</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB (Desktop) */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da campanha" className="hidden md:grid fixed right-6 bottom-6 z-[80] w-[60px] h-[60px] rounded-full bg-[#25D366] place-items-center shadow-[0_8px_24px_rgba(0,0,0,.28)] hover:bg-[#1EBE5A] transition-colors hover:-translate-y-1">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.1.8 2.1.6 2.5.5a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.2-.2-.4-.3z"></path></svg>
      </a>

      {/* Mobile Fixed Bottom Button */}
      <div className={`fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-[#062A5E] border-t-2 border-[#FFC400] p-3 transition-transform duration-500 ease-in-out ${showMobileBtn ? 'translate-y-0' : 'translate-y-full'}`} style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex w-full h-[54px] gap-2">
          <div className="flex-[4] bg-[#FFC400] rounded-lg flex items-center justify-center shadow-lg transition-colors">
            <span className="font-archivo font-black text-[16px] tracking-[0.06em] text-[#062A5E]">
              QUERO APOIAR
            </span>
          </div>
          <div className="flex-[1] bg-[#25D366] rounded-lg grid place-items-center shadow-lg transition-colors">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.1.8 2.1.6 2.5.5a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.2-.2-.4-.3z"></path></svg>
          </div>
        </a>
      </div>
    </div>
  );
}
