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
      console.error('Error copying email:', err);
    }
  }

  return (
    <div
      className="mt-16 md:flex md:items-center md:justify-center md:flex-col"
      id="Contacts"
    >
      <CardWork text={t(T_PREFIX + "TAG_TITLE")} />
      <h2 className="mt-4 font-display font-extrabold text-text-primary text-2xl md:text-5xl w-[8rem] md:w-auto">
        {t(T_PREFIX + "TITLE")}
      </h2>

      <div className="md:flex md:flex-row md:items-center md:gap-10 md:mt-16">
        <div className="w-[12rem] md:flex mt-6">
          <LinkInstagram />
        </div>
        <div className="md:flex md:items-center md:flex-col">
          <span className="text-primary mt-4 mb-1 font-medium md:text-xl block">{t(T_PREFIX + "EMAIL_LABEL")}</span>
          <div className="flex flex-row items-center gap-2 md:flex-col">
            <span className="text-text-secondary md:text-xl">{email}</span>
            <button
              className="hover:cursor-pointer text-primary"
              onClick={handleCopy}
              aria-label={t(T_PREFIX + "COPY_EMAIL_ARIA")}
            >
              <IoCopy size={20} />
            </button>
            {copy && <span className="text-primary">{t(T_PREFIX + "COPIED")}</span>}
          </div>
        </div>
      </div>

      <a
        href="#Header"
        className="flex flex-row items-center text-primary font-semibold my-16 hover:cursor-pointer"
      >
        <span>{t(T_PREFIX + "BACK")}</span>
        <FaArrowTurnUp size={20} className="flex" />
      </a>
    </div>
  );
}
