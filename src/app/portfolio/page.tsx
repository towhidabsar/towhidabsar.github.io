"use client"
import { useState } from "react";
import CustomNavbar from "./components/navbar"
import { DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react';
import { cascade_menus } from "./data";
import React from "react";


export default async function Home() {
  const [data, setData] = useState(cascade_menus)
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-4xl font-bold">Towhid Chowdhury</h1>
          <h3 className="text-1xl font-bold">Bridging Software Engineering with NLP for Social Good</h3>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          {data.map((menu) => 
          <div key={menu.name} className="group relative">
          <div className="transition relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 group-hover:-translate-y-1 group-active:scale-110">
            <img
              src={menu.imageSrc}
              alt={menu.imageAlt}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <h3 className="mt-6 text-base text-center">
            <a href={menu.href}>
              <span className="absolute inset-0" />
              {menu.name}
            </a>
          </h3>
          <p className="text-sm text-center">{menu.description}</p>
          </div>
          )}
        </div>
        </div>
      </div>
  )
}
