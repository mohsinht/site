import PDFDocument from 'pdfkit'
import { createWriteStream } from 'node:fs'
import { once } from 'node:events'
import { fileURLToPath } from 'node:url'
import {
  independentProjects,
  profile,
  siteLastUpdated,
  skillGroupLabels
} from '../data/profile.js'

const path = new URL(
  '../public/downloads/MohsinHayatResume.pdf',
  import.meta.url
)
const document = new PDFDocument({
  size: 'A4',
  margins: { top: 42, right: 44, bottom: 48, left: 44 },
  bufferPages: true,
  info: {
    Title: `${profile.name} Resume`,
    Author: profile.name,
    CreationDate: new Date(siteLastUpdated),
    ModDate: new Date(siteLastUpdated)
  }
})
const stream = createWriteStream(path)
document.pipe(stream)
document.registerFont(
  'ResumeSans',
  fileURLToPath(new URL('../assets/fonts/DejaVuSans.ttf', import.meta.url))
)
document.registerFont(
  'ResumeSans-Bold',
  fileURLToPath(new URL('../assets/fonts/DejaVuSans-Bold.ttf', import.meta.url))
)
const navy = '#142440'
const body = '#202d40'
const width = document.page.width - 88
function measure(text, size = 9.5, font = 'ResumeSans') {
  return document
    .font(font)
    .fontSize(size)
    .heightOfString(text, { width, lineGap: 3 })
}
function ensure(height) {
  if (document.y + height > document.page.height - 48) document.addPage()
}
function write(
  text,
  { size = 9.5, font = 'ResumeSans', color = body, gap = 5 } = {}
) {
  document
    .font(font)
    .fontSize(size)
    .fillColor(color)
    .text(text, 44, document.y, { width, lineGap: 3 })
  document.y += gap
}
function heading(text, following = 35) {
  ensure(30 + following)
  document.y += 8
  write(text.toUpperCase(), {
    size: 11,
    font: 'ResumeSans-Bold',
    color: navy,
    gap: 6
  })
}
function linkedLine(items) {
  const size = 9
  document.font('ResumeSans').fontSize(size)
  const separator = '  ·  '
  const total =
    items.reduce((sum, item) => sum + document.widthOfString(item.label), 0) +
    document.widthOfString(separator) * (items.length - 1)
  let x = (document.page.width - total) / 2
  const y = document.y
  items.forEach((item, i) => {
    document.fillColor(item.url ? '#155ba0' : body).text(item.label, x, y, {
      lineBreak: false,
      ...(item.url ? { link: item.url } : {})
    })
    x += document.widthOfString(item.label)
    if (i < items.length - 1) {
      document.fillColor(body).text(separator, x, y, { lineBreak: false })
      x += document.widthOfString(separator)
    }
  })
  document.y = y + 15
}
function roleHeight(role) {
  return (
    measure(`${role.company} | ${role.title}`, 10, 'ResumeSans-Bold') +
    measure(role.period, 8.5) +
    (role.highlights ?? [role.summary]).reduce(
      (height, text) => height + measure(`• ${text}`) + 5,
      0
    ) +
    17
  )
}
function role(role) {
  ensure(roleHeight(role))
  write(`${role.company} | ${role.title}`, {
    size: 10,
    font: 'ResumeSans-Bold',
    color: navy,
    gap: 2
  })
  write(`${role.period}${role.location ? ` · ${role.location}` : ''}`, {
    size: 8.5,
    color: '#44536a',
    gap: 5
  })
  for (const text of role.highlights ?? [role.summary]) write(`• ${text}`)
  document.y += 3
}
document
  .font('ResumeSans-Bold')
  .fontSize(23)
  .fillColor(navy)
  .text(profile.name, { align: 'center' })
document.y += 5
document
  .font('ResumeSans')
  .fontSize(10)
  .fillColor(body)
  .text(profile.title, { align: 'center' })
document.y += 8
linkedLine([
  { label: profile.location },
  { label: profile.email, url: profile.links.email }
])
linkedLine([
  { label: 'mohsinht.com', url: 'https://mohsinht.com' },
  { label: 'GitHub', url: profile.links.github },
  { label: 'LinkedIn', url: profile.links.linkedin }
])
heading('Summary')
write(profile.resumeSummary)
write(profile.learningApproach)
heading('Core skills')
for (const [group, values] of Object.entries(profile.skills))
  write(`${skillGroupLabels[group]}: ${values.join(', ')}`)
heading('Experience', roleHeight(profile.roles[0]))
for (const item of profile.roles) role(item)
heading('Earlier experience', roleHeight(profile.earlierRoles[0]))
for (const item of profile.earlierRoles) role(item)
heading('Independent projects', 65)
for (const project of independentProjects) {
  ensure(measure(project.built) + 40)
  document
    .font('ResumeSans-Bold')
    .fontSize(10)
    .fillColor('#155ba0')
    .text(project.name, 44, document.y, { link: project.href })
  document.y += 5
  write(project.built)
}
heading('Education and achievements', 70)
write(profile.education)
for (const item of profile.achievements) write(`• ${item}`)
heading('Recommendations')
document
  .font('ResumeSans')
  .fontSize(9.5)
  .fillColor('#155ba0')
  .text('mohsinht.com/recommendations', 44, document.y, {
    link: 'https://mohsinht.com/recommendations'
  })
const range = document.bufferedPageRange()
for (let i = 0; i < range.count; i++) {
  document.switchToPage(i)
  document.page.margins.bottom = 0
  document
    .moveTo(44, 807)
    .lineTo(document.page.width - 44, 807)
    .strokeColor('#d7e0ee')
    .stroke()
  document
    .font('ResumeSans')
    .fontSize(8)
    .fillColor('#44536a')
    .text(`${profile.name} · mohsinht.com`, 44, 815, { lineBreak: false })
  document.text(`${i + 1}`, document.page.width - 54, 815, { lineBreak: false })
}
document.end()
await once(stream, 'finish')
console.log(`Generated ${path.pathname} (${range.count} pages)`)
