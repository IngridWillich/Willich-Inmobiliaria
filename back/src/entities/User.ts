import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credentials } from "./Credentials";
import { Appointment } from "./Appointment";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    email: string
    
    @Column()
    birthDate: Date

    @Column()
    dni: number

    @OneToOne(() => Credentials)
    @JoinColumn()
    credentials: Credentials

    @OneToMany(() => Appointment,(appointment) => appointment.user)
    appointments: Appointment[]
}