import React, { useState, useEffect, useCallback } from 'react';
import { Check } from 'lucide-react';
import { salesContent } from '../data/salesContent';

const BUYER_NAMES = [
  'Ana S.',
  'Carlos M.',
  'Juliana F.',
  'Ricardo P.',
  'Beatriz L.',
  'Felipe G.',
  'Mariana T.',
  'Gustavo H.',
  'Patrícia R.',
  'Lucas B.',
  'André C.',
  'Fernanda M.',
  'Sérgio V.',
  'Cláudia O.',
  'Roberto D.',
];

const TIME_AGO = [
  'há 2 minutos',
  'há 5 minutos',
  'há 10 minutos',
  'agora mesmo',
  'há 1 hora',
  'há 15 minutos',
  'há 30 minutos',
  'há 45 minutos',
];

export const SalesNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', time: '' });

  const triggerNotification = useCallback(() => {
    const randomName = BUYER_NAMES[Math.floor(Math.random() * BUYER_NAMES.length)];
    const randomTime = TIME_AGO[Math.floor(Math.random() * TIME_AGO.length)];
    setData({ name: randomName, time: randomTime });
    setVisible(true);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    // First trigger after 8s
    const firstTimer = setTimeout(() => {
      triggerNotification();
      // Then recurring interval every 25s
      const interval = setInterval(triggerNotification, 25000);
      return () => clearInterval(interval);
    }, 8000);

    return () => clearTimeout(firstTimer);
  }, [triggerNotification]);

  return (
    <div
      id="sales-toast"
      aria-live="polite"
      className={`fixed top-14 sm:top-16 right-3 sm:right-4 z-[90] transition-all duration-500 ease-out transform ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="bg-white border-2 rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-3 min-w-[200px]"
        style={{ borderColor: salesContent.brand.gold }}
      >
        <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <Check className="w-4 h-4" strokeWidth={3} />
        </div>

        <div className="flex flex-col text-left">
          <p className="text-[12px] font-black leading-tight text-slate-900">
            {data.name}
          </p>
          <p className="text-[11px] font-bold leading-tight text-emerald-700">
            Comprou o material! 🎉
          </p>
          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
            {data.time}
          </p>
        </div>
      </div>
    </div>
  );
};
