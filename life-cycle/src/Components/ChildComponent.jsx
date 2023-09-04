import { Component } from 'react'

class ChildComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }

    //   console.log('Location : Children Constructor')

    }

    componentDidMount() { 
        // console.log('Location : Children componentDidMount');
    }

    render() {
        // console.log('Location : Children Render')
        return (
            <div>
                {console.log('Location : Children Update DOM')}
                Hello there
            </div>
        )
    }
}

export default ChildComponent