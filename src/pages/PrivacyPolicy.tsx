import React from "react";
import { Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Política de Privacidad
          </h1>
          <p className="text-slate-400 text-lg">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introducción</h2>
            <p className="text-slate-600 leading-relaxed">
              En <strong>Qunitrix Software Solutions</strong> nos comprometemos a proteger y respetar tu privacidad.
              Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información
              personal cuando visitas nuestro sitio web o utilizas nuestros servicios.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Al utilizar nuestro sitio web, aceptas las prácticas descritas en esta política. Te recomendamos
              que leas este documento detenidamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Información que recopilamos</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Podemos recopilar los siguientes tipos de información:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Información de contacto:</strong> nombre, dirección de correo electrónico y número de teléfono cuando nos contactas a través de formularios o correo electrónico.</li>
              <li><strong>Información de uso:</strong> datos sobre cómo interactúas con nuestro sitio web, incluyendo páginas visitadas, tiempo de permanencia y acciones realizadas.</li>
              <li><strong>Datos técnicos:</strong> dirección IP, tipo y versión del navegador, zona horaria, sistema operativo y plataforma.</li>
              <li><strong>Cookies y tecnologías similares:</strong> utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico del sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cómo utilizamos tu información</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Utilizamos la información recopilada para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Responder a tus consultas y solicitudes de información.</li>
              <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios, previa autorización.</li>
              <li>Analizar el uso del sitio web para mejorar la experiencia del usuario.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
              <li>Proteger la seguridad e integridad de nuestro sitio y servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base legal para el tratamiento de datos</h2>
            <p className="text-slate-600 leading-relaxed">
              Tratamos tu información personal en base a los siguientes fundamentos legales:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4 mt-3">
              <li><strong>Consentimiento:</strong> cuando nos has dado tu consentimiento explícito para tratar tus datos.</li>
              <li><strong>Interés legítimo:</strong> cuando el tratamiento es necesario para nuestros intereses legítimos y no perjudica tus derechos.</li>
              <li><strong>Obligación legal:</strong> cuando estamos obligados por ley a tratar ciertos datos.</li>
              <li><strong>Ejecución de contrato:</strong> cuando el tratamiento es necesario para cumplir con un contrato contigo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Compartir información con terceros</h2>
            <p className="text-slate-600 leading-relaxed">
              No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales.
              Podemos compartir información en los siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4 mt-3">
              <li><strong>Proveedores de servicios:</strong> compartimos datos con proveedores que nos asisten en la operación del sitio web y prestación de servicios (ej. hosting, análisis web), quienes están obligados a mantener la confidencialidad.</li>
              <li><strong>Requerimientos legales:</strong> cuando la divulgación es requerida por ley o por autoridades competentes.</li>
              <li><strong>Protección de derechos:</strong> cuando sea necesario para proteger los derechos, propiedad o seguridad de Qunitrix, nuestros usuarios u otros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Nuestro sitio web utiliza cookies y tecnologías similares para mejorar tu experiencia. Las cookies
              son pequeños archivos de texto que se almacenan en tu dispositivo. Puedes controlar el uso de
              cookies desde la configuración de tu navegador; sin embargo, deshabilitar ciertas cookies puede
              afectar la funcionalidad del sitio.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Utilizamos los siguientes tipos de cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4 mt-2">
              <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio.</li>
              <li><strong>Cookies analíticas:</strong> nos permiten entender cómo los usuarios interactúan con el sitio para mejorarlo.</li>
              <li><strong>Cookies de preferencias:</strong> recuerdan tus configuraciones y preferencias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Seguridad de los datos</h2>
            <p className="text-slate-600 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
              personal contra accesos no autorizados, alteración, divulgación o destrucción. Sin embargo, ningún
              método de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no
              podemos garantizar una seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Tus derechos</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Dependiendo de tu ubicación y la legislación aplicable, puedes tener los siguientes derechos
              respecto a tus datos personales:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos personales en determinadas circunstancias.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos en ciertos casos.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
              <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento de tus datos en determinadas circunstancias.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Para ejercer cualquiera de estos derechos, contáctanos a través de los medios indicados en la
              sección de contacto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Retención de datos</h2>
            <p className="text-slate-600 leading-relaxed">
              Conservamos tu información personal durante el tiempo necesario para cumplir con los propósitos
              descritos en esta política, salvo que la ley exija o permita un período de retención más largo.
              Cuando ya no sea necesario, procederemos a eliminar o anonimizar tus datos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Cambios en esta política</h2>
            <p className="text-slate-600 leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras
              prácticas o por razones legales. Te notificaremos sobre cambios significativos publicando la nueva
              política en esta página con una nueva fecha de actualización. Te recomendamos revisar esta política
              periódicamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contacto</h2>
            <p className="text-slate-600 leading-relaxed">
              Si tienes preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad o
              el tratamiento de tus datos personales, puedes contactarnos a través de:
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

export default PrivacyPolicy;
