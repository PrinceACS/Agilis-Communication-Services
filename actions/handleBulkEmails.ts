"use server";
import { sendBulkEmails, SendEmailArgs } from "@/actions/sendEmail";

export const handleBulkEmailSend = async (clients : SendEmailArgs[]) => {
  try {
    const results = await sendBulkEmails({ clients });
    return { success: true, results };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    return { success: false, error: error?.message };
  }
};