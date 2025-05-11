import { Separator } from '@/lib/design-system/ui/separator'
import { SidebarTrigger } from '@/lib/design-system/ui/sidebar'
import { UserButton } from '@clerk/nextjs'

export function TheHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex-grow flex items-center gap-1">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </header>
  )
}
