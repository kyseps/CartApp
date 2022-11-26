import React from "react";

export default function ItemsList({ final }) {
  return (
    <div className="grow-2 bg-slate-400 rounded-lg flex flex-col gap-3 p-6">
      <h2 className="text-2xl text-slate-700 p-2 ">Items List</h2>

      {final &&
        final.map((item) => (
          <p
            className="px-3 py-1 border border-b-2 border-slate-700 text-slate-700"
            key={final}
          >
            {item}
          </p>
        ))}
    </div>
  );
}
