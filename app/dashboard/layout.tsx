import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ResponsiveSidebar from "../components/ResponsiveSidebar";

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {

  return (
    <ResponsiveSidebar appBar={<ResponsiveAppBar/>} content={children}/>
  );
}

