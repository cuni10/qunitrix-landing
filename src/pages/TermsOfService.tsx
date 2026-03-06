import React from "react";
import { Link } from "react-router-dom";

const TermsOfService: React.FC = () => {
  const sectionStyle = { borderColor: "rgba(255,255,255,0.07)" };
  const linkStyle = "text-blue-400 hover:text-blue-300 transition font-medium";

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
            Condiciones de Servicio
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
              title: "1. Aceptación de los términos",
              content: <p className="text-slate-400 leading-relaxed">Al acceder y utilizar los servicios de <strong className="text-white">Qunitrix Software Solutions</strong> y la plataforma <strong className="text-white">StockApp</strong>, aceptas quedar vinculado por estas Condiciones de Servicio. Si no estás de acuerdo con alguna parte, no deberás utilizar nuestros servicios.</p>,
            },
            {
              title: "2. Descripción del servicio",
              content: (
                <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside">
                  <li><strong className="text-slate-300">Desarrollo de software a medida:</strong> soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa.</li>
                  <li><strong className="text-slate-300">Desarrollo web y mobile:</strong> aplicaciones modernas para cualquier dispositivo.</li>
                  <li><strong className="text-slate-300">Consultoría IT:</strong> asesoramiento en arquitectura tecnológica.</li>
                  <li><strong className="text-slate-300">StockApp:</strong> plataforma de gestión de inventarios y ventas en <a href="https://stockapp.qunitrix.com" target="_blank" rel="noopener noreferrer" className={linkStyle}>stockapp.qunitrix.com</a>.</li>
                </ul>
              ),
            },
            {
              title: "3. Cuenta de usuario",
              content: (
                <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside">
                  <li>Proporcionar información veraz, precisa y actualizada durante el registro.</li>
                  <li>Mantener la confidencialidad de tus credenciales de acceso.</li>
                  <li>Notificarnos inmediatamente de cualquier uso no autorizado de tu cuenta.</li>
                  <li>Ser responsable de todas las actividades realizadas bajo tu cuenta.</li>
                </ul>
              ),
            },
            {
              title: "4. Uso aceptable",
              content: (
                <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside">
                  <li>No utilizar el servicio para fines ilegales o no autorizados.</li>
                  <li>No intentar acceder a áreas restringidas sin autorización.</li>
                  <li>No transmitir virus, código malicioso o tecnología dañina.</li>
                  <li>No interferir con la seguridad o el correcto funcionamiento del servicio.</li>
                  <li>No revender ni distribuir el servicio sin autorización escrita.</li>
                </ul>
              ),
            },
            {
              title: "5. Propiedad intelectual",
              content: <p className="text-slate-400 leading-relaxed">Todo el contenido, diseño, código fuente, logotipos y demás elementos de nuestros servicios son propiedad exclusiva de <strong className="text-white">Qunitrix Software Solutions</strong>, protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización previa y por escrito.</p>,
            },
            {
              title: "6. Privacidad y datos personales",
              content: <p className="text-slate-400 leading-relaxed">El tratamiento de tus datos personales está regido por nuestra <Link to="/privacidad" className={linkStyle}>Política de Privacidad</Link>, que forma parte integral de estas Condiciones de Servicio. Consulta también nuestras <Link to="/eliminacion-datos" className={linkStyle}>instrucciones de eliminación de datos</Link>.</p>,
            },
            {
              title: "7. Pagos y facturación",
              content: <p className="text-slate-400 leading-relaxed">Los servicios se facturarán según el acuerdo alcanzado antes del inicio del proyecto. Los precios están sujetos a cambio con previo aviso. En caso de impago, nos reservamos el derecho de suspender el servicio.</p>,
            },
            {
              title: "8. Limitación de responsabilidad",
              content: <p className="text-slate-400 leading-relaxed">En la máxima medida permitida por la ley, Qunitrix Software Solutions no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios. El uso del servicio es bajo tu propio riesgo.</p>,
            },
            {
              title: "9. Modificaciones",
              content: <p className="text-slate-400 leading-relaxed">Nos reservamos el derecho de modificar o descontinuar cualquier parte de nuestros servicios y estas Condiciones de Servicio. Los cambios serán notificados publicando la nueva versión. El uso continuado implica la aceptación de los nuevos términos.</p>,
            },
            {
              title: "10. Contacto",
              content: (
                <>
                  <p className="text-slate-400 leading-relaxed mb-4">Para consultas sobre estas Condiciones de Servicio:</p>
                  <div className="p-5 rounded-2xl border" style={{ background: "rgba(30,58,138,0.1)", borderColor: "rgba(37,99,235,0.2)" }}>
                    <p className="font-bold text-white mb-1">Qunitrix Software Solutions</p>
                    <a href="mailto:hello@qunitrix.com" className={linkStyle + " text-sm"}>hello@qunitrix.com</a>
                  </div>
                </>
              ),
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b" style={sectionStyle}>{title}</h2>
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

      <footer className="border-t px-6 py-8 text-center text-slate-600 text-sm" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p>© {new Date().getFullYear()} Qunitrix Software Solutions. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link to="/privacidad" className="hover:text-slate-400 transition">Política de Privacidad</Link>
          <Link to="/eliminacion-datos" className="hover:text-slate-400 transition">Eliminación de Datos</Link>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
