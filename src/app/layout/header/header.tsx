export function Header(){
    return(
        <header className="container mx-auto px-4 flex items-center ">
            <h1 className='text-red-300 font-bold mt-4'>Logo</h1>

            <ul className="ml-auto flex flex-row gap-4 mt-4">
                <li>
                    <a href="" target="_blank" className="text-sm font-bold text-gray-500 hover:rounded-3xl hover:border-b-4 hover:cursor-pointer hover:text-green-700">
                        Como reservar
                    </a>
                </li>
                <li>
                <a href="" target="_blank" className="text-sm font-bold hover:border-b-4 hover:rounded-3xl text-gray-500 hover:cursor-pointer hover:text-green-700">
                        Sobre nós
                    </a>
                </li>
                <li>
                <a href="" target="_blank" className="text-sm font-bold text-gray-500 hover:rounded-3xl hover:border-b-4  hover:cursor-pointer hover:text-green-700">
                        Informações
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" className="text-sm font-bold text-gray-500 hover:rounded-3xl hover:border-b-4  hover:cursor-pointer hover:text-green-700">
                        Contacto
                    </a>
                </li>
            </ul>
        </header>
    )
}