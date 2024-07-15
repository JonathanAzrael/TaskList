import Logo from '../assets/logo.png'
import { useState } from 'react';

export function SideBar() {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

    return(
        <>
            {/* SideBar tela cheia */}
            <div className="hidden lg:flex h-screen w-[250px] bg-greenLogo flex-col justify-between items-center py-10">
                <img alt='logo' src={Logo} className='w-[120px]' />
                <a href='/' className='text-white hover:text-gray-300 font-semibold text-xl'>Sair</a>
            </div>

            {/* Menu Sandwich */}
            <div className="absolute lg:hidden">
                <div className='flex gap-6'>
                    <button
                    className="flex items-center p-4 text-white"
                    onClick={toggleMenu}
                    >
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute w-[200px] items-center text-center flex flex-col py-8 gap-4 mt-2 bg-white border rounded shadow-xl">
                        <img alt='logo' src={Logo} className='w-[60px]' />
                        <a href="#home" className="font-medium text-lg hover:text-yellow-custom">
                            Adicionar Tarefas
                        </a>  
                        <a href="#home" className="font-medium text-lg hover:text-yellow-custom">
                            Lista de Tarefas
                        </a> 
                        <a href="#home" className="font-medium text-lg hover:text-yellow-custom">
                            Sair
                        </a>   
                    </div>
                )}
            </div>
        </>
    )
}