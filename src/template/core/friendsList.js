import React, { useContext } from 'react';
import { Container, ListGroup, CloseButton } from 'react-bootstrap';
import mainContext from '../contexts/main-context';
import { nanoid } from 'nanoid';

export default function ListBooks() {
  const { list, dispatch } = useContext(mainContext);
  const removeUser = (e) => {
    const name = e.target.value;
    console.log(name);
    dispatch({ type: 'REMOVE_FRIEND', name: name });
  };
  const updateName = (e) => {
    const id = e.target.parentElement.id;
    e.target.contentEditable = true;
    e.target.onblur = function () {
      e.target.contentEditable = false;
      const newvalue = e.target.textContent;
      console.log(newvalue, id);
      dispatch({ type: 'UPDATE_NAME', newvalue, id });
    };
  };
  const updateAge = (e) => {
    const id = e.target.parentElement.id;
    e.target.contentEditable = true;
    e.target.onblur = function () {
      e.target.contentEditable = false;
      const newage = e.target.textContent;
      console.log(newage, id);
      dispatch({ type: 'UPDATE_AGE', newage, id });
    };
  };
  console.log(list);
  return (
    <Container>
      <ListGroup>
        {list.map((item) => (
          <ListGroup.Item key={nanoid()} style={{ display: 'flex' }}>
            <div id={item.id}>
              <p onDoubleClick={updateName}>{item.name}</p> is <p onDoubleClick={updateAge}>{item.age}</p> years old
            </div>
            <CloseButton onClick={removeUser} value={item.name} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
