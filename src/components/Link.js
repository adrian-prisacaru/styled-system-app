import {Heading} from "theme-ui";
import { Link as RouterLink } from 'react-router-dom'
import theme from "../theme";

const Link = ({ to, children }) => {
  return (
    <RouterLink to={to} style={theme.styles.a}>
      {children}
    </RouterLink>
  )
}

export default Link
