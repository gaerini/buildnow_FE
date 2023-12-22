import "../../global.css";
import StyledComponentsRegistry from "../../lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <StyledComponentsRegistry><div style={{width: '100%', height:'100%'}}>{children}</div></StyledComponentsRegistry>
      </body>
    </html>
  );
}
