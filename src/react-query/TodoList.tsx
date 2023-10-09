import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useTodos from "./hooks/useTodos";

const TodoList = () => {
  // auto refresh, cashing, retries (retry to fetch data multiple times when failed)
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
