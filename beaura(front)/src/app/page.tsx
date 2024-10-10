import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Link from 'next/link';

export default function Page() {
    return <><Header/>
    <div className="relative flex-grow">
        <div className="relative z-10 container mx-auto py-12">
            <h1 className="text-3xl font-bold pb-10 grid place-items-center text-purple-950">
                Bem vindo(a)!
            </h1>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">E-mail</label>
                    <input type="email" id="email" className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-80" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Senha</label>
                    <input type="password" id="password" className="bg-gray-700 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-80" required />
                </div>
                <button type="submit" className="text-white bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-500 dark:focus:ring-blue-800">Entrar</button>
            </form>
            <h1 className="text-3xl font-bold pt-10 pb-10 grid place-items-center text-purple-950">
                Sua primeira vez por aqui?
            </h1>
            <form className="max-w-sm mx-auto">
                <Link href="/cadastro">
                    <button type="submit" className="text-white bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-500 dark:focus:ring-blue-800">Cadastre-se agora</button>
                </Link>
            </form>
        </div>
        <div className="absolute inset-0 bg-cover bg-center opacity-25 z-0"
            style={{ backgroundImage: "url('/estetica.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        </div>
    </div>
    <Footer/></>
  }