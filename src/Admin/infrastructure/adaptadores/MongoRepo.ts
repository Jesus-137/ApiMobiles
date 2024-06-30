import { mongo } from '../../../database/mongo';
import { Repository } from '../../domain/Repository'; 
import { Admin } from '../../domain/Admin';
import { IUserDocument, UserModel } from './schemas/userSchema';

mongo();
export class MongoUserRepository implements Repository {
    async createCliente(
        id: number,
        nombre: string,
        password: string,
        email: string
    ): Promise<Admin|null> {
        try {
            const userModel = new UserModel({
                id: id,
                name: nombre,
                password: password,
                email: email
            });
            const savedUser = await userModel.save();
            return new Admin(savedUser.id, savedUser.name, savedUser.password, savedUser.email);
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    async getAll(): Promise<Admin[]> {
        const users: IUserDocument[] = await UserModel.find();
        return users.map((user: IUserDocument) => new Admin(user.id, user.name, user.password, user.email));
    }

    async update(
        id: number,
        nombre:string,
        password: string,
        email: string
    ): Promise<Admin> {
        const updatedUser = await UserModel.findOneAndUpdate(
            { id: id },
            { name: nombre, password: password, email: email},
            { new: true }
        );
        if (!updatedUser) throw new Error('User not found');
        return new Admin(updatedUser.id, updatedUser.name, updatedUser.password, updatedUser.email);
    }

    async delete(id: number): Promise<string | null> {
        const deletedUser = await UserModel.findOneAndDelete({ id: id });
        if (!deletedUser) return null;
        return 'Se eliminó correctamente';
    }
}
