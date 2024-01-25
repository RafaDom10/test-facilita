export interface Client {
  name: string
  email: string
  phone?: string
  coordinates: string | { x: string | number, y: string | number }
}
