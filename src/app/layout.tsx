import { AntdRegistry } from '@ant-design/nextjs-registry';

import StyledComponentsRegistry from '@/lib/registry';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <StyledComponentsRegistry>
        <AntdRegistry>{children}</AntdRegistry>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
