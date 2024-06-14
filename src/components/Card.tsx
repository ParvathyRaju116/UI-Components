import { cva } from "class-variance-authority";
import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary";
  size?: "md";
  cardData: { head: string; text: string; count: string; icon: string }[];
};

const cardVariants = cva("rounded-lg shadow-md p-4", {
  variants: {
    variant: {
      primary: "bg-white-100 border border-#d19428-500 text-blue-700",
      secondary: "bg-yellow-100 border border-yellow-500 text-yellow-700",
    },
    size: {
      md: "w-64 h-55", 
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default function Card({
  variant = "primary",
  size = "md",
  cardData,
  ...props
}: CardProps) {
  return (
    <div className="card-container grid grid-cols-5 flex item-center justify-center " {...props}>
      {cardData.map((item, index) => (
        <div
          key={index}
          className={`card ${cardVariants({
            variant,
            size,
          })} 	bg-white	p-5 content-center	`}
        >
          <div className="h-10 w-10 text-zinc-950 bg-gradient-to-r from-customColor1 to-customColor2 rounded-full flex items-center justify-center p-8">
          <i className={`${item.icon} text-2xl`}></i>
          </div>
          <h1 className="text-2xl text-zinc-950 mt-3">
            <b>{item.head}</b>
          </h1>
          <p className="text-zinc-950 ">{item.text}</p>
          <p className="text-2xl text-zinc-950">
            <b>{item.count}</b>
          </p>
        </div>
      ))}
    </div>
  );
}
