"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdpater = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "789a9094aa09d0",
        pass: "1366fa2d4ac780"
    }
});
class NodemailerMailAdpater {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Diego Fernandes <silvashebert@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdpater = NodemailerMailAdpater;
