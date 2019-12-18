import React, { useState, useEffect, } from "react";
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';
import styled from 'styled-components';
import FriendsForm from './FriendsForm';

const Home = () => {
  const [friends, setfriends] = useState([]);

  useEffect( () => {
    axios.get("/api/friends")
      .then( res => setfriends(res.data) )
  }, []);
  
  const sample = () => {
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
    }
  }
    const downVote = (id) => {
      const newFriends = friends.filter( f => f.id !== id);
      setfriends(newFriends);
    };

    const friendRequest = (id) => {
      axios.put(`/api/friends/${id}`)
      .then( res => setfriends({ friends: friends.filter( f => f.id !== id), }))
    }

    const addFriend = (friend) => setfriends([ friend, ...friends,  ]);
    
    const friend = sample();
    if (friend) {
      return (
        <div>
          <br />
          <Header as={HeaderText}>Friend Burk: Suggested Friends</Header>
        < FriendsForm add={addFriend}/>
          <br />
      <Link to="/my_friends">
        <Button color="blue">
          My Friends
        </Button>
      </Link>
          <br />
          <hr />
          <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                { friend.name }
              </Card.Header>
              <Card.Description>
                { friend.age }
              </Card.Description>
              <Card.Meta>
                { friend.job }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic
              onClick={() => downVote(friend.id)}
              >
                <Icon name="eye slash" />
              </Button>
              <Button color="green" icon basic
              onClick={() => friendRequest(friend.id)}
              >
                <Icon name="heart" />
              </Button>
            </Card.Content>
          </Card>
        )}
            </Card.Group>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Cats</Header>
    }
  }


const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  `

export default Home;


