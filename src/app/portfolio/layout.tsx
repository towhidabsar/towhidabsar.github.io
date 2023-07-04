'use client'
import { Inter } from 'next/font/google'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import CustomNavbar from './components/navbar';
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
    <Flowbite>
        <CustomNavbar/>
        {children}
    </Flowbite>
    </section>
  )
}
