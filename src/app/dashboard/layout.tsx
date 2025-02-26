import { AddButtonExample } from "@/components/common/add-button/example-usage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children} <AddButtonExample />
    </div>
  );
}
