import React, { useState, useEffect, } from "react";
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Image, Card, Button, Icon, Container, List, Segment } from 'semantic-ui-react';
import PostForm from './PostForm'
import styled from 'styled-components';

const FriendShow = (props) => {
  const [friend, setfriend] = useState({});
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false);

    useEffect( () => {
      const { id } = props.match.params
      axios.get(`/api/friends/${id}`)
        .then( res => setfriend( res.data) )

        axios.get(`/api/friends/${id}/posts`)
        .then( res => setPosts( res.data ) )
    }, []);
    
    const addPost = (title, description) => {
      axios.post(`/api/friends/${props.match.params.id}/posts`, { title, description })
        .then( res => {
          setPosts([...posts, res.data]);
        })
    }

    const renderPosts = () => {
      return posts.map( post => (
        <Segment key={post.id}>
          <List.Header as="h2">{post.title}</List.Header>
          <hr />
          <List.Description>
            {post.description}
          </List.Description>
        </Segment>
      ))

    }
  
  return (
    <>
    <br></br>
    <HeaderText>View Friend</HeaderText>
    <Container style={{ marginBottom: '40px' }}>
      <Card>
        <Image src={friend.avatar} />
        <Card.Content>
          <Card.Header>
            { friend.name }
          </Card.Header>
          <Card.Description>
            { friend.job }
          </Card.Description>
          <Card.Meta>
            { friend.age }
          </Card.Meta>
          </Card.Content>
      </Card>
          <br />
          <Link to={'/'}>
            <Button color="black">
              <Icon name='arrow alternate circle left outline' />
              Go Back
            </Button>
          </Link>
          <br />
          <br />
          <br />
          <Button onClick={() => setShowForm(!showForm)}>
            { showForm ? "Close Form" : "Add Post" }
          </Button>
        { showForm && <PostForm add={addPost} id={props.match.params} /> }
          <br />
          <br />
          <List>
              { renderPosts() }
           </List>
    </Container>
    </>
  
  
  )
 }

 const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  `

    export default FriendShow