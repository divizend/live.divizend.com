import { redirect } from "next/navigation";

export default function DevProposalRedirect() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSfiNXkzQBOsRNp4q9vvtwSczwgHkK3rSA6KfgqdBRhcbwttgA/viewform?usp=header"
  );
}
