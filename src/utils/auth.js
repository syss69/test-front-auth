export async function checkAuth() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/check`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) return false;
  return true;
}
