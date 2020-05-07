import React from 'react';
import styled from 'styled-components';
import 'focus-visible';
import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';

function reducer(state, action) {
  switch (action.type) {
    case 'toggle-like': {
      const wasAlreadyLiked = state.isLiked;

      return {
        ...state,
        isLiked: !wasAlreadyLiked,
        numOfLikes: wasAlreadyLiked ? state.numOfLikes - 1 : state.numOfLikes +1,
      };
    }
    case 'toggle-retweet': {
      const wasAlreadeyRetweeted = state.isRetweeted;

      return {
        ...state,
        isRetweeted: !wasAlreadeyRetweeted,
        numOfRetweets: wasAlreadeyRetweeted ? state.numOfRetweets - 1 : state.numOfRetweets +1,
      };
    }

    default: 
      throw new Error('Unrecognized action');
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    numOfLikes: 100,
    numOfRetweets: 100,
    isLiked: false,
    isRetweeted: false,
  });

  const toggleLike = () => dispatch({type: 'toggle-like'});
  const toggleRetweet = () => dispatch({type: 'toggle-retweet'});

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}

        numOfLikes = {state.numOfLikes}
        numOfRetweets = {state.numOfRetweets}
        isLiked = {state.isLiked}
        isRetweeted = {state.isRetweeted}

        isRetweetedByCurrentUser = {state.isRetweeted}
        isLikedByCurrentUser = {state.isLiked}

        handleToggleLike = {toggleLike}
        handleToggleRetweet = {toggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
