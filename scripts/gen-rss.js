const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const removeMd = require('remove-markdown')
const striptags = require('striptags')

async function generate() {
  const feed = new RSS({
    title: 'Mohsin Hayat',
    site_url: 'https://mohsinht.com',
    feed_url: 'https://mohsinht.com/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'posts', name)
      )
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  // Add resume to RSS
  const resumePath = path.join(__dirname, '..', 'pages', 'resume.mdx')
  const resumeContent = await fs.readFile(resumePath)
  const { data: resumeData, content } = matter(resumeContent)
  const cleanedContent = removeMd(striptags(content)).trim()

  feed.item({
    title: resumeData.title || 'Resume – Mohsin Hayat',
    url: 'https://mohsinht.com/resume',
    date: resumeData.date || new Date(),
    description: resumeData.description || 'Resume of Mohsin Hayat – Fullstack Engineer and AI enthusiast.',
    author: 'Mohsin Hayat',
    categories: ['Resume', 'About'],
    custom_elements: [
      { 'content:encoded': `<![CDATA[${cleanedContent}]]>` }
    ]
  })

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
