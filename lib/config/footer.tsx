import Instagram from '@/components/icons/instagram';

export const externalLinks = [
  {
    key: 'instagram',
    icon: (
      <i className={'text-white'}>
        <Instagram />
      </i>
    ),
    link: 'https://www.instagram.com/moneysystem.br',
  },
];

export const links = [
  {
    name: 'Produtos',
    children: [
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Pricing',
        link: '/pricing',
      },
    ],
  },
  {
    name: 'Empresa',
    children: [
      {
        name: 'Sobre Nós',
        link: 'https://moneysystem.com.br/#sobrenos',
      },
      {
        name: 'Fale Conosco',
        link: 'https://api.whatsapp.com/send?phone=5548988745520&text=Ol%C3%A1!',
      },
      {
        name: 'Política de Privacidade',
        link: '/terms',
      },
      {
        name: 'Termos de Uso',
        link: '/terms',
      },
    ],
  },
];
