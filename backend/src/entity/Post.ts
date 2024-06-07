import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome_pessoa: string

    @Column()
    comentario: string

    @Column()
    coordenada: string

    @Column()
    endereco: string
}