import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../Counter/counterSlice';
import styles from './styles.module.css';
import styled from 'styled-components';
import { green } from '@material-ui/core/colors';
CounterFeature.propTypes = {};

//CSS in JS
const Title = styled.h1`
   text-align:center,
   font-weight:bold,
   color:${(props) => props.color || 'green'}
`;
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
         <Title color="red">HEADING</Title>
         <div className={styles.counter}>Count: {counter}</div>
         <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
         </div>
      </div>
   );
}

export default CounterFeature;
