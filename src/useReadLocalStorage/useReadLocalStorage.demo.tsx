import React from 'react'

import { useReadLocalStorage } from '..'

export default function Component() {
  // Assuming a value was set in localStorage with this key
  const darkMode = useReadLocalStorage('darkMode')

  return <p>DarkMode is {darkMode ? 'enabled' : 'disabled'}</p>
}