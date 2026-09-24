import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import config from "../config";

const adapter = new PrismaPg({
  connectionString: config.database_url!,
});

const prisma = new PrismaClient({ adapter });

export { prisma };