import Main from 'components/main/Main';
import React from 'react';
import { Route, Routes } from 'react-router';
import NotFound from './NotFound';

const Contents = () => {
    return (
        <div id='contents' className='box'>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
};

export default Contents;