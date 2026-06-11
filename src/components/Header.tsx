"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#111111] border-b border-green-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-3xl font-bold text-green-500">
          BET DO INTERIOR
        </div>

        {/* Menu */}
        <nav className="flex gap-8 text-white font-medium">

          <Link href="/">
            Início
          </Link>

          <Link href="/cassino">
            Cassino
          </Link>

          <Link href="/ao-vivo">
            Ao Vivo
          </Link>

          <Link href="/esportes">
            Esportes
          </Link>

          <Link href="/promocoes">
            Promoções
          </Link>

          <Link href="/vip">
            VIP
          </Link>

        </nav>

        {/* Botões */}
        <div className="flex gap-3">

          <Link
            href="/login"
            className="px-5 py-2 rounded-lg bg-zinc-800 text-white"
          >
            Entrar
          </Link>

          <Link
            href="/cadastro"
            className="px-5 py-2 rounded-lg bg-green-500 text-black font-bold"
          >
            Cadastrar
          </Link>

        </div>

      </div>
    </header>
  );
}
