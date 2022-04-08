import { useEffect, useState } from "react";
import fetchStudents from "../redux/students/studentsOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Checkbox,
  TablePagination,
  Box,
  TableSortLabel,
} from "@mui/material";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const Data = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const studentsData = useSelector((state) => state.students.students.data);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <Box>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>Name</TableCell>

                <TableCell
                  key="id"
                  sortDirection={orderBy === "id" ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === "id"}
                    direction={orderBy === "id" ? order : "asc"}
                    onClick={createSortHandler("id")}
                  >
                    ID
                  </TableSortLabel>
                </TableCell>

                <TableCell>Class</TableCell>

                <TableCell
                  key="score"
                  sortDirection={orderBy === "score" ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === "score"}
                    direction={orderBy === "score" ? order : "asc"}
                    onClick={createSortHandler("score")}
                  >
                    Av. score, %
                  </TableSortLabel>
                </TableCell>

                <TableCell
                  key="speed"
                  sortDirection={orderBy === "speed" ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === "speed"}
                    direction={orderBy === "speed" ? order : "asc"}
                    onClick={createSortHandler("speed")}
                  >
                    Av. speed
                  </TableSortLabel>
                </TableCell>

                <TableCell>Parents</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(studentsData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((student) => (
                  <TableRow hover key={student.id}>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.score}</TableCell>
                    <TableCell>{student.speed}</TableCell>
                    <TableCell>{student.parents.join(", ")}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={studentsData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Paper>
    </Box>
  );
};

export default Data;
