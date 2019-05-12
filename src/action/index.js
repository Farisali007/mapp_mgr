export default emailChanged = text =>{
    return{
        type: "email-changed",
        payload: text
    };
};