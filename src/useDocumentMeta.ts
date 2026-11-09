import { useEffect } from 'react'

type MetaProps = {
  title: string
  description: string
  canonicalUrl?: string
}

export default function useDocumentMeta({ title, description, canonicalUrl }: MetaProps) {
  useEffect(() => {
    // 1. Titre
    document.title = title

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description)

    // 3. Balise Canonique
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]')
      if (!linkCanonical) {
        linkCanonical = document.createElement('link')
        linkCanonical.setAttribute('rel', 'canonical')
        document.head.appendChild(linkCanonical)
      }
      linkCanonical.setAttribute('href', canonicalUrl)
    }
  }, [title, description, canonicalUrl])
}