import { redirect } from "next/navigation";

export default function DJProposalRedirect() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSekt9Zm49Cjz-9z1JlrRhfIz-SLuAlCEri71DdGE-aOcDyKnw/viewform?usp=dialog"
  );
}
