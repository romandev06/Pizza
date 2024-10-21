import './scss/App.css'
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import UndefinedPage from './pages/UndefinedPage';
import Home from './pages/Home';
import Cart from './pages/cart/Cart';
import CartEmpty from './pages/cart/CartEmpty';
import Header from './components/header/Header';
import PizzaPage from './pages/PizzaPage';

function App() {
  return (
    <section className='app-section'>
      <Routes>
        <Route path={'/'} element={
          <>
            <Header />
            <Home />
          </>}>
        </Route>

        <Route path={'/cart'} element={
          <>
            <Header />
            <Cart />
          </>}>
        </Route>

        <Route path={'/cart-empty'} element={
          <>
            <Header />
            <CartEmpty />
          </>}>
        </Route>

        <Route path={'/pizza-page/:id'} element={<PizzaPage />}></Route>

        <Route path={'*'} element={<UndefinedPage />}></Route>
      </Routes>
    </section>
  )
}

export default App



// для стрелочного функционального компонента юзаем React.FC
// для обычного функционального компонента юзаем React.ReactElement


// но при работе с React.ReactElement не работае подсказка при наведении (не показывает какой параметр какой тип)
// хотя с React.FC все работает



// ПЕРВЫМ ДЕЛОМ СДЕЛАТЬ createasyncthunk в проект на PizzaPage.tsx



// Рефакторинг кода — это процесс изменения его структуры без изменения внешнего поведения
// Основная цель рефакторинга — улучшение читабельности, поддерживаемости и качества кода


// если я работаю с window, document - MouseEventHandler,
// а если с jsx разметкой, то React.MouseEventHandler

// обычно для initialState юзают interface
// inteface только для обьектов, в отличие от type



// при работе с Enum ключ принято писать капсом



// useDispatch может принимать только обьекты (асинхронные экшены нельзя)
// поэтому используется useAppDispatch



// в onClick event передается автоматически, в отличие от onChange, например


// import clsx from 'clsx'  библиотека для работы с классами (с условиями)


// utils папка для каких-либо вспомогательных функций и утилит, которые будут переисполльзоваться с других частях приложения

// за счет useNavigate() мы делаем редирект на определенный адрес