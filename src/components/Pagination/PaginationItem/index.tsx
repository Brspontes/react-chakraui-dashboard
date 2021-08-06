import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number,
  isCurrent?: boolean 
}

export default function PaginationItem ({ number, isCurrent = false }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{ backgroundColor: 'pink.500', cursor:'default'}} >
        {number}
      </Button>
    )
  }

  return (
    <Button size="sm" fontSize="xs" width="4" colorScheme="gray.700" _hover={{ backgroundColor: 'gray.500', cursor:'default'}} >
      {number}
    </Button>
  )
}
