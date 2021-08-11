import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 1, age: '12'},
    { name: 'aron', age: '23'}
  ];

  return (
    profiles.map((profile) => {
       return <div><User name={profile.name} age={profile.age} /></div>
    })
  );
}

const User = (props) => {
return <div>Hello! {props.name}. You are {props.age} years old, are you?</div>
}

// ここはコンソールでしか確認できない。
// typescriptを導入するメリットはここにありそう。
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default App;