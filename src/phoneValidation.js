/**
 * Supported format: + followed by 8–15 digits.
 * The first digit after + must be nonzero.
 * Example: +919876543210
 */
export function validatePhoneNumber(value) {
  const phone = String(value ?? "").trim();

  if (!phone) {
    return {
      valid: false,
      message: "Please enter a phone number."
    };
  }

  if (!/^\+[1-9]\d{7,14}$/.test(phone)) {
    return {
      valid: false,
      message: "Enter a valid number with country code, such as +919876543210."
    };
  }

  return { valid: true, message: "" };
}
