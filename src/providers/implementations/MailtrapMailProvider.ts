import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import  nodemailer from 'nodemailer';
import 'dotenv/config';

export class MailtrapMailProvider implements IMailProvider {

    private transporter: Mail;

    constructor() {
        const { EMAILHOST, EMAILPORT, EMAILUSER, EMAILPASS } = process.env
        this.transporter = nodemailer.createTransport({
            host: EMAILHOST,
            port: Number(EMAILPORT),
            auth: {
                user: EMAILUSER,
                pass: EMAILPASS
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
    
}