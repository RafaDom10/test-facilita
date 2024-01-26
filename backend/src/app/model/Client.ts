export interface Client {
  id: string
  name: string
  email: string
  phone?: string
  coordinates: string | { x: string | number, y: string | number }
}
