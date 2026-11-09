import { useEffect } from 'react'

type MetaProps = {
  title: string
  description: string
}

export default function useDocumentMeta({ title, description }: MetaProps) {
  useEffect(() => {
    // Mise à jour du titre du document
    document.title = title

    // Mise à jour ou création de la meta description
    let element = document.querySelector('meta[name="description"]')
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('name', 'description')
      document.head.appendChild(element)
    }
    element.setAttribute('content', description)
  }, [title, description])
}