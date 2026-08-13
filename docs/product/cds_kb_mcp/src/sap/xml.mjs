// Lightweight XML helpers — no heavy dependency (ADT responses are small Atom/ADT XML).

/**
 * Extract attribute values for elements matching local name.
 * @param {string} xml
 * @param {string} localName e.g. "package" or "adtcore:name"
 * @param {string} attr
 */
export function extractAttrs(xml, localName, attr) {
  const out = [];
  if (!xml) return out;
  // Match start tags with optional namespace prefix
  const tagRe = new RegExp(`<(?:[\\w.-]+:)?${escapeReg(localName)}\\b([^>]*)>`, 'gi');
  let m;
  while ((m = tagRe.exec(xml)) !== null) {
    const attrs = m[1] || '';
    const v = readAttr(attrs, attr);
    if (v != null) out.push(decodeXml(v));
  }
  return out;
}

/**
 * Collect objects from ADT search / repository XML (best-effort across variants).
 * Looks for elements with adtcore:name / adtcore:type / adtcore:packageName attributes.
 */
export function parseAdtObjectEntries(xml) {
  const entries = [];
  if (!xml) return entries;
  // Split on tags that commonly carry object identity
  const tagRe = /<(?:[\w.-]+:)?(?:objectReference|object|abapObject|element|entry)\b([^>]*?)\/>|<(?:[\w.-]+:)?(?:objectReference|object|abapObject|element|entry)\b([^>]*)>/gi;
  let m;
  while ((m = tagRe.exec(xml)) !== null) {
    const attrs = m[1] || m[2] || '';
    const name = readAttr(attrs, 'adtcore:name') || readAttr(attrs, 'name');
    if (!name) continue;
    const type = readAttr(attrs, 'adtcore:type') || readAttr(attrs, 'type') || '';
    const pkg = readAttr(attrs, 'adtcore:packageName') || readAttr(attrs, 'packageName') || readAttr(attrs, 'package') || '';
    entries.push({
      name: decodeXml(name),
      type: decodeXml(type),
      package: decodeXml(pkg),
    });
  }

  // Also harvest bare adtcore:name occurrences with nearby type
  if (entries.length === 0) {
    const nameRe = /adtcore:name="([^"]+)"/gi;
    let nm;
    while ((nm = nameRe.exec(xml)) !== null) {
      const slice = xml.slice(Math.max(0, nm.index - 200), nm.index + 200);
      const type = /adtcore:type="([^"]+)"/i.exec(slice)?.[1] || '';
      const pkg = /adtcore:packageName="([^"]+)"/i.exec(slice)?.[1] || '';
      entries.push({ name: decodeXml(nm[1]), type: decodeXml(type), package: decodeXml(pkg) });
    }
  }

  return dedupeByName(entries);
}

/** Parse package names from ADT package search XML. */
export function parsePackageNames(xml) {
  const names = new Set();
  for (const e of parseAdtObjectEntries(xml)) {
    if (e.name) names.add(e.name);
  }
  for (const n of extractAttrs(xml, 'package', 'adtcore:name')) names.add(n);
  for (const n of extractAttrs(xml, 'package', 'name')) names.add(n);
  // <adtcore:name>...</adtcore:name> text form
  const textRe = /<(?:[\w.-]+:)?name>([^<]+)<\/(?:[\w.-]+:)?name>/gi;
  let m;
  while ((m = textRe.exec(xml)) !== null) {
    names.add(decodeXml(m[1].trim()));
  }
  return [...names].filter(Boolean).sort();
}

/** Extract text content of first matching element (e.g. source body wrappers). */
export function extractElementText(xml, localName) {
  if (!xml) return '';
  const re = new RegExp(
    `<(?:[\\w.-]+:)?${escapeReg(localName)}\\b[^>]*>([\\s\\S]*?)<\\/(?:[\\w.-]+:)?${escapeReg(localName)}>`,
    'i',
  );
  const m = re.exec(xml);
  return m ? decodeXml(m[1]) : '';
}

function readAttr(attrs, name) {
  // Support both ns:attr and bare attr; name may include colon
  const esc = escapeReg(name);
  const re = new RegExp(`(?:^|\\s)${esc}\\s*=\\s*"([^"]*)"`, 'i');
  const m = re.exec(attrs);
  if (m) return m[1];
  // Without namespace if name has prefix
  if (name.includes(':')) {
    const bare = name.split(':').pop();
    const re2 = new RegExp(`(?:^|\\s)${escapeReg(bare)}\\s*=\\s*"([^"]*)"`, 'i');
    const m2 = re2.exec(attrs);
    if (m2) return m2[1];
  }
  return null;
}

function decodeXml(s) {
  return String(s)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function escapeReg(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function dedupeByName(entries) {
  const seen = new Map();
  for (const e of entries) {
    const key = `${(e.type || '').toUpperCase()}::${e.name.toUpperCase()}`;
    if (!seen.has(key)) seen.set(key, e);
  }
  return [...seen.values()];
}
