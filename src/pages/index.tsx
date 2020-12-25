import React from 'react';
import { NextPage } from 'next';

import Link from 'next/link';
import { MainLayout } from '../modules/application/layouts/main-layout';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Link href="/todo-list">Go to Todo List</Link>
    </MainLayout>
  );
};

export default HomePage;
