export const userDetails = ()=>{
    const user = JSON.parse(localStorage.getItem("userDetails"))
    return user
  }