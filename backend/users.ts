import { getMaxListeners } from "cluster";

export class User{
    constructor(public email: string, 
                public name: string,
                public password: string){}
     macthes(another: User): boolean{
         return another !== undefined && another.email === this.email && another.password === this.password;
     }
}

export const users ={
    "danielle@gmail.com": new User('danielle@gmail.com', 'Danielle', 'daniele123'),
    "aline@gmail.com": new User('aline@gmail.com', 'Aline', 'aline123')
}