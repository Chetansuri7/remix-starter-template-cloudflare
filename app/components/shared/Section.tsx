import React from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={
        "py-16 px-4 md:px-0 max-w-5xl mx-auto w-full scroll-mt-20 " + className
      }
    >
      {children}
    </section>
  );
}