// I want to display phone number like this: (281) 838-1234
// not include character from A -> Z
class PhoneInput extends React.Component{
  state ={
    display: ''
  }

  checkInput = (event) =>{
    let formattedInput = event.target.value.replace(/\D/g, '');
    let inputArray = formattedInput.split('');
    if(inputArray.length > 0){
      // new use of .splice: Inserting
      inputArray.splice(0,0, "(")
    }
    if(inputArray.length > 3){
      // new use of .splice: Inserting
      inputArray.splice(4,0, ")")
    }
    if(inputArray.length > 5){
      // new use of .splice: Inserting
      inputArray.splice(4,0, " ")
    }
    if(inputArray.length > 9){
      // new use of .splice: Inserting
      inputArray.splice(9,0, "-")
    }
    formattedInput = inputArray.join('');

    this.setState({
      display: formattedInput
    })
  }

  render(){
    return(
      // no need to pass in the event argument into this.checkInput cuz
      // it automatically does
      <input type= "text" className="input" onChange={this.checkInput} value={this.state.display}
    )
  }
}
