import { Admin } from "../../domain/Admin";
import { Repository } from "../../domain/Repository";
import { UsersData } from "../../Data/UserData";

export class MongoDBClientesRepository implements Repository{
    async update(userId: number, nombre:string): Promise<Admin | null> {
        try {
            const index = UsersData.findIndex(user => user.id===userId);
            if (index !==1){
                UsersData[index] = {id: userId, nombre: nombre, password: UsersData[index].password}
            }
            return UsersData[index]
        } catch (error) {
            return null
        }
    }
    async getAll(): Promise<Admin[] | null> {
        try {
            const users = UsersData;
            return users.map(
                (user: any) =>
                    new Admin(
                        user.id,
                        user.nombre,
                        user.password,
                        user.email
                    )
            );
        } catch (error) {
            return null;
        }
    }
    async delite(userId: number): Promise<Admin | null> {
        try {
            const index = UsersData.findIndex(obj => obj.id===userId);
            UsersData.filter(user => user.id===userId)
            return UsersData[index]
        } catch (error) {
            return null
        }
    }
    async createCliente(
        id: number,
        nombre: string,
        password: string,
        email: string
    ): Promise<Admin | null> {
        try {
            const nuevoUsuario = new Admin(
                id,
                nombre,
                password,
                email
            );
            UsersData.push(nuevoUsuario);
            return nuevoUsuario;
        } catch (error) {
            return null
        }
    }
    
}