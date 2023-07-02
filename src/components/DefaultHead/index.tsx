import Head from 'next/head'

export default function DefaultHead() {
  return (
    <Head>
      <title>Fungus Friends</title>
      <meta name="description" content="All kinds of fungus friends can be found in the garden of SpronQ, this is them on a map." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/mushroom.svg" />
    </Head>
  )
}