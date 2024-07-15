import Logo from '../assets/logo.png'

export function SideBar() {
    return(
        <div className="h-screen w-[250px] absolute z-[999] bg-gray-950 flex flex-col justify-between items-center py-10">
            <img alt='logo' src={Logo} className='w-[120px]' />
            <a href='/' className='text-white hover:text-bluePrimary font-semibold text-xl'>Sair</a>
        </div>
    )
}