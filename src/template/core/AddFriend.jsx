import React, { useContext, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import mainContext from '../contexts/main-context';
import { nanoid } from 'nanoid';
function AddFriend() {
  const { list, dispatch } = useContext(mainContext);
  //   const name = useRef('');
  //   const age = useRef('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleClick = () => {
    console.log(age, name);
    const id = nanoid();
    console.log(id);
    dispatch({ type: 'ADD_FRIEND', name, age, id });
  };
  return (
    <div>
      <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)}></input>
      <input type='number' placeholder='age' onChange={(e) => setAge(e.target.value)}></input>
      <button type='button' onClick={handleClick} disabled={name === '' ? true : false}>
        add friend{' '}
      </button>
    </div>
  );
}
export default AddFriend;
