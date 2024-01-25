import { MRT_Row } from "material-react-table";

export interface ActionButtonProps {
  row: MRT_Row<{
    id: string;
    name: string;
    email: string;
    phone: string;
    coordinates: string;
  }>
}
