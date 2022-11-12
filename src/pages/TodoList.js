import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  AiOutlineEdit,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setNewTodoList] = useState([]);
  const [editedTodoItem, setEditedTodoItem] = useState('');

  // add todo
  const addTodoItem = () => {
    let newTodoItem = {
      id: uuidv4(),
      content: newTodo,
      complete: false,
      edit: false,
    };
    let newTodoList = [...todoList, newTodoItem];
    setNewTodoList(newTodoList);
    setNewTodo('');
  };
  // del todo
  const delTodoItem = (id) => {
    let newTodoList = todoList.filter((todo) => todo.id !== id);
    setNewTodoList(newTodoList);
  };
  // update todo
  const updateTodoItem = (id, content) => {
    let newTodoList = todoList.map((v) => {
      return v.id === id ? { ...v, content: content, edit: false } : { ...v };
    });
    setNewTodoList(newTodoList);
  };
  // edit handler
  const editHandler = (id, content) => {
    let newTodoList = todoList.map((v) =>
      v.id === id ? { ...v, edit: true } : { ...v, edit: false }
    );
    setNewTodoList(newTodoList);
    setEditedTodoItem(content);
  };

  // dragHandler

  return (
    <IconContext.Provider value={{ size: `1.25rem` }}>
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
        <ul className="">
          {todoList.map((todo, i) => {
            return todo.edit ? (
              <li
                key={todo.id}
                className="flex gap-5 border border-lightGray mb-3"
              >
                <input
                  type="text"
                  className="flex-grow px-3 py-1"
                  value={editedTodoItem}
                  onChange={(e) => {
                    setEditedTodoItem(e.target.value);
                  }}
                />
                <button
                  className="px-1"
                  onClick={() => {
                    let content = editedTodoItem;
                    updateTodoItem(todo.id, content);
                  }}
                >
                  <AiOutlineCheckCircle />
                </button>
              </li>
            ) : (
              <li
                key={todo.id}
                className="flex gap-5 border border-lightGray mb-3"
              >
                <div className="flex-grow py-1 px-3">{todo.content}</div>
                <div className="flex">
                  <button
                    className="px-1"
                    onClick={() => {
                      editHandler(todo.id, todo.content);
                    }}
                  >
                    <AiOutlineEdit />
                  </button>
                  <button
                    className="px-1"
                    onClick={() => {
                      delTodoItem(todo.id);
                    }}
                  >
                    <AiOutlineCloseCircle />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        ;
      </div>
    </IconContext.Provider>
  );
}
