import { mongo } from '../../../database/mongo';
import { Repository } from '../../domain/Repository';
import { Users } from '../../domain/users';
import { IUserDocument, UserModel } from './schemas/userSchema';

mongo();
export class MongoUserRepository implements Repository {
    async createCliente(
        id: number,
        nombre: string,
        password: string
    ): Promise<Users|null> {
        try {
            const userModel = new UserModel({
                id: id,
                name: nombre,
                password: password
            });
            const savedUser = await userModel.save();
            return new Users(savedUser.id, savedUser.name, savedUser.password);
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    async getAll(): Promise<Users[]> {
        const users: IUserDocument[] = await UserModel.find();
        return users.map((user: IUserDocument) => new Users(user.id, user.name, user.password));
    }

    async update(
        id: number,
        nombre:string,
        password: string
    ): Promise<Users> {
        const updatedUser = await UserModel.findOneAndUpdate(
            { id: id },
            { name: nombre, password: password },
            { new: true }
        );
        if (!updatedUser) throw new Error('User not found');
        return new Users(updatedUser.id, updatedUser.name, updatedUser.password);
    }

    async delete(id: number): Promise<string | null> {
        const deletedUser = await UserModel.findOneAndDelete({ id: id });
        if (!deletedUser) return null;
        return 'Se eliminó correctamente';
    }
}
