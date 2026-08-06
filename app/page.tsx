"use client";

import { useState } from "react";

const menu = {
  desayunos: ["Tostada de aguacate · 6,50€", "Porridge de frutos rojos · 5,50€", "Huevos benedict · 9,90€", "Croissant artesano · 2,50€"],
  brunch: ["New Yorker · 8,40€", "Higo Chungo · 10,90€", "Pikito · 12,90€", "Aguacatado · 9,90€"],
  bebidas: ["Flat white · 3€", "Matcha latte · 4€", "Smoothie de fresa · 3,80€", "Cold brew · 3€"],
};

export default function Home() {
  const [active, setActive] = useState<keyof typeof menu>("desayunos");
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#inicio">raíz<span>común</span></a>
        <div className="navlinks"><a href="#carta">Carta</a><a href="#historia">Nuestra raíz</a><a href="#visita">Visítanos</a></div>
        <a className="pill pill-dark" href="#carta">Ver carta <span>↗</span></a>
      </nav>

      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Specialty coffee · cocina vegetal</p>
          <h1>Lo que nos<br /><em>conecta</em> nace aquí.</h1>
          <p className="intro">Un espacio para comer rico, tomar buen café y encontrarnos sin prisa. De la raíz a la mesa, hecho en común.</p>
          <div className="hero-actions"><a className="pill pill-green" href="#carta">Explorar la carta <span>↗</span></a><a className="text-link" href="#historia">Conoce nuestra historia <span>↓</span></a></div>
        </div>
        <div className="hero-art"><div className="sun"></div><div className="leaf leaf-a"></div><div className="leaf leaf-b"></div><div className="stamp">CAFÉ<br /><strong>con<br />raíz</strong><br />desde 2023</div><div className="art-caption">Hecho para compartir <span>✳</span></div></div>
      </section>

      <section className="ticker"><div>CAFÉ · BRUNCH · TAPAS · SMOOTHIES · VINO · COMUNIDAD · CAFÉ · BRUNCH · TAPAS · SMOOTHIES · VINO · COMUNIDAD · </div></section>

      <section id="carta" className="menu-section shell">
        <div className="section-heading"><div><p className="eyebrow">Algo para cada momento</p><h2>La carta de <em>Raíz</em></h2></div><p>Ingredientes honestos, platos que abrazan<br />y café para quedarse un rato más.</p></div>
        <div className="menu-grid"><div className="menu-tabs">{(Object.keys(menu) as Array<keyof typeof menu>).map((item) => <button key={item} className={active === item ? "active" : ""} onClick={() => setActive(item)}>{item}</button>)}</div><div className="menu-list">{menu[active].map((item, i) => <div className="menu-item" key={item}><span>0{i + 1}</span><strong>{item.split(" · ")[0]}</strong><b>{item.split(" · ")[1]}</b><small>{i % 2 ? "con ingredientes de temporada y mucho mimo" : "nuestra manera de hacerlo especial"}</small></div>)}<a className="text-link" href="#visita">Ver toda la carta <span>↗</span></a></div></div>
      </section>

      <section id="historia" className="story shell"><div className="story-image"><img src="/menu/sandwiches.jpeg" alt="Carta de Raíz Común" /><div className="image-note">La mesa<br />es de todos.</div></div><div className="story-copy"><p className="eyebrow">Nuestra raíz</p><h2>Un café con<br /><em>algo que decir.</em></h2><p>Raíz Común nace de una idea sencilla: comer bien también puede ser una forma de cuidarnos. Creamos un lugar luminoso, cercano y lleno de cosas hechas con intención.</p><p>Aquí caben las mañanas lentas, las sobremesas largas y las conversaciones que empiezan con un café.</p><a className="text-link" href="#visita">Ven a conocernos <span>↗</span></a></div></section>

      <section id="visita" className="visit shell"><div><p className="eyebrow">Pásate por aquí</p><h2>Te guardamos<br /><em>un sitio.</em></h2></div><div className="visit-card"><p>RAÍZ COMÚN</p><h3>Tu lugar para<br />volver.</h3><div className="details"><span>☼ Abierto todos los días</span><span>⌖ Consulta nuestra ubicación</span><span>◎ @raizcomun</span></div><a className="pill pill-cream" href="https://www.google.com/search?q=Ra%C3%ADz+Com%C3%BAn+cafeter%C3%ADa" target="_blank">Cómo llegar <span>↗</span></a></div></section>

      <footer className="footer shell"><a className="brand" href="#inicio">raíz<span>común</span></a><p>Hecho con calma, servido con cariño.</p><p>© 2026 Raíz Común</p></footer>
    </main>
  );
}
