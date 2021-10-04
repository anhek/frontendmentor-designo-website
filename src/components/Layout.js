import { Box } from '@chakra-ui/layout'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, data }) => {
  return (
    <Box>
      <Box role="main">
        <Header data={data.header} />
        {children}
      </Box>
      <Footer data={data.footer} />
    </Box>
  )
}

export default Layout