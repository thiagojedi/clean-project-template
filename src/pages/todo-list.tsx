import { NextPage } from 'next';

import { MainLayout } from '../modules/application/layouts/main-layout';
import { TodoContainer } from '../modules/todo/todo-container';

export const TodoListPage: NextPage = () => {
  return (
    <MainLayout>
      <TodoContainer />
    </MainLayout>
  );
};

export default TodoListPage;
