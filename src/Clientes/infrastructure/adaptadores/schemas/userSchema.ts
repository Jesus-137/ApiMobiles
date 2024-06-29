import { Schema, model, Document } from 'mongoose';

export interface IUserDocument extends Document {
    id: number;
    name: string;
    password: string;
}

const UserSchema = new Schema<IUserDocument>({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
});

export const UserModel = model<IUserDocument>('Users', UserSchema);
