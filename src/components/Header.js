import {Box, Flex, Heading, Button} from "theme-ui";
import Container from "./Container";
import Link from "./Link"

const Header = () => {
  return (
    <Box as="nav" sx={{
      bg: 'primary',
      color: '#fff',
      pt: 2,
      pb: 2,
      mb: 4
    }}>
      <Container>
        <Flex sx={{
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link to="/">
            <Heading color="secondary">Home</Heading>
          </Link>
          <Link to="/articles/new">
            <Button variant="secondary">New Article</Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
