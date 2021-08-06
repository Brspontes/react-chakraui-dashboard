import { ElementType } from "react";
import { Link, Icon, Text, LinkProps } from '@chakra-ui/react'

interface NavLinkProps extends LinkProps {
  icon: ElementType,
  children: string
}

export default function NavLink ({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" color="pink.400" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text marginLeft="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
