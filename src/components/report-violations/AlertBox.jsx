const AlertBox = () => {
  return (
    <div className="bg-red-500 text-white p-6 rounded-2xl shadow-md text-center">
      <span className="block text-base font-black tracking-wider mb-2">ALERT</span>
      <p className="text-[11px] sm:text-xs leading-relaxed font-medium">
        False or unsubstantiated reports may be subject to sanctions in accordance with applicable regional regulations. Ensure the information you provide is accurate and accountable.
      </p>
    </div>
  );
};

export default AlertBox;