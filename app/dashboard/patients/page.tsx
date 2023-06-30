"use client";
import React from "react";
import { Typography } from "@mui/material"
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Badge, IconButton, Stack, Tooltip } from '@mui/material';
import { ACTIVE } from '@/app/utils/constants';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { MuiDataTable } from "@/app/components/tables/MuiDataTable";
import { Patient } from "@/app/interfaces";
import { getPatients } from "@/app/api-handler/patient/api";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter()

  // const patients = await getPatients()
  
  const [patients, setPatients] = React.useState<Patient[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const getData = async () => {
      const data = await getPatients()
      setPatients(data)
      setLoading(false)
    }
    getData();
    return () => {
      // here you can clean the effect in case the component gets unmonth before the async function ends
    }
  },[])
  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', flex:1 },
    { field: 'name', 
      headerName: 'Name', 
      flex:1, 
      sortable: false,
      valueGetter: (params: GridValueGetterParams) =>
        `${params?.row?.first_name || ''} ${params?.row?.last_name || ''}`,
  },
    { field: 'phone', headerName: 'Phone', flex:1 },
    { field: 'email', headerName: 'Email', flex:1 },
    { field: 'age', headerName: 'Age', flex:.5, align:"center", headerAlign:"center" },
    { field: 'gender', headerName: 'Gender', flex:.75, align:"center", headerAlign:"center" },
    {
      field: "status",
      headerName: "Status",
      flex: .8,
      headerAlign:"center",
      align:"center",
      cellClassName: "status",
      renderCell: (params) => {
        return (
          <Badge badgeContent={params?.value} color={params?.value?.toLowerCase()===ACTIVE?.name?"primary":"warning"} sx={{
            width:"fit-content",
            color:"text.primary"
          }} 
          className='!capitalize'/>
        );
      },
    },
    { field: 'last_tested', 
    headerName: 'Last Test Date', 
    flex:1.25, 
    renderCell: (params) => (
      <>
      {new Date(params?.value)?.toLocaleString()}
      </>
    ), },
    {
      field: "actions",
      headerName: "Actions",
      type:"actions",
      flex: 1,
      cellClassName: "actions",
      renderCell: ({id, row}) => {
        return (
          <Stack direction="row" spacing={1}>
          <Tooltip title="Edit">
            <IconButton aria-label="edit">
            <Edit color={`primary`} />
          </IconButton>
          </Tooltip>
          <Tooltip title="View">
          <IconButton aria-label="view" onClick={()=>{
            router.push(`/dashboard/patients/${id}/`)
          }}>
            <Visibility />
          </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <Delete color={`error`} />
          </IconButton>
          </Tooltip>
          </Stack>
        );
      },
    },
    
  
  ];
  // console.log(patients);
  const rows: Patient[] = patients?.map((patient: Patient)=>{
    return {
      id: patient?.id,
      first_name: patient?.first_name, 
      last_name: patient?.last_name, 
      age: patient?.age, 
      phone:patient?.phone, 
      email:patient?.email, 
      gender:patient?.email, 
      last_tested:patient?.last_tested, 
      created_at:patient?.created_at, 
      updated_at:patient?.updated_at, 
      status:patient?.status

    }
  })

  return (
    <>
    <div className="flex justify-end">
      <button type="button" className="text-white bg-button hover:bg-button focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      onClick={()=>{
        // router.push("/dashboard/patients/add")
      }}>New Patient</button>
    </div>
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
      <div className="flex justify-center items-center">
      <MuiDataTable rows={rows} columns={columns}/>

      </div>
    </>
  )
}
