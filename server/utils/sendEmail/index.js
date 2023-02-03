const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.REGISTER_EMAIL_SERVICE,
            auth: {
                user: process.env.REGISTER_EMAIL_LOGIN,
                pass: process.env.REGISTER_EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.REGISTER_EMAIL_LOGIN,
            to: email,
            subject,
            text,
        });
        console.log('Email sent');
    } catch (e) {
        console.error('Email not sent');
        console.error(e);
    }
};
