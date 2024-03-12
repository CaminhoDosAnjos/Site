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

export default function Services() {
    return (
        <div>
            <div className="flex justify-center mt-10">
                <h2 className="text-4xl font-bold"><span className="text-red-500">Nossos</span> Passeios</h2>
            </div>
            <div className="flex justify-center mb-4">
                <h4 className="text-xl">Confira nossos passeios pela Região</h4>
            </div>
            
            <div className="flex flex-wrap p-8 justify-center">
                <Card className="w-[350px] mr-6">
                    <CardHeader>
                        <Image src="/rota-cafe.jpg" alt="Rota do Café" width={600} height={400} className="rounded-xl" />
                        <CardTitle>Rota do Café</CardTitle>
                        <CardDescription>Rota em Fazenda de Café, com degustação</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Conheça a plantação, processo de torra, colheita, e prove um cafézinho!</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Saiba Mais</Button>
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] mr-6">
                    <CardHeader>
                        <Image src="/rota-queijo.jpg" alt="Rota do Queijo" width={600} height={400} className="rounded-xl" />
                        <CardTitle>Rota do Queijo</CardTitle>
                        <CardDescription>Rota em Fazenda de Queijos, com degustação</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Diverta-se e prove dos melhores sabores dos queijos de Minas Gerais!</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Saiba Mais</Button>
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px]">
                    <CardHeader>
                        <Image src="/rota-malte.jpg" alt="Rota do Malte" width={600} height={400} className="rounded-xl" />
                        <CardTitle>Rota do Malte</CardTitle>
                        <CardDescription>Rota em Fábricas de Cerveja, com degustação</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Conheça o processo de fabricação das melhores cervejas de Minas Gerais!</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Saiba Mais</Button>
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] mr-6 mt-6">
                    <CardHeader>
                        <Image src="/rota-azeite.jpg" alt="Rota do Azeite" width={600} height={400} className="rounded-xl" />
                        <CardTitle>Rota do Azeite</CardTitle>
                        <CardDescription>Rota em Fazenda de Azeite, com visita à loja</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Conheça a plantação, colheita, extração e conheça a loja!</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Saiba Mais</Button>
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] mr-6 mt-6">
                    <CardHeader>
                        <Image src="/passeio-balao.jpg" alt="Passeio de Balão" width={600} height={400} className="rounded-xl" />
                        <CardTitle>Passeio de Balão</CardTitle>
                        <CardDescription>Voe pela Cidade de São Lourenço</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Suba bem alto e curta a paisagem da linda Cidade de São Lourenço!</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Saiba Mais</Button>
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] mt-6">
                    <CardHeader>
                        <Image src="/passeio-parapente.jpg" alt="Passeio de Parapente" width={600} height={400} className="rounded-xl" />
                        <CardTitle>Passeio de Parapente</CardTitle>
                        <CardDescription>Sinta a liberdade nesse passeio incrível</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h2>Suba bem alto e sinta a adrenalina de voar com um parapente!</h2>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Saiba Mais</Button>
                        <Button>Comprar</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>

    )
}