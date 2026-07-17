import menu from '../assets/menu01.png';

export const siteContent = {
  site: {
    title: 'イタリアンデモ',
    description: 'イタリアンの飲食店です。',
  },
  header: {
    logo: 'サンプル',
    navigation: [
      { label: 'sample01', href: '#' },
      { label: 'sample02', href: '#' },
      { label: 'sample03', href: '#' },
      { label: '123-4567-8910', href: '#', isButton: true },
    ],
  },
  hero: {
    image: {
      src: menu,
      alt: '店舗イメージ写真',
    },
  },
  menu: {
    title: 'メニュー',
    items: [
      {
        label: 'サンプル',
        price: 1000,
        image: menu,
        alt: 'サンプル',
      },
      {
        label: 'サンプル',
        price: 1000,
        image: menu,
        alt: 'サンプル',
      },
      {
        label: 'サンプル',
        price: 1000,
        image: menu,
        alt: 'サンプル',
      },
    ],
  },
  info: {
    title: '基本情報',
    shop: [
      { label: '店舗名', text: 'サンプル' },
      { label: '住所', text: '東京都サンプル区' },
      { label: '電話番号', text: '123-4567-8910', href: 'tel:12345678910' },
      { label: '営業時間', text: '10:00～' },
    ],
  },
  cta: {
    title: 'お問い合わせ',
    button: {
      label: '123-4567-8910',
      href: 'tel:12345678910',
    },
  },
  footer: {
    copyright: '2026 example',
  },
} as const;
