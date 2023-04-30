import { AppBar, Container, Toolbar } from '@mui/material'
import Logo from '../Logo'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Logo />
          <Navbar />
          {/*Button*/}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
