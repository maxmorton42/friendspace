import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

const FriendsForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleJobChange = (e) => {
    setJob(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/friends", { name, age, job, })
      .then( res => {
        props.add(res.data);
      })
  }




return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            required
            onChange={handleNameChange}
            value={name}
          />
          <Form.Input
            label="Age"
            placeholder="Age"
            name="age"
            required
            onChange={handleAgeChange}
            value={age}
          />
           <Form.Input
            label="Job"
            placeholder="Job"
            name="job"
            required
            onChange={handleJobChange}
            value={job}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  )
}

export default FriendsForm;
