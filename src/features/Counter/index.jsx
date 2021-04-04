import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../Counter/counterSlice';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
CounterFeature.propTypes = {};

const useStyles = makeStyles({
   root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
   },
});
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
   const classes = useStyles();
   return (
      <div>
         <Title color="red">HEADING</Title>
         <div className={styles.counter}>Count: {counter}</div>
         <div>
            <Button
               style={{ marginRight: '10px' }}
               className={classes.root}
               onClick={handleIncrease}
            >
               Increase
            </Button>
            <Button className={classes.root} onClick={handleDecrease}>
               Decrease
            </Button>
         </div>
      </div>
   );
}

export default CounterFeature;
