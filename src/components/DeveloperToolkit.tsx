import React, { useState } from "react";
import { WRITTEN_COPY_DOCS, CLINIC_META, CLINIC_CONTACT, CLINIC_HOURS } from "../data";
import { ClipboardCopy, CheckCircle2, ChevronRight, Eye, Code, BookOpen, AlertCircle, Settings } from "lucide-react";

export default function DeveloperToolkit() {
  const [activeTab, setActiveTab2] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  // Generate a beautifully structured raw Markdown format of the copy for copywriters / developers
  const generateFullMarkdown = () => {
    let md = `# Copywriting & Conversion Rate Optimization (CRO) Blueprint\n`;
    md += `## Clinicial Client: ${CLINIC_META.practiceName}\n`;
    md += `*   **Director Dentist**: ${CLINIC_META.dentistName} (${CLINIC_META.dentistTitle})\n`;
    md += `*   **Address**: ${CLINIC_CONTACT.address}\n`;
    md += `*   **Schedule**: ${CLINIC_HOURS.days} (${CLINIC_HOURS.time})\n`;
    md += `*   **WhatsApp Hotline**: ${CLINIC_CONTACT.phoneDisplay}\n\n`;
    md += `========================================================================\n\n`;

    WRITTEN_COPY_DOCS.forEach((section) => {
      md += `### SECTION: ${section.section.toUpperCase()}\n`;
      md += `*   **CRO Design Principles & Rationale**: ${section.rationale}\n\n`;
      
      md += `#### Headings & Micro-Copy:\n`;
      section.headings.forEach((heading) => {
        md += `*   **${heading.level}**: "${heading.text}"\n`;
      });
      md += `\n`;
      
      md += `#### Main Written Copy Blocks:\n`;
      section.textBlocks.forEach((block) => {
        md += `*   **[${block.label}]**:\n    "${block.content}"\n\n`;
      });
      md += `------------------------------------------------------------------------\n\n`;
    });

    return md;
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(generateFullMarkdown());
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 3000);
  };

  const handleCopySection = (index: number, sectionText: string) => {
    navigator.clipboard.writeText(sectionText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  return (
    <section className="bg-slate-50 py-12 lg:py-20" id="toolkit-section">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Title and Action */}
        <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-800">
              <Settings className="h-4 w-4 text-indigo-600 animate-spin-slow" />
              <span>Conversion Audit & Copy Library Portal</span>
            </div>
            <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Mediplex Dental Copywriting Blueprint
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Perfect for copying structured texts, checking local CRO rationale, or handing a neat checklist style markdown to your web developer or designer!
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-5  py-3 text-sm font-bold text-white shadow-md shadow-indigo-200 hover:bg-indigo-700 transition"
            id="btn-copy-blueprint"
          >
            {copiedAll ? <CheckCircle2 className="h-4 w-4" /> : <ClipboardCopy className="h-4 w-4" />}
            <span>{copiedAll ? "Entire Copy Copied!" : "Copy Full Markdown Blueprint"}</span>
          </button>
        </div>

        {/* Layout Grid: Left Tabs of Copy Categories, Right Text Details */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          
          {/* Categories list (Left Col - 5) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest pl-1">
              COPY SECTIONS & SUB-ELEMENTS
            </span>

            <div className="space-y-2">
              {WRITTEN_COPY_DOCS.map((doc, idx) => {
                const isSelected = idx === activeTab;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab2(idx)}
                    className={`w-full flex items-center justify-between rounded-2xl px-5 py-4 transition-all border text-left cursor-pointer ${
                      isSelected
                        ? "bg-white border-indigo-200 shadow-md shadow-indigo-50"
                        : "bg-slate-100/50 border-transparent hover:bg-slate-100 text-slate-600"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`text-xs font-bold ${isSelected ? "text-indigo-900" : "text-slate-700"}`}>
                        {idx + 1}. {doc.section}
                      </span>
                      <span className="text-3xs text-slate-450 line-clamp-1 mt-0.5">
                        {doc.headings[0]?.text || doc.textBlocks[0]?.content}
                      </span>
                    </div>
                    <ChevronRight className={`h-4.5 w-4.5 ${isSelected ? "text-indigo-600" : "text-slate-300"}`} />
                  </button>
                );
              })}
            </div>

            {/* CRO Alert card */}
            <div className="rounded-2xl bg-amber-50/50 border border-amber-100 p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-900">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-wide">CRO Practitioner Warning</span>
              </div>
              <p className="text-2xs text-amber-800 leading-relaxed">
                Dentistry has a high bounce rate on mobile. Ensure that in your live code setting, the top header remains sticky and has one bold green button directly pointing to WhatsApp. Avoid heavy multi-choice forms before the chat stage. Contact details should always be readable in single-tap links.
              </p>
            </div>
          </div>

          {/* Copy Display details (Right Col - 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl space-y-6">
            
            {/* Rationale segment */}
            <div className="bg-indigo-50/40 border border-indigo-100/50 rounded-2xl p-4">
              <div className="flex items-center gap-1.5 font-bold text-2xs text-indigo-800 uppercase tracking-widest">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Conversion Strategy (CRO Rationale)</span>
              </div>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed font-sans font-medium">
                {WRITTEN_COPY_DOCS[activeTab].rationale}
              </p>
            </div>

            {/* Headings component */}
            <div className="space-y-3">
              <h4 className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest">
                HEADINGS CONFIGURATION (H1 / H2 / TABS)
              </h4>
              
              <div className="space-y-2.5">
                {WRITTEN_COPY_DOCS[activeTab].headings.map((heading, hIdx) => (
                  <div key={hIdx} className="rounded-xl bg-slate-50 border p-3.5 space-y-1">
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                      {heading.level}
                    </span>
                    <p className="text-xs font-bold text-slate-800 selection:bg-indigo-100 leading-normal">
                      {heading.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Text blocks content */}
            <div className="space-y-3">
              <h4 className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest">
                BODY WRITTEN COPY & MICRO-COPY CODES
              </h4>
              
              <div className="space-y-3">
                {WRITTEN_COPY_DOCS[activeTab].textBlocks.map((block, bIdx) => {
                  const sectionTextToCopy = `[${block.label}]\n"${block.content}"`;
                  const isCopied = copiedIndex === bIdx;

                  return (
                    <div key={bIdx} className="rounded-xl border border-slate-200 p-4 space-y-2 relative group hover:border-slate-300 transition">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {block.label}
                        </span>
                        
                        <button
                          onClick={() => handleCopySection(bIdx, block.content)}
                          className="text-[10px] font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          {isCopied ? "Copied!" : "Copy raw text"}
                        </button>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-sans selection:bg-indigo-100 whitespace-pre-line">
                        {block.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* JSON Code variable segment */}
            <div className="border-t border-slate-100 pt-6 space-y-2.5">
              <h4 className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block">
                DEVELOPER TECHNICAL VARIABLE (JSON READY)
              </h4>
              
              <div className="relative">
                <pre className="text-[11px] font-mono leading-relaxed bg-slate-900 text-slate-300 p-4 rounded-xl overflow-x-auto max-h-48 whitespace-pre block select-all">
                  {JSON.stringify(WRITTEN_COPY_DOCS[activeTab], null, 2)}
                </pre>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
