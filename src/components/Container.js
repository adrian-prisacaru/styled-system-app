import {Box} from "theme-ui";

const Container = ({ children }) => {
  return (
    <Box sx={{
      width: 1320,
      margin: 'auto'
    }
    }>
      {children}
    </Box>
  )
}

export default Container
