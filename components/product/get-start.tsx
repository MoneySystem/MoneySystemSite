'use client';
import { useClient } from '@/lib/hooks/use-client';
import { webApplicationUrl } from '@/lib/web-application';
import Link from 'next/link';
import React from 'react';

function GetStart() {
  const { isMobile } = useClient();

  return (
    <div className={'af-container bg-[#2B1A3F]'}>
      <div className={'af-box section-8'}>
        <div className="glow"></div>
        <div className={'section-8-title'}>
          <div>
            Comece hoje mesmo
            <span className={'text-[#6cb640]'}> grátis</span>
          </div>
          <div className={'section-8-desc'}>Escolha ter seus dados e uma forma mais inteligente de trabalhar</div>
        </div>
        <div className={'section-8-btns'}>
          <Link
            className={'download-btn'}
            href={'https://api.whatsapp.com/send?phone=5548988745520&text=Ol%C3%A1!%20Tenho%20interesse%20no%20MoneySystem'}
          >
            Suporte WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStart;
