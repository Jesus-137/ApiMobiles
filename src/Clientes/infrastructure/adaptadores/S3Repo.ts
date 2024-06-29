// src/adapters/repositories/s3StorageRepository.ts

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { IStorageRepository } from '../../domain/repositories/IStorageRepository';

export class S3StorageRepository implements IStorageRepository {
    private s3Client: S3Client;

    constructor() {
        const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
        const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
        const sessionToken = process.env.AWS_SESSION_TOKEN;
        const region = process.env.AWS_REGION;

        if (!accessKeyId || !secretAccessKey || !region) {
            throw new Error('AWS credentials or region are not defined in .env');
        }

        this.s3Client = new S3Client({
            credentials: {
                accessKeyId,
                secretAccessKey,
                sessionToken,
            },
            region,
        });
    }

    async upload(file: Express.Multer.File): Promise<string> {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;

        if (!bucketName) {
            throw new Error('AWS S3 bucket name is not defined in .env');
        }

        const params = {
            Bucket: bucketName,
            Key: `${Date.now()}-${file.originalname}`,
            Body: file.buffer,
        };

        const command = new PutObjectCommand(params);
        const result = await this.s3Client.send(command);
        console.log(result)

        // Construct the URL for the uploaded object
        const objectUrl = `https://${bucketName}.s3.${this.s3Client.config.region}.amazonaws.com/${params.Key}`;
        
        return objectUrl;
    }
}
