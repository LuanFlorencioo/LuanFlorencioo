interface iProjectCardProps {
  title: string
  tags: string[]
  description: string | null
  app: string | null
}

interface iRepo {
  id: number
  name: string
  topics: string[]
  description: string | null
  homepage: string | null
}

export type {
  iProjectCardProps,
  iRepo,
}
