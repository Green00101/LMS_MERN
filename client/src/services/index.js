import axiosInstance from "@/api/axiosInstance";

export async function registerServices(formData) {
  const data = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}

export async function loginServices(formData) {
  const data = await axiosInstance.post("/auth/login", formData);

  return data;
}

export async function checkAuth() {
  const data = await axiosInstance.post("/auth/check-auth");

  return data;
}
