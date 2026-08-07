"use client";

import { useState } from "react";

const categories = [
  ["Novedades", "✦"], ["Entrantes", "🥑"], ["Montaditos", "🥖"], ["Tapas", "🍽️"],
  ["Sandwiches", "🥪"], ["Wraps", "🌯"], ["Ensaladas", "🥗"], ["Smoothies", "🍓"],
  ["Cafés", "☕"], ["Tés", "🍵"], ["Bebidas", "🍹"], ["Cócteles", "🍸"],
] as const;

const products = [
  { name: "Nachos Raíz", category: "Entrantes", description: "Nachos con queso, guacamole y acompañamientos de la casa.", price: 7.9, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=82" },
  { name: "Nachos Pulled Pork", category: "Entrantes", description: "Nachos, pulled pork, queso fundido y salsa de la casa.", price: 8.5, image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=900&q=82" },
  { name: "Tomate aliñado", category: "Entrantes", description: "Tomate, melva y aceite de oliva virgen extra.", price: 5.5, image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=82" },
  { name: "Hummus", category: "Entrantes", description: "Hummus cremoso con crudités y pan tostado.", price: 6.5, image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=82" },
  { name: "Tosta de queso de cabra, miel y nueces", category: "Entrantes", description: "Tosta artesana con queso de cabra, miel y nueces.", price: 7.5, image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=82" },
  { name: "Tabla de quesos", category: "Entrantes", description: "Selección de quesos para compartir.", price: 12.9, image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=900&q=82" },
  { name: "Jamón y queso Gouda", category: "Montaditos", description: "Montadito de jamón y queso Gouda.", price: 3.5, image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=900&q=82" },
  { name: "Pollo aliñado", category: "Montaditos", description: "Pollo aliñado en pan artesano.", price: 3.5, image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=900&q=82" },
  { name: "Salmón crema", category: "Montaditos", description: "Salmón ahumado y crema suave.", price: 3.5, image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=82" },
  { name: "Tortilla", category: "Tapas", description: "Tortilla casera de patata.", price: 3.9, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=82" },
  { name: "Ensaladilla", category: "Tapas", description: "Ensaladilla casera con ingredientes frescos.", price: 3.9, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82" },
  { name: "Carrilleras", category: "Tapas", description: "Carrilleras cocinadas a fuego lento.", price: 4.5, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=82" },
  { name: "New York", category: "Sandwiches", description: "Pollo, huevo, queso, lechuga y salsa de yogur.", price: 8.4, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=82" },
  { name: "Origen", category: "Sandwiches", description: "Pollo, pimiento, cebolla y salsa de la casa.", price: 10.9, image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=82" },
  { name: "Higo Chungo", category: "Sandwiches", description: "Higo, queso, rúcula y contraste dulce-salado.", price: 11.9, image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=82" },
  { name: "Aguacatado", category: "Sandwiches", description: "Aguacate, huevo, queso cottage, tomate y AOVE.", price: 9.9, image: "https://images.unsplash.com/photo-1770306925042-05987831cb6e?auto=format&fit=crop&w=900&q=82" },
  { name: "Nórdico", category: "Wraps", description: "Salmón, queso crema, lechuga y aguacate.", price: 9.9, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=82" },
  { name: "Mexicano", category: "Wraps", description: "Pollo, guacamole, queso, maíz y salsa mexicana.", price: 8.9, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=82" },
  { name: "La Hiedra", category: "Wraps", description: "Espinacas, queso, pollo y salsa fresca.", price: 9.9, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=900&q=82" },
  { name: "Ensalada Raíz", category: "Ensaladas", description: "Hojas verdes, tomate, aguacate, queso y semillas.", price: 10.9, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82" },
  { name: "Smoothie de fresa", category: "Smoothies", description: "Fresa, plátano y fruta variada.", price: 3.8, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=82" },
  { name: "Café de especialidad", category: "Cafés", description: "Espresso, leche cremosa y el origen que prefieras.", price: 3.2, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=82" },
  { name: "Té matcha", category: "Tés", description: "Matcha preparado al momento.", price: 3, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=82" },
  { name: "Mojito de mango", category: "Cócteles", description: "Mango, hierbabuena, lima y soda.", price: 8, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=82" },
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
    <section className="order-hero shell" id="top"><div><p className="kicker">RAÍZ COMÚN · CARTA</p><h1>Desayunos frescos,<br /><em>café con calma.</em></h1><p>Elige, personaliza y pide desde tu mesa.</p></div><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=82" alt="Café de especialidad de Raíz Común" /></section>
    <section className="shell choose"><p className="kicker">ELIGE TU MOMENTO</p><h2>¿Qué te apetece hoy?</h2><p>Todo lo que ofrece Raíz Común, sin recorrer una carta interminable.</p><div className="category-grid">{categories.map(([name, icon]) => <button key={name} className={category === name ? "selected" : ""} onClick={() => setCategory(name)}><span>{icon}</span>{name}</button>)}</div></section>
    <div className="layout shell"><section className="catalog"><div className="catalog-head"><p className="kicker">RAÍZ COMÚN · CARTA</p><h2>{category}</h2><p>Ingredientes honestos, platos que abrazan y café para quedarse un rato más.</p></div><div className="product-grid">{visibleProducts.map((product) => <article className="product" key={product.name}><img src={product.image} alt={product.name} /><div className="product-body"><small>{product.category}</small><h3>{product.name}</h3><p>{product.description}</p><div className="product-foot"><strong>{product.price.toFixed(2).replace(".", ",")} €</strong><button onClick={() => add(product)}>Añadir</button></div></div></article>)}</div></section>
      <aside className="cart"><p className="kicker">TU PEDIDO · MESA 12</p><h2>Revisa y finaliza</h2>{cart.length === 0 ? <p className="muted">Añade algo de la carta para empezar.</p> : <div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.name}><span>{item.quantity} ×</span><strong>{item.name}</strong><b>{(item.price * item.quantity).toFixed(2).replace(".", ",")} €</b></div>)}</div>}<div className="service"><button className={service === "pickup" ? "active" : ""} onClick={() => setService("pickup")}>Recoger pedido<small>Gratis · te avisamos cuando esté listo</small></button><button className={service === "table" ? "active" : ""} onClick={() => setService("table")}>Servicio en mesa<small>+0,20 € · te lo llevamos a mesa 12</small></button></div><label>¿Quieres quitar algún ingrediente o añadir una indicación?<textarea placeholder="Ej.: sin tomate, leche de avena…" /></label><div className="total"><span>Total</span><strong>{(total + (service === "table" && cart.length ? 0.2 : 0)).toFixed(2).replace(".", ",")} €</strong></div><button className="checkout" disabled={!cart.length}>{cart.length ? "Continuar con el pedido" : "Elige productos para continuar"}</button></aside></div>
    <footer className="footer shell"><span>Raíz Común · hecho con calma</span><span>¿Necesitas ayuda? Avísanos</span></footer>
  </main>;
}
