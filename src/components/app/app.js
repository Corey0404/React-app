import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css'

const App = () => {

    const todoData = [
        {label: 'Drink Coffee'},
        {label: 'Make Awesome App'},
        {label: 'Have a lunch'}
    ];

    return (
        <div className="app">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;