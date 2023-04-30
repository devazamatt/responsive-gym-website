import { Box, Link } from '@mui/material'
import SiteLogo from '../../assets/images/site-logo.png'

const Logo = () => {
  return (
    <Link href="/">
      <Box component="img" src={SiteLogo} alt="Site logo" /> GYM
    </Link>
  )
}

export default Logo
