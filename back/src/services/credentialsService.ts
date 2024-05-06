import ICredential from "../interfaces/ICredential";
let credentials:ICredential[]=[];
let id:number=0
export const createCredentials=(username:string,password:string)=>{
   

   const newCredential:ICredential={
        id,
        username,
        password
    };
    id++;

    credentials.push(newCredential);
    return newCredential.id
};

export const validateCredentials=(username:string,password:string)=>{
    const foundCredential = credentials.find(credential => credential.username === username);
    if(!foundCredential){
        return null;
}

if (foundCredential.password === password) {
    return foundCredential.id;
} else {
    return null;
}

}
