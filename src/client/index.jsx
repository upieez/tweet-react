import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class UrlEntity extends React.Component {
  render() {
    
    return(
      <div>{this.props.urlentity.url}</div>
    );
  }
}
class Entities extends React.Component {
  render() {
    
    return(
      <div><UrlEntity urlentity={this.props.entities.url.urls[0]}/></div>

    );
  }
}
class User extends React.Component {
  render() {
    
    return(
      <div>
      <div><Entities entities={this.props.user.entities}/></div>
      <div>{this.props.user.name}</div>
      </div>
    );
  }
}

class Tweet extends React.Component {
  render() {
    console.log(this.props.tweet);
    return(
      <div>
      <div><User user={this.props.tweet.user}/></div>
      <div>{this.props.tweet.text}</div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    var twitter = tweets.tweets.map(function(tweet) {
      return <Tweet tweet={tweet}/>
    })
    return (
      <div>
      {twitter}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
