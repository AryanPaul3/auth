import { VERIFICATION_EMAIL_TEMPLATE , PASSWORD_RESET_REQUEST_TEMPLATE , PASSWORD_RESET_SUCCESS_TEMPLATE} from './emailTemplates.js';
import {transporter} from './mail.config.js';
import dotenv from 'dotenv';
dotenv.config();


export const sendVerificationEmail = async (email, verificationToken) => {

    try {
        const response = await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL, 
            to: email,
            subject: "Verify your email Baby",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });

        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL, 
            to: email,
            subject: "Welcome Honey",
            html: `<h1>Welcome, ${name}!</h1><p>Thank you for being with me🥺.</p>`,
            category: "Welcome Email",
        });

        console.log("Welcome email sent successfully:", response);
    } catch (error) {
        console.error("Error sending welcome email:", error);
    }
}

export const sendResetPasswordEmail = async (email, resetURL) => {
    try {
        const response = await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL, 
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });

        console.log("Reset password email sent successfully:", response);
    } catch (error) {
        console.error("Error sending reset password email:", error);
    }
}

export const sendResetSuccessEmail = async (email) => {
    try {
        const response = await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL, 
            to: email,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset Success",
        });

        console.log("Password reset success email sent successfully:", response);
    } catch (error) {
        console.error("Error sending password reset success email:", error);
    }
}