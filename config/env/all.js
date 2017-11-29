import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();

const rootPath = path.normalize(`${__dirname}/../..`);

export default {
	root: rootPath,
	port: process.env.PORT || 3000,
	db: process.env.MONGOHQ_URL,
	tokenSecret: process.env.JWT_SECRET
};
