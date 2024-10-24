import axiosInstance from "@/api/axiosInstance";

export async function registerServices(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}

export async function loginServices(formData) {
  const { data } = await axiosInstance.post("/auth/login", formData);

  return data;
}

export async function checkAuthServices() {
  const { data } = await axiosInstance.get("/auth/check-auth");

  return data;
}

export async function mediaUploadService(formData) {
  const { data } = await axiosInstance.post("/media/upload", formData);

  return data;
}
