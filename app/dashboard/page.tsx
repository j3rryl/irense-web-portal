"use client";
import { Typography } from "@mui/material"
import LineChartComponent from "../components/charts/LineChart";
import ScatterChartComponent from "../components/charts/ScatterChart";

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

      <div className="grid grid-cols-2 gap-4">
        <div className=" w-full h-96">
        <LineChartComponent/>
        </div>
        <div className=" w-full h-96">
        <ScatterChartComponent/>
        </div>
      </div>

    </>
  )
}

export default page