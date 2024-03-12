import Image from "next/image";
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"

export default function Logo() {
    return (
        <logo className="flex p-4 justify-center">
            <div className="pl-12 p-4 px-12">
                <Image src="/Logo.png" alt="Caminho dos Anjos" width={200} height={200} />
            </div>
            <div className="flex w-full max-w-xl items-center space-x-2 px-12">
                <Input type="text" placeholder="Pesquise em nosso Site" />
                <Button type="submit">Pesquisar</Button>
                
            </div>
        </logo>
    )
}