import { useState } from "react"

export function useOpenNewClientDialog() {
  const [ open, setOpen ] = useState(false)
  return { open, setOpen }
}
