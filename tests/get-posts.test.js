import { beforeAll, describe, expect, jest, test } from '@jest/globals'

const getPageMap = jest.fn()
const normalizePages = jest.fn()

jest.unstable_mockModule('nextra/page-map', () => ({ getPageMap }))
jest.unstable_mockModule('nextra/normalize-pages', () => ({ normalizePages }))

let getPosts
let getTags

beforeAll(async () => {
  ;({ getPosts, getTags } = await import('../app/posts/get-posts.js'))
})

describe('post index', () => {
  test('loads posts, removes the index page, and sorts newest first', async () => {
    getPageMap.mockResolvedValue(['page-map'])
    normalizePages.mockReturnValue({
      directories: [
        { name: 'index', frontMatter: { date: '2020-01-01' } },
        { name: 'older', frontMatter: { date: '2024-04-01' } },
        { name: 'newer', frontMatter: { date: '2025-01-01' } }
      ]
    })

    await expect(getPosts()).resolves.toEqual([
      { name: 'newer', frontMatter: { date: '2025-01-01' } },
      { name: 'older', frontMatter: { date: '2024-04-01' } }
    ])
    expect(getPageMap).toHaveBeenCalledWith('/posts')
    expect(normalizePages).toHaveBeenCalledWith({
      list: ['page-map'],
      route: '/posts'
    })
  })

  test('collects tags and treats missing tags as an empty list', async () => {
    getPageMap.mockResolvedValue(['page-map'])
    normalizePages.mockReturnValue({
      directories: [
        { name: 'untagged', frontMatter: { date: '2025-02-01' } },
        {
          name: 'tagged',
          frontMatter: { date: '2025-01-01', tags: ['remote', 'career'] }
        }
      ]
    })

    await expect(getTags()).resolves.toEqual(['remote', 'career'])
  })
})
