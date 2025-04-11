import { env } from '@/env'
import { resend } from '@repo/email'
import ReproTemplate from "@repo/email/templates/ReproTemplate"
import { createServerFn } from "@tanstack/react-start"

export const sendEmailFn = createServerFn({method: 'POST'}).handler(async () => {
    await resend.emails.send({
        from: env.RESEND_FROM,
        to: ['marius@plasmik.io'],
        subject: 'hello world',
        react: ReproTemplate({name: 'John Doe'}),
    })

    return {
        success: true,
    }
})