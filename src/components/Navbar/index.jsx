import { Box, List, ListItem, Link } from '@mui/material'

const Navbar = () => {
  return (
    <Box component="nav">
      <List>
        <ListItem>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Program</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Choose Us</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Pricing</Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default Navbar
