export const validateFormData = (name, email, pwd) => {
    let validName;
    console.log("name",name);
    if(name !== undefined){
        validName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    }
    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validatePwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);

    if(!validName && (name !== undefined)) return "Please enter a valid Full name."
    if(!validateEmail) return "Email Id is not Valid";
    if(!validatePwd) return "Password is not Valid";

    return null;
}