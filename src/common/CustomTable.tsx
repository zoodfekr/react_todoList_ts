import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

type prop_data_type = {
  data: {
    createdAt: string;
    description: string;
    icon: string;
    id: string;
    title: string;
    userId: string;
  }[];
};

export default function CustomTable({ data }: prop_data_type) {
  console.log('data in fc', data);

  // اگر داده‌ای وجود نداشت، نمایش پیغام
  if (data.length === 0) {
    return <p style={{ textAlign: 'center', padding: '20px' }}>هیچ داده‌ای موجود نیست</p>;
  }

  // گرفتن کلیدهای اولین آبجکت برای ساخت هدرها
  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => (
                <TableCell key={col}>{row[col as keyof typeof row]}</TableCell>
              ))}
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
