import React from 'react';
import { ArrowRight } from 'lucide-react';
import { salesContent } from '../data/salesContent';

export const QuickSearchSection: React.FC = () => {
  return (
    <section id="organizacao-consulta" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
          {salesContent.quickSearch.heading}
        </h2>

        <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          {salesContent.quickSearch.leadText}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
          {salesContent.quickSearch.steps.map((step) => (
            <div
              key={step.trigger}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 transition-all duration-200 hover:bg-blue-50/50 hover:border-blue-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-xl shrink-0 border border-slate-100">
                {step.icon}
              </div>
              <div className="text-sm sm:text-base text-slate-800 leading-snug">
                <span className="font-semibold text-slate-900">{step.trigger} </span>
                <span className="text-blue-900 font-bold">{step.action}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3-Step Flow Banner */}
        <div
          className="p-5 sm:p-6 rounded-2xl text-white shadow-lg flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-black text-base sm:text-lg"
          style={{
            background: `linear-gradient(135deg, ${salesContent.brand.primaryDark}, ${salesContent.brand.primary})`,
          }}
        >
          <span className="flex items-center gap-2">
            <span>🎯</span> Escolha o objetivo
          </span>
          <ArrowRight className="hidden sm:block w-5 h-5 text-amber-400" />
          <span className="flex items-center gap-2">
            <span>📖</span> Consulte a atividade
          </span>
          <ArrowRight className="hidden sm:block w-5 h-5 text-amber-400" />
          <span className="flex items-center gap-2">
            <span>✨</span> Aplique no ensaio
          </span>
        </div>
      </div>
    </section>
  );
};
