"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export default function CarouselApp() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent>
                <CarouselItem>
                    <Image src="/slide01.jpg" alt="Caminho dos Anjos" width={1600} height={500} />
                </CarouselItem>
                <CarouselItem>
                    <Image src="/slide02.jpg" alt="Caminho dos Anjos" width={1600} height={500} />
                </CarouselItem>
                <CarouselItem>
                    <Image src="/slide03.jpg" alt="Caminho dos Anjos" width={1600} height={500} />
                </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}