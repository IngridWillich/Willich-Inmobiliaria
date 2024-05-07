
export enum Status {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED"
}

interface IAppointment {
    id:number,
    date: Date;
    time: string;
    userId: number;
    status: Status;
   
}

export default IAppointment;
