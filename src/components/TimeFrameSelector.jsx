import React from "react";

const TimeFrameSelector = (props) => {
  const { period, setPeriod } = props;

  const baseClasses = "py-1 px-3 rounded-2xl";
  const activeClasses = baseClasses + " bg-stone-100 dark:bg-zinc-800";

  return (
    <div className="flex gap-1 rounded-2xl border border-white bg-white p-[2px] text-sm dark:border-zinc-900 dark:bg-zinc-900">
      <button
        className={period === 1 ? activeClasses : baseClasses}
        onClick={() => setPeriod(1)}
      >
        1D
      </button>
      <button
        className={period === 7 ? activeClasses : baseClasses}
        onClick={() => setPeriod(7)}
      >
        7D
      </button>
      <button
        className={period === 30 ? activeClasses : baseClasses}
        onClick={() => setPeriod(30)}
      >
        1M
      </button>
      <button
        className={period === 90 ? activeClasses : baseClasses}
        onClick={() => setPeriod(90)}
      >
        3M
      </button>
      <button
        className={period === 365 ? activeClasses : baseClasses}
        onClick={() => setPeriod(365)}
      >
        1Y
      </button>
    </div>
  );
};

export default TimeFrameSelector;
