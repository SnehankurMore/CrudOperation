import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const App = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName]= useState('');
  // const [emailId, setEmailId]= useState('');
  // const [phoneNumber, setPhoneNumber]=useState('');
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    emailError:''
  });
  const handleChangeFirstname = (name) => {
    const expression = /^[A-Za-z]/;

    if(expression.test(name))
    {
      setState({...state, firstName: name});
    }else{

    }
  };

  const handleChangeLastname = (name) => {
    alert('name:'+name);
  };

  const handleChangeEmailId = (name) => {
    alert('name:'+name);
  };

  const handleChangePhoneNo = (name) => {
    alert('name:'+name);
  };

  const handleChangeEmalError = (name) => {
    alert('name:'+name);
  };


  const emailValidator = () =>
  {
    if(emailId =="")
    {
      setState({emailError:'Email Cannot be empty'})
    }
    else
    {
      setState({emailError:''})
    }
  }


  return (
    <View style={{padding: 10}}>
      <Text>First Name</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="First Name"
        // onChangeText={setState.firstName}
        // onBlur={props.handleBlur('firstName')}
        onChangeText={handleChangeFirstname}
        value={state.firstName}
      />
       <Text>Last Name</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Last Name"
      // onChangeText={setState.lastName}
      onChangeText={handleChangeLastname}
      value={state.lastName}
    />
    <Text>Email Id</Text>
     <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Email"
      onBlur={()=>emailValidator()}
      onChangeText={handleChangeEmailId}
      value={state.emailId}
    />
    <Text style={{color:'red'}}>{(state.emailError)}</Text>
    <Text>Phone Number</Text>
     <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Phone Number"
      onChangeText={handleChangePhoneNo}
      value={state.phoneNumber}
      keyboardType="numeric"
    />
    </View>
  )
}

export default App;
