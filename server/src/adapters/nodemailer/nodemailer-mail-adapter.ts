import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "789a9094aa09d0",
    pass: "1366fa2d4ac780"
  }
});


export class NodemailerMailAdpater implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Diego Fernandes <silvashebert@gmail.com>",
      subject,
      html: body,
    })

  }
}