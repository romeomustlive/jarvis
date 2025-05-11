import { TheHeader } from '@/components/the-header'
import { TheSidebar } from '@/components/the-sidebar'
import { SidebarInset, SidebarProvider } from '@/lib/design-system/ui/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <TheSidebar variant="inset" />
      <SidebarInset>
        <TheHeader />
        <div className="flex flex-1 flex-col">
          <div className="container mx-auto p-6">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
