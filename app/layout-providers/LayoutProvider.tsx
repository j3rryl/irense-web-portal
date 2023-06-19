import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ResponsiveSidebar from "../components/ResponsiveSidebar";

export default function LayoutProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ResponsiveSidebar appBar={<ResponsiveAppBar/>} content={children}/>
  );
}

