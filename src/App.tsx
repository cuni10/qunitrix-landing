import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ─── Icon Components ──────────────────────────────────────────────────── */
const Icon = ({ d, className = "w-6 h-6", style }: { d: string; className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={d} />
  </svg>
);

const CheckIcon = () => (
  <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5 text-[#0b818d] flex-shrink-0" />
);

/* ─── Navigation ───────────────────────────────────────────────────────── */
const Nav: React.FC<{ menuOpen: boolean; setMenuOpen: (v: boolean) => void }> = ({ menuOpen, setMenuOpen }) => (
  <header className="sticky top-0 z-50 px-6 lg:px-20 py-4 glass-card border-none" style={{ background: "rgba(8,12,20,0.85)" }}>
    <nav className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img alt="Qunitrix Logo" className="h-8 w-auto" src="/favicon.ico" />
        <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Qunitrix
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Servicios", href: "#servicios" },
          { label: "StockApp", href: "#stockapp" },
          { label: "Nosotros", href: "#nosotros" },
          { label: "Contacto", href: "#contacto" },
        ].map(({ label, href }) => (
          <a key={label} href={href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <a
          href="#contacto"
          className="hidden sm:block px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-300 border border-white/10 hover:border-white/25 hover:text-white transition-all"
        >
          Contactar
        </a>
        <a
          href="https://stockapp.qunitrix.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all stock-glow"
          style={{ background: "#0b818d" }}
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          StockApp
        </a>
        <button
          className="md:hidden text-slate-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <Icon d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </button>
      </div>
    </nav>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden mt-4 glass-card rounded-2xl px-6 py-5 flex flex-col gap-4 max-w-7xl mx-auto">
        {[
          { label: "Servicios", href: "#servicios" },
          { label: "StockApp", href: "#stockapp" },
          { label: "Nosotros", href: "#nosotros" },
          { label: "Contacto", href: "#contacto" },
        ].map(({ label, href }) => (
          <a key={label} href={href} className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a
          href="https://stockapp.qunitrix.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-center px-5 py-3 rounded-xl text-sm font-bold text-white"
          style={{ background: "#0b818d" }}
        >
          Ir a StockApp →
        </a>
      </div>
    )}
  </header>
);

/* ─── Hero Section ─────────────────────────────────────────────────────── */
const HeroSection: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 hero-gradient pointer-events-none" />
    <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
    <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse-slow"
         style={{ background: "radial-gradient(circle, rgba(30,58,138,0.25) 0%, transparent 70%)" }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      {/* Badge */}
      <div className="badge-blue mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        Empresa de Software Empresarial
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Transformamos{" "}
        <span className="text-gradient-blue">ideas</span>
        <br />en soluciones{" "}
        <span className="relative">
          <span className="text-gradient-blue">empresariales</span>
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
        En <strong className="text-white">Qunitrix</strong> desarrollamos software que impulsa la eficiencia operativa
        de empresas. Desde sistemas de gestión hasta soluciones a medida,
        llevamos tu negocio al siguiente nivel.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <a
          href="#contacto"
          className="px-10 py-4 rounded-xl font-bold text-lg text-white hover:scale-105 transition-transform electric-glow text-center"
          style={{ background: "linear-gradient(135deg, #cc7a00, #f39200)" }}
        >
          Hablar con un experto
        </a>
        <a
          href="#servicios"
          className="glass-card px-10 py-4 rounded-xl font-bold text-lg text-slate-300 hover:text-white hover:border-white/20 transition-all text-center"
        >
          Ver nuestros servicios
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
        {[
          { value: "+5 años", label: "Experiencia" },
          { value: "100%", label: "Código a medida" },
          { value: "24/7", label: "Soporte técnico" },
          { value: "Cloud", label: "Infraestructura" },
        ].map(({ value, label }) => (
          <div key={label} className="glass-card p-6 rounded-2xl flex flex-col items-center">
            <span className="text-3xl font-black mb-1 text-gradient-blue" style={{ color: "#f39200" }}>{value}</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Services Section ─────────────────────────────────────────────────── */
const services = [
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Desarrollo Web Empresarial",
    desc: "Aplicaciones web robustas, escalables y seguras. Portales corporativos, sistemas internos y plataformas SaaS diseñadas para crecer con tu empresa.",
    tags: ["React", "Node.js", "Cloud"],
  },
  {
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Aplicaciones Móviles",
    desc: "Apps nativas y multiplataforma que conectan tu equipo y clientes. Desarrollo iOS y Android con foco en rendimiento y experiencia de usuario.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    title: "Sistemas de Gestión (ERP)",
    desc: "Soluciones ERP personalizadas que integran todos los procesos de tu empresa: inventario, finanzas, RRHH y operaciones en un solo sistema.",
    tags: ["ERP", "Integración", "BI"],
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Business Intelligence",
    desc: "Dashboards analíticos y reportes que convierten tus datos en decisiones estratégicas. Visualizaciones en tiempo real y KPIs que importan.",
    tags: ["Data Analytics", "Dashboards", "Reportes"],
  },
  {
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    title: "Infraestructura Cloud",
    desc: "Migración, arquitectura y gestión de infraestructura en la nube. AWS, GCP y Azure para garantizar disponibilidad, seguridad y escalabilidad.",
    tags: ["AWS", "Docker", "DevOps"],
  },
  {
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Integraciones y APIs",
    desc: "Conectamos tus sistemas con terceros: MercadoPago, MercadoLibre, sistemas contables y cualquier API empresarial que tu flujo requiera.",
    tags: ["REST APIs", "Webhooks", "OAuth"],
  },
];

const ServicesSection: React.FC = () => (
  <section id="servicios" className="px-6 py-32 section-gradient relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="badge-blue mb-6 justify-center">Nuestros Servicios</div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Software que impulsa{" "}
          <span className="text-gradient-blue">el crecimiento</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Desarrollamos soluciones tecnológicas completas para empresas que buscan
          eficiencia, escalabilidad y ventaja competitiva.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon, title, desc, tags }) => (
          <div key={title} className="glass-card card-hover-blue rounded-3xl p-8 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                 style={{ background: "rgba(243,146,0,0.1)", border: "1px solid rgba(243,146,0,0.2)" }}>
              <Icon d={icon} className="w-6 h-6" style={{ color: "#f39200" }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full text-blue-300 font-medium"
                      style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.15)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── StockApp Showcase Section ────────────────────────────────────────── */
const stockFeatures = [
  "Punto de venta rápido con múltiples métodos de cobro",
  "Control de inventario con alertas automáticas",
  "Reportes y dashboards analíticos en tiempo real",
  "Integración nativa con MercadoPago",
  "Gestión de distribuidores y proveedores",
  "Historial completo de ventas y cancelaciones",
];

const StockAppSection: React.FC = () => (
  <section id="stockapp" className="px-6 py-32 relative overflow-hidden">
    {/* Teal glow BG */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
         style={{ background: "radial-gradient(circle, rgba(11,129,141,0.12) 0%, transparent 70%)" }} />

    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="badge-teal mb-6 justify-center">Nuestro Producto Estrella</div>
        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="text-gradient-teal">StockApp</span>
          {" "}— Gestión Empresarial
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Nuestra solución integral de punto de venta e inventario para comercios modernos.
          Rápido, intuitivo y completamente en la nube.
        </p>
      </div>

      {/* Main showcase card */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row mb-10"
           style={{ borderColor: "rgba(11,129,141,0.2)" }}>
        {/* Text side */}
        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <div className="badge-teal mb-6 self-start">Plataforma en la Nube</div>
          <h3 className="text-3xl md:text-4xl font-black mb-5 leading-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Todo lo que tu comercio
            <br />
            <span className="text-gradient-teal">necesita, en un lugar</span>
          </h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            StockApp combina punto de venta, control de inventario, reportes analíticos
            y gestión de distribuidores en una plataforma unificada y fácil de usar.
          </p>
          <ul className="space-y-3 mb-10">
            {stockFeatures.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckIcon />
                {feat}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://stockapp.qunitrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-bold text-white text-center hover:scale-105 transition-transform stock-glow"
              style={{ background: "#0b818d" }}
            >
              Acceder a StockApp →
            </a>
            <a
              href="#contacto"
              className="glass-card px-8 py-3.5 rounded-xl font-bold text-slate-300 hover:text-white text-center transition-all"
            >
              Saber más
            </a>
          </div>
        </div>

        {/* Image side — Browser mockup */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-10">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(11,129,141,0.25)" }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "#1a1f2e", borderColor: "rgba(255,255,255,0.07)" }}>
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              <div className="flex-1 mx-4 px-3 py-1 rounded text-xs text-slate-500" style={{ background: "rgba(255,255,255,0.05)" }}>stockapp.qunitrix.com</div>
            </div>
            {/* App screenshot */}
            <img
              src="/stockapp_dashboard.png"
              alt="StockApp Dashboard"
              className="w-full block"
              style={{ display: "block", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* POS showcase — reverse */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row-reverse"
           style={{ borderColor: "rgba(11,129,141,0.15)" }}>
        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <h3 className="text-3xl font-black mb-5 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Punto de Venta{" "}
            <span className="text-gradient-teal">ultra rápido</span>
          </h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Cobrá en segundos con cualquier método de pago. Efectivo, transferencia,
            tarjeta o MercadoPago — todo integrado en una sola pantalla.
            Con búsqueda por teclado y navegación por flechas.
          </p>
          <ul className="space-y-3 mb-8">
            {["Múltiples métodos de cobro en un click", "Descuentos por porcentaje o valor fijo", "Navegación total por teclado para máxima velocidad", "Tickets numerados y historial de ventas"].map(f => (
              <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://stockapp.qunitrix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-8 py-3.5 rounded-xl font-bold text-sm border transition-all hover:border-[#0b818d] hover:text-[#0fa0af]"
            style={{ borderColor: "rgba(11,129,141,0.4)", color: "#0b818d" }}
          >
            Probar StockApp
          </a>
        </div>
        {/* Image side — Browser mockup */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-10">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(11,129,141,0.2)" }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "#1a1f2e", borderColor: "rgba(255,255,255,0.07)" }}>
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              <div className="flex-1 mx-4 px-3 py-1 rounded text-xs text-slate-500" style={{ background: "rgba(255,255,255,0.05)" }}>stockapp.qunitrix.com/pos</div>
            </div>
            {/* App screenshot */}
            <img
              src="/stockapp_pos.png"
              alt="StockApp Punto de Venta"
              className="w-full block"
              style={{ display: "block", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── About / Why Qunitrix Section ────────────────────────────────────── */
const whyItems = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Calidad garantizada", desc: "Código limpio, documentado y testeado. Cada entrega pasa por revisión exhaustiva." },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Entregas rápidas", desc: "Metodologías ágiles que minimizan tiempos y maximizan el valor entregado en cada sprint." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Equipo dedicado", desc: "Desarrolladores senior comprometidos con cada proyecto, desde el diseño hasta el deploy." },
  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Soporte continuo", desc: "Acompañamos tu crecimiento con soporte post-lanzamiento, actualizaciones y escalabilidad." },
];

const AboutSection: React.FC = () => (
  <section id="nosotros" className="px-6 py-32 section-gradient relative">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
         style={{ background: "radial-gradient(circle, rgba(243,146,0,0.1) 0%, transparent 70%)" }} />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <div className="badge-blue mb-6">Sobre Qunitrix</div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Software que{" "}
            <span className="text-gradient-blue">transforma</span>
            <br />empresas reales
          </h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            Somos una empresa de desarrollo de software especializada en soluciones empresariales.
            Trabajamos con negocios de todos los tamaños para digitalizar, automatizar y escalar
            sus operaciones con tecnología de primer nivel.
          </p>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Nuestro equipo combina expertise técnico con profundo entendimiento del
            mundo empresarial para entregar productos que realmente generan impacto.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white hover:scale-105 transition-transform electric-glow"
            style={{ background: "linear-gradient(135deg, #cc7a00, #f39200)" }}
          >
            Contanos tu proyecto
            <Icon d="M17 8l4 4m0 0l-4 4m4-4H3" className="w-4 h-4" />
          </a>
        </div>

        {/* Grid of values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyItems.map(({ icon, label, desc }) => (
            <div key={label} className="glass-card card-hover-blue rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                   style={{ background: "rgba(243,146,0,0.1)", border: "1px solid rgba(243,146,0,0.2)" }}>
                <Icon d={icon} className="w-5 h-5" style={{ color: "#f39200" }} />
              </div>
              <h4 className="font-bold text-white mb-2 text-sm">{label}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── CTA Band ─────────────────────────────────────────────────────────── */
const CTASection: React.FC = () => (
  <section className="px-6 py-28 relative overflow-hidden">
    <div className="absolute inset-0"
         style={{ background: "linear-gradient(135deg, rgba(243,146,0,0.12) 0%, rgba(11,129,141,0.06) 100%)" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] rounded-full blur-3xl pointer-events-none"
         style={{ background: "rgba(243,146,0,0.1)" }} />

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        ¿Listo para llevar tu empresa
        <br />
        <span className="text-gradient-blue">al siguiente nivel?</span>
      </h2>
      <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
        Hablemos de tu proyecto. Nuestro equipo está listo para diseñar
        la solución tecnológica ideal para tu negocio.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <a
          href="#contacto"
          className="px-12 py-5 rounded-2xl font-black text-xl text-white hover:scale-105 transition-transform electric-glow text-center"
          style={{ background: "linear-gradient(135deg, #cc7a00, #f39200)" }}
        >
          Iniciar proyecto
        </a>
        <a
          href="https://stockapp.qunitrix.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-5 rounded-2xl font-black text-xl text-white hover:scale-105 transition-transform stock-glow text-center"
          style={{ background: "#0b818d" }}
        >
          Probar StockApp
        </a>
      </div>
    </div>
  </section>
);

/* ─── Contact Section ──────────────────────────────────────────────────── */
const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    window.open(
      `mailto:hello@qunitrix.com?subject=Consulta de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`,
      "_blank"
    );
  };

  const inputClass = "w-full rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none transition-colors text-sm"
    + " bg-white/[0.04] border border-white/[0.07] focus:border-blue-500/40";

  return (
    <section id="contacto" className="px-6 py-28 section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="badge-blue mb-6">Contacto</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Hablemos de tu
              <br />
              <span className="text-gradient-blue">próximo proyecto</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              ¿Tenés una idea o un problema que resolver? Escribinos y
              un miembro de nuestro equipo te contactará a la brevedad
              para analizar tu caso.
            </p>

            <div className="space-y-5">
              {[
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "hello@qunitrix.com", href: "mailto:hello@qunitrix.com" },
                { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", label: "StockApp", value: "stockapp.qunitrix.com", href: "https://stockapp.qunitrix.com" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                       style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.2)" }}>
                    <Icon d={icon} className="w-5 h-5" style={{ color: "#f39200" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-600 font-bold mb-0.5">{label}</p>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                       className="text-slate-300 hover:text-white transition-colors text-sm">{value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre</label>
                <input id="name" name="name" type="text" required placeholder="Tu nombre" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                <input id="email" name="email" type="email" required placeholder="tu@empresa.com" className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="empresa" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Empresa (opcional)</label>
              <input id="empresa" name="empresa" type="text" placeholder="Nombre de tu empresa" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mensaje</label>
              <textarea id="message" name="message" required rows={5}
                        placeholder="Contanos sobre tu proyecto, qué necesitás y en qué te podemos ayudar..."
                        className={inputClass + " resize-none"} />
            </div>
            <button
              type="submit"
              className="mt-2 w-full px-8 py-4 rounded-xl font-bold text-white hover:scale-[1.02] transition-transform electric-glow"
              style={{ background: "linear-gradient(135deg, #cc7a00, #f39200)" }}
            >
              Enviar Mensaje →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ─── Footer ───────────────────────────────────────────────────────────── */
const Footer: React.FC = () => (
  <footer className="border-t px-6 py-16" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#080c14" }}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Brand */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-5">
          <img alt="Qunitrix Logo" className="h-7 w-auto" src="/favicon.ico" />
          <span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Qunitrix
          </span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed max-w-xs mb-6">
          Empresa de software especializada en soluciones empresariales. Desarrollamos
          tecnología que transforma negocios y potencia el crecimiento.
        </p>
        <div className="flex gap-3">
          <a href="https://stockapp.qunitrix.com" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white"
             style={{ background: "#0b818d" }}>
            StockApp ↗
          </a>
        </div>
      </div>

      {/* Links */}
      <div>
        <h5 className="font-bold mb-5 uppercase text-xs tracking-widest" style={{ color: "#f39200" }}>Empresa</h5>
        <ul className="space-y-3 text-slate-500 text-sm">
          {[
            { label: "Servicios", href: "#servicios" },
            { label: "StockApp", href: "#stockapp" },
            { label: "Nosotros", href: "#nosotros" },
            { label: "Contacto", href: "#contacto" },
          ].map(({ label, href }) => (
            <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="font-bold mb-5 uppercase text-xs tracking-widest" style={{ color: "#f39200" }}>Legal</h5>
        <ul className="space-y-3 text-slate-500 text-sm">
          <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
          <li><Link to="/terminos" className="hover:text-white transition-colors">Términos</Link></li>
          <li><Link to="/eliminacion-datos" className="hover:text-white transition-colors">Eliminación de datos</Link></li>
        </ul>
      </div>
    </div>

    <div className="line-gradient-blue mt-14 mb-8" />
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-700">
      <p>© {new Date().getFullYear()} Qunitrix Software Solutions. Todos los derechos reservados.</p>
      <div className="flex gap-6">
        <Link to="/privacidad" className="hover:text-slate-400 transition-colors">Política de Privacidad</Link>
        <Link to="/terminos" className="hover:text-slate-400 transition-colors">Términos de Servicio</Link>
      </div>
    </div>
  </footer>
);

/* ─── Main App ─────────────────────────────────────────────────────────── */
const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="font-display overflow-x-hidden" style={{ background: "#080c14", color: "#e2e8f0" }}>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <div className="line-gradient-blue" />
      <ServicesSection />
      <div className="line-gradient-teal" />
      <StockAppSection />
      <div className="line-gradient-blue" />
      <AboutSection />
      <CTASection />
      <div className="line-gradient-blue" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
