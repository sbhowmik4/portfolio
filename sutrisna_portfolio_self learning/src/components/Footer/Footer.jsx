import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <React.StrictMode>
      <footer className='container mx-auto flex justify-between items-center p-2'>
        <div className="flex flex-row flex-wrap items-center justify-between w-full">
            <h5 className='text-blue-700'>Sutrisna Bhowmik ⏤ 2023</h5>
            <ul className='flex items-center space-x-6'>
                <li>
                    <Link to={``}>Behance</Link>
                </li>
                <li>
                    <Link to={``}>Linkedin</Link>
                </li>
                <li>
                    <Link to={``}>Twitter</Link>
                </li>
            </ul>
        </div>
      </footer>
    </React.StrictMode>
  )
}
