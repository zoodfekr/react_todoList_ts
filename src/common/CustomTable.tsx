import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


type CustomTableProps = {
    data: {
        id: number;
        name: string;
        value: boolean | string | number;
    }[];
};



export default function CustomTable({ data }: CustomTableProps) {


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {data.map(val => {
                            return (
                                <TableCell>{val.name}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((val) => (
                        <TableRow
                            key={val.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {val.value}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
