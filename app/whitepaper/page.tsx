import { redirect } from "next/navigation";

export default function WhitePaperRedirect() {
  redirect(
    "https://docs.google.com/document/d/1xA-sWDa7aLUfZkJ6_WDCfTdoRhfEphtGL3Tg8c5RjUY/edit"
  );
}
