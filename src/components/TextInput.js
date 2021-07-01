import {Box, Input, Label} from "theme-ui";
import capitalize from "capitalize";

const TextInput = ({ name, value, onChange }) => {
  return (
    <Box mb={4}>
      <Label htmlFor={name} mb={2}>{capitalize(name)}</Label>
      <Input name={name} value={value} onChange={e => onChange(e.target.value)}/>
    </Box>
  )
}

export default TextInput
