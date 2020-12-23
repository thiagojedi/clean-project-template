import { NextPage } from 'next';
import Link from 'next/link';

import { MainLayout } from '../modules/application/layouts';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1>Hello World!</h1>
      <hr />
      <Link href="/todo-list">Go to Todo List</Link>
    </MainLayout>
  );
};

export default HomePage;
