export const getToken = async () => {
  let token;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  } else {
    const { cookies } = await import("next/headers");

    const cookiesData = await cookies();

    token = cookiesData.get("token")?.value;
  }

  return token;
};