import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js'
import applicationRoute from './routes/application.route.js'

const app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * @corsOptions - custom configuration for cross origin resource sharing
 */

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

// Routes

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/companies', companyRoute)
app.use('/api/v1/jobs', jobRoute)
app.use('/api/v1/applications', applicationRoute)

app.use(cors(corsOptions));
export default app;
