import React from 'react'
import Image from 'next/image';
import banner from '../../../../public/hotel.avif';
import  atendimento from '../../../../public/atendimento.webp';
import casais from '../../../../public/casais.webp';
import limpeza from '../../../../public/limpeza.webp';
import lazer from '../../../../public/lazer.webp';

export function Main(){
    return(
        <main className='container mt-7'>
            <div className='w-screen h-[400px] overflow-hidden rounded'>
            <Image src={banner}  alt="hotel img" className='w-screen h-screen object-cover'/>
            </div>

             <div className='container w-[70%] h-[60%] -mt-96 px-4 h-full flex justify-center  absolute ml-16'>
                <div className='text-center w-screen'>
                    <h2 className='text-green-400 text-3xl mb-2 ml-36 font-bold'>Onde você quer ir?</h2>
                    <p className='text-green-800 font-bold ml-36'>Escolha o seu estado ou cidade para hospedar!</p>
                
                    <form className='mt-4 w-[90%] h-[50%] space-y-10 ml-36 space-x-4'>
                        <select className='bg-white w-40 h-10  px-3 py-2 border border-gray-300 rounded text-gray-500'>
                            <option value="">Escolha cidade</option>
                            <option value="">Luanda</option>
                            <option value="">Huambo</option>
                            <option value="">Namibe</option>
                            <option value="">Huila</option>
                        </select>

                        <select className='bg-white w-40 h-10  px-3 py-2 border border-gray-300 rounded text-gray-500'>
                            <option value="">Escolha monicipio</option>
                            <option value="">Luanda</option>
                            <option value="">Mutamba</option>
                            <option value="">Benfica</option>
                            <option value="">Namibe</option>
                            <option value="">Cidade do Humabo</option>
                            <option value="">Huila</option>
                        </select>
                        <input type="search" placeholder='Pesquisar por resorts' className='w-64 h-8 border rounded' />
                       
                    </form>

                </div>
            </div>

            
                <div className='container px-2 py-10 w-screen h-[400px] flex flex-row ml-24 mt-4'>
                    <div className='w-screen h-[400px] flex flex-col p-4'>
                        <h1 className='text-sm text-green-400 font-semibold'>Resort em destaque</h1>
                        <h2 className='text-2xl text-black font-extrabold mt-2'>YhaSort BaKogú</h2>
                        <span className=' mt-1 text-black font-semibold'>Hotel de 5 estrelas</span>
                    
                         <div className='flex flex-col gap-4 mt-4' >
                             <p className='text-black mb-1 text-justify font-medium text-sm'>
                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Quos laboriosam nihil eius harum molestiae et dolore sed molestias 
                                nobis officia provident porro voluptatem, nesciunt iure cumque quae 
                                modi voluptatibus mollitia?
                            </p>
                            <p className='text-black mb-1 text-justify text-sm font-medium'>
                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Quos laboriosam nihil eius harum molestiae et dolore sed molestias 
                                nobis officia provident porro voluptatem, nesciunt iure cumque quae 
                                modi voluptatibus mollitia?
                            </p>
                            <p className='text-black text-justify text-sm'>
                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Quos laboriosam nihil eius harum molestiae et dolore sed molestias 
                                nobis officia provident porro voluptatem, nesciunt iure cumque quae 
                                modi voluptatibus mollitia?
                            </p>
                            <button type='submit' className='bg-green-300 mt-2 w-[150px] h-[30px] rounded'>Ver mais detalhes</button>
                    </div>
                   
                </div>
                    <div className='w-screen h-screen ml-auto cursor'>
                        <Image src={banner} alt='img' className='w-[480px] h-[350px] ml-2'/>
                    </div>
            </div>

            <div className='container px-4 ml-20 mt-36 w-screen h-[450px]'>
                <div className='p-4 relative'>
                    <h3 className='text-green-500 font-extrabold text-2xl text-center mb-4'>Conecta mais hoteis</h3>

                    <div className='grid grid-cols-4 grid-rows-2 gap-4'>
                        <div className='col-span-2 row-span-2'>
                            <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold'>
                                <p className='absolute text-white font-bold'>Bom atendimento</p>
                            </div>
                            <Image src={atendimento} alt='' className='rounded-lg w-screen h-[350px] object-cover'/>
                        </div>
                        <div className='col-span-2'>
                                <div className='absolute text-white font-bold'>
                                     <p>Cliente satisfeito</p>
                                </div>
                            <Image src={casais} alt='' className='rounded-lg'/>
                        </div>
                        <div>
                             <div className='absolute text-green-700 font-bold mb-4'>
                                <p>Cuidado e higiene</p>
                             </div>
                            <Image src={limpeza} alt='' className='h-[100px] rounded-lg'/>
                        </div>
                        <div>
                            <div className='absolute  text-white font-bold mt-16'>
                                <p>Lazer</p>
                            </div>
                            <Image src={lazer} alt='' className='h-[100px] rounded-lg'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-14'>
                  <form className='mt-4 w-[90%] h-[50%] space-y-10 ml-36 space-x-4'>
                        <select className='bg-white w-40 h-10  px-3 py-2 border border-gray-300 rounded text-gray-500'>
                            <option value="">Escolha cidade</option>
                            <option value="">Luanda</option>
                            <option value="">Huambo</option>
                            <option value="">Namibe</option>
                            <option value="">Huila</option>
                        </select>

                        <select className='bg-white w-40 h-10  px-3 py-2 border border-gray-300 rounded text-gray-500'>
                            <option value="">Escolha monicipio</option>
                            <option value="">Luanda</option>
                            <option value="">Mutamba</option>
                            <option value="">Benfica</option>
                            <option value="">Namibe</option>
                            <option value="">Cidade do Humabo</option>
                            <option value="">Huila</option>
                        </select>
                        <input type="search" placeholder='Pesquisar por resorts' className='w-64 h-8 border rounded' />
                       
                    </form>
            </div>
        </main>
    )
}