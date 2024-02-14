"use server"

import bcrypt from "bcrypt";
import * as z from 'zod';

import { db } from "@/lib/db";
import { LoginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!"};
    }

    const {email, password} = validateFields.data;

    const user = db.user.findUnique({
        where: {
            email,
        }
    });

    const unhashedPassword = await bcrypt.compare(password, user.password);

    return { success: "Email sent!" };
}