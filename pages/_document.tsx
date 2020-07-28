import React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from 'next/document'

export default class MyDocument extends Document<DocumentInitialProps> {
  render() {
    return (
      <html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
// MyDocument.getInitialProps = async (ctx: DocumentContext) => {
//   const sheets = new ServerStyleSheet()
//   const originalRenderPage = ctx.renderPage

//   ctx.renderPage = () =>
//     originalRenderPage({
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       enhanceApp: (App: any) => (props) =>
//         sheets.collectStyles(<App {...props} />)
//     })

//   const initialProps = await Document.getInitialProps(ctx)

//   return {
//     ...initialProps,
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement()
//     ]
//   }
// }
