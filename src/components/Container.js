import {Box} from "theme-ui";

const Container = ({ children }) => {
  return (
    <Box sx={{
      width: ['100%', 540, 720, 960],
      margin: 'auto',
      padding: [2, 0]
    }
    }>
      {children}
    </Box>
  )
}

export default Container
