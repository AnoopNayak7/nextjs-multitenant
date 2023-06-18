import { AppProps } from 'next/app';
import { NextComponentType } from 'next';
import { loadTenantConfig } from '../utils/config';

interface MyAppProps extends AppProps {
  tenantConfig: any; 
}

const MyApp = ({
  Component,
  pageProps,
  tenantConfig,
}: MyAppProps) => {
  return <Component {...pageProps} tenantConfig={tenantConfig} />;
};

MyApp.getInitialProps = async (appContext: { Component: any; ctx: any; }) => {
  const { Component, ctx } = appContext;

  const { req } = ctx;
  const hostname = req?.headers.host || '';
  let subdomain = hostname.split('.')[0];

  if (process.env.NODE_ENV === 'development' && hostname === 'localhost:3000') {
    subdomain = 'jio';
  }
  const tenantConfig = loadTenantConfig(subdomain);

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    tenantConfig,
    pageProps,
  };
};

export default MyApp;
