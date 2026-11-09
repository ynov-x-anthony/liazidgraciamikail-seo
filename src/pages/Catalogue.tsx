import useDocumentMeta from '../useDocumentMeta'

export default function Catalogue() {
  useDocumentMeta({
    title: 'Catalogue Vélos Électriques | MonSiteVélo',
    description: 'Découvrez notre catalogue complet de vélos électriques.',
    canonicalUrl: 'https://monsite.fr/catalogue'
  })

  return (
    <main>
      <h1>Notre Catalogue</h1>
      {/* Contenu du catalogue */}
    </main>
  )
}