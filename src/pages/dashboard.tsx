import { useExpenses } from '../hooks/useExpenses';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

export default function Dashboard() {
  const { data, isLoading, error } = useExpenses();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error fetching expenses</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Expenses
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Purchase</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length > 0 ? (
              data.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.purchase}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell align="right">${expense.amount}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No expenses found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}