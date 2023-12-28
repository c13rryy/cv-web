import { DataArray } from "@/Types";
import React from "react";
import Typography from "../UI/Typo/Typography";

interface CardProps {
  data?: Array<DataArray>;
  title: string;
  description?: string;
}

export default function Card({ data, title, description }: CardProps) {
  return (
    <div className="border-[1px] border-solid border-[#c0c0c0] bg-[#f5f5f5] rounded-[24px] p-24px">
      <Typography tag="h4" text={title} />
      <div>
        {data && (
          <ul className="list-disc list-inside">
            {data.map((el, idx) => (
              <li
                className="text-16 mt-8px text-black_2 leading-24 font-medium"
                key={idx}
              >
                {el.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      {description && <Typography type="thinP" text={description} />}
    </div>
  );
}
