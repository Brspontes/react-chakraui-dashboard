import { ElementType } from "react";
import { Link as ChakraLink, Icon, Text, LinkProps } from '@chakra-ui/react'
import Link from 'next/link'
import ActiveLink from "../../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType,
  children: string,
  href: string
}

export default function NavLink ({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" color="gray.50" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text marginLeft="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
