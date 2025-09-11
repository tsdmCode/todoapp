export default function sanitizeInput(str) {
  const specialz = /^[a-zA-Z0-9æøåÆØÅäöüÄÖÜ?!]*$/;

  return specialz.test(str);
}
