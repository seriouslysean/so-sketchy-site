// Smoke test over the built site. Run `npm run build` first.
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const dist = new URL('../dist/', import.meta.url);

for (const page of ['index.html', 'privacy/index.html', 'support/index.html', '404.html']) {
  test(`built ${page}`, () => {
    assert.ok(existsSync(new URL(page, dist)), `${page} missing from dist`);
    assert.match(readFileSync(new URL(page, dist), 'utf8'), /<title>[^<]+<\/title>/);
  });
}

test('built robots.txt and sitemap', () => {
  assert.ok(existsSync(new URL('robots.txt', dist)));
  assert.ok(existsSync(new URL('sitemap-index.xml', dist)));
});
