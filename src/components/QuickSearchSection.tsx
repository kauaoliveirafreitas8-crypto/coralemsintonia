import React from 'react';
import { ArrowRight } from 'lucide-react';
import { salesContent } from '../data/salesContent';

export const QuickSearchSection: React.FC = () => {
  return (
    <section id="organizacao-consulta" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: '#E2E8F0' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-black mb-3 leading-tight tracking-tight text-black" style={{ color: '#000000' }}>
          {salesContent.quickSearch.heading}
        </h2>

        <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium" style={{ color: '#475569' }}>
          {salesContent.quickSearch.leadText}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
          {salesContent.quickSearch.steps.map((step) => (
            <div
              key={step.trigger}
              className="p-5 rounded-2xl flex items-start gap-4 transition-all duration-200 hover:shadow-sm"
              style={{
                backgroundColor: '#F1F5F9',
                border: '1px solid #E2E8F0',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-xl shrink-0"
                style={{ border: '1px solid #E2E8F0' }}
              >
                {step.icon}
              </div>
              <div className="text-sm sm:text-base leading-snug" style={{ color: '#0F172A' }}>
                <span className="font-semibold">{step.trigger} </span>
                <span className="font-bold" style={{ color: '#123C32' }}>{step.action}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3-Step Flow Banner */}
        <div
          className="p-5 sm:p-6 rounded-2xl text-white shadow-md flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-black text-base sm:text-lg"
          style={{
            backgroundColor: '#123C32',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <span className="flex items-center gap-2">
            <span>🎯</span> Escolha o objetivo
          </span>
          <ArrowRight className="hidden sm:block w-5 h-5" style={{ color: '#FACC15' }} />
          <span className="flex items-center gap-2">
            <span>📖</span> Consulte a atividade
          </span>
          <ArrowRight className="hidden sm:block w-5 h-5" style={{ color: '#FACC15' }} />
          <span className="flex items-center gap-2">
            <span>✨</span> Aplique no ensaio
          </span>
        </div>
      </div>
    </section>
  );
};
