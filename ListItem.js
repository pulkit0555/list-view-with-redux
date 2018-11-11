import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import {CardSection} from "./common/CardSection";
import * as actions from "../actions";
class ListItem extends Component{
  constructor(){
    super();
   global.selectedOnce=true;
  }
  state={
  open: false,
  activeIndex: 0
  }
  renderDescription(){
    if(this.props.library.id === this.props.selectedLibraryId && (this.state.activeIndex === this.props.selectedLibraryId) && this.state.open){
      return (
        <Text>{this.props.library.description}</Text>
      )
    }
  }
  render(){
    return(
    <TouchableWithoutFeedback
      onPress={ () => {
        this.setState({ open: !this.state.open, activeIndex: this.props.library.id })
        this.props.selectLibrary(this.props.library.id);
      }
     }
    >
      <View>
        <CardSection>
          <Text style={styles.toggleStyle}> {(this.state.open && (this.state.activeIndex === this.props.selectedLibraryId))?'-':'+'} </Text>
          <Text style={styles.titleStyle}>
          {this.props.library.title}
          </Text>
        </CardSection>
        {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle:{
    fontSize:18 ,
    paddingLeft:15
  },
  toggleStyle:{
    fontSize:18 ,
    paddingLeft:5
  }
};

const mapStateToProps = (state) => {
  return {selectedLibraryId:state.selectedLibraryId};
}

export default connect(mapStateToProps , actions)(ListItem);
