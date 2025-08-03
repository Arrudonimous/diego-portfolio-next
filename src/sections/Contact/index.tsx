'use client';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopy } from 'react-icons/io5';
import { FaArrowTurnUp } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-scroll';
import CardWork from '../../components/CardWork';
import LinkInstagram from '../../components/LinkInstagram';

export default function Contact() {
  const [copy, setCopy] = useState(false);

  function handleCopy() {
    setCopy(true);
  }

  return (
    <div
      className="mt-16 md:flex md:items-center md:justify-center md:flex-col"
      id="Contacts"
    >
      <CardWork text="📬 Contatos" />
      <h1 className="mt-4 font-extrabold text-white text-2xl md:hidden">
        Entre
        {' '}
      </h1>
      <h1 className="font-extrabold text-white text-2xl md:hidden">
        em contato
      </h1>
      <h1 className="font-extrabold text-white text-2xl md:text-5xl hidden md:flex md:mt-16">
        Vamos conversar!
      </h1>

      <div className="md:flex md:flex-row md:items-center md:gap-10 md:mt-16">
        <div className="w-[12rem] md:flex mt-6 opacity-50">
          <LinkInstagram />
        </div>
        <div className="md:flex md:items-center md:flex-col">
          <h1 className="text-text mt-4 mb-1 font-medium md:text-xl">
            E-mail:
          </h1>
          <div className="flex flex-row items-center gap-2 md:flex-col">
            <span className="text-white opacity-50 md:text-xl">
              diegoarrudacontato@gmail.com
            </span>
            <div className="hover:cursor-pointer " onClick={handleCopy}>
              <CopyToClipboard text="diegoarrudacontato@gmail.com">
                <IoCopy size={20} color="#7B4AE2" />
              </CopyToClipboard>
            </div>
            {copy && <span className="text-text">E-mail Copiado!</span>}
          </div>
        </div>
      </div>
      <Link
        to="Header"
        smooth
        offset={-128}
        spy
        className="flex flex-row items-center text-text font-semibold my-16 hover:cursor-pointer opacity-50"
      >
        <h1>Voltar ao topo</h1>
        <FaArrowTurnUp size={20} className="flex" />
      </Link>
    </div>
  );
}
