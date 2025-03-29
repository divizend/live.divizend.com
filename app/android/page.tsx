import { redirect } from "next/navigation";

export default function AndroidRedirect() {
  redirect(
    "https://play.google.com/store/apps/details?id=com.divizend.companion"
  );
}
