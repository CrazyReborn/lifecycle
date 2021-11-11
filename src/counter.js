import React from "react";


export default class Counter extends React.Component {
    constructor(props) {
      console.log('constructor')
        super(props);
        this.state = {
            counter: 0,
            seed: 0
        }
        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }

    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }
  
    componentDidMount() {
      console.log('Component did mount');
      console.log('-------------------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if (nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp) {
                console.log('Shoud Component Update -- DO NOT RENDER')
                console.log('-------------------')
                return false;
            }
            console.log('Shoud Component Update -- DO RENDER')
            return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update')
        return null;
    }

    render() {
        console.log('Render', this.state.error);

        if(this.state.error) {
            return <div>We have encountered an error! {this.state.error}</div>
        }

        return(
            <div>
              <button onClick={this.increment}>Increment</button>
              <button onClick={this.decrement}>Decrement</button>
                <div className='counter'>
                Counter: {this.state.counter}
                </div>
                <ErrorComponent />
            </div>
            
        )
    }
    
    componentDidUpdate(prevProps, prevState, snapShot) {
      console.log('Component did update');
      console.log('-------------------')
    }
    componentWillUnmount() {
        console.log('Component Will Unmount');
        console.log('-------------------')
    }
    componentDidCatch(error, info) {
        console.log('Component did catch');
        this.setState({error, info})
    }
  }
  