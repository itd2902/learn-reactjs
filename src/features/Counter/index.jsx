import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../Counter/counterSlice';
CounterFeature.propTypes = {};

function CounterFeature(props) {
   const dispatch = useDispatch(); //get dispatch from action to reducer
   const counter = useSelector((state) => state.counter); //get state from redux
   const handleIncrease = () => {
      const action = increase(); //call is action creator
      dispatch(action);
   };
   const handleDecrease = () => {
      const action = decrease(); //call is action creator
      dispatch(action);
   };
   return (
      <div>
         <div>Count: {counter}</div>
         <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
         </div>
      </div>
   );
}

export default CounterFeature;
