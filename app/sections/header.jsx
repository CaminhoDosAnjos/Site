import Link from "next/link";
import { Button } from "@/app/components/ui/button"
import { EnvelopeOpenIcon, PersonIcon, HomeIcon, ChatBubbleIcon, Pencil2Icon } from "@radix-ui/react-icons"

export default function Header() {
    return (
        <header className="flex bg-gray-100 text-white p-4 justify-between">
            <div className="space-x-4 pl-12">
                <Button>
                    <HomeIcon className="mr-2 h-4 w-4" /> Home
                </Button>
                <Button>
                    <ChatBubbleIcon className="mr-2 h-4 w-4" /> Fale Conosco
                </Button>
                <Button>
                    <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Resgatar Voucher
                </Button>
            </div>
            <div className="space-x-4 pr-12">
                <Button>
                    <PersonIcon className="mr-2 h-4 w-4" /> Login
                </Button>
                <Button>
                    <Pencil2Icon className="mr-2 h-4 w-4" /> Criar Conta
                </Button>
            </div>
        </header>
    )
}