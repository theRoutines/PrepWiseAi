import 'dotenv/config'
import express from "express"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    next();
});

const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173", "http://localhost:5174", "http://localhost:3000"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Request logging for auth
app.use("/api/auth/google", (req, res, next) => {
    console.log(`Auth attempt: ${req.method} ${req.url} from ${req.headers.origin}`);
    next();
});

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

const PORT = process.env.PORT || 6000

connectDb().then(() => {
    app.listen(PORT , ()=>{
        console.log(`Server running on port ${PORT}`)
    })
})
