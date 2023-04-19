import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <React.StrictMode>
            <div className="container mx-auto flex justify-between items-center p-2 py-10 pl-10 pr-10">
                <div className="logo text-3xl font-medium">
                    SuBhowm.
                </div>
                <div className="links">
                    <ul className='flex items-center text-sm space-x-6 font-medium'>
                        <li>
                            <Link to={`/`}>Work</Link>
                        </li>
                        <li>
                            <Link to={`about`}>About</Link>
                        </li>
                        <li>
                            <Link to={``}>Playground</Link>
                        </li>
                        <li>
                            <Link to={``}>Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </React.StrictMode>
    )
}
