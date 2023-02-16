import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from '../components/todolist/TodoItem';
import { IconContext } from 'react-icons/lib';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setNewTodoList] = useState([]);
  const [editedTodoItem, setEditedTodoItem] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let localTodo = localStorage.getItem('todolist');
    if (localTodo) setNewTodoList(JSON.parse(localTodo));
  }, []);

  // add todo
  const addTodoItem = () => {
    if (!newTodo.trim()) return;
    let newTodoItem = {
      id: uuidv4(),
      content: newTodo,
      complete: false,
      edit: false,
    };
    let newTodoList = [...todoList, newTodoItem];
    setNewTodoList(newTodoList);
    setNewTodo('');
    localStorage.setItem('todolist', JSON.stringify(newTodoList));
  };
  // del todo
  const delTodoItem = (id) => {
    let newTodoList = todoList.filter((todo) => todo.id !== id);
    setNewTodoList(newTodoList);
    localStorage.setItem('todolist', JSON.stringify(newTodoList));
  };
  // update todo
  const updateTodoItem = (id, newTodoItem) => {
    setNewTodoList((todoList) => {
      const newTodoList = todoList.map((v) => {
        console.log(id, v.id);
        console.log(newTodoItem);
        return v.id === id ? { ...v, ...newTodoItem } : { ...v };
      });
      localStorage.setItem('todolist', JSON.stringify(newTodoList));
      return newTodoList;
    });
  };
  // edit handler
  const editHandler = (id) => {
    setNewTodoList((todoList) => {
      const newTodoList = todoList.map((v) =>
        v.id === id ? { ...v, edit: !v.edit } : { ...v, edit: false }
      );
      localStorage.setItem('todolist', JSON.stringify(newTodoList));
      return newTodoList;
    });
  };
  // drag handler
  const onDragEnd = (e) => {
    const { source, destination } = e;

    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;
    let newTodoList = [...todoList];
    let add = newTodoList[source.index];

    // drag to dif droppableId
    if (source.droppableId !== destination.droppableId) {
      newTodoList = newTodoList.map((todo) =>
        todo.id === add.id ? { ...todo, complete: !todo.complete } : { ...todo }
      );
    } else {
      // SORT TODOLIST
      newTodoList.splice(source.index, 1);
      newTodoList.splice(destination.index, 0, add);
    }

    setNewTodoList(newTodoList);
    localStorage.setItem('todolist', JSON.stringify(newTodoList));
  };

  return (
    <IconContext.Provider value={{ size: `1.25rem` }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="max-w-todo mx-auto pt-6">
          <div className="flex gap-2 mb-3">
            {/* add  */}
            <input
              type="text"
              placeholder="New Todo"
              className="border border-lightGray rounded flex-grow px-3 py-1 "
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTodoItem();
              }}
            />
            <button
              className="border border-lightGray rounded px-2"
              onClick={() => {
                addTodoItem();
              }}
            >
              新增
            </button>
          </div>
          <h2 className="mb-3 px-2">TODO LIST</h2>
          <Droppable droppableId="todoList">
            {(provided) => (
              <ul
                className=""
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todoList.map((todo, i) => {
                  if (todo.complete) return;
                  return (
                    <TodoItem
                      editedTodoItem={editedTodoItem}
                      setEditedTodoItem={setEditedTodoItem}
                      delTodoItem={delTodoItem}
                      updateTodoItem={updateTodoItem}
                      editHandler={editHandler}
                      todo={todo}
                      i={i}
                      key={todo.id}
                    />
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>

          <h2 className="mb-3 px-2">FINISHED</h2>
          <Droppable droppableId="todoFin">
            {(provided) => (
              <ul
                className=""
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todoList.map((todo, i) => {
                  if (!todo.complete) return;
                  return (
                    <TodoItem
                      delTodoItem={delTodoItem}
                      updateTodoItem={updateTodoItem}
                      todo={todo}
                      i={i}
                      key={todo.id}
                      counter={counter}
                      setCounter={setCounter}
                    />
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </IconContext.Provider>
  );
}
