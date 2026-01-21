const fs = require("fs");

// Load semua proxy dari file
function loadProxies() {
  try {
    const proxies = fs.readFileSync("proxy.txt", "utf-8")
      .split("\n")
      .map(p => p.trim())
      .filter(Boolean);
    return proxies;
  } catch (err) {
    console.error("❌ Gagal baca proxy.txt:", err);
    return [];
  }
}

// Ambil random proxy (kalau masih perlu di tempat lain)
function getRandomProxy() {
  const proxies = loadProxies();
  if (proxies.length === 0) return null;
  const random = proxies[Math.floor(Math.random() * proxies.length)];
  return random;
}

module.exports = { loadProxies, getRandomProxy };