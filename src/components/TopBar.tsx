import { Plus } from "lucide-react";

function TopBar() {
  return (
    <div className="flex items-center lg:items-baseline justify-between px-4 lg:px-52 pt-8 lg:pt-14 w-full">
      <div>
        <h1 className="text-[25px] md:text-4xl font-extrabold text-topnav dark:text-white tracking-[-1.13px]">
          Invoices
        </h1>

        <p className="text-[13px] md:text-base text-[#888EB0] font-medium">
          No invoices
        </p>
      </div>

      <div className="flex items-center">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[0.9375rem] font-bold text-topnav dark:text-white cursor-pointer hover:border-purple hover:text-purple transition-colors">
          Filter <span className="hidden md:inline">by status</span>
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7C5DFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <button className="flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-full border-none bg-[#7b5cf0] text-white text-xs font-semibold cursor-pointer hover:bg-primary-dark hover:-translate-y-px transition-all">
          <span className="w-6.5 h-6.5 rounded-full bg-white text-[#7b5cf0] flex items-center justify-center text-lg leading-none">
            <Plus size={12} className="font-bold" />
          </span>

          <span>
            New <span className="hidden md:inline">Invoice</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
