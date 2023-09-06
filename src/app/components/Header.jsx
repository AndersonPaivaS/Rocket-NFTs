import MetaMask from "../../../public/assets/MetaMask";

export default function Header(){
    return(
        <div className="flex justify-between mx-20">
            <h1 className="text-4xl font-bold text-white">Rockets
                <span className="text-my-red"> NFTs</span>
            </h1>

            <nav className="flex items-center gap-10 text-white text-lg">
                <p className="hover:cursor-pointer hover:opacity-80">Comprar NFT</p>
                <p className="hover:cursor-pointer hover:opacity-80">Sobre</p>
                <p className="hover:cursor-pointer hover:opacity-80">FAQ</p>
            </nav>

            <button className="flex items-center justify-center gap-4 px-4 bg-white border-2 border-white hover:border-my-red hover:opacity-95">
                <MetaMask />
                <p className="text-base font-bold text-black">Conectar carteira</p>
            </button>
        </div>      
    )
}