import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Header  () {
  return (
   <header className="flex items-center justify-between space-x-2 font-bold px-10 py-10">
    <div className="flex items-center space-x-2">
        <Link href="/" >
        <Image
        className="rounded-3xl"
        width={40}
        height={40}
        src="https://static.vecteezy.com/system/resources/previews/002/820/463/original/initial-j-gaming-esport-logo-design-modern-template-free-vector.jpg"
        alt="logo"
        />
        </Link>  
        <h1>Jigmee W Sherpa</h1>
    </div>
    <div></div>
   </header>
  );
}
export default Header;
