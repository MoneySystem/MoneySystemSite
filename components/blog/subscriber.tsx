'use client';

import { useSubscriber } from '@/components/blog/use-subscriber';
import Twitter from '@/components/icons/twitter';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

function Subscriber() {
  const { email, setEmail, handleSubscribe } = useSubscriber();

  return (
    <div className={'flex flex-col gap-10'}>
      <div className={'flex items-center gap-[10px] max-md:flex-col max-md:gap-5'}>
        <div className={'flex h-[60px] w-[300px] items-center rounded-[16px] bg-white px-6 py-3 max-md:w-full'}>
          <input
            className={'text-base outline-none'}
            placeholder={'Enter your email'}
            value={email}
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div onClick={handleSubscribe} className={'download-btn cursor-pointer max-md:w-full'}>
          Inscrever
        </div>
      </div>
      <div className={'flex items-center justify-center gap-6'}>
        <div className={'text-sm opacity-50'}>Nos siga</div>
        <div className={'share flex items-center gap-3'}>
          <Link target={'_blank'} className={cn('share-btn')} href={'https://instagram.com'}>
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subscriber;
