import * as React from "react";
import { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import {Layout} from "./../component/layout";
import "./index.css";


const home_style = {
  height: "300px",
  padding: "30px",
}

const links = [
  {
    text: "Café 366",
    url: "http://cafe366.com",
    description:
      "Au Bunabet vous trouverez les cafés de spécialités torréfié par Café 366",
    color: "#E95800",
  },
]

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout name="truc">
      <div style={home_style}>
        <h1>Bunabet</h1>
        <p>102, rue de Meaux Paris 19</p>
        <a href={links[0].url} target="_blank" rel="noopener noreferrer"><div className="link">café 366</div></a>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Accueil Bunabet</title>
    <meta name="description" content="Chez Bunabet vous retrouvez les cafés de spécialités torréfiés par Café 366, ainsi que d'autres produits d'épiceries fines" />
  </>
)
