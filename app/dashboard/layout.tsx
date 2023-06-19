import LayoutProvider from "../layout-providers/LayoutProvider";

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {

  return (
    <LayoutProvider>
      {children}
    </LayoutProvider>
  );
}

