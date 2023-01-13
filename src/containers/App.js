import React, { useState } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

export default function App() {
    const [robots, setRobots] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json())
        .then(user => setRobots(user));

    const [search, setSearch] = useState('');

    const onSearchChange = (searchData) => {
        setSearch(searchData);
        console.log(search);
    }
    const filterRobot = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(search.toLowerCase());
    })

    return !robots.length ?
        <h1 className='tc ma5'>loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobot} />
                </Scroll>
            </div>
        )
}
