import {Box} from "theme-ui";

const Form = (props) => {
  const submit = e => {
    e.preventDefault()
    props.onSubmit()
  }
  return (
    <Box {...props} as="form" onSubmit={submit}>
      {props.children}
    </Box>
  )
}

export default Form
