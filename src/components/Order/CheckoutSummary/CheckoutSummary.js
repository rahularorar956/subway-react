import React from 'react';
import Sub from '../../Sub/Sub';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) =>{
    return (
        <div className={classes.checkoutSummary}>
            <h1>We hope it tastes well !</h1>
            <div style={{width:'300px',height:'300px',margin:'0'}}>
                <Sub ingredients={props.ingredients} />
            </div>

            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>
                CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;