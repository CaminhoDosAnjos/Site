import * as React from "react"
import { Button } from "@/app/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import Image from "next/image"

export default function Products() {
    return (
        <products>
            <div className="flex justify-center mt-10">
                <h2 className="text-4xl font-bold"><span className="text-red-500">Nossos</span> Produtos</h2>
            </div>
            <div className="flex justify-center mb-4">
                <h4 className="text-xl">Os melhores produtos do Sul de Minas Gerais</h4>
            </div>
            
            <div className="flex flex-wrap p-8 justify-center">
                <Card className="w-[350px] mr-6">
                    <CardHeader>
                        <Image src="/azeite.jpg" alt="Azeite Extra Virgem" width={384} height={384} className="rounded-xl" />
                        <CardTitle>Azeite Extra Virgem</CardTitle>
                        <CardDescription>Mais qualidade para suas receitas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Azeite Extra Virgem da Região da Mantiqueira</h2>
                        <h2 className="text-2xl font-bold">R$ 95,00</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] mr-6">
                    <CardHeader>
                        <Image src="/cachaca.jpg" alt="Cachaça" width={384} height={384} className="rounded-xl" />
                        <CardTitle>Cachaça de Alagoa</CardTitle>
                        <CardDescription>Produzida em barris de carvalho</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Cachaça de qualidade, com um incrível aroma</h2>
                        <h2 className="text-2xl font-bold">R$ 45,00</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px]">
                    <CardHeader>
                        <Image src="/cafe.jpg" alt="Café Santa Rosa" width={384} height={384} className="rounded-xl" />
                        <CardTitle>Café Santa Rosa Especial</CardTitle>
                        <CardDescription>Para momentos de grande prazer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Café Especial, com aroma magnífico, para seus melhores momentos</h2>
                        <h2 className="text-2xl font-bold">R$ 55,00</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] mr-6 mt-6">
                    <CardHeader>
                        <Image src="/goiabada.jpg" alt="Goiabada" width={384} height={384} className="rounded-xl" />
                        <CardTitle>Goiabada</CardTitle>
                        <CardDescription>Um dos doces mais famosos de Minas Gerais</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Conheça a qualidade da goiabada da Região</h2>
                        <h2 className="text-2xl font-bold">R$ 15,00</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] mt-6">
                    <CardHeader>
                        <Image src="/queijo.jpg" alt="Queijo de Alagoa" width={384} height={384} className="rounded-xl" />
                        <CardTitle>Queijo de Alagoa</CardTitle>
                        <CardDescription>Queijo especial da Serra da Mantiqueira</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Suas receitas nunca mais serão as mesmas! Experimente nosso queijo!</h2>
                        <h2 className="text-2xl font-bold">R$ 125,00</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>
            </div>
        </products>

    )
}