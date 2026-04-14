import emailjs from 'emailjs-com';

// EmailJS configuration
// Note: These should be replaced with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_uf1tvnk'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'template_9tzgxqa'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'MOh0Uuj6bz6BV50-R'; // Replace with your public key

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data containing name, email, subject, message
 * @returns {Promise} - EmailJS promise
 */
export async function sendEmail(formData) {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'AlloyTrik Team',
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );

        return response;
    } catch (error) {
        console.error('Email send error:', error);
        throw error;
    }
}

/**
 * Initialize EmailJS (call this once in your app)
 */
export function initEmailJS() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

export default { sendEmail, initEmailJS };
