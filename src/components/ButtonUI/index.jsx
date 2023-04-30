import { Button, Link } from '@mui/material'

const ButtonUI = (props) => {
  const { children, type, variant, url } = props

  if (type === 'link') {
    return <Link href={url}>{children}</Link>
  }

  if (type === 'button') {
    return <Button variant={variant}>{children}</Button>
  }
}

export default ButtonUI
