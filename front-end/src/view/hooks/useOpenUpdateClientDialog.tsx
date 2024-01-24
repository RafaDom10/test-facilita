import { useState } from "react"

export function useOpenUpdateClientDialog() {
  const [ open, setOpen ] = useState(false)
  return { open, setOpen }
}
