import { TableRow, TableCell, Box, Skeleton, Stack } from "@mui/material"

export const TableLoader = ({ numberOfRows }: { numberOfRows?: number }) => {
   return Array.from(new Array(numberOfRows ?? 5)).map((_, index) => (
      <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
         <TableCell component='th' scope='row' sx={{ p: "12px 24px" }}>
            <Box
               sx={{
                  gap: 1,
                  display: "flex",
                  alignItems: "center"
               }}>
               <Skeleton variant='circular' width={50} height={50} />
               <Box>
                  <Skeleton variant='text' width={100} height={20} />
                  <Skeleton variant='text' width={150} height={20} />
               </Box>
            </Box>
         </TableCell>
         <TableCell
            sx={{
               py: "21px",
               display: { xs: "none", sm: "table-cell" }
            }}>
            <Skeleton variant='text' width={100} height={20} />
         </TableCell>
         <TableCell sx={{ py: "12px" }}>
            <Skeleton variant='text' width={100} height={20} />
         </TableCell>
         <TableCell align='center'>
            <Stack direction='row' justifyContent={"center"} alignItems={"center"} spacing={1}>
               <Skeleton variant='circular' width={35} height={35} />
               <Skeleton variant='circular' width={35} height={35} />
            </Stack>
         </TableCell>
      </TableRow>
   ))
}
