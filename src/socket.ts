import { io } from "socket.io-client";
const API_URL = import.meta.env.VITE_API_URL;

export const socket = io(API_URL, {
  auth: {
    token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZGNvbS5jb20iLCJhdWQiOiJiZGNvbS5jb20iLCJzdWIiOiI2NjYwZGU1ZjI1YTAzYzlkOTMyYWVkZGYiLCJpYXQiOjE3MTc3MDU3OTUsImV4cCI6MTcxNzg3ODU5NSwicHJtIjoiZWNhM2IzODA5NmFjMGM5MWY2Mjg5MTk3OGM1ZTE1ZDM4NjRiY2ZjNWFjYzY5YWI4MGZiMDAwYTYzNzU4NGRhODFiZTRiNjE3YjY4Y2U2ZTkyYTgxYjYwNzA1NzFjZmUzYmFjMmQyNmI0NzEwZDE0MGEzZjY4MzU1MTg0Y2M0MjEifQ.pEY8QW6dj93SyMjxMqVlZpVAEXAnwHSmlcBnD8l2IGoYxJcXq2sR_6uLz_Nw4_AHaKzyfFM2SpyCjb58myDoH5UAapmwjddOxNZJ2O4ho4K8N7brOKuVP_J3gKKccx92zFoYm1AwEd1rY8w8CicZPasqvndd-yIGwN1m-qDKeANLhJ5bT_dTtl9R6UaDBXjShX0qkI2zr9LHVfec-s8A6T_Jb0eBtccXPNbKBwfXYxpVLMbe81K71bJnbBkJWlhDkArBWRZV-li6Jz9oNwsf-uAbggOIEJevRtEmM3zpEh86rkH7CKcyeAUCUjQMBAWLWY_Vlc6CzqsD-cpfoCtdCQ",
  },
});
