import React from 'react'
import useDocumentMeta from '../useDocumentMeta'

export default function Product({ product }) {
  // Changement dynamique des méta-données par route produit
  useDocumentMeta({
    title: `${product.name} | MonSiteVélo`,
    description: product.shortDescription,
    canonicalUrl: `https://monsite.fr/produits/${product.slug}`
  })

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </main>
  )
}