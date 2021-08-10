import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import Proffile from './Profille'
import NotificationsNav from './NotificationNav'
import SearchBox from './SearchBox'
import Logo from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export default function Header() {

  const isWideVersion = useBreakpointValue({ base: false, lg: true })
  const { onOpen } = useSidebarDrawer()

  return (
    <Flex as="header" width="100%" maxWidth={1480} height="20" marginX="auto" marginTop="4" paddingX="6" align="center">
      {!isWideVersion && (
        <IconButton fontSize="24" marginRight="2" variant="unstyled" 
          onClick={onOpen} aria-label="Open navigation" icon={<Icon as={RiMenuLine}/>}>
        </IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" marginLeft={["30","auto"]}>
        <NotificationsNav />
        <Proffile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
