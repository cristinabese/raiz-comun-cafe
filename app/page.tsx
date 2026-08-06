"use client";

import { useState } from "react";

const categories = [
  ["Novedades", "✦"], ["Entrantes", "🥑"], ["Brunch", "🍞"], ["Bocadillos", "🥪"],
  ["Bowls", "🥗"], ["Dulces", "🍰"], ["Cafés", "☕"], ["Smoothies", "🍓"], ["Bebidas", "🍹"],
] as const;

const products = [
  { name: "New York", category: "Brunch", description: "Pan integral, huevo, aguacate, salmón y salsa de yogur.", price: 8.4, image: "/menu/sandwiches.jpeg" },
  { name: "Higo Chungo", category: "Brunch", description: "Pan brioche, yogur, higos, frutos rojos y miel.", price: 11.9, image: "/menu/smoothies.jpeg" },
  { name: "Pikito", category: "Brunch", description: "Huevos, champiñones, queso parmesano y pan de masa madre.", price: 12.9, image: "/menu/entrantes.jpeg" },
  { name: "Aguacatado", category: "Entrantes", description: "Aguacate, huevo, queso cottage, tomate y AOVE.", price: 9.9, image: "/menu/entrantes.jpeg" },
  { name: "Tostada de aguacate", category: "Entrantes", description: "Pan artesano, aguacate, semillas y aceite de oliva.", price: 6.5, image: "/menu/cafe.jpeg" },
  { name: "Porridge de frutos rojos", category: "Bowls", description: "Avena cremosa, fruta fresca, granola y miel.", price: 5.5, image: "/menu/smoothies.jpeg" },
  { name: "Café de especialidad", category: "Cafés", description: "Espresso, leche cremosa y el origen que prefieras.", price: 3.2, image: "/menu/cafe.jpeg" },
  { name: "Smoothie de fresa", category: "Smoothies", description: "Fresa, plátano y fruta variada.", price: 3.8, image: "/menu/smoothies.jpeg" },
];

type CartItem = (typeof products)[number] & { quantity: number };

export default function Home() {
  const [started, setStarted] = useState(false);
  const [category, setCategory] = useState("Novedades");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [service, setService] = useState<"pickup" | "table">("pickup");

  const visibleProducts = category === "Novedades" ? products : products.filter((product) => product.category === category);
  const add = (product: (typeof products)[number]) => setCart((current) => {
    const found = current.find((item) => item.name === product.name);
    return found ? current.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!started) return <main className="welcome"><div className="welcome-copy"><p className="kicker">RAÍZ COMÚN · CAFETERÍA</p><p className="table-label">Mesa 12</p><h1>Un momento para<br /><em>saborear</em> sin prisa.</h1><p>Comida honesta, café de especialidad y cosas ricas para compartir.</p><button className="primary" onClick={() => setStarted(true)}>Entrar a la carta <span>↗</span></button></div><div className="welcome-art"><div className="art-sun" /><div className="art-leaf one" /><div className="art-leaf two" /><strong>hecho<br />en<br />común</strong></div><p className="bottom-note">Elige, personaliza y pide desde tu mesa.</p></main>;

  return <main className="order-app">
    <header className="topbar"><a className="logo" href="#top">raíz<span>común</span></a><span>La carta de Raíz Común</span><b>Mesa 12</b></header>
    <section className="order-hero shell" id="top"><div><p className="kicker">RAÍZ COMÚN · CARTA</p><h1>Desayunos frescos,<br /><em>café con calma.</em></h1><p>Elige, personaliza y pide desde tu mesa.</p></div><img src="/menu/cafe.jpeg" alt="Café y carta de Raíz Común" /></section>
    <section className="shell choose"><p className="kicker">ELIGE TU MOMENTO</p><h2>¿Qué te apetece hoy?</h2><p>Todo lo que ofrece Raíz Común, sin recorrer una carta interminable.</p><div className="category-grid">{categories.map(([name, icon]) => <button key={name} className={category === name ? "selected" : ""} onClick={() => setCategory(name)}><span>{icon}</span>{name}</button>)}</div></section>
    <div className="layout shell"><section className="catalog"><div className="catalog-head"><p className="kicker">RAÍZ COMÚN · CARTA</p><h2>{category}</h2><p>Ingredientes honestos, platos que abrazan y café para quedarse un rato más.</p></div><div className="product-grid">{visibleProducts.map((product) => <article className="product" key={product.name}><img src={product.image} alt={product.name} /><div className="product-body"><small>{product.category}</small><h3>{product.name}</h3><p>{product.description}</p><div className="product-foot"><strong>{product.price.toFixed(2).replace(".", ",")} €</strong><button onClick={() => add(product)}>Añadir</button></div></div></article>)}</div></section>
      <aside className="cart"><p className="kicker">TU PEDIDO · MESA 12</p><h2>Revisa y finaliza</h2>{cart.length === 0 ? <p className="muted">Añade algo de la carta para empezar.</p> : <div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.name}><span>{item.quantity} ×</span><strong>{item.name}</strong><b>{(item.price * item.quantity).toFixed(2).replace(".", ",")} €</b></div>)}</div>}<div className="service"><button className={service === "pickup" ? "active" : ""} onClick={() => setService("pickup")}>Recoger pedido<small>Gratis · te avisamos cuando esté listo</small></button><button className={service === "table" ? "active" : ""} onClick={() => setService("table")}>Servicio en mesa<small>+0,20 € · te lo llevamos a mesa 12</small></button></div><label>¿Quieres quitar algún ingrediente o añadir una indicación?<textarea placeholder="Ej.: sin tomate, leche de avena…" /></label><div className="total"><span>Total</span><strong>{(total + (service === "table" && cart.length ? 0.2 : 0)).toFixed(2).replace(".", ",")} €</strong></div><button className="checkout" disabled={!cart.length}>{cart.length ? "Continuar con el pedido" : "Elige productos para continuar"}</button></aside></div>
    <footer className="footer shell"><span>Raíz Común · hecho con calma</span><span>¿Necesitas ayuda? Avísanos</span></footer>
  </main>;
}
