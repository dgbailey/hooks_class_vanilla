import React, {Component} from 'react';


//counter that when mount increments every 1 second until stopped

//class first

class Counter extends Component{

    constructor(props){
        super(props);//gives us our delegate prototype
        this.state = {
            currentCount:0,
            countInitiated:true,
        }
    }

    componentDidMount(){

        //set up an interval that updates out state
        this.initiateTimer();


    }

    //timer toggle function
    //updates current count every 1s
    initiateTimer(){
     
        this.myInterval = setInterval(() => this.setState({currentCount:++this.state.currentCount}),1000);
        
    }
    //note: without using arrow functions here, class methods used in JSX will not be bound to their original context (bind() will be necessary)
    toggleTimer(){
            if(this.state.countInitiated){
                clearInterval(this.myInterval);
                this.setState({countInitiated:false});
            }
            else{
                this.initiateTimer();
                this.setState({countInitiated:true});
            }
    }


    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    render(){
        console.log('rendering',this.state)
        return(

            <div className='counter-container'>
                <div className='counter-visualization'>{this.state.currentCount}</div>
                <button className='start-btn' onClick={this.toggleTimer.bind(this)}>{this.state.countInitiated ? 'Stop':'Start'}</button>
                

            </div>



        )
    }




}

export default Counter;