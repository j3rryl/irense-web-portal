import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material';
import { MuiDataTableProps } from './MuiDataTableProps';
const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
`;


export const MuiDataTable:React.FC<MuiDataTableProps> = ({rows, columns}) => {
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
