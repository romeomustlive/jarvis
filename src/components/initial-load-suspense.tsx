'use client'

import { Suspense, useEffect, useState } from 'react'

export function InitialLoadSuspense({
  children,
  fallback,
}: {
  children: React.ReactNode
  fallback: React.ReactNode
}) {
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    setIsInitialLoad(false)
  }, [])

  return isInitialLoad ? (
    <Suspense fallback={fallback}>{children}</Suspense>
  ) : (
    children
  )
}
