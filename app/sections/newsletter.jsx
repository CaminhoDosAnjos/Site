import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"

export default function Newsletter() {
    return (
        <div className="bg-gray-100 pt-2 pb-8">
            <div className="flex justify-center mt-10">
                <h2 className="text-4xl font-bold">Newsletter</h2>
            </div>
            <div className="flex justify-center mb-4">
                <h4 className="text-xl">Inscreva-se para ficar por dentro das novidades</h4>
            </div>
            <div className="flex justify-center mt-12 mb-6">
                <div className="max-w-3xl flex">
                    <Input type="email" placeholder="Seu melhor E-mail" />
                    <Button type="submit">Me coloque na lista!</Button>
                </div>
            </div>

        </div>
    )
}