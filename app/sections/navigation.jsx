import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/app/components/ui/menubar"

export default function Navigation() {
  return (
    <Menubar className="flex justify-center bg-black text-white">
      <MenubarMenu>
        <MenubarTrigger>Gourmet</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Gourmet
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Trip</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Trip
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Zen</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Zen
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Diversão</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Diversão
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Online</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Online
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Esporte</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Esporte
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>VIP</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            VIP
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Experiências</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Experiências
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Gift Card</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Gift Card
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Corporativo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Corporativo
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      
    </Menubar>
  )
}