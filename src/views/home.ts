import { htm } from '@zeit/integration-utils';

export async function Home() {
  return htm`<Box>
    <B>home</B>
  </Box>`;
}