import Mobile from '@/components/icons/mobile';
import Desktop from '@/components/icons/desktop';

/**
 * Config for the navigation bar
 */
export const navigation: Item[] = [
  {
    name: 'Sobre Nós',
    href: '#sobrenos',
    key: '#sobrenos',
  },
  {
    name: 'Planos',
    href: '/pricing',
    key: 'pricing',
  },
  {
    name: 'Blog',
    href: '/blog',
    key: 'blog',
  },
];

export interface Item {
  href?: string;
  children?: Item[];
  key: string;
  name: string;
  desc?: string;
  placement?: 'left' | 'right' | 'center';
  icon?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
}
