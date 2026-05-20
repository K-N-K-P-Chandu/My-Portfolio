import zipfile
import xml.etree.ElementTree as ET

def extract_text(docx_path):
    z = zipfile.ZipFile(docx_path)
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    text = []
    for p in root.findall('.//w:p', ns):
        p_text = []
        for t in p.findall('.//w:t', ns):
            if t.text:
                p_text.append(t.text)
        if p_text:
            text.append(''.join(p_text))
    return '\n'.join(text)

print(extract_text('NAGA KRISHNA P C KOVELAMUDI.docx'))
