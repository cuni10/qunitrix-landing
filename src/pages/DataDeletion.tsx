import React from "react";
import { Link } from "react-router-dom";
import { Terminal, ArrowLeft, Trash2, Settings, ExternalLink } from "lucide-react";

const DataDeletion: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* ================= NAVBAR ================= */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Terminal className="text-indigo-400" size={28} />
              <span className="font-bold text-2xl tracking-tight">
                Qunitrix
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition border border-slate-700 hover:border-indigo-400 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HEADER ================= */}
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Trash2 size={48} className="text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Instrucciones para Eliminar tus Datos
          </h1>
          <p className="text-slate-400 text-lg">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Qué datos almacenamos?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Cuando accedes a <strong>StockApp</strong> mediante tu cuenta de Facebook, podemos almacenar
              la siguiente información básica de tu perfil: nombre, correo electrónico y foto de perfil.
              Esta información se utiliza únicamente para identificarte dentro de la plataforma y personalizar
              tu experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Cómo eliminar tus datos
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Puedes solicitar la eliminación de todos tus datos directamente desde la plataforma StockApp.
              Sigue estos pasos:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Inicia sesión en StockApp</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Accede a tu cuenta en{" "}
                    <a
                      href="https://stockapp.qunitrix.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                      stockapp.qunitrix.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Ve a la página de Configuración</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Dirígete a{" "}
                    <a
                      href="https://stockapp.qunitrix.com/settings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center gap-1"
                    >
                      stockapp.qunitrix.com/settings
                      <ExternalLink size={12} />
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Busca la sección "Eliminación de datos"
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    Desplázate hasta la parte inferior de la página de configuración y encontrarás
                    la sección <strong>"Eliminación de datos"</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Confirma la eliminación</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Haz clic en el botón de eliminación y confirma la acción. Todos tus datos
                    personales serán eliminados de forma permanente e irrecuperable.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct link */}
            <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
              <div className="flex items-center gap-3 mb-3">
                <Settings size={22} className="text-indigo-600" />
                <p className="font-semibold text-slate-900">Acceso directo a Configuración</p>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Accede directamente a la sección de eliminación de datos en StockApp:
              </p>
              <a
                href="https://stockapp.qunitrix.com/settings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Ir a Configuración — Eliminación de datos
                <ExternalLink size={16} />
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Qué sucede después de eliminar tus datos?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Tu cuenta y todos los datos asociados serán eliminados permanentemente.</li>
              <li>No podrás recuperar el historial de ventas, inventarios ni configuraciones guardadas.</li>
              <li>Se revocará el acceso de StockApp a tu cuenta de Facebook.</li>
              <li>El proceso de eliminación puede tardar hasta 30 días en completarse en todos los sistemas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Si tienes problemas para eliminar tus datos o no puedes acceder a tu cuenta,
              contáctanos directamente y procesaremos tu solicitud de eliminación manualmente.
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900 text-lg mb-2">Qunitrix Software Solutions</p>
              <p className="text-slate-600">
                GitHub:{" "}
                <a
                  href="https://github.com/cuni10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 transition font-medium"
                >
                  github.com/cuni10
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full transition"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-8">
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
              <Terminal size={16} className="text-indigo-400" />
              <span className="font-semibold text-white">cuni10</span>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DataDeletion;
