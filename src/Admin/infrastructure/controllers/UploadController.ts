// src/Clientes/infrastructure/controllers/UploadController.ts

import { Request, Response } from "express";
import { IStorageRepository } from "../../domain/repositories/IStorageRepository";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

export class UploadController {
    constructor(private storageRepository: IStorageRepository) {}

    run(req: Request, res: Response): void {
        upload.single('file')(req, res, async (err) => {
            if (err) {
                return res.status(400).send({ status: "error", message: err.message });
            }

            if (!req.file) {
                return res.status(400).send({ status: "error", message: "No file provided" });
            }

            try {
                const fileUrl = await this.storageRepository.upload(req.file);
                res.status(200).send({ status: "success", data: fileUrl });
            } catch (error) {
                res.status(500).send({ status: "error", message: error });
            }
        });
    }
}
