import React, { useState, useEffect, } from "react";
import axios from 'axios';
import { Card, Divider, Image, Icon, Button } from 'semantic-ui-react';

const MyFriends = () => {
  const [friends, setfriends ] = useState([])

  useEffect( () => {
    axios.get("api/friend_status")
    .then ( res => setfriends(res.data))
  }, [])

  const deleteFriend = (id) => {
    axios.delete(`/api/friends/${id}`)
    .then( res => setfriends(friends.filter( f => f.id !== id), ))
  }

  return (
    <>
    <br /> <br />
    <h1 style={{color: "white"}}>Your Top Friends</h1>
    <Card.Group itemsPerRow={4}>
      { friends.map( friend => (
        <Card key={friend.id}>
          <Image src={friend.avatar} />
          <Card.Content>
            <Divider />
            <Card.Header>
              { friend.name }
            </Card.Header>
            <Button color="green" icon basic
              onClick={() => deleteFriend(friend.id)}
              >
                <Icon name="trash alternate" />
              </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    </>
  );
}

export default MyFriends