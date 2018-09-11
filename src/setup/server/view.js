const view = (
  env = { NODE_ENV: '', APP_URL: '', GA_TRACKING_ID: '' },
  params,
  app = { meta: null, html: '', css: '', initialState: {} }
) =>
  `<!doctype html>
    <html>
    <head>
      <!-- Meta -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#2196f3">
      <meta name="msapplication-TileColor" content="#2196f3">
      ${app.meta.title.toString()}
      ${app.meta.meta.toString()}
      
      <!-- Favicon -->
      <link rel="apple-touch-icon" sizes="180x180" href="${
        env.APP_URL
      }/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="${
        env.APP_URL
      }/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="${
        env.APP_URL
      }/images/favicon/favicon-16x16.png" />
      <link rel="shortcut icon" href="${
        env.APP_URL
      }/images/favicon/favicon.ico?v=0.1" type="image/x-icon" />

      <link href="https://use.fontawesome.com/releases/v5.3.1/css/svg-with-js.css" rel="stylesheet"></link>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="stylesheet" type="text/css" href="${
        env.APP_URL
      }/js/bundles/vendor.css">
      <!-- CSS - Generated -->
      <style type="text/css">${app.css}</style>
    </head>
    <body>  
      <!-- App -->
      <div id="app">${app.html}</div>
      
      <!-- Initial State -->
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(app.initialState)}
      </script>
      
      <!-- JS Bundles -->
      <script type="text/javascript" src="${
        env.APP_URL
      }/js/bundles/vendor.js?v=0.2"></script>
      <script type="text/javascript" src="${env.APP_URL}/js/bundles/app.js?v=${
    env.NODE_ENV !== 'production' ? Math.random() : params.site.version
  }"></script>
      
      <!-- Global site tag (gtag.js) - Google Analytics -->
      ${
        env.NODE_ENV === 'production'
          ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${
              env.GA_TRACKING_ID
            }"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${env.GA_TRACKING_ID}');
            </script>`
          : ''
      }
    </body>
    </html>`;

export default view;
