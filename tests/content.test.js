import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from '@jest/globals'

const rootDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
)
const postsDirectory = path.join(rootDirectory, 'app/posts')

describe('post content', () => {
  test('every post has complete, valid front matter', async () => {
    const entries = await readdir(postsDirectory, { withFileTypes: true })
    const postFiles = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(entry.name, 'page.md'))

    expect(postFiles.length).toBeGreaterThan(0)

    for (const file of postFiles) {
      const content = await readFile(path.join(postsDirectory, file), 'utf8')
      const frontMatter = content.match(/^---\n([\s\S]*?)\n---/)

      expect(frontMatter).not.toBeNull()
      expect(frontMatter[1]).toMatch(/^title:\s*.+$/m)
      expect(frontMatter[1]).toMatch(/^description:\s*.+$/m)

      const date = frontMatter[1].match(/^date:\s*(.+)$/m)?.[1]
      expect(date).toBeDefined()
      expect(Number.isNaN(Date.parse(date))).toBe(false)
    }
  })
})
