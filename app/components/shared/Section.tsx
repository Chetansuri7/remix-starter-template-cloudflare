import React from "react";

export function Section({
  id,
  children,
  className = "",
  style,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      id={id}
      className={
        "py-16 px-4 md:px-0 max-w-5xl mx-auto w-full scroll-mt-20 " + className
      }
      style={style}
    >
      {children}
    </section>
  );
}