import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Promise1 from './study/Promise1';
import AsyncAwait, {test1, test2} from './study/AsyncAwait';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 안에 들어있는 태그들을 렌더링
// path를 조건문이라고 생각하면 됨 >> 해당 경로면 렌더링
// >> 위에서부터 순서대로 실행하니까 조건에 부합하면 밑의 경로는 보지 않음
// 2개 있으면 2개 다 렌더링 됨
root.render(
<BrowserRouter>
  <Main />
</BrowserRouter>
);

