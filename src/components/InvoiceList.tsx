import { useState } from "react";
import type { Invoice } from "../types";

const statusConfig = {
  Paid: {
    dot: "bg-emerald-400",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  Pending: {
    dot: "bg-amber-400",
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
  },
  Draft: {
    dot: "bg-slate-400",
    bg: "bg-slate-100",
    text: "text-slate-500",
    border: "border-slate-200",
  },
};

type statusConfigType = keyof typeof statusConfig;

function StatusBadge({ status }: { status: string }) {
  const invoiceStatus = status as statusConfigType;
  const cfg = statusConfig[invoiceStatus];

  return (
    <span
      className={`w-24 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}
    >
      <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
}

function InvoiceRow({ invoice, index }: { invoice: Invoice; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative px-6 py-5 rounded-2xl border cursor-pointer
        transition-all duration-200 ease-out
        ${
          hovered
            ? "border-slate-300 shadow-md shadow-slate-100 -translate-y-0.5 bg-white"
            : "border-slate-100 bg-white shadow-sm"
        }
      `}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="w-24 shrink-0">
        <span className="text-slate-400 text-sm font-medium">#</span>
        <span className="text-slate-800 text-sm font-bold tracking-wide">
          {invoice.id}
        </span>
      </div>

      <div className="w-36 shrink-0 text-slate-400 text-sm">
        Due&nbsp;
        <span className="text-slate-500 font-medium">{invoice.due}</span>
      </div>

      <div className="text-slate-600 text-sm font-medium absolute right-6 md:relative md:right-0">
        {invoice.name}
      </div>

      <div className="w-32 shrink-0">
        <span className="text-slate-800 text-base font-bold tracking-tight">
          £&nbsp;{invoice.amount}
        </span>
      </div>

      <div className="absolute top-17.5 right-2 md:relative md:top-0 md:right-0 md:flex justify-end shrink-0 w-28">
        <StatusBadge status={invoice.status} />
      </div>

      <div
        className={`hidden md:block ml-2 shrink-0 transition-transform duration-200 ${hovered ? "translate-x-0.5" : ""}`}
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6 6L1 11"
            stroke={hovered ? "#6366f1" : "#94a3b8"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  return (
    <div className="bg-slate-50 flex items-center justify-center mt-12 w-full max-w-190 mb-4">
      <div className="flex flex-col gap-3 px-3 md:px-0 w-full">
        {invoices.map((invoice, i) => (
          <InvoiceRow key={invoice.id} invoice={invoice} index={i} />
        ))}
      </div>
    </div>
  );
}
