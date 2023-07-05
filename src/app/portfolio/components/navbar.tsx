'use client';

import { useState } from 'react';
import { Button, DarkThemeToggle, Navbar } from 'flowbite-react';
import { cascade_menus } from "../data";
import React from 'react';
export default function CustomNavbar() {
  const [data, setData] = useState(cascade_menus)
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="#">
        <img
          alt="Towhid Logo"
          className="mr-3 h-6 sm:h-9"
          src="/towhid.webp"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Towhid Absar Chowdhury
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/portfolio"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        {data.map((menu) => 
          <Navbar.Link href={`/portfolio/${menu.href}`} key={menu.href}>
            {menu.name}
          </Navbar.Link>
        )}
        {/* <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Work
        </Navbar.Link>
        <Navbar.Link href="#">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#">
          Research
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  )
}


