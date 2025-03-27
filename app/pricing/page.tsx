import ScrollIcons from '@/components/shared/scroll-icons';
import { LearnMore } from '@/components/pricing/icons';
import Prices from '@/components/pricing/prices';
import UnlockCards from '@/components/pricing/unlock-cards';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card1 from '@/assets/images/pricing/card-1.png';
import Card2 from '@/assets/images/pricing/card-2.png';
import Card3 from '@/assets/images/pricing/card-3.png';
import Card4 from '@/assets/images/pricing/card-4.png';
import Help from '@/assets/images/pricing/help.png';
import Affiliate from '@/assets/images/pricing/affiliate.png';
import Contact from '@/assets/images/pricing/contact.png';
import '@/styles/pricing.scss';

const site_url = process.env.NEXT_PUBLIC_SITE_BASE_URL;

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${site_url}/pricing`,
    },
  };
}

function Page() {
  return (
    <>
      <div className={'pricing-page'}>
        <div className={'af-container'}>
          <div className={'af-box section-1'}>
            <div className={'main-title'}>
              <div>Cresça o seu negócio com o</div>
              <div className={'text-primary'}>melhor investimento!</div>
            </div>
            <div className={'subtitle'}>
              <div>Use nosso sistema gratuitamente por 30 dias, sem informar dados de pagamento.</div>
            </div>
            <Prices />
          </div>
        </div>
        <div className={'af-container'}>
          <div className={'af-box section-2'}>
            <div className={'flex max-w-[1100px]  flex-col gap-[60px]'}>
              <div className={'main-title'}>
                <span>
                  <span className={'text-primary'}>Desbloqueie</span> o faturamento da sua empresa
                </span>
              </div>
              <div className={'cards'}>
                <div className={'card'}>
                  <Image src={Card1} alt={''} width={257} height={320} />
                  <div className={'desc'}>Demonstração do Resultado do Exercício</div>
                </div>
                <div className={'card'}>
                  <Image src={Card2} alt={''} width={257} height={320} />
                  <div className={'desc'}>Previsão de Vendas</div>
                </div>
                <div className={'card'}>
                  <Image src={Card3} alt={''} width={257} height={320} />
                  <div className={'desc'}>Relatórios</div>
                </div>
                <div className={'card'}>
                  <Image src={Card4} alt={''} width={257} height={320} />
                  <div className={'desc'}>Garantias</div>
                </div>
              </div>
            </div>
            <div className={'flex w-full max-w-[1100px] flex-col gap-[35px]'}>
              <UnlockCards />
            </div>
          </div>
        </div>
        <div className={'w-full bg-white pb-[110px]'}>
          <ScrollIcons />
        </div>
        <div className={'af-container section-3-container'}>
          <div className='glow'></div>
          <div className={'af-box section-3'}>
            <div className={'title'}>
              <span>
                Possuí <span className={'text-[#6cb640]'}>dúvidas?</span>
              </span>
            </div>
            <div className={'cards'}>
              <div className={'card'}>
                <div className='glow'></div>
                <Image src={Help} alt={''} width={151} height={121} />
                <div className={'card-title'}>Conheça nosso Blog</div>
                <Link href={'/blog'} className={'flex items-center gap-2'}>
                  Conhecer <LearnMore />
                </Link>
              </div>
              <div className={'card'}>
                <div className='glow'></div>
                <Image src={Affiliate} alt={''} width={151} height={121} />
                <div className={'card-title'}>Indique e ganhe</div>

                <Link
                  href={
                    'https://api.whatsapp.com/send?phone=5548988745520&text=Ol%C3%A1!%20Tenho%20interesse%20em%20indicar%20o%20MoneySystem'
                  }
                  className={'flex items-center gap-2'}
                >
                  Saiba Mais <LearnMore />
                </Link>
              </div>
              <div className={'card'}>
                <div className='glow'></div>
                <Image src={Contact} alt={''} width={151} height={121} />
                <div className={'card-title'}>Suporte</div>
                <Link
                  href={'https://api.whatsapp.com/send?phone=5548988745520&text=Ol%C3%A1!'}
                  className={'flex items-center gap-2'}
                >
                  WhatsApp <LearnMore />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'af-container'}>
          <div className={'af-box section-4 gap-[30px]'}>
            <div className='glow'></div>
            <div className={'flex flex-col items-center gap-5'}>
              <div className={'title'}>
                <span>
                  Comece hoje mesmo
                  <span className={'text-[#6cb640]'}> grátis</span>
                </span>
              </div>
              <div className={'desc'}>Escolha ter seus dados e uma forma mais inteligente de trabalhar</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
