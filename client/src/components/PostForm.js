import React, { useState, } from "react";
import { Form, } from 'semantic-ui-react';

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  // useEffect( (props) => {
  //   const { id } = props.match.params
  //   axios.get("/api/friends${id}")
  //     .then( res => setfriends(res.data) )
  // }, []);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Title"
            placeholder="Title"
            name="title"
            required
            onChange={handleTitleChange}
            value={title}
          />
          <Form.Input
            label="Description"
            placeholder="Description"
            name="Description"
            required
            onChange={handleDescriptionChange}
            value={description}
            />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    
      
    
  )
}

export default PostForm