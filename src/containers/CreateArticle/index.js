import {Button, Heading} from "theme-ui";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Form from "../../components/Form";
import {useState} from "react";
import LocalStorageDB from "local-storage-db";
import { useHistory } from "react-router-dom";

const db = new LocalStorageDB('documents');

const CreateArticle = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const history = useHistory()

  const onSubmit = () => {
    db.create('articles', { title, content });
    history.push('/')
  }

  return (
    <>
      <Heading as="h1">New Article</Heading>
      <Form mt={4} onSubmit={onSubmit}>
        <TextInput name="title" value={title} onChange={setTitle}/>
        <TextArea name="content" value={content} onChange={setContent}/>
        <Button variant="primary">Create</Button>
      </Form>
    </>
  )
}

export default CreateArticle
