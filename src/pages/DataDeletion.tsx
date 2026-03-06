import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: 1,
    label: "Inicia sesión en StockApp",
    desc: (
      <>Accede a tu cuenta en{" "}<a href="https://stockapp.qunitrix.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition font-medium">stockapp.qunitrix.com</a>.</>
    ),
    danger: false,
  },
  {
    step: 2,
    label: "Ve a Configuración",
    desc: (
      <>Dirígete a{" "}<a href="https://stockapp.qunitrix.com/settings" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition font-medium">stockapp.qunitrix.com/settings</a>.</>
    ),
    danger: false,
  },
  {
    step: 3,
    label: 'Busca "Eliminación de datos"',
    desc: <>Desplázate hasta la parte inferior de la configuración y encontrarás la sección <strong className="text-white">"Eliminación de datos"</strong>.</>,
    danger: false,
  },
  {
    step: 4,
    label: "Confirma la eliminación",
    desc: <>Haz clic en el botón de eliminación y confirma. Todos tus datos personales serán eliminados de forma <strong className="text-white">permanente e irrecuperable</strong>.</>,
    danger: true,
  },
];

const DataDeletion: React.FC = () => {
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
            Eliminación de Datos
          </h1>
          <p className="text-slate-500">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        {/* What we store */}
        <div className="rounded-3xl p-8 md:p-10 border" style={{ background: "rgba(13,21,38,0.6)", borderColor: "rgba(255,255,255,0.08)" }}>
          <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>¿Qué datos almacenamos?</h2>
          <p className="text-slate-400 leading-relaxed">
            Cuando accedes a <strong className="text-white">StockApp</strong> mediante tu cuenta, podemos almacenar la siguiente
            información básica: nombre, correo electrónico y foto de perfil. Esta información se utiliza únicamente
            para identificarte dentro de la plataforma y personalizar tu experiencia.
          </p>
        </div>

        {/* Steps */}
        <div className="rounded-3xl p-8 md:p-10 border" style={{ background: "rgba(13,21,38,0.6)", borderColor: "rgba(255,255,255,0.08)" }}>
          <h2 className="text-xl font-bold text-white mb-6">Cómo eliminar tus datos</h2>
          <div className="space-y-4">
            {steps.map(({ step, label, desc, danger }) => (
              <div key={step} className="flex items-start gap-4 p-5 rounded-2xl border" style={{ background: "rgba(255,255,255,0.03)", borderColor: danger ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.06)" }}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white ${danger ? "bg-red-600" : "bg-blue-600"}`}>
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{label}</p>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct link */}
          <div className="mt-8 p-6 rounded-2xl border" style={{ background: "rgba(11,129,141,0.08)", borderColor: "rgba(11,129,141,0.25)" }}>
            <p className="font-semibold text-white mb-1">Acceso directo a Configuración</p>
            <p className="text-slate-400 text-sm mb-4">Accede directamente a la sección de eliminación de datos en StockApp:</p>
            <a
              href="https://stockapp.qunitrix.com/settings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:scale-105 transition-transform"
              style={{ background: "#0b818d" }}
            >
              Ir a Configuración → Eliminar datos ↗
            </a>
          </div>
        </div>

        {/* What happens after */}
        <div className="rounded-3xl p-8 md:p-10 border" style={{ background: "rgba(13,21,38,0.6)", borderColor: "rgba(255,255,255,0.08)" }}>
          <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>¿Qué sucede después de eliminar tus datos?</h2>
          <ul className="space-y-2 text-slate-400 ml-4 list-disc list-inside">
            <li>Tu cuenta y todos los datos asociados serán eliminados permanentemente.</li>
            <li>No podrás recuperar el historial de ventas, inventarios ni configuraciones.</li>
            <li>El proceso de eliminación puede tardar hasta 30 días en completarse.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="rounded-3xl p-8 md:p-10 border" style={{ background: "rgba(13,21,38,0.6)", borderColor: "rgba(255,255,255,0.08)" }}>
          <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>¿Necesitas ayuda?</h2>
          <p className="text-slate-400 leading-relaxed mb-5">
            Si tienes problemas para eliminar tus datos o no puedes acceder a tu cuenta,
            contáctanos directamente y procesaremos tu solicitud manualmente.
          </p>
          <div className="p-5 rounded-2xl border" style={{ background: "rgba(30,58,138,0.1)", borderColor: "rgba(37,99,235,0.2)" }}>
            <p className="font-bold text-white mb-1">Qunitrix Software Solutions</p>
            <a href="mailto:hello@qunitrix.com" className="text-blue-400 hover:text-blue-300 transition text-sm">hello@qunitrix.com</a>
          </div>
        </div>

        <div className="text-center">
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
          <Link to="/terminos" className="hover:text-slate-400 transition">Términos de Servicio</Link>
        </div>
      </footer>
    </div>
  );
};

export default DataDeletion;
