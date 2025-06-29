// Dynamically import all .md files in /posts
const postFiles = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

export function parseMarkdown(raw) {
  const delimiter = '---';
  const lines = raw.split('\n');

  if (lines[0].trim() !== delimiter) return { metadata: {}, content: raw };

  let metaEndIndex = -1;
  const metadata = {};

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === delimiter) {
      metaEndIndex = i;
      break;
    }
    const [key, ...rest] = lines[i].split(':');
    if (key && rest.length > 0) {
      metadata[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
    }
  }

  const content = lines.slice(metaEndIndex + 1).join('\n');
  return { metadata, content };
}

export function getAllPosts() {
  const posts = [];

  for (const path in postFiles) {
    const raw = postFiles[path];

    const { metadata } = parseMarkdown(raw);
    const slug = metadata.slug || path.split('/').pop().replace('.md', '');

    if (metadata.title && metadata.date) {
      posts.push({
        slug,
        title: metadata.title,
        date: metadata.date,
        summary: metadata.summary || '',
      });
    }
  }

  // Sort by newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
