"use server";

import Airtable from "airtable";

export const submitForm = async (data: any) => {
	const { name, email, message, phone } = data;

	try {
		const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
			"app4ipunYjec8D9if"
		);

		const response = await base("Enquiry").create([
			{
				fields: {
					"Full Name": name, // Ensure exact match with Airtable field names
					Email: email,
					Phone: phone,
					Message: message,
				},
			},
		]);

		return {
			success: true,
			message: "Message received successfully. We'll get back to you soon!",
		};
	} catch (error) {
		return {
			success: false,
			message: "Failed to submit form. Please try again later.",
			error: "Unknown error",
		};
	}
};
