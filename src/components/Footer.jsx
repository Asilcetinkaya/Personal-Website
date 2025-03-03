import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Footer() {
  const { textData, lang } = useLang();
  const txt = textData[lang].footer;
  return (
    <div className="dark:bg-[#141414]">
      <div className="max-w-6xl justify-center mx-auto py-20 flex flex-col items-center md:items-start">
        <div className="text-4xl font-semibold	lg:max-w-[540px] leading-tight flex-wrap mb-8 text-center ">
          <span className="dark:text-[#AEBCCF]">{txt.title}</span>
        </div>
        <div className="flex justify-center sm:w-full sm:justify-between flex-wrap ">
          <div className="inline-flex mb-4">
            <span className="mr-2">👉</span>
            <a
              href="mailto:asilcetinkaya48@gmail.com"
              className="font-medium text-[#AF0C48] text-xl underline dark:text-[#BAB2E7]"
            >
              {txt.links.email}
            </a>
          </div>
          <div className="inline-flex flex-wrap gap-x-4">
            <a
              href="https://medium.com/@asil.dev"
              className="font-medium text-lg dark:text-[#BAB2E7]"
            >
              {txt.links.blog}
            </a>
            <a
              href="https://github.com/Asilcetinkaya"
              className="font-medium text-lg text-[#00AB6B]"
            >
              {txt.links.git}
            </a>
            <a
              href="https://www.linkedin.com/in/asilcetinkaya/"
              className="font-medium text-lg text-[#0077B5] dark:text-[#0BA6F6]"
            >
              {txt.links.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
