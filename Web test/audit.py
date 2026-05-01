import urllib.request
from html.parser import HTMLParser
import re
import json

URL = "https://rdpurno.vercel.app"

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.imgs = []
        self.tags = []
        self.title = ""
        self.in_title = False
        self.meta = []
        self.h1 = []
        self.in_h1 = False
        self.scripts = []
        self.structured_data = []
        self.buttons = []
        self.text_content = []
        self.elements = 0

    def handle_starttag(self, tag, attrs):
        self.elements += 1
        attr_dict = dict(attrs)
        self.tags.append(tag)
        
        if tag == "a" and "href" in attr_dict:
            self.links.append(attr_dict)
        if tag == "img":
            self.imgs.append(attr_dict)
        if tag == "title":
            self.in_title = True
        if tag == "meta":
            self.meta.append(attr_dict)
        if tag == "h1":
            self.in_h1 = True
        if tag == "script":
            if "src" in attr_dict:
                self.scripts.append(attr_dict)
            if attr_dict.get("type") == "application/ld+json":
                pass # Handled in handle_data if we need to store it
        if tag == "button":
            self.buttons.append(attr_dict)

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "h1":
            self.in_h1 = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_h1:
            self.h1.append(data)
        if data.strip():
            self.text_content.append(data)

def check_link(url):
    try:
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "Mozilla/5.0"})
        res = urllib.request.urlopen(req, timeout=5)
        return res.getcode()
    except urllib.error.HTTPError as e:
        return e.code
    except Exception as e:
        return str(e)

print("Fetching...", URL)
req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req).read().decode('utf-8')

parser = MyHTMLParser()
parser.feed(html)

print("===== PHASE 1: LINKS =====")
expected_links = [
    "https://github.com/RDPURNO26/AURA",
    "https://github.com/RDPURNO26/AURA/releases",
    "https://github.com/RDPURNO26/JLPT-Samurai",
    "https://rdpurno26.github.io/JLPT-Samurai/",
    "https://github.com/RDPURNO26/Smart-Home",
    "https://github.com/RDPURNO26/UniLib",
    "https://www.linkedin.com/in/rdpurno26/",
    "mailto:rdpurno417@gmail.com",
    "https://rdpurno.vercel.app/RD_Purno_CV.pdf",
]
found_links = [l['href'] for l in parser.links]
for link in expected_links:
    if link in found_links:
        status = check_link(link)
        print(f"[FOUND] {link} -> HTTP {status}")
    else:
        print(f"[MISSING] {link}")

for link in parser.links:
    href = link.get('href', '')
    if href.startswith('http') and href not in expected_links:
        status = check_link(href)
        print(f"[EXTRA] {href} -> HTTP {status}")

print("===== PHASE 2: SEO =====")
print("Title:", parser.title)
print("Meta Description:", [m.get('content') for m in parser.meta if m.get('name') == 'description'])
print("Meta Keywords:", [m.get('content') for m in parser.meta if m.get('name') == 'keywords'])
print("Canonical:", [m.get('href') for m in parser.tags if hasattr(m, 'get') and m.get('rel') == 'canonical']) # Need to fix this, link rel=canonical
link_tags = re.findall(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html)
print("Canonical (regex):", link_tags)
print("Robots:", [m.get('content') for m in parser.meta if m.get('name') == 'robots'])
print("H1 Tags:", parser.h1)
print("OG Title:", [m.get('content') for m in parser.meta if m.get('property') == 'og:title'])
print("OG Desc:", [m.get('content') for m in parser.meta if m.get('property') == 'og:description'])
print("OG Image:", [m.get('content') for m in parser.meta if m.get('property') == 'og:image'])
print("Twitter Card:", [m.get('content') for m in parser.meta if m.get('name') == 'twitter:card'])

# Check files
for file_url in [
    "https://rdpurno.vercel.app/sitemap.xml",
    "https://rdpurno.vercel.app/robots.txt",
    "https://rdpurno.vercel.app/og-image.png",
    "https://rdpurno.vercel.app/favicon.ico"
]:
    print(f"File {file_url}:", check_link(file_url))

json_ld = re.findall(r'<script type="application/ld\+json">([^<]*)</script>', html)
print("JSON-LD found:", len(json_ld))
for jd in json_ld:
    print("Person in JSON-LD:", '"@type":"Person"' in jd.replace(" ", ""))
    print("LinkedIn in JSON-LD:", 'linkedin.com/in/rdpurno26' in jd)
    print("GitHub in JSON-LD:", 'github.com/RDPURNO26' in jd)

print("===== PHASE 3: ACCESSIBILITY =====")
for img in parser.imgs:
    print(f"IMG src={img.get('src')[:30]}... alt='{img.get('alt', 'MISSING')}'")

print("Skip to content:", "skip to content" in html.lower())

print("===== PHASE 4: CONTENT =====")
full_text = " ".join(parser.text_content)
print("Name occurrences:", full_text.count("Rahimanid Dian Purno"))
print("RD Purno occurrences:", full_text.count("RD Purno"))
print("Lorem ipsum?", "lorem ipsum" in full_text.lower())
print("Footer:", "2026" in full_text and "Rahimanid Dian Purno" in full_text)

print("===== PHASE 5: PERFORMANCE =====")
print("External scripts:", len(parser.scripts))
fonts = re.findall(r'<link[^>]*href="[^"]*fonts.googleapis.com[^"]*"', html)
print("Google Fonts:", len(fonts)) # Next.js uses inline fonts usually, so this might be 0
print("Total elements:", parser.elements)

print("===== PHASE 6: HEADERS =====")
res = urllib.request.urlopen(req)
headers = res.info()
print("X-Frame-Options:", headers.get('X-Frame-Options'))
print("CSP:", headers.get('Content-Security-Policy'))
print("X-Content-Type-Options:", headers.get('X-Content-Type-Options'))
print("Referrer-Policy:", headers.get('Referrer-Policy'))
print("Strict-Transport-Security:", headers.get('Strict-Transport-Security'))
