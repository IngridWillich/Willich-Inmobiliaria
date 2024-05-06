export enum Status{
    ACTIVE="ACTIVE",
    CANCELLED="CANCELLED"
}
interface IAppointment {
    id: number;
    date: Date;
    time: string;
    description:string,
    userId: number;
    status: Status,
    serviceId:number
}

export default IAppointment;