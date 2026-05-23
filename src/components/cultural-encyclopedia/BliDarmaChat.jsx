import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX, FiMinus } from 'react-icons/fi';
import { CHAT_SUGGESTIONS } from '../../data/articles';
import bliDarmaIcon from '../../assets/cultural-encyclopedia/icon-blidarma.png';

const GREETING =
  `Om Swastiastu! 🙏 I'm Bli Darma, your Balinese cultural assistant. I'm ready to answer any questions about Balinese customs, etiquette, and rules. Do you have any questions?`;

// Avatar lingkaran dengan ikon Bli Darma
const Avatar = ({ size = 'w-9 h-9' }) => (
  <div
    className={`${size} rounded-full bg-orange-light flex items-center justify-center overflow-hidden shrink-0 shadow-sm`}
  >
    <img src={bliDarmaIcon} alt="Bli Darma" className="w-full h-full object-cover" />
  </div>
);

const BliDarmaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING }]);
  const scrollRef = useRef(null);

  // Auto-scroll ke pesan terbaru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Bisa dibuka dari mana saja: window.dispatchEvent(new Event('open-bli-darma'))
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('open-bli-darma', open);
    return () => window.removeEventListener('open-bli-darma', open);
  }, []);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    // Balasan demo — sambungkan ke API "Bli Darma" milikmu di sini.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Thank you for your question! 🙏 (This is a demo response connect to your AI backend for real answers.)',
        },
      ]);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 font-poppins">
      <AnimatePresence mode="wait">
        {isOpen ? (
          /* ============ PANEL EXPANDED ============ */
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="w-[calc(100vw-2.5rem)] max-w-[370px] h-[480px] max-h-[70vh] bg-orange-light rounded-3xl shadow-2xl border border-brown-normal/10 flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-brown-normal text-orange-light px-4 py-3 flex items-center gap-3">
              <Avatar />
              <div className="grow min-w-0">
                <h4 className="font-bold text-sm leading-tight">Bli Darma</h4>
                <p className="text-xs text-orange-light/70 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  Cultural Assistant AI · Online
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Minimize chat"
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/15 transition cursor-pointer"
                >
                  <FiMinus size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/15 transition cursor-pointer"
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>

            {/* Body / pesan */}
            <div ref={scrollRef} className="grow overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, idx) =>
                msg.role === 'bot' ? (
                  <div key={idx} className="flex items-start gap-2">
                    <Avatar size="w-7 h-7" />
                    <div className="bg-white text-brown-dark text-sm leading-relaxed rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%] shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="flex justify-end">
                    <div className="bg-orange-normal text-brown-dark text-sm leading-relaxed rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%] shadow-sm font-medium">
                      {msg.text}
                    </div>
                  </div>
                )
              )}

              {/* Quick questions */}
              {showSuggestions && (
                <div className="pt-1">
                  <p className="text-xs font-semibold text-brown-normal/60 mb-2">
                    Common Questions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CHAT_SUGGESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-xs font-medium text-brown-normal bg-white border border-brown-normal/15 rounded-full px-3 py-1.5 hover:bg-orange-light-active hover:border-brown-normal/30 transition cursor-pointer text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-brown-normal/10 bg-orange-light"
            >
              <div className="flex items-center gap-2 bg-white rounded-full border border-brown-normal/15 pl-4 pr-1.5 py-1.5 focus-within:ring-2 focus-within:ring-orange-normal/50 transition">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Balinese culture..."
                  className="grow bg-transparent text-sm text-brown-dark placeholder:text-brown-normal/40 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="w-9 h-9 rounded-full bg-brown-normal text-orange-light flex items-center justify-center hover:bg-brown-normal-hover active:scale-95 transition cursor-pointer shrink-0"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          /* ============ PILL COLLAPSED ============ */
          <motion.button
            key="pill"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="bg-brown-normal text-orange-light rounded-2xl shadow-xl pl-2.5 pr-4 py-2.5 flex items-center gap-3 cursor-pointer hover:bg-brown-normal-hover transition origin-bottom-right"
          >
            <div className="relative">
              <Avatar />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-brown-normal" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm leading-tight flex items-center gap-1">
                Bli Darma <span className="text-xs">✨</span>
              </p>
              <p className="text-xs text-orange-light/70 leading-tight">AI Cultural Assistant</p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BliDarmaChat;