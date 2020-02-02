import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addUser } from '../actions';

export const Useradd = () => {
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={() => dispatch(addUser({name: "joe",password: "34"}))}>               
            </button>
        </div>
    )
}