'use client';

import HeroDesc from '@/components/shared/hero-desc';
import { Button } from '@/components/ui/button';
import { useClient } from '@/lib/hooks/use-client';
import { useDownload } from '@/lib/hooks/use-download';
import { webApplicationUrl } from '@/lib/web-application';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { collectEvent, EventName } from '@/lib/collect';
import LinuxBtnGroup from '@/components/shared/linux-btn-group';

function MainDownload({ showDesc = true }: { showDesc?: boolean }) {
  const { downloadOS, getOsDownloadLink } = useDownload();
  const ref = useRef(null);
  const { isClient, isLinux, isMobile } = useClient();
  const inView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if(inView && isClient) {
      collectEvent(EventName.homePageDownloadBtn, {
        type: 'view',
      });
    }
  }, [isClient, inView]);
  return (
<div className={'main-download'}>
  <div className={'flex w-full items-center justify-center gap-4 max-sm:flex-col'}>
    {isLinux ? (
      <LinuxBtnGroup title={'Teste Grátis'} />
    ) : (
      <Button
        className={'flex-1'}
        size={'2xl'}
        onClick={() => {
          // Redireciona para a página de cadastro do MoneySystem
          window.open('https://app.moneysystem.com.br/index.php/cadastro', '_blank');

          // Coleta evento de clique
          collectEvent(EventName.homePageDownloadBtn, {
            type: 'click',
          });
        }}
      >
        <div className={'title'}>{`Teste Grátis`}</div>
      </Button>
    )}
{!isMobile && (
  <Button
    onClick={() => {
      collectEvent(EventName.homePageTryForFreeBtn, {
        type: 'click',
      });
      const phoneNumber = '+5548984444444';
      const message = 'Olá, estou interessado em testar o MoneySystem!';
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappLink, '_blank');
    }}
    className={'flex-1'}
    size={'2xl'}
    variant={'accent'}
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp" style={{ width: '24px', marginRight: '8px' }} />
    WhatsApp
  </Button>
)}
      </div>

      {showDesc && <HeroDesc inView={inView} />}
    </div>
  );
}

export default MainDownload;
