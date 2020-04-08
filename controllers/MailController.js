const nodemailer = require('nodemailer');

const transport = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: 'c3c3d4801ddf0b',
        pass: 'a7dbf568657a51'
    }
}
module.exports = {
    enviar: (req, res) => {
        //criar traporter
        const transporter = nodemailer.createTransport(transport);

        //criando email
        const email = {
            from: "andradea20@yahoo.com",
            to: req.body.dest,
            subject: req.body.subj,
            text: req.body.msg
        }

        //enviar email
        transporter.sendMail(email,
            (error, info) => {
                if (error) {
                    console.log(error);
                    console.log(info);
                    res.send('deu xabu!');
                } else {
                    console.log(info);
                    res.send('deu bom!');
                }
            }
        )
    }
}