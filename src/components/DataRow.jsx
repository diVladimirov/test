import { useState } from "react";
import {
  TableRow,
  TableCell,
  Checkbox,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DataRow = ({ student }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow hover>
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
        <TableCell>{student.name}</TableCell>
        <TableCell>{student.id}</TableCell>
        <TableCell>{student.class}</TableCell>
        <TableCell>{student.score}</TableCell>
        <TableCell>{student.speed}</TableCell>
        <TableCell>{student.parents.join(", ")}</TableCell>
        <TableCell>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={8} sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Box
                component="div"
                sx={{ display: "flex", textTransform: "upperCase" }}
              >
                <Typography sx={{ marginRight: "15px" }}>
                  student: {student.name}
                </Typography>
                <Typography>id: {student.id}</Typography>
              </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Test Label</TableCell>
                    <TableCell>Score</TableCell>
                    <TableCell>Speed</TableCell>
                    <TableCell>Total Q-ns</TableCell>
                    <TableCell>Exp. Speed</TableCell>
                    <TableCell>Concept</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Absent</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {student.tests.map((test, index) => (
                    <TableRow key={index}>
                      <TableCell>{(index += 1)}</TableCell>
                      <TableCell>{test.label}</TableCell>
                      <TableCell>
                        {test.score === null ? "NIL" : test.score}
                      </TableCell>
                      <TableCell>
                        {test.speed === null ? "NIL" : test.speed}
                      </TableCell>
                      <TableCell>{test.total}</TableCell>
                      <TableCell>{test.expSpeed}</TableCell>
                      <TableCell>{test.concept}</TableCell>
                      <TableCell>{test.date}</TableCell>
                      <TableCell padding="checkbox">
                        <Checkbox checked={test.absent} color="primary" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DataRow;
