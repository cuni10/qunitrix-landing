import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#080c14", color: "#e2e8f0" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-4 border-b" style={{ background: "rgba(8,12,20,0.9)", borderColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <img src="/favicon.ico" alt="Qunitrix" className="h-7 w-auto" />
            Qunitrix
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition px-4 py-2 rounded-lg border border-white/10 hover:border-white/20">
            ← Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="py-16 px-6 text-center border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "linear-gradient(180deg, rgba(30,58,138,0.15) 0%, transparent 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Política de Privacidad
          </h1>
          <p className="text-slate-500">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-3xl p-8 md:p-12 space-y-10 border" style={{ background: "rgba(13,21,38,0.6)", borderColor: "rgba(255,255,255,0.08)" }}>
          {[
            {
              title: "1. Introducción",
              content: (
                <>
                  <p className="text-slate-400 leading-relaxed">En <strong className="text-white">Qunitrix Software Solutions</strong> nos comprometemos a proteger y respetar tu privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.</p>
                  <p className="text-slate-400 leading-relaxed mt-3">Al utilizar nuestro sitio web, aceptas las prácticas descritas en esta política. Te recomendamos que leas este documento detenidamente.</p>
                </>
              ),
            },
            {
              title: "2. Información que recopilamos",
              content: (
                <>
                  <p className="text-slate-400 leading-relaxed mb-3">Podemos recopilar los siguientes tipos de información:</p>
                  <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside">
                    <li><strong className="text-slate-300">Información de contacto:</strong> nombre, dirección de correo electrónico y número de teléfono cuando nos contactas.</li>
                    <li><strong className="text-slate-300">Información de uso:</strong> datos sobre cómo interactúas con nuestro sitio web.</li>
                    <li><strong className="text-slate-300">Datos técnicos:</strong> dirección IP, tipo y versión del navegador, sistema operativo.</li>
                    <li><strong className="text-slate-300">Cookies:</strong> utilizamos cookies para mejorar tu experiencia y analizar el tráfico.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. Cómo utilizamos tu información",
              content: (
                <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside">
                  <li>Responder a tus consultas y solicitudes de información.</li>
                  <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                  <li>Enviar comunicaciones relacionadas con nuestros servicios, previa autorización.</li>
                  <li>Analizar el uso del sitio web para mejorar la experiencia del usuario.</li>
                  <li>Cumplir con obligaciones legales y regulatorias.</li>
                </ul>
              ),
            },
            {
              title: "4. Base legal para el tratamiento de datos",
              content: (
                <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside mt-2">
                  <li><strong className="text-slate-300">Consentimiento:</strong> cuando nos has dado tu consentimiento explícito para tratar tus datos.</li>
                  <li><strong className="text-slate-300">Interés legítimo:</strong> cuando el tratamiento es necesario para nuestros intereses legítimos.</li>
                  <li><strong className="text-slate-300">Obligación legal:</strong> cuando estamos obligados por ley a tratar ciertos datos.</li>
                  <li><strong className="text-slate-300">Ejecución de contrato:</strong> cuando el tratamiento es necesario para cumplir con un contrato.</li>
                </ul>
              ),
            },
            {
              title: "5. Compartir información con terceros",
              content: (
                <>
                  <p className="text-slate-400 leading-relaxed">No vendemos ni compartimos tu información personal con terceros con fines comerciales. Podemos compartir información con proveedores de servicios bajo estrictas obligaciones de confidencialidad, o cuando la ley lo requiera.</p>
                </>
              ),
            },
            {
              title: "6. Seguridad de los datos",
              content: (
                <p className="text-slate-400 leading-relaxed">Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra accesos no autorizados, alteración o destrucción. Ningún método de transmisión por Internet es 100% seguro, pero aplicamos las mejores prácticas de la industria.</p>
              ),
            },
            {
              title: "7. Tus derechos",
              content: (
                <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside">
                  <li><strong className="text-slate-300">Acceso:</strong> solicitar copia de los datos personales que tenemos sobre ti.</li>
                  <li><strong className="text-slate-300">Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
                  <li><strong className="text-slate-300">Supresión:</strong> solicitar la eliminación de tus datos personales.</li>
                  <li><strong className="text-slate-300">Oposición:</strong> oponerte al tratamiento de tus datos en ciertos casos.</li>
                  <li><strong className="text-slate-300">Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
                </ul>
              ),
            },
            {
              title: "8. Contacto",
              content: (
                <>
                  <p className="text-slate-400 leading-relaxed mb-4">Para consultas sobre esta política o el tratamiento de tus datos personales:</p>
                  <div className="p-5 rounded-2xl border" style={{ background: "rgba(30,58,138,0.1)", borderColor: "rgba(37,99,235,0.2)" }}>
                    <p className="font-bold text-white mb-1">Qunitrix Software Solutions</p>
                    <a href="mailto:hello@qunitrix.com" className="text-blue-400 hover:text-blue-300 transition text-sm">hello@qunitrix.com</a>
                  </div>
                </>
              ),
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>{title}</h2>
              {content}
            </section>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}>
            ← Volver al inicio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-slate-600 text-sm" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p>© {new Date().getFullYear()} Qunitrix Software Solutions. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link to="/terminos" className="hover:text-slate-400 transition">Términos de Servicio</Link>
          <Link to="/eliminacion-datos" className="hover:text-slate-400 transition">Eliminación de Datos</Link>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
