import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import SignupForm from './exercises/day-2-forms';
import ListView from './exercises/day-2-lists';
import Counter from './exercises/day-2-hooks';

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter number={0}/>)

// const arr = [1,2,3,4,5,6,7,8,9,10];
// root.render(<ListView array={arr}/>)

// root.render(<SignupForm />)