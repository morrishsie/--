
import { CollectionItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: '主頁', href: '#home' },
  { name: '精選藏品', href: '#collections' },
  { name: '關於我們', href: '#about' },
  { name: '聯絡方式', href: '#contact' },
];

export const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: 1,
    title: '老派送禮',
    description: '為特別的人量身定制一份禮物。點擊卡片，透過一個有趣的測驗找到最適合他/她的驚喜。',
    imageUrl: 'https://picsum.photos/seed/gift/600/400',
    href: 'https://ooopenlab.cc/quiz/ZCDun2uQ29vKx1VYWnXq',
  },
  {
    id: 2,
    title: '老派收藏',
    description: '每個人都有一顆懷舊的心，點擊卡片做測驗看看自己適合什麼收藏。',
    imageUrl: 'https://picsum.photos/seed/vinyl/600/400',
    href: 'https://ooopenlab.cc/quiz/NDTTkp1Ztwul0wDevbao',
  },
  {
    id: 3,
    title: '古典鋼筆',
    description: '筆尖劃過紙張的觸感，墨水渲染的痕跡，讓書寫成為一種藝術與儀式。',
    imageUrl: 'https://picsum.photos/seed/pen/600/400',
  },
  {
    id: 4,
    title: '精裝舊書',
    description: '泛黃的書頁與淡淡的墨香，不僅是文字的載體，更是智慧與歷史的沉澱。',
    imageUrl: 'https://picsum.photos/seed/book/600/400',
  },
  {
    id: 5,
    title: '機械懷錶',
    description: '精密的齒輪與滴答聲，記錄著流逝的每一秒，是紳士品味的象徵。',
    imageUrl: 'https://picsum.photos/seed/watch/600/400',
  },
  {
    id: 6,
    title: '老式打字機',
    description: '清脆的敲擊聲譜寫著篇章，每個字母都留下獨一無二的印記。',
    imageUrl: 'https://picsum.photos/seed/typewriter/600/400',
  },
];