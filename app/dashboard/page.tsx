"use client";
import { Typography } from "@mui/material"
import LineChartComponent from "../components/charts/LineChart";

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
        This is the Dashboard Page
      </Typography> 
      <div className=" w-3/4 h-60">
      <LineChartComponent/>

      </div>
    </>
  )
}

export default page