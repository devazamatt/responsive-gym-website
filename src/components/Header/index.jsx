import { AppBar, Container, Toolbar } from '@mui/material'
import Logo from '../Logo'

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Logo />
          {/*Navbar*/}
          {/*Button*/}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
