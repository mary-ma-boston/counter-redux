import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/counter-slice';

import './Counter.css';


const Counter = () => {
   const dispatch = useDispatch();

   const counter = useSelector(state => state.counter.counter);
   const showCounter = useSelector(state => state.counter.showCounter);

   const incrementHandler = () => {
    dispatch(counterActions.increment());
   };

   const increaseHandler = () => {
    dispatch(counterActions.increase(5));
   };

   const decrementHandler = () => {
    dispatch(counterActions.decrement());
   };

   const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
   };

    return(
        <>
            <div className='counter'>
                <h1>Redux Counter</h1>
                {showCounter && <div className='value'>{counter}</div>}
                <div>
                    <button onClick={incrementHandler}>Increment</button>
                    <button onClick={increaseHandler}>Increase by 5</button>
                    <button onClick={decrementHandler}>Decrement</button>
                </div>
                <button onClick={toggleHandler}>Toggle Counter</button>
            </div>
        </>
    )
}

export default Counter;