export default function BeJugaadoWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black text-white overflow-hidden font-sans">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <header className="relative z-10 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-3xl font-extrabold tracking-wide text-purple-300">
          BeJugaado
        </h1>
      </header>

      <section className="relative z-10 px-8 md:px-20 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Connecting <span className="text-pink-400">Students</span> with
            <span className="text-purple-300"> Industry Experts</span>
          </h2>

          <p className="text-lg text-purple-100 leading-relaxed mb-8 max-w-xl">
            BeJugaado helps schools and students connect directly with professional industry experts.
          </p>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-8 md:px-20 py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-xl rounded-[40px] p-12 text-center shadow-2xl">
          <h2 className="text-5xl font-bold text-purple-200 mb-8">
            Contact Us
          </h2>

          <div className="space-y-4 text-xl text-purple-100">
            <p>📞 7016400596</p>
            <p>✉️ bejugaado@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
