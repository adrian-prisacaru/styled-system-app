import {Box} from "theme-ui";

const Container = ({ children }) => {
  return (
    <Box sx={{
      width: 960,
      margin: 'auto'
    }
    }>
      {children}
    </Box>
  )
}

export default Container
