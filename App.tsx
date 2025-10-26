
import React from 'react';
import { COLLECTION_ITEMS, NAV_LINKS } from './constants';
import { CollectionItem, NavLink } from './types';
import CollectionCard from './components/CollectionCard';

const Header: React.FC = () => {
  return (
    <header className="bg-stone-900/80 backdrop-blur-sm text-stone-100 p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-display tracking-wider">老派收藏室</h1>
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link: NavLink) => (
            <a key={link.name} href={link.href} className="font-body hover:text-amber-400 transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/vintageroom/1920/1080')" }}>
      <div className="bg-black/50 p-8 rounded-lg text-center">
        <h2 className="text-6xl font-display mb-4">品味時光，珍藏經典</h2>
        <p className="text-xl font-body">探索那些被歲月遺忘的美好事物。</p>
      </div>
    </section>
  );
};

const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-20 bg-[#FDF8F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center text-stone-800 mb-12">精選藏品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COLLECTION_ITEMS.map((item: CollectionItem) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-200">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-4xl font-display text-stone-800 mb-8">關於我們</h2>
        <p className="text-lg text-stone-700 leading-relaxed font-body">
          「老派收藏室」不僅僅是一個網站，它是一個對過去美好時代的致敬。我們相信，在快速變遷的現代社會中，那些經過時間考驗的經典物品，蘊含著無可取代的工藝、故事與靈魂。我們致力於發掘並展示這些珍品，希望能與您一同分享那份屬於老派的浪漫與堅持。
        </p>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#FDF8F0]">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-4xl font-display text-stone-800 mb-8">聯絡方式</h2>
        <p className="text-lg text-stone-700 mb-4 font-body">
          對我們的藏品有興趣，或是有任何合作想法嗎？歡迎隨時與我們聯繫。
        </p>
        <a href="mailto:contact@oldschoolcollection.com" className="inline-block bg-stone-800 text-white font-body py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors duration-300">
          寄送電子郵件
        </a>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-6 text-center">
      <p className="font-body">&copy; {new Date().getFullYear()} 老派收藏室. All Rights Reserved.</p>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-[#FDF8F0] text-stone-800">
      <Header />
      <main>
        <Hero />
        <Collections />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
