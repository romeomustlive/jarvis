import { ruRU } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: { display: 'none' }, // Скрываем ссылку на регистрацию в футере
        },
      }}
      localization={ruRU}
    >
      {children}
    </ClerkProvider>
  )
}
