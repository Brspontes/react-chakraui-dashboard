import { Stack, Box, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalCountRegisters: number
  registersPerPage?: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({ 
  totalCountRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange
}: PaginationProps) {

  function generatePagesArray (from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
      return from + index + 1
    }).filter(page => page > 0)
  }

  const siblingsCount = 1
  const lasPage = Math.floor(totalCountRegisters / registersPerPage) //arredondamento para cima
  const previousPage = currentPage > 1 ? 
    generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) 
    : []

  const nextPages = currentPage < lasPage ? 
    generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lasPage)) 
    : []


  return (
    <Stack direction={["column","row"]} marginTop="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong> 0 </strong> - <strong> 10 </strong> de <strong> 100 </strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1} />
            {currentPage > (2 + siblingsCount) && <Text color="gray.300" width="6" textAlign="center">...</Text>}
          </>
        )}
        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem number={page} />
        })}
        <PaginationItem number={currentPage} isCurrent={true} />       
        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem number={page} />
        })}
        {(currentPage + siblingsCount) < lasPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lasPage && <Text color="gray.300" width="6" textAlign="center">...</Text>}
            <PaginationItem number={lasPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
