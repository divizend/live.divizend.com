import { redirect } from "next/navigation";

export default function BCProposalRedirect() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLScTievr8TyWnFY1PIu8XhyZhtw77m4r5qIAO5fbwx3FMDtgFA/viewform?usp=dialog"
  );
}
