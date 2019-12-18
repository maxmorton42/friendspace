import React, { useState, useEffect, } from "react";
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

const MyFriends = () => {
  const [friends, setfriends ] = useState([])

  useEffect( () => {
    axios.get("api/friend_status")
    .then ( res => setfriends(res.data))
  }, [])

  return (
    <Card.Group itemsPerRow={4}>
      { friends.map( friend => (
        <Card key={friend.id}>
          <Image src={friend.avatar} />
          <Card.Content>
            <Divider />
            <Card.Header>
              { friend.name }
            </Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

export default MyFriends