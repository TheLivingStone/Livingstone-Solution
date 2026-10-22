import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const servicesDirectory = path.join(process.cwd(), 'src/data/services')

// Services sort by their `order` frontmatter, then by id.
const byOrder = (a, b) => {
  const orderA = a.order ?? Number.MAX_SAFE_INTEGER
  const orderB = b.order ?? Number.MAX_SAFE_INTEGER
  if (orderA !== orderB) return orderA - orderB
  return a.id > b.id ? 1 : -1
}

// A service with a `link` frontmatter lives on its own page, so it gets no
// /services/[id] route.
const hasOwnPage = (fileName) => Boolean(matter(fs.readFileSync(path.join(servicesDirectory, fileName), 'utf8')).data.link)

export function getSortedServicesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(servicesDirectory)
  const allData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  return allData.sort(byOrder)
}

export function getRelatedServices(current_id) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(servicesDirectory)
  const allData = [];

  fileNames.filter((fileName) => fileName.includes('.md')).map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Exclude current id from result

    if ( id != current_id ) {
      // Combine the data with the id
      allData.push({
        id,
        ...matterResult.data
      });
    }
  })

  return allData.sort(byOrder)
}

export function getAllServicesIds() {
  const fileNames = fs.readdirSync(servicesDirectory).filter(fileName => !hasOwnPage(fileName))
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getServiceData(id) {
  const fullPath = path.join(servicesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}