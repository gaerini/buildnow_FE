import "../../global.css";
import StyledComponentsRegistry from "../../lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry><div style={{width: '1920px', height:'1080px'}}>{children}</div></StyledComponentsRegistry>
      </body>
    </html>
  );
}
