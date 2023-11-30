import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import React, { useState } from 'react'
import './menuHamburg.css'
import { Hyperlinks } from "../Hyperlinks/Hyperlinks";

export function MenuHamburg() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    }

    return (
        <>
            <section className="menuDropdown">
                <button className='btnHamburg' onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </button>
                {
                    isOpen && (
                        <div className='dropdown' >
                            <div className="py-6 px-8">
                                <button className='btnHamburg' onClick={toggleMenu}>
                                    <IoMdClose />
                                </button>
                            </div>
                            <Hyperlinks />
                        </div>)
                }
            </section>
        </>
    )
}
