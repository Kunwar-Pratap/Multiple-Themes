"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'


const themes = [
  { name: 'Light' },
  { name: 'Dark' },
  { name: 'Blue' },
  { name: 'Pink' },
  { name: 'Lime' },
]

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null;

  return (
    <div className='flex  w-full justify-between items-center'>
      <label htmlFor="theme-selector" className="inline-block text-nowrap text-sm font-medium text-th-t-navbar"> Choose theme :&nbsp;&nbsp;</label>
      <select
        name="theme"
        id="theme-selector"
        value={theme}
        onChange={(e) => setTheme(e.currentTarget.value)}
        className="bg-th-placeholder border-none text-th-t-navbar text-sm rounded-lg  block w-full md:p-2 p-1 focus:outline-none cursor-pointer">
        <option value="system">System</option>
        {themes.map((item) => {
          return (
            <option
              className='px-4 border-none'
              key={item.name.toLowerCase()}
              value={item.name.toLowerCase()}
            >
              {item.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default ThemeToggle