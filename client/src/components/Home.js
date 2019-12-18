import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { friends: [], };
  
  componentDidMount() {
    axios.get('/api/friends')
      .then(res => this.setState({ friends: res.data, }))
  }
  
  sample = () => {
    const { friends, } = this.state;

    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
    }
  }
  
    downVote = (id) => {
      const { friends, } = this.state;
      this.setState({ friends: friends.filter( friend => friend.id !== id ), });
    }

    friendRequest = (id) => {
      const { friends, } = this.state
      axios.put(`/api/friends/${id}`)
      .then( () => this.setState({ friends: friends.filter( f => f.id !== id), }))
    }
  
  
  render() {
    const friend = this.sample();
    if (friend) {
      return (
        <div>
          <br />
          <Header as='h1'>Friend Burk: Suggested Friends</Header>
          <br />
          <Card.Group itemsPerRow={4}>
        { this.state.friends.map( friend =>
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
              onClick={() => this.downVote(friend.id)}
              >
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic
              onClick={() => this.friendRequest(friend.id)}
              >
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
        )}
            </Card.Group>
          <Link to="/my_friends">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Cats</Header>
    }
  }
}

export default Home;
