import { Button } from "@/app/components/ui/button"

export default function Videos() {
    return (
        <div className="bg-gray-100 pt-2 pb-12">
            <div className="flex justify-center mt-10">
                <h2 className="text-4xl font-bold"><span className="text-red-500">Nossos</span> Vídeos</h2>
            </div>
            <div className="flex justify-center mb-4">
                <h4 className="text-xl">Vídeos com as belezas da Região</h4>
            </div>

            <div className="flex flex-wrap p-8 justify-center">
                <iframe className="w-[350px] mr-6" width="560" height="315" src="https://www.youtube.com/embed/7BYWMkfa3Bg?si=nBoS-FfjZ5_rWZCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe className="w-[350px] mr-6" width="560" height="315" src="https://www.youtube.com/embed/WyUTswhqjLo?si=8_zRUUkUfOgeptOR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe className="w-[350px]" width="560" height="315" src="https://www.youtube.com/embed/U5g4jdQw1-I?si=zC2bWbd92jo88QiO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="flex justify-center mt-10">
                <h2 className="text-2xl font-bold">Gostou? Que tal marcar sua vida com nossos passeios?</h2>
            </div>
            <div className="flex justify-center mb-4">
                <h4 className="text-xl">Entre em contato agora mesmo, e faça uma cotação conosco!</h4>
            </div>

            <div className="flex justify-center mt-10">
                <Button>Quero reservar meu passeio!</Button>
            </div>

        </div>
    )
}