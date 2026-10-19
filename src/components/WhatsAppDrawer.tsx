import React, { useState } from 'react';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

interface ChatMessage {
  id: string;
  sender: 'client' | 'engineer';
  text: string;
  time: string;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({
  isOpen,
  onClose,
  initialMessage = '',
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'engineer',
      text: 'Hello! I am Aakash Sharma, Lead Systems Architect at Code Mitra. How can I assist you with your web project, stack requirements, or pricing scope today?',
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState(initialMessage);

  if (!isOpen) return null;

  const quickQuestions = [
    'Do you sign Mutual NDA for full IP rights?',
    'How does the 100% Git source handover work?',
    'Can I start with Static and upgrade to CMS later?',
    'What payment gateways do you support for India & Global?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'client',
      text,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Automated engineering lead response
    setTimeout(() => {
      let reply = "Thanks for asking! We'll review your exact specifications and give you a flat-rate roadmap within 2 hours.";
      const lower = text.toLowerCase();

      if (lower.includes('nda') || lower.includes('ip') || lower.includes('rights')) {
        reply = "Yes, unconditionally! We sign bilateral Mutual NDAs prior to any code commit. You own 100% of the copyright, repository, and design tokens.";
      } else if (lower.includes('git') || lower.includes('handover') || lower.includes('source')) {
        reply = "We transfer the full GitHub or GitLab repository directly to your organization account, alongside database migrations, clean Docker/Vercel configs, and setup documentation.";
      } else if (lower.includes('upgrade') || lower.includes('static') || lower.includes('cms')) {
        reply = "Absolutely. Because we code cleanly in React and Next.js, converting a static site into a dynamic PostgreSQL/Supabase CMS only requires paying the engineering difference in scope.";
      } else if (lower.includes('payment') || lower.includes('gateway') || lower.includes('razorpay')) {
        reply = "We integrate Razorpay, Cashfree, PayU, and PhonePe with automated server-side webhook verification, retry algorithms, and instant WhatsApp/Email invoice delivery.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'engineer',
          text: reply,
          time: 'Just now',
        },
      ]);
    }, 700);
  };

  const handleOpenDirectWhatsApp = () => {
    const defaultText = inputText || 'Hi Code Mitra team, I would like to discuss web development pricing and scope.';
    const encoded = encodeURIComponent(defaultText);
    window.open(`https://wa.me/918080000000?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md h-full bg-[#0b1326] border-l border-slate-800 shadow-2xl flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="p-4 bg-[#131b2e] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#006e4b] flex items-center justify-center text-white font-bold">
                AS
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#4edea3] ring-2 ring-[#131b2e]"></span>
            </div>
            <div>
              <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                <span>Aakash Sharma</span>
                <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">verified</span>
              </div>
              <div className="text-[11px] text-[#4edea3] font-mono">
                Lead Systems Architect · Bangalore (Online)
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#918fa1] hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Chat message stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#060e20]">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === 'client' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'client'
                    ? 'bg-[#4f46e5] text-white rounded-tr-none'
                    : 'bg-[#171f33] text-[#dae2fd] border border-slate-800 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] font-mono text-[#918fa1] mt-1 px-1">{m.time}</span>
            </div>
          ))}

          {/* Quick suggestions */}
          <div className="pt-2">
            <span className="text-[11px] font-mono text-[#918fa1] block mb-1.5">Frequently asked:</span>
            <div className="flex flex-col gap-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="text-left text-xs p-2 rounded-lg bg-[#131b2e] hover:bg-[#1e2840] border border-slate-800 text-[#4cd7f6] transition cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input box */}
        <div className="p-3 bg-[#131b2e] border-t border-slate-800 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question or scope requirements..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-[#060e20] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4edea3]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-[#006e4b] hover:bg-[#008f62] text-white transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#918fa1]">
            <span>Average response: ~15 mins</span>
            <button
              type="button"
              onClick={handleOpenDirectWhatsApp}
              className="text-[#4edea3] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Open on Phone WhatsApp</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
