import {Box, Heading, Text} from "theme-ui";

const Article = ({ article }) => {
  const { title, content } = article
  return (
    <Box mb={5} sx={{ textAlign: 'center' }}>
      <Heading as="h2" mb={2}>{title}</Heading>
      <Text>{content}</Text>
    </Box>
  )
}

export default Article
