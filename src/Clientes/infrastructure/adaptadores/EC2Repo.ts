// src/adapters/repositories/EC2StorageAdapter.ts

import fs from 'fs';
import path from 'path';
import { IStorageRepository } from '../../domain/repositories/IStorageRepository';

export class EC2StorageAdapter implements IStorageRepository {
    private uploadPath: string;

    constructor() {
        this.uploadPath = process.env.EC2_UPLOAD_PATH || 'uploads';
        
        if (!fs.existsSync(this.uploadPath)) {
            fs.mkdirSync(this.uploadPath, { recursive: true });
        }
    }

    async upload(file: Express.Multer.File): Promise<string> {
        const filePath = path.join(this.uploadPath, `${Date.now()}-${file.originalname}`);
        
        await fs.promises.writeFile(filePath, file.buffer);

        return filePath;
    }
}
