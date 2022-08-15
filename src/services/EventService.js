import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://discord.com/api/v9/invites/rdp?with_counts=true&with_expiration=true",
  withCredentials: false,
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
};
