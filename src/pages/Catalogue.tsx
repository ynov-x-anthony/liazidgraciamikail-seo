import useDocumentMeta from '../useDocumentMeta'
import { products } from '../data'

export default function Catalogue() {
  useDocumentMeta({
    title: 'Catalogue Vélos Électriques & Accessoires | MonSiteVélo',
    description: 'Explorez notre gamme complète de vélos électriques pliables, citadins et accessoires. Livraison gratuite et garantie 2 ans.'
  })

  return (
    <main className="page">
      <h1>Notre Catalogue de Vélos Électriques</h1>
      <p>Découvrez notre sélection de modèles adaptés à tous vos besoins urbains.</p>

      <section className="product-list">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.shortDescription}</p>
            {/* Ancre de lien descriptive */}
            <a href={`/produits/${product.slug}`}>
              Découvrir la fiche du {product.name}
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}