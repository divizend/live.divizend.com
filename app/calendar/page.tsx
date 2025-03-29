import { redirect } from "next/navigation";

export default function CalendarRedirect() {
  redirect(
    "https://calendar.google.com/calendar/u/0?cid=Y19jZDYwYWYzNmVhZGE3ZmUyYjVkOWY2OThjNTZmYzliMzAwYTZiZmQwOTgzYzQzZDQ3ZmNlNjZlY2EyNDliMDc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
  );
}
