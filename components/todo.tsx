import type { NextPage } from 'next'

interface TodoProps {
    memo: string[];
    [key: string]: any;
}

export default function Note({date, day, memo}:TodoProps) {
    return (
      <div>
        <div className="flex pl-2 pt-5">
          <div className="flex flex-col justify-center items-center w-24 h-24 bg-slate-500 rounded space-y-1">
            <div className="w-24 h-24 rounded-lg flex flex-col justify-center items-center">
              <div className="text-gray-100 text-2xl mb-1">{date}</div>
              <div className="text-gray-100 text-2xl">{day}</div>
            </div>
          </div>
          <div className="flex flex-col pl-3 text-xl space-y-2">
            {memo.map((_, i) => <span className="" key={i}> {i+1}) {memo[i]}</span>)}
          </div>
        </div>
      </div>
    );
}