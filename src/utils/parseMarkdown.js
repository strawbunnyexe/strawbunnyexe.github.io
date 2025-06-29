export function parseMarkdown(raw) {
  const delimiter = '---';
  const lines = raw.split('\n');

  if (lines[0].trim() !== delimiter) {
    return { metadata: {}, content: raw }; // no frontmatter
  }

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
