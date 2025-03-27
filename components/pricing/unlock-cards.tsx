'use client';

import AI1 from '@/assets/images/pricing/ai-1.png';
import { Tick } from '@/components/pricing/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import AI2 from '@/assets/images/pricing/ai-2.png';

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
}

export default UnlockCards;
