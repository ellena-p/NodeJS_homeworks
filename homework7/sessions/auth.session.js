import expressSessions from "express-session";

export const authSession = expressSessions({
    secret:"session_1_secret",
    name:"auth_user_session",
    cookie:{
        maxAge: 3 * 60 * 60 * 1000
    },
    saveUninitialized: true,
    resave:true
})