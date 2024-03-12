import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="flex flex-wrap p-8 justify-center p-8">
                <div className="w-[350px] mr-6">
                    <Image src="/Logo.png" alt="Caminho dos Anjos" width={150} height={150} />
                </div>
                <div className="w-[350px] mr-6">
                    <ul>
                        <li>Sobre Nós</li>
                        <li>Termos e Condições</li>
                        <li>Política de Pagamento</li>
                    </ul>
                </div>
                <div className="w-[350px] mr-6">
                    <ul>
                        <li>Política de Privacidade</li>
                        <li>Pedidos e Devoluções</li>
                        <li>Fale Conosco</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center p-12 bg-gray-100">
                <p>Siga-nos nas redes sociais</p>
             </div>

            <div className="flex justify-center p-1 bg-black text-white">
                <span className="text-sm">Caminho dos Anjos, 2024 - Todos os Direitos Reservados - Desenvolvido por&nbsp;<Link href="https://www.rixxer.com.br" target="_blank">Rixxer</Link></span>
            </div>
        </div>
    )
}