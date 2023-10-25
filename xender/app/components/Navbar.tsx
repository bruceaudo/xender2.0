import Image from 'next/image';
import React from 'react';
const os = require("node:os")

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <nav className="h-12 z-10 bg-gray-200 fixed top-0 left-0 right-0 flex items-center px-5 border-b border-b-gray-300 justify-between">
        <div>Logo</div>
        <div className="flex gap-4 items-center">
          <p className="text-sm">{`Welcome, ${os.hostname()}`}</p>
          <Image src={"/profile.jpeg"} alt="profile" width={30} height={30} className="rounded-full object-cover h-[30px] w-[30px]" />
        </div>
      </nav>;
}
export default Navbar;