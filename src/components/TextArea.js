import {Input, Label, Box} from "theme-ui";
import capitalize from "capitalize";

const TextArea = ({ name, value, onChange }) => {
  return (
    <Box mb={4}>
      <Label htmlFor={name} mb={2}>{capitalize(name)}</Label>
      <Input
        as="textarea"
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        sx={{ minHeight: 200 }}/>
    </Box>
  )
}

export default TextArea
