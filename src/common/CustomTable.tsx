import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { prop_data_type } from '../types/category';

import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import { Button, IconButton, Stack } from '@mui/material';
import { toast } from 'react-toastify';
import { toastify } from '../utils/react_toastify';
import { convertToJalali } from '../utils/date_converotr';


export default function CustomTable({ data }: prop_data_type) {
  console.log('data in fc', data);

  // اگر داده‌ای وجود نداشت، نمایش پیغام
  if (data.length === 0) {
    return <p style={{ textAlign: 'center', padding: '20px' }}>هیچ داده‌ای موجود نیست</p>;
  }

  // گرفتن کلیدهای اولین آبجکت برای ساخت هدرها
  const columns = Object.keys(data[0]);






  return (
    <TableContainer component={Paper} className=''>

      <div className='h-12 border-b-2 border-blue-500/50 p-1'>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<AddCircleRoundedIcon className='mx-2' />}
            onClick={() => toastify({ text: "عملیات موفق", type: 'success' })}
          >
            افزودن
          </Button>
        </Stack>


      </div>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow className=''>
            <TableCell className=''>action</TableCell>
            {columns.map((col) => (
              <TableCell key={col} className=' flex  justify-center items-start'>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>

              {/* action button */}
              <TableCell>
                <IconButton aria-label="delete" onClick={() => console.log(row.id)}>
                  <DeleteSweepRoundedIcon ></DeleteSweepRoundedIcon>
                </IconButton>
                <IconButton aria-label="delete">
                  <BorderColorRoundedIcon></BorderColorRoundedIcon>
                </IconButton>
              </TableCell >

              {columns.map((col) => {
                if (col == 'createdAt') {
                  return (
                    <TableCell key={col}>{convertToJalali(row[col as keyof typeof row])}</TableCell>
                  )
                } else {
                  return (
                    <TableCell key={col}>{row[col as keyof typeof row]}</TableCell>
                  )
                }
              })}
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer >
  );
}
