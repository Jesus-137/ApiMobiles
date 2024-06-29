import mongoose from 'mongoose';

const mongoUri = 'mongodb://3.94.240.213:27017';
const dbName = 'mi_base_de_datos';

// Conectar a MongoDB
export function mongo(){
    mongoose.connect(`${mongoUri}/${dbName}`)
        .then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.error('Failed to connect to MongoDB', error);
        });
}