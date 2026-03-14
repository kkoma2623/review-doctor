const STORAGE_KEY = "reviewdr_admin_emails";

const DEFAULT_ADMIN_EMAILS = [
  "reviewdrtest01@gmail.com",
  "sungpyo9053@kookmin.ac.kr",
];

export function getAdminEmails() {
  if (typeof window === "undefined") return DEFAULT_ADMIN_EMAILS;

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_ADMIN_EMAILS;

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return DEFAULT_ADMIN_EMAILS;
  } catch {
    return DEFAULT_ADMIN_EMAILS;
  }
}

export function saveAdminEmails(emails) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(emails));
  window.dispatchEvent(new Event("admin-emails-updated"));
}

export function addAdminEmail(email) {
  const current = getAdminEmails();
  const normalized = email.trim().toLowerCase();

  if (!normalized) return current;
  if (current.includes(normalized)) return current;

  const next = [...current, normalized];
  saveAdminEmails(next);
  return next;
}

export function removeAdminEmail(email) {
  const current = getAdminEmails();
  const normalized = email.trim().toLowerCase();
  const next = current.filter((item) => item !== normalized);
  saveAdminEmails(next);
  return next;
}

export function isAdminEmail(email) {
  if (!email) return false;
  return getAdminEmails().includes(email.trim().toLowerCase());
}