import React from "react";
import { Link } from "react-router-dom";
import { Terminal, ArrowLeft, FileText } from "lucide-react";

const TermsOfService: React.FC = () => {
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
            <FileText size={48} className="text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Condiciones de Servicio
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceptación de los términos</h2>
            <p className="text-slate-600 leading-relaxed">
              Al acceder y utilizar los servicios de <strong>Qunitrix Software Solutions</strong> y la
              plataforma <strong>StockApp</strong>, aceptas quedar vinculado por estas Condiciones de Servicio.
              Si no estás de acuerdo con alguna parte de estos términos, no deberás utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Descripción del servicio</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Qunitrix Software Solutions ofrece los siguientes servicios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Desarrollo de software a medida:</strong> soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa.</li>
              <li><strong>Desarrollo web y mobile:</strong> aplicaciones responsivas y modernas para cualquier dispositivo.</li>
              <li><strong>Consultoría IT:</strong> asesoramiento en arquitectura tecnológica y bases de datos.</li>
              <li>
                <strong>StockApp:</strong> plataforma de gestión de inventarios y ventas accesible en{" "}
                <a
                  href="https://stockapp.qunitrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  stockapp.qunitrix.com
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cuenta de usuario</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Para utilizar StockApp debes crear una cuenta. Al hacerlo, te comprometes a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Proporcionar información veraz, precisa y actualizada durante el registro.</li>
              <li>Mantener la confidencialidad de tus credenciales de acceso.</li>
              <li>Notificarnos inmediatamente de cualquier uso no autorizado de tu cuenta.</li>
              <li>Ser responsable de todas las actividades realizadas bajo tu cuenta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Uso aceptable</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Al utilizar nuestros servicios, aceptas no:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Utilizar el servicio para fines ilegales o no autorizados.</li>
              <li>Intentar acceder a áreas restringidas del sistema sin autorización.</li>
              <li>Transmitir virus, código malicioso o cualquier tecnología dañina.</li>
              <li>Interferir con la seguridad o el correcto funcionamiento del servicio.</li>
              <li>Revender, copiar o distribuir el servicio sin autorización expresa por escrito.</li>
              <li>Recopilar datos de otros usuarios sin su consentimiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Propiedad intelectual</h2>
            <p className="text-slate-600 leading-relaxed">
              Todo el contenido, diseño, código fuente, logotipos, marcas y demás elementos de nuestros
              servicios son propiedad exclusiva de <strong>Qunitrix Software Solutions</strong> y están
              protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución
              o modificación sin autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Privacidad y datos personales</h2>
            <p className="text-slate-600 leading-relaxed">
              El tratamiento de tus datos personales está regido por nuestra{" "}
              <Link
                to="/privacidad"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Política de Privacidad
              </Link>
              , que forma parte integral de estas Condiciones de Servicio. Al utilizar nuestros servicios,
              aceptas las prácticas de privacidad descritas en dicha política.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Para información sobre cómo eliminar tus datos, consulta nuestras{" "}
              <Link
                to="/eliminacion-datos"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                instrucciones de eliminación de datos
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Pagos y facturación</h2>
            <p className="text-slate-600 leading-relaxed">
              Los servicios de desarrollo de software y consultoría IT se facturarán según el acuerdo
              alcanzado entre las partes antes del inicio del proyecto. Los precios están sujetos a cambio
              con previo aviso. Los pagos deben realizarse en los plazos acordados. En caso de impago,
              nos reservamos el derecho de suspender o cancelar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitación de responsabilidad</h2>
            <p className="text-slate-600 leading-relaxed">
              En la máxima medida permitida por la ley aplicable, Qunitrix Software Solutions no será
              responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos,
              incluyendo pérdida de beneficios, datos o uso, derivados del uso o la imposibilidad de
              uso de nuestros servicios.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              No garantizamos que el servicio sea ininterrumpido, seguro o libre de errores. El uso del
              servicio es bajo tu propio riesgo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Disponibilidad del servicio</h2>
            <p className="text-slate-600 leading-relaxed">
              Nos esforzamos por mantener nuestros servicios disponibles las 24 horas del día, los 7 días
              de la semana. Sin embargo, podemos interrumpir temporalmente el servicio por razones de
              mantenimiento, actualizaciones o circunstancias fuera de nuestro control. Notificaremos
              con anticipación siempre que sea posible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Modificaciones del servicio y los términos</h2>
            <p className="text-slate-600 leading-relaxed">
              Nos reservamos el derecho de modificar o descontinuar cualquier parte de nuestros servicios
              en cualquier momento. También podemos actualizar estas Condiciones de Servicio. Los cambios
              significativos serán notificados publicando la nueva versión en esta página. El uso continuado
              del servicio tras los cambios implica la aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Cancelación y terminación</h2>
            <p className="text-slate-600 leading-relaxed">
              Puedes cancelar tu cuenta en cualquier momento desde la sección de configuración de StockApp.
              Nos reservamos el derecho de suspender o terminar tu acceso si incumples estas Condiciones
              de Servicio. Tras la cancelación, tus datos serán eliminados según lo descrito en nuestra
              Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Ley aplicable</h2>
            <p className="text-slate-600 leading-relaxed">
              Estas Condiciones de Servicio se rigen por las leyes aplicables en la jurisdicción donde
              opera Qunitrix Software Solutions. Cualquier disputa derivada de estas condiciones se
              resolverá mediante negociación amistosa y, en su defecto, ante los tribunales competentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contacto</h2>
            <p className="text-slate-600 leading-relaxed">
              Si tienes preguntas sobre estas Condiciones de Servicio, puedes contactarnos:
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

export default TermsOfService;
