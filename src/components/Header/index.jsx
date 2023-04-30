import { AppBar, Container, Toolbar } from '@mui/material'
import Logo from '../Logo'
import Navbar from '../Navbar'
import ButtonUI from '../ButtonUI'

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Logo />
          <Navbar />
          <ButtonUI variant="contained" type="link" url="#register">Register Now</ButtonUI>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
