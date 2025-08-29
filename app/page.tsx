import '@/styles/product.scss';
import Communities from '@/components/product/communities';
import GetStart from '@/components/product/get-start';
import MobileViews from '@/components/product/mobile-views';
import MobileDownloadBtns from '@/components/shared/mobile-download-btns';
import AiExamples from '@/components/product/ai-examples';
import AiLocalIcon from '@/components/product/ai-local-icon';
import AiLocalLightIcon from '@/components/product/ai-local-light-icon';
import AiModelIcon from '@/components/product/ai-model-icon';
import CollaborativeIcon from '@/components/product/collaborative-icon';
import FolderIcon from '@/components/product/folder-icon';
import MainDownload from '@/components/product/main-download';
import MainProducts from '@/components/product/main-products';
import UploadCloudIcon from '@/components/product/upload-cloud-icon';
import UseCases from '@/components/product/use-cases';
import ScrollIcons from '@/components/shared/scroll-icons';
import Image from 'next/image';
import iconsBg from '@/assets/images/product/icons-bg.png';
import React from 'react';

export default function Page() {
  return (
    <div className={'product-page'}>
      <div className={'af-container'}>
        <div className={'af-box section-1'}>
          <div className={'main-content'}>
            <h1>
              Mais tempo <span className={'text-primary'}>para você.</span> Mais resultado para a{' '}
              <span className={'text-primary'}>sua empresa.</span>
            </h1>
            <div className={'desc'}>O software de gestão inteligente para o crescimento do seu negócio!</div>
          </div>
          <MainDownload />
          <div className={'flex flex-col items-center gap-4'}>
            <MainProducts />
          </div>
        </div>
      </div>
      <div className={'w-full bg-[#EEEEFD] pb-[120px]'}>
        <ScrollIcons />
      </div>
      <div id='sobrenos' className={'af-container'}>
        <div className={'af-box section-3'}>
          <div className='glow'></div>
          <h2 className={'section-3-title'}>
            MoneySystem I.A{' '}
            <span
              style={{
                color: 'var(--color-primary)',
              }}
            >
              Seu melhor assistente
            </span>
          </h2>
          <AiExamples />
          <div className={'flex w-full flex-col items-center justify-center gap-[80px] pt-[26px] max-md:gap-10'}>
            <div className={'section-3-subtitle gradient-text'}>
              Acessível, colaborativo e prático<span className={'text-[#6cb640]'}></span>
            </div>
            <div className={'cards'}>
              <div className={'card'}>
                <div className='glow'></div>
                <AiLocalIcon />
                <div className={'card-title'}>
                  Facilidade no Uso
                  <div className={'card-desc'}>
                    Automatize todo o processo de venda, configurando sua conta e dos clientes em poucos cliques.
                  </div>
                </div>
              </div>
              <div className={'card'}>
                <div className='glow'></div>
                <CollaborativeIcon />
                <div className={'card-title'}>
                  Economize Tempo
                  <div className={'card-desc'}>
                    Ganhe tempo e eficiência para focar no crescimento saudável do seu negócio.
                  </div>
                </div>
              </div>

              <div className={'card'}>
                <div className='glow'></div>
                <AiModelIcon />
                <div className={'card-title'}>
                  Sua Central
                  <div className={'card-desc'}>
                    {`Simplifique o dia a dia da sua operação com uma solução completa em um único lugar.`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'af-container'}>
        <div className={'af-box section-4'}>
          <div className={'section-4-title'}>
            Poderoso e <span className={'text-primary'}>simples de usar</span>
          </div>
          <UseCases />
        </div>
      </div>
      <div className={'af-container'}>
        <div className={'af-box section-5'}>
          <div className={'section-5-title'}>
            Feito para as lojas terem
            <span className={'text-primary'}> resultados</span>
          </div>
          <div className={'cards'}>
            <div className={'card'}>
              <AiLocalLightIcon />
              <div className={'card-title'}>
                Cresça mais
                <div className={'card-desc'}>
                  {`Automatize processos e ganhe tempo para focar no crescimento do negócio`}
                </div>
              </div>
            </div>
            <div className={'card'}>
              <FolderIcon />
              <div className={'card-title'}>
                Emissão de Notas Fiscais
                <div className={'card-desc'}>{`Emita notas fiscais com mais rapidez e de forma automatizada.`}</div>
              </div>
            </div>
            <div className={'card'}>
              <UploadCloudIcon />
              <div className={'card-title'}>
                Acesse seus dados de qualquer lugar
                <div className={'card-desc'}>{`Tenha seus dados salvos com segurança na nuvem`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'af-container'}>
        <div className={'af-box section-6'}>
          <div className={'section-6-title'}>
          Feito por
            <span className={'text-primary'}> aplicadores, </span>
            para
            <span className={'text-primary'}> aplicadores.</span>
          </div>
        </div>
      </div>
      <div className={'af-container'}>
        <div className={'af-box section-7'}>
          <Communities />
        </div>
      </div>
      <div className={'flex w-full items-center justify-center pb-[96px] max-md:pb-[10vh]'}>
        <Image
          loading={'eager'}
          src={iconsBg}
          alt={'MoneySystem com I.A'}
          style={{
            width: '100%',
            height: 'auto',
          }}
          quality={100}
          width={1555}
          height={430}
        />
      </div>
      <GetStart />
    </div>
  );
}
