"use client";
import PatientsList from "@/app/components/PatientList";
import MuiDataTable from "@/app/components/tables/MuiDataTable";
import { Typography } from "@mui/material"

const page = () => {
  return (
    <>
    <Typography
        variant="h6"
        noWrap
        sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:18,
          letterSpacing: '.1rem',
          color: 'text.primary',
          textDecoration: 'none',
          margin:".8rem 0"
        }}
      >
        Patients
      </Typography> 
      {/* <PatientsList/> */}
      <MuiDataTable/>
    </>
  )
}

export default page