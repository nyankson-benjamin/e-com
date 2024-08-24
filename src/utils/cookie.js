export function setCookie(
    name,
    value,
    days
  ) {
    const expires = new Date();
    if (days !== null) {
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    }
  
    const cookieOptions = {
      expires: days !== null ? expires.toUTCString() : null,
      path: "/",
      secure: true,
      sameSite: "none",
    };
  
    document.cookie = `${name}=${value}; ${Object.entries(cookieOptions)
      .map(([key, value]) => `${key}=${value}`)
      .join("; ")}`;
  }
  
  export function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }
    return undefined;
  }