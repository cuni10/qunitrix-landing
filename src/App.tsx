import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  MonitorSmartphone,
  Database,
  ArrowRight,
  Zap,
  TrendingUp,
  ShieldCheck,
  Cpu
} from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500/30">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 selection:bg-brand-main/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/favicon.ico" alt="Qunitrix Logo" className="w-10 h-10" />
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                Qunitrix
              </span>
            </div>

            <div className="hidden md:flex space-x-10">
              <a href="#stockapp" className="font-medium text-stock-light hover:text-stock-main transition-colors drop-shadow-[0_0_8px_rgba(22,174,192,0.5)]">
                StockApp
              </a>
              <a href="#servicios" className="font-medium text-slate-300 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="font-medium text-slate-300 hover:text-white transition-colors">
                Por qué elegirnos
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="#stockapp"
                className="hidden sm:inline-flex items-center justify-center bg-stock-main/10 text-stock-light border border-stock-main/50 hover:bg-stock-main/20 px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(22,174,192,0.15)] hover:shadow-[0_0_20px_rgba(22,174,192,0.3)]"
              >
                Probar StockApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Animated Background Grids and Glows */}
        <div className="absolute inset-0 bg-grid-electric z-0"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stock-dark/40 rounded-full blur-[120px] animate-pulse-glow z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-brand-main/30 text-brand-light text-sm font-semibold mb-8 backdrop-blur-sm">
            <Zap size={16} className="text-brand-main" />
            <span className="animate-pulse">La evolución de tu negocio comienza aquí</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Control de Inventario <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stock-light via-stock-main to-stock-dark glow-text">
              Llevado al Futuro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto font-light">
            Bienvenido a <strong>StockApp</strong>, el ecosistema definitivo impulsado por <strong className="text-slate-200">Qunitrix</strong>. Gestiona tus ventas, optimiza tu stock y escala tus ganancias con tecnología inteligente.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://stockapp.qunitrix.com"
              className="glow-btn bg-gradient-to-r from-stock-light to-stock-main hover:from-stock-main hover:to-stock-dark text-white font-bold text-lg py-4 px-10 rounded-full flex items-center justify-center gap-2 group"
            >
              Comenzar con StockApp 
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-lg py-4 px-10 rounded-full transition-all flex items-center justify-center backdrop-blur-md"
            >
              Conocer Desarrollo a Medida
            </a>
          </div>
        </div>
      </section>

      {/* ================= STOCKAPP FEATURE SHOWCASE ================= */}
      <section id="stockapp" className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/40 border border-white/10 rounded-[2rem] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden glow-box">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stock-main/20 rounded-full blur-[80px]"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Más que un software, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-stock-main to-stock-light">
                    una máquina de crecimiento
                  </span>
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                  StockApp está diseñado con la última tecnología para procesar datos en tiempo real, ofreciendo una experiencia ultra rápida y segura.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-stock-light/10 flex items-center justify-center border border-stock-main/30">
                      <TrendingUp className="text-stock-light" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-200">Métricas Inteligentes</h4>
                      <p className="text-slate-400 mt-1">Dashboards que te muestran qué vender y cuándo, maximizando tu flujo de caja.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-stock-dark/10 flex items-center justify-center border border-stock-main/30">
                      <ShieldCheck className="text-stock-main" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-200">Seguridad Total</h4>
                      <p className="text-slate-400 mt-1">Tus datos encriptados y respaldados constantemente en la nube.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                {/* Abstract Tech Graphic / Dashboard Placeholder */}
                <div className="aspect-square md:aspect-auto md:h-[500px] bg-slate-950/80 border border-white/10 rounded-2xl p-6 shadow-2xl relative animate-float">
                  {/* Top Bar */}
                  <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="ml-4 h-4 w-32 bg-slate-800 rounded"></div>
                  </div>
                  {/* Content Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-24 bg-gradient-to-br from-stock-light/10 to-transparent border border-stock-main/20 rounded-xl relative overflow-hidden">
                       <div className="absolute top-4 left-4 h-3 w-16 bg-stock-main/40 rounded"></div>
                       <div className="absolute bottom-4 left-4 font-mono text-stock-light text-2xl font-bold">$12.4k</div>
                    </div>
                    <div className="h-24 bg-gradient-to-br from-stock-dark/10 to-transparent border border-stock-main/20 rounded-xl relative overflow-hidden">
                       <div className="absolute top-4 left-4 h-3 w-16 bg-stock-main/40 rounded"></div>
                       <div className="absolute bottom-4 left-4 font-mono text-stock-main text-2xl font-bold">142</div>
                    </div>
                  </div>
                  <div className="h-48 bg-slate-900 border border-slate-800 rounded-xl relative flex items-end p-4 gap-2">
                    {/* Fake Chart Bars */}
                    {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-stock-main/20 hover:bg-stock-light/50 transition-colors rounded-t-sm" style={{height: `${h}%`}}></div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -right-6 -bottom-6 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Sync Inmediata</div>
                      <div className="font-bold text-white">0.05ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS QUNITRIX ================= */}
      <section id="servicios" className="py-24 relative bg-slate-950">
        <div className="absolute inset-0 bg-grid-subtle opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <Cpu size={24} className="text-brand-main" />
                <span className="text-brand-main font-bold uppercase tracking-wider text-sm">Qunitrix Core</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Desarrollo de Software Custom
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              StockApp es nuestro producto principal, pero también construimos el futuro digital de otras empresas a través de desarrollo de software premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={32} className="text-brand-main" />,
                title: "Sistemas a Medida",
                desc: "Arquitecturas de software robustas diseñadas especifícanente para los cuellos de botella de tu industria.",
                border: "border-brand-main/30",
                bg: "bg-brand-main/5"
              },
              {
                icon: <MonitorSmartphone size={32} className="text-brand-light" />,
                title: "Aplicaciones Web & Mobile",
                desc: "Interfaces ultra reactivas y experiencias de usuario que rivalizan con las aplicaciones líderes globales.",
                border: "border-brand-main/30",
                bg: "bg-brand-main/5"
              },
              {
                icon: <Database size={32} className="text-brand-dark" />,
                title: "Consultoría y Arquitectura",
                desc: "Migraciones a la nube, optimización de bases de datos de alto tráfico y análisis de escalabilidad.",
                border: "border-brand-main/30",
                bg: "bg-brand-main/5"
              }
            ].map((service, idx) => (
              <div key={idx} className={`p-8 rounded-2xl bg-white/5 border ${service.border} backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group`}>
                <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-main/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                  <img src="/favicon.ico" alt="Qunitrix Logo" className="w-8 h-8 grayscale opacity-80" />
                  <span className="font-bold text-2xl text-slate-200">Qunitrix</span>
                </div>
                <p className="text-slate-500 max-w-sm">
                  Innovación digital, rendimiento extremo y arquitecturas empresariales sólidas.
                </p>
              </div>
              
              <div className="flex gap-4">
                 <a href="#stockapp" className="px-6 py-2 rounded-full border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
                    StockApp
                 </a>
                 <a href="#servicios" className="px-6 py-2 rounded-full border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
                    Servicios
                 </a>
              </div>
           </div>

           <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
             <p>
               © {new Date().getFullYear()} Qunitrix Software Solutions. Todos los derechos reservados.
             </p>
             <div className="flex gap-6">
               <Link to="/privacidad" className="hover:text-brand-main transition-colors">Privacidad</Link>
               <Link to="/terminos" className="hover:text-brand-main transition-colors">Términos</Link>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
