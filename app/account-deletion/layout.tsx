import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion • MyShop POS",
  description:
    "Data and account deletion portal for MyShop Grocery Billing & POS app.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
