const FeatureCard = ({ title, desc, linkText, img }) => {
  return (
    <div className="flex-1 min-w-70 bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col text-brown-normal border-2 border-brown-normal/80">
      <div className="w-full h-44 overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-6 py-8 flex flex-col grow justify-between min-h-50">
        <div>
          <h3 className="text-md font-bold text-brown-normal mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-brown-normal/80 font-medium leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="flex items-center text-xs font-bold text-orange-normal hover:opacity-80 cursor-pointer transition w-max gap-1">
          <span>{linkText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;