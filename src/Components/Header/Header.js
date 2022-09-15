import React from 'react'

const Header = () => {
  
    return (
        <header className="header bg-zinc-300 flex w-full justify-around items-center drop-shadow">
            <div className='logo-container '>
                <h1 className='text-4xl cursor-pointer'>Cloud checkpoint</h1>
            </div>
            <div className='navigation'>
                <h1 className='text-3xl cursor-pointer'>Lieu</h1>
            </div>
        </header>
    )
}

export default Header;