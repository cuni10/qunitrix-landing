import React from "react";
import {
  Github,
  Code,
  MonitorSmartphone,
  Database,
  ArrowRight,
  Terminal,
  ChevronRight,
} from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* ================= NAVBAR ================= */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Terminal className="text-indigo-400" size={28} />
              <span className="font-bold text-2xl tracking-tight">
                Qunitrix
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="hover:text-indigo-400 transition">
                Servicios
              </a>
              <a href="#nosotros" className="hover:text-indigo-400 transition">
                Por qué elegirnos
              </a>
              <a
                href="#stockapp"
                className="hover:text-indigo-400 transition font-semibold text-indigo-300"
              >
                StockApp
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="https://github.com/cuni10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition border border-slate-700 hover:border-indigo-400"
              >
                <Github size={18} />
                <span className="text-sm font-medium hidden sm:block">
                  @cuni10
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Transformamos tus ideas en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Software a Medida
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              En Qunitrix desarrollamos soluciones tecnológicas escalables,
              eficientes y adaptadas 100% a las necesidades de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#servicios"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full transition flex items-center justify-center"
              >
                Conoce nuestros servicios
              </a>
              <a
                href="#stockapp"
                className="bg-transparent border border-slate-500 hover:border-white text-white font-bold py-3 px-8 rounded-full transition flex items-center justify-center"
              >
                Descubre StockApp <ChevronRight size={20} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS SECTION ================= */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Soluciones de Software
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nuestro equipo crea herramientas digitales diseñadas
              específicamente para optimizar tus procesos y hacer crecer tu
              negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Code
                  size={28}
                  className="text-indigo-600 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Sistemas a Medida</h3>
              <p className="text-slate-600">
                Desarrollamos software desde cero basado en los requerimientos
                exactos de tu modelo de negocio.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition">
                <MonitorSmartphone
                  size={28}
                  className="text-indigo-600 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Desarrollo Web y Mobile
              </h3>
              <p className="text-slate-600">
                Aplicaciones responsivas, rápidas y modernas que ofrecen la
                mejor experiencia de usuario en cualquier dispositivo.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition">
                <Database
                  size={28}
                  className="text-indigo-600 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Consultoría IT</h3>
              <p className="text-slate-600">
                Te asesoramos sobre la mejor arquitectura tecnológica y bases de
                datos para escalar de forma segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STOCKAPP SECTION (PRODUCTO FUTURO) ================= */}
      <section
        id="stockapp"
        className="py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-400 opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-800 text-indigo-100 text-sm font-semibold tracking-wide mb-4">
              Próximamente / Nuevo Servicio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conoce StockApp
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-lg">
              La plataforma definitiva desarrollada por Qunitrix para otorgarte
              control total sobre tus ventas e inventarios. Visualiza
              estadísticas, controla el stock en tiempo real y potencia tus
              ganancias.
            </p>

            <a
              href="https://stockapp.qunitrix.com"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
            >
              Ir a la plataforma StockApp
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="md:w-5/12">
            <div className="bg-slate-900 p-4 rounded-xl shadow-2xl border border-slate-700 transform rotate-2 hover:rotate-0 transition duration-500">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3">
                <div className="h-24 bg-slate-800 rounded flex items-center justify-center text-slate-500">
                  [Dashboard Preview]
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 bg-slate-800 rounded"></div>
                  <div className="h-16 bg-slate-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Terminal size={24} className="text-indigo-400" />
            <span className="font-bold text-xl">Qunitrix</span>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Qunitrix Software Solutions. Todos los
            derechos reservados.
          </p>

          <a
            href="https://github.com/cuni10"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-white transition"
          >
            <span className="text-sm">Desarrollado por</span>
            <div className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-md group-hover:bg-slate-700 transition">
              <Github size={16} className="text-indigo-400" />
              <span className="font-semibold text-white">cuni10</span>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
