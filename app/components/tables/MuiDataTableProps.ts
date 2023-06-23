import { patientDetails } from "@/app/interfaces";
import { GridColDef } from "@mui/x-data-grid";

export interface MuiDataTableProps {
    columns: GridColDef[],
    rows: patientDetails[]
  }