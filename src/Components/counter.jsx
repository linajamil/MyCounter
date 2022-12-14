import React, { Component } from 'react';

class Counter  extends Component {
    state = {
        count: 1,
        tags : ['tag1', 'tag2', 'tag3']
    };
    
    handleIncrement(){
        console.log("Increment Clicked")
    }


    render() { 
 

        return(
        <div>
            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>

        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;  
    }
}

 
export default Counter;