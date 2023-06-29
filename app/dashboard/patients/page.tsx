"use client";
import { Typography } from "@mui/material"
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Badge, IconButton, Stack, Tooltip } from '@mui/material';
import { ACTIVE, API_URL } from '@/app/utils/constants';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { useRouter } from "next/navigation";
import { MuiDataTable } from "@/app/components/tables/MuiDataTable";
import { patientDetails } from "@/app/interfaces";

const page = () => {
  const router = useRouter()
  function generateRandomDate() {
    return new Date(
      new Date(2023, 0, 1).getTime() +
        Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()),
    );
  }
  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', flex:1 },
    { field: 'name', 
      headerName: 'Name', 
      flex:1, 
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
          <Badge badgeContent={params?.value} color={params?.value===ACTIVE?.name?"primary":"warning"} sx={{
            width:"fit-content",
            color:"text.primary"
          }} 
          className='!capitalize'/>
        );
      },
    },
    { field: 'lastTested', 
    headerName: 'Last Test Date', 
    flex:1.25, 
    renderCell: (params) => (
      <>
      {params?.value?.toLocaleString()}
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
            router.push(`/dashboard/patients/${id}`)
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
  
  const rows: patientDetails[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, phone:"0745643237", email:"snow@gmail.com", gender:"Female", lastTested:generateRandomDate(), status:"active" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, phone:"0756478544", email:"cersei@gmail.com", gender:"Male", lastTested:generateRandomDate(), status:"inactive" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, phone:"0778546754", email:"lannister@gmail.com", gender:"Male", lastTested:generateRandomDate(), status:"inactive" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, phone:"0745644454", email:"stark@gmail.com", gender:"Male", lastTested:generateRandomDate(), status: "active" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34, phone:"0767545645", email:"targaryen@gmail.com", gender:"Female", lastTested:generateRandomDate(), status:"active" },
    { id: 6, lastName: 'Melisandre', firstName: "Parker", age: 41, phone:"0754674456", email:"melsandre@gmail.com", gender:"Female", lastTested:generateRandomDate(), status:"inactive" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, phone:"0777436744", email:"ferrara@gmail.com", gender:"Male", lastTested:generateRandomDate(), status:"active" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, phone:"0767446537", email:"rossini@gmail.com", gender:"Male", lastTested:generateRandomDate(), status:"inactive" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, phone:"0790428980", email:"roxie@gmail.com", gender:"Female", lastTested:generateRandomDate(), status:"active" },
  ];

  return (
    <>
    <div className="flex justify-end">
      <button type="button" className="text-white bg-button hover:bg-button focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      onClick={async ()=>{
        const res = await fetch('http://localhost:3000/api/test')
        console.log("res", await res.json());
        
        
        
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

export default page