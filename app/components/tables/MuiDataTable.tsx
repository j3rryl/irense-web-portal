import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Badge, IconButton, Stack, Tooltip, styled } from '@mui/material';
import { ACTIVE } from '@/app/utils/constants';
import { Delete, Edit, Visibility } from '@mui/icons-material';
const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
`;

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
  { field: 'age', headerName: 'Age', flex:1 },
  { field: 'gender', headerName: 'Gender', flex:1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    cellClassName: "status",
    renderCell: (params) => {
      return (
        <Badge badgeContent={params?.value} color={params?.value===ACTIVE?.name?"primary":"warning"} sx={{
          width:"fit-content",
          marginLeft:"10%",
          color:"text.primary"
        }} 
        className='!capitalize'/>
      );
    },
  },
  { field: 'lastTested', 
  headerName: 'Last Test Date', 
  flex:1, 
  renderCell: (params) => (
    <>
    {generateRandomDate().toLocaleString()}
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
        <IconButton aria-label="view">
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

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, phone:"0745643237", email:"snow@gmail.com", gender:"Female", lastTested:"23 May 2023", status:"active" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, phone:"0756478544", email:"cersei@gmail.com", gender:"Male", lastTested:"3 June 2023", status:"inactive" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, phone:"0778546754", email:"lannister@gmail.com", gender:"Male", lastTested:"12 March 2023", status:"inactive" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, phone:"0745644454", email:"stark@gmail.com", gender:"Male", lastTested:"18 Jan 2023", status: "active" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34, phone:"0767545645", email:"targaryen@gmail.com", gender:"Female", lastTested:"23 Dec 2022", status:"active" },
  { id: 6, lastName: 'Melisandre', firstName: "Parker", age: 41, phone:"0754674456", email:"melsandre@gmail.com", gender:"Female", lastTested:"11 Nov 2022", status:"inactive" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, phone:"0777436744", email:"ferrara@gmail.com", gender:"Male", lastTested:"5 May 2023", status:"active" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, phone:"0767446537", email:"rossini@gmail.com", gender:"Male", lastTested:"8 July 2023", status:"inactive" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, phone:"0790428980", email:"roxie@gmail.com", gender:"Female", lastTested:"1 Feb 2023", status:"active" },
];

export default function MuiDataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
      //Not good for large datasets though, Kindly check on that
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}