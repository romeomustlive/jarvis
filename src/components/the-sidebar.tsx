import { TheNavigation } from '@/components/the-navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/lib/design-system/ui/sidebar'
import { ArrowUpCircleIcon } from 'lucide-react'
import { BarChartIcon, LayoutDashboardIcon, ListIcon } from 'lucide-react'

const navigationItems = [
  {
    title: 'Главная',
    url: '/',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Упражнения',
    url: '/exercises',
    icon: ListIcon,
  },
  {
    title: 'Результаты',
    url: '/attempts',
    icon: BarChartIcon,
  },
]

export function TheSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Jarvis</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <TheNavigation items={navigationItems} />
      </SidebarContent>
    </Sidebar>
  )
}
