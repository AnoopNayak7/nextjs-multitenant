import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { loadTenantConfig } from './src/utils/config';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const { hostname } = req.headers;
    const subdomain = hostname.split('.')[0];
    console.log('Hostname:', hostname);
    console.log('Subdomain:', subdomain);

    req.tenantConfig = loadTenantConfig(subdomain);
    console.log('Tenant Config:', req.tenantConfig);

    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3001, () => {
    console.log('> Ready on http://localhost:3001');
  });
});
