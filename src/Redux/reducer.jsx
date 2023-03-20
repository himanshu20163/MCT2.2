const usersDetail = [];


const userdetails = async() => {
    const res= await  fetch("https://randomuser.me/api/?results=20")
    const data = await res.json()
    return usersDetail.push(...data.results)

};
userdetails();

const initialState = {
	usersDetail
};

const reducers = (state = initialState, action) => {
 if (action.type === "USERS"){
    console.log("Users",state)
    return state
 }
 else{
    return state;
 }
		
};
export default reducers;