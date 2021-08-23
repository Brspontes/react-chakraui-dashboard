import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number,
  isCurrent?: boolean,
  onPageChange: (page: number) => void
}

export default function PaginationItem ({ number, isCurrent = false, onPageChange }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{ backgroundColor: 'pink.500', cursor:'default'}} >
        {number}
      </Button>
    )
  }

  return (
    <Button onClick={() => onPageChange(number)} size="sm" fontSize="xs" width="4" colorScheme="gray.700" _hover={{ backgroundColor: 'gray.500', cursor:'default'}} >
      {number}
    </Button>
  )
}
