import { NextPage } from 'next';

import { MainLayout } from '../modules/application/layouts';
import { TodoContainer } from '../modules/todo/todo-container';

export const TodoListPage: NextPage = () => {
  return (
    <MainLayout>
      <h2>Hello world</h2>
      <hr />
      <TodoContainer />
    </MainLayout>
  );
};

export default TodoListPage;
