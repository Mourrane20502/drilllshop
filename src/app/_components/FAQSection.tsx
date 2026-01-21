"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ShieldCheck } from "lucide-react";

const faqData = [
    {
        question: "How long does delivery take?",
        answer: "For orders within Casablanca, we usually deliver within 24 hours. For other cities in Morocco, it takes 24 to 48 hours to reach your doorstep.",
        icon: <ShieldCheck className="text-brand" size={18} />
    },
    {
        question: "What are the payment methods?",
        answer: "We currently support Cash on Delivery (COD) across all cities in Morocco. You pay only when you receive and inspect your package.",
        icon: <MessageCircle className="text-brand" size={18} />
    },
    {
        question: "Is everything 100% authentic?",
        answer: "Absolutely. DrillShop guarantees the authenticity of every single item we drop. We source our collection from verified partners to ensure you get the real deal.",
        icon: <HelpCircle className="text-brand" size={18} />
    },
    {
        question: "Can I exchange an item if it doesn't fit?",
        answer: "Yes! We offer a 7-day exchange policy. As long as the item is in its original condition with tags, we'll swap it for your desired size.",
        icon: <ShieldCheck className="text-brand" size={18} />
    },
    {
        question: "How do I track my order?",
        answer: "Once your order is confirmed, our delivery partner will contact you via phone or WhatsApp to coordinate the exact delivery time.",
        icon: <MessageCircle className="text-brand" size={18} />
    }
];

const FAQItem = ({ question, answer, icon, isOpen, onClick }: {
    question: string,
    answer: string,
    icon: React.ReactNode,
    isOpen: boolean,
    onClick: () => void
}) => {
    return (
        <div className={`glass-card rounded-[2rem] overflow-hidden transition-all duration-500 border-white/5 ${isOpen ? "bg-brand/5 border-brand/20 ring-1 ring-brand/10 shadow-2xl shadow-brand/5" : "hover:bg-foreground/5"}`}>
            <button
                onClick={onClick}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? "bg-brand text-white" : "bg-foreground/5 text-muted-foreground"}`}>
                        {icon}
                    </div>
                    <span className="text-lg font-black uppercase tracking-tighter text-white">{question}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={isOpen ? "text-brand" : "text-muted-foreground"}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="px-8 pb-8 pt-2 pl-[4.5rem]">
                            <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="w-full py-32 bg-black px-6 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 blur-[150px] rounded-full"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand font-black tracking-[0.4em] uppercase text-xs"
                    >
                        Customer Care
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic"
                    >
                        Any <span className="text-brand">Questions?</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-brand rounded-full" />
                </div>

                <div className="flex flex-col gap-4">
                    {faqData.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            {...faq}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>

                {/* Support CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 rounded-[3rem] glass-card border-brand/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                >
                    <div className="space-y-1">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Still Need Help?</h3>
                        <p className="text-muted-foreground font-medium">Our team is available 24/7 for your support.</p>
                    </div>
                    <a
                        href="https://wa.me/212622718872"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-[0_15px_30px_rgba(248,3,18,0.2)] flex items-center gap-3 transition-transform hover:scale-105"
                    >
                        <MessageCircle size={20} />
                        WhatsApp Support
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
