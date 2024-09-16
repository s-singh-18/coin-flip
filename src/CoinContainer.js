import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
            {side: 'tails', imgSrc: "https://media.istockphoto.com/id/476142091/photo/quarter-dollar-us-coin-isolated-on-white.jpg?s=612x612&w=0&k=20&c=wNzr7m0Z3dhlf8_O1G3EFNz8u2tALVobVs4K4XfFN5c="}
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(oldState => {
            return {
                currCoin: newCoin,
                numFlips: oldState.numFlips + 1,
                numHeads: oldState.numHeads + (newCoin.side === 'heads' ? 1 : 0),
                numTails: oldState.numTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        });
    }

    handleClick(e) {
        this.flipCoin();
    }
    
    render() {
        return (
            <div className='CoinContainer'>
                <h2>Let's flip a coin!</h2>

                {this.state.currCoin && <Coin info={this.state.currCoin}/>}

                <button onClick={this.handleClick}>Flip Me!</button>

                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads 
                    and {this.state.numTails} tails.</p>
            </div>
        );
    }
}

export default CoinContainer;