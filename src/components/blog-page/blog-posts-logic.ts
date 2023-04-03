class BlogPostInfo {
  title: string
  slug: string
  content: string
  author: string
  blogPosts: Pick<BlogPostInfo, 'title' | 'author' | 'content' | 'slug' | 'key'>[] = []
  key: string = ''
  static instance: BlogPostInfo | null = null

  private constructor() {
    this.title = ''
    this.slug = ''
    this.content = ''
    this.author = ''
  }

  static create() {
    if (BlogPostInfo.instance === null) {
      BlogPostInfo.instance = new BlogPostInfo()
    }
    return BlogPostInfo.instance
  }

  setTitle(title: typeof this.title) {
    this.title = title
    return this
  }
  setSlug(slug: typeof this.slug) {
    this.slug = slug
    return this
  }
  setContent(content: typeof this.content) {
    this.content = content
    return this
  }
  setAuthor(author: typeof this.author) {
    this.author = author
    return this
  }

  private setKey() {
    const randomKey = Math.random().toString(36).slice(2,9)
    this.key = randomKey
    return this.key
  }

  private build() {
    const key = this.setKey()
    if (this.title && this.slug && this.content && this.author) {
      return {
        title: this.title,
        slug: this.slug,
        content: this.content,
        author: this.author,
        key: key
      }
    }
    return undefined
  }

  pushBlogPost() {
    const build = this.build()
    if (build) this.blogPosts.push(build)
  }
}

const blogPosts = BlogPostInfo.create()

function addPost(
  title: BlogPostInfo['title'], 
  slug: BlogPostInfo['slug'], 
  content: BlogPostInfo['content'], 
  author: BlogPostInfo['author']
  ) {
  blogPosts.setTitle(title)
  blogPosts.setSlug(slug)
  blogPosts.setContent(content)
  blogPosts.setAuthor(author)
  blogPosts.pushBlogPost()
}

addPost('Qué es React?', 'que-es-react', 'react es la mejor librería de JS', 'juandc')
addPost('Qué es Angular?', 'que-es-angular', 'angular es la mejor librería de JS', 'nicobytes')
addPost('Qué es Vue?', 'que-es-vue', 'vue es la mejor librería de JS', 'diananerd')
addPost('Qué es Svelte?', 'que-es-svelte', 'svelte es la mejor librería de JS', 'gndx')

export { blogPosts }