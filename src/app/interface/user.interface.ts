export interface User {
    
_id: string;

firstName: string;

lastName: string;
email: string;
phone:number;
password:string;
favorites:Array<User>;
isAdmin:boolean;
isVerify:boolean;
verificationCode:string;
registrationDate: string;
_v: number;
profileImage:string;
}

