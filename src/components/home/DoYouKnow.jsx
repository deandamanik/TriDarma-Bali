import didYouKnowBg from '../../assets/home/did-you-know-bg.png';

const DidYouKnow = () => {
  return (
    <section className="w-full bg-orange-normal font-poppins overflow-hidden rounded-b-[60px] md:rounded-b-[200px] ">
      <div 
        className="w-full relative overflow-hidden bg- bg-cover bg-center pt-24 pb-24 px-6 sm:px-12 md:px-20 lg:px-32 rounded-[60px] sm:rounded-[120px] md:rounded-[200px] border-4 border-white shadow-inner"
        style={{ backgroundImage: `url(${didYouKnowBg})` }}
      >
        <div className="absolute inset-0 mix-blend-multiply z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <span className="text-md sm:text-xl font-bold tracking-[0.2em] text-brown-normal uppercase mb-5">
            Do You Know?
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-wide max-w-4xl mb-6">
            "Every year, more than <span className="underline decoration-white/60 underline-offset-4 italic font-extrabold">4 million tourists</span> visit Bali, but only a small percentage understand the sacred customary rules before visiting."
          </h2>

          <div className="w-full max-w-2xl h-px bg-white/30 mb-6" />

          <p className="text-[11px] sm:text-xs md:text-sm text-white/90 font-medium leading-relaxed max-w-3xl mb-10 tracking-wide">
            TriDarma Bali was born out of concern over the increasing incidence of cultural violations by tourists who lack adequate information. This platform bridges the gap between tourists' curiosity and the obligation to preserve Balinese cultural integrity.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brown-dark text-white text-xs md:text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#2b1607] transition shadow-md">
              <span>Learn Cultural Guide</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>

            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-transparent text-brown-dark text-xs md:text-sm font-bold flex items-center justify-center gap-2 border border-brown-dark hover:bg-brown-dark/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span>Report Violations</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DidYouKnow;