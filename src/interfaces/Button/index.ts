interface iButtonProps {
  color: "orange" | "white"
  icon?: "linkedin" | "github" | "whatsapp"
  value?: string
  clickEvent?: () => any
}

export type {
  iButtonProps
}
