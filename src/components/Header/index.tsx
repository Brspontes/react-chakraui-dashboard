import { Flex } from '@chakra-ui/react'
import Proffile from './Profille'
import NotificationsNav from './NotificationNav'
import SearchBox from './SearchBox'
import Logo from './Logo'

export default function Header() {
  return (
    <Flex as="header" width="100%" maxWidth={1480} height="20" marginX="auto" marginTop="4" paddingX="6" align="center">
      <Logo />
      <SearchBox />
      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Proffile />
      </Flex>
    </Flex>
  )
}
