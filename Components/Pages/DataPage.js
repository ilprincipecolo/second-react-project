import React from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../../actions/index'

//1 method to use Redux without Hooks
class DataPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        this.props.fetchData()
    }

    render(){
        if(this.props.dataLoading)
            return <h1>LOADING...</h1>
     
        return (
        <div>{this.props.data}</div>
        );
    }


}
const mapDispatchToProps = ({
    fetchData
})
const mapStateToProps = (state) => {
 return {
     dataLoading: state.dataLoading,
     data: state.data
 }
}
export const DataPageConnected = connect(mapStateToProps,mapDispatchToProps)(DataPage);