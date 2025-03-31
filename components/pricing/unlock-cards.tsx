'use client';

import { Tick } from '@/components/pricing/icons';
import Link from 'next/link';
import React, { useCallback } from 'react';

function UnlockCards() {
  const renderCard = useCallback(
    (item: { icon: React.ReactNode; title: string; desc: string; num: string; duration: string; content: string[] }) => (
      <div className={'ai-card'}>
        {item.icon}
        <div className={'flex flex-col gap-[14px]'}>
          <div className={'ai-card-title'}>{item.title}</div>
          <div className={'ai-card-desc'}>{item.desc}</div>
        </div>
        <div className={'flex flex-col gap-[10px]'}>
          <div className={'ai-card-num'}>{item.num}</div>
          <div className={'ai-card-duration'}>{item.duration}</div>
        </div>
        <Link href={'/download'}>
          <button className={'ai-card-btn'}>Unlock</button>
        </Link>
        <div className={'flex flex-col gap-2'}>
          {item.content.map((content, index) => (
            <div key={index} className={'ai-card-content-item'}>
              <Tick />
              <div className={'flex-1 whitespace-pre-wrap break-words'}>{content}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, index) => (
        <React.Fragment key={index}>
          {renderCard(card)}
        </React.Fragment>
      ))}
    </div>
  );
}

export default UnlockCards;