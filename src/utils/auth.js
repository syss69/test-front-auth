export async function checkAuth() {
      const response = await fetch('http://localhost:3000/check', {
        method: 'GET',
        credentials: 'include'
      });
  
      if (response.ok) return true;
      return false;

  }