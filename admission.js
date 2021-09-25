console.clear();
const createAdd=(name,std,fee)=>{
  return{
    type:"ADD",
    payload:{
      name,
      std,
      fee,
      status:"active"
    }
  }
}
const createPassOut=(name,std)=>{
  return{
    type:"PASSOUT",
    payload:{
      name,
      std,
      status:"passout"
    }
  }
}
const createLeft=(name,std,fee)=>{
  return{
    type:"LEFT",
    payload:{
      name,
      std,
      fee,
      status:'left'
    }
  }
}
const addmission=(listOfStudents=[],action)=>{
  if(action.type==="ADD"){
    return [...listOfStudents,action.payload]
  }
  return listOfStudents
}
const passinOut=(listOfStudents=[],action)=>{
  if(action.type==="PASSOUT"){
    return [...listOfStudents,action.payload]
  }
  return listOfStudents
}
const feeStatus=(fee=0,action)=>{
  if(action.type==="ADD"){
    return fee+action.payload.fee;
  }else if(action.type==="LEFT"){
    return fee-action.payload.fee;
  }
  return fee
}
const leftOut=(listOfStudents=[],action)=>{
  if(action.type==="LEFT"){
    return [...listOfStudents,action.payload]
  }
 return listOfStudents;
}
const activeAdmission=(listOfStudents=[],action)=>{
  if(action.type==="ADD"||action.type==="LEFT"||action.type==="PASSOUT"){
    
    const output= [...listOfStudents,action.payload];
    return output.filter(item=>item.status==="active");
  }
  return listOfStudents;
}
const {combineReducers,createStore}=Redux;
const ourDepartments=combineReducers({
  addmission,
  passinOut,
  feeStatus,
  leftOut,
  activeAdmission
})
const store=createStore(ourDepartments);
store.dispatch(createAdd("Alex",5,2100))
store.dispatch(createAdd("Jim",3,1000))
store.dispatch(createPassOut("Alex",5))
store.dispatch(createAdd("Alex",5,2100))
store.dispatch(createLeft("jim",5,2100))



console.log(store.getState())
