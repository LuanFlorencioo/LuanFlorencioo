interface iButtonProps {
  color: "orange" | "white"
  icon?: "linkedin" | "github" | "whatsapp" | "menuBars" | "menuClose"
  value?: string
  clickEvent?: () => any
}

export type {
  iButtonProps
}
