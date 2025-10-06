export default function sanitizeInput(str) {
  const specialz = /^[a-zA-Z0-9æøåÆØÅäöüÄÖÜ?!\s]*$/;

  return specialz.test(str);
}
