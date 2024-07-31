export default function userDetails() {
    try {
      const user = JSON.parse(localStorage.getItem("userDetails"));
      return { user };
    } catch (error) {
      return { user: null };
    }
  }
  