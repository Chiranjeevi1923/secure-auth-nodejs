import 'dotenv/config';
import express from "express";
import userRouter from "./routes/user.routes.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(loggerMiddleware);


// Mount the user router at /user
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});