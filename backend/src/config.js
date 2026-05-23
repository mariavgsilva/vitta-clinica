require("dotenv").config();

function requireJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret || !String(secret).trim()) {
    console.error(
      "ERRO: JWT_SECRET não definido. Copie backend/.env.example para backend/.env e defina um valor seguro.",
    );
    process.exit(1);
  }
  return secret;
}

module.exports = {
  port: process.env.PORT || 3000,
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
};
