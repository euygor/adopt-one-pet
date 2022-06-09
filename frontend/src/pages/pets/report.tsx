import { NextPage } from "next";
import Title from "../../ui/components/Title";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { useReport } from "../../data/hooks/pages/pets/useReport";

const Report: NextPage = () => {
    const { listReport } = useReport();

    return (
        <>
            <title>Relatório de Adoção</title>
            <Title title={'Relatório de Adoção'} subtitle={'Veja a lista de pets adotados'}></Title>

            <TableContainer component={Paper} sx={{ maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'}>Valor mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listReport.map((report) => (
                            <TableRow key={report.id}>
                                <TableCell>{report.pet.name}</TableCell>
                                <TableCell>{report.email}</TableCell>
                                <TableCell align={'right'}>{report.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Report;