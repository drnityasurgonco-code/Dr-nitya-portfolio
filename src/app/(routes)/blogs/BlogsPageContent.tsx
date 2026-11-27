import { PageHero } from '@/components/shared/page-hero'
import { CTABand } from '@/components/shared/cta-band'
import { ArticleList } from '@/components/blog/article-list'

/** Articles index: server shell, small client island for the category filter. */
export function BlogsPageContent() {
  return (
    <div>
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Articles' }]}
        label="Expert Cancer Insights"
        title="Health Blog &"
        highlight="Resources"
        lead="Evidence-based articles on cancer prevention, diagnosis, treatment and patient care by Dr. Nitya Nutan Misra."
      />
      <section aria-labelledby="blog-list-heading" className="frame section bg-white">
        <div className="container-x">
          <h2 id="blog-list-heading" className="sr-only">
            Blog Posts
          </h2>
          <ArticleList />
        </div>
      </section>
      <CTABand />
    </div>
  )
}
