import axiosInstance from "@/api/axiosInstance";

export async function registerServices(formData) {
  const data = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}
