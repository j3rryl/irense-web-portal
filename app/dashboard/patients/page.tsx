"use client";
import { Typography } from "@mui/material"

const page = () => {
  return (
    <>
    <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:10,
          letterSpacing: '.1rem',
          color: 'text.primary',
          textDecoration: 'none',
          margin:".8rem 0"
        }}
      >
        This is the Patients Page
      </Typography> 
    </>
  )
}

export default page