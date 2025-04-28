"use server";



import Airtable from "airtable";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const submitForm = async (data: any) => {
	const { name, email, message, phone } = data;

	try {
		const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
			"app4ipunYjec8D9if"
		);

		 await base("Enquiry").create([
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
		console.error("Error submitting form:", error);
		return {
			success: false,
			message: "Failed to submit form. Please try again later.",
			error: "Unknown error",
		};
	}
};



