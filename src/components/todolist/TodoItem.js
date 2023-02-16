import React from 'react';
import {
  AiOutlineEdit,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { Draggable } from 'react-beautiful-dnd';

export default function TodoItem({
  editedTodoItem,
  setEditedTodoItem,
  delTodoItem,
  updateTodoItem,
  editHandler,
  todo,
  i,
}) {
  return (
    <Draggable draggableId={`todo${todo.id}`} index={i}>
      {(provided) => (
        <li
          className={`flex gap-5 border border-lightGray mb-3 ${
            todo.complete && 'bg-mainContent line-through'
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex-grow py-1 px-3">
            {todo.edit ? (
              <input
                type="text"
                className="border border-lightGray "
                value={editedTodoItem}
                onChange={(e) => {
                  setEditedTodoItem(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && editedTodoItem.trim()) {
                    updateTodoItem(todo.id, {
                      content: editedTodoItem,
                    });
                    editHandler(todo.id);
                  }
                }}
              />
            ) : (
              <span>{todo.content}</span>
            )}
          </div>
          <div className="flex">
            {!todo.complete && !todo.edit && (
              <button
                className="px-1"
                onClick={() => {
                  setEditedTodoItem(todo.content);
                  editHandler(todo.id);
                }}
              >
                <AiOutlineEdit />
              </button>
            )}

            <button
              className="px-1"
              onClick={() => {
                if (!todo.edit) {
                  // 非編輯中的 todo
                  return updateTodoItem(todo.id, { complete: !todo.complete });
                } else {
                  // 編輯中的todo
                  updateTodoItem(todo.id, {
                    content: editedTodoItem,
                  });
                  editHandler(todo.id);
                }
              }}
            >
              <AiOutlineCheckCircle />
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
      )}
    </Draggable>
  );
}
