'use client';

import { IoCopy } from 'react-icons/io5';
import { FaArrowTurnUp } from 'react-icons/fa6';
import { useState } from 'react';
import CardWork from '../../components/CardWork';
import LinkInstagram from '../../components/LinkInstagram';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const [copy, setCopy] = useState(false);
  const email = 'diegoarrudacontato@gmail.com';
  const t = useTranslations('Default')
  const T_PREFIX = "Contact."

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopy(true);
      setTimeout(() => setCopy(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  }

  return (
    <div
      className="mt-16 md:flex md:items-center md:justify-center md:flex-col"
      id="Contacts"
    >
      <CardWork text={t(T_PREFIX + "TAG_TITLE")} />
      <h1 className="mt-4 font-extrabold text-white text-2xl md:text-5xl w-[8rem] md:w-auto">
        {t(T_PREFIX + "TITLE")}
      </h1>

      <div className="md:flex md:flex-row md:items-center md:gap-10 md:mt-16">
        <div className="w-[12rem] md:flex mt-6 opacity-50">
          <LinkInstagram />
        </div>
        <div className="md:flex md:items-center md:flex-col">
          <h1 className="text-text mt-4 mb-1 font-medium md:text-xl">E-mail:</h1>
          <div className="flex flex-row items-center gap-2 md:flex-col">
            <span className="text-white opacity-50 md:text-xl">{email}</span>
            <button
              className="hover:cursor-pointer"
              onClick={handleCopy}
              aria-label="Copiar e-mail"
            >
              <IoCopy size={20} color="#7B4AE2" />
            </button>
            {copy && <span className="text-text">{t(T_PREFIX + "COPIED")}</span>}
          </div>
        </div>
      </div>

      <a
        href="#Header"
        className="flex flex-row items-center text-text font-semibold my-16 hover:cursor-pointer opacity-50"
      >
        <h1>{t(T_PREFIX + "BACK")}</h1>
        <FaArrowTurnUp size={20} className="flex" />
      </a>
    </div>
  );
}
