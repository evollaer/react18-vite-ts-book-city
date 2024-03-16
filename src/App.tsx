import React, { useState } from 'react';
import AppRouter from '@/routers';
import { BrowserRouter } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
