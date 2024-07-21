import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.resolve(__dirname, "../data/db.json");

const defaultContent = JSON.stringify({
  registrations: [
    {
      id: "3274",
      admissionDate: "2023-10-22",
      email: "luiz@caju.com.br",
      employeeName: "Luiz Filho",
      cpf: "56642105087",
      status: "APPROVED",
    },
    {
      id: "b9cd",
      admissionDate: "2023-10-22",
      email: "filipe@caju.com.br",
      employeeName: "Filipe Marins",
      cpf: "78502270001",
      status: "APPROVED",
    },
    {
      id: "aed2",
      admissionDate: "2023-10-22",
      email: "jose@caju.com.br",
      employeeName: "José Leão",
      cpf: "78502270001",
      status: "REPROVED",
    },
    {
      id: "ee3e",
      admissionDate: "2024-07-21",
      email: "ltoningalvan@gmail.com",
      employeeName: "Luan Galvan",
      cpf: "91400078040",
      status: "REVIEW",
    },
  ],
});

fs.writeFileSync(dbPath, defaultContent, "utf-8");
