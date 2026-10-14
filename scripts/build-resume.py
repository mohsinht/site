#!/usr/bin/env python3
"""Build the downloadable resume from the site's shared profile data."""
import json
import subprocess
from html import escape
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
profile = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', "import {profile} from './data/profile.js'; console.log(JSON.stringify(profile))"], cwd=ROOT))
output = ROOT / 'public/downloads/MohsinHayatResume.pdf'
pdfmetrics.registerFont(TTFont('DejaVu', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuBold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFontFamily('DejaVu', normal='DejaVu', bold='DejaVuBold')
navy = colors.HexColor('#142440')
muted = colors.HexColor('#44536a')
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCustom', fontName='DejaVuBold', fontSize=21, leading=27, textColor=navy, alignment=TA_CENTER, spaceAfter=4))
styles.add(ParagraphStyle(name='SubtitleCustom', fontName='DejaVu', fontSize=9.3, leading=14, alignment=TA_CENTER, textColor=muted, spaceAfter=8))
styles.add(ParagraphStyle(name='SectionCustom', keepWithNext=True, fontName='DejaVuBold', fontSize=10.2, leading=15, textColor=navy, spaceBefore=13, spaceAfter=5))
styles.add(ParagraphStyle(name='RoleCustom', fontName='DejaVuBold', fontSize=9.2, leading=14, textColor=navy, spaceBefore=8, spaceAfter=1))
styles.add(ParagraphStyle(name='BodyCustom', fontName='DejaVu', fontSize=9.2, leading=14.2, textColor=colors.HexColor('#202d40'), spaceAfter=3))
styles.add(ParagraphStyle(name='SmallCustom', parent=styles['BodyCustom'], fontSize=7.9, leading=12, textColor=muted))
styles.add(ParagraphStyle(name='BulletCustom', parent=styles['BodyCustom'], leftIndent=11, firstLineIndent=-9, spaceAfter=3))
def para(content, style='BodyCustom'):
    return Paragraph(content, styles[style])
def link(label, url):
    return f'<link href="{escape(url, quote=True)}" color="#155ba0">{escape(label)}</link>'
def section(label): return para(escape(label.upper()), 'SectionCustom')
def bullet(text): return para('• ' + escape(text), 'BulletCustom')
def role(item):
    return [para(escape(item['company']) + '  |  ' + escape(item['title']), 'RoleCustom'), para(escape(item['period']) + ('  ·  ' + escape(item['location']) if item.get('location') else ''), 'SmallCustom'), *[bullet(x) for x in item.get('highlights', [item['summary']])]]
story = [para(profile['name'], 'NameCustom'), para(escape(profile['title']), 'SubtitleCustom'), para(' · '.join([escape(profile['location']), link(profile['email'], profile['links']['email']), link('Website', 'https://mohsinht.com'), link('GitHub', profile['links']['github']), link('LinkedIn', profile['links']['linkedin'])]), 'SubtitleCustom'), section('Summary'), para('Senior Software Engineer with 6+ years of international remote experience building applied AI and backend systems across airline, ecommerce, and healthcare platforms. I focus on dependable services, useful agents, and the data and workflows around them.'), section('Core skills')]
for label, key in [('Languages', 'languages'), ('Applied AI', 'ai'), ('Backend and data', 'backend'), ('Platform', 'platform')]:
    story.append(para('<b>'+label+':</b> ' + escape(', '.join(profile['skills'][key]))))
story.append(section('Experience'))
for item in profile['roles']:
    story.append(KeepTogether(role(item)))
story.append(section('Earlier experience'))
for item in profile['earlierRoles']:
    story.append(KeepTogether(role(item)))
story.append(section('Independent projects'))
for project in profile['projects'][:3]:
    story.append(KeepTogether([para(link(project['name'], project['href']), 'RoleCustom'), para(escape(project['built']))]))
story.append(section('Education and achievements'))
story.append(para(escape(profile['education'])))
for item in profile['achievements']:
    story.append(bullet(item))
story.append(section('Recommendations'))
story.append(para('Verified recommendations from colleagues and engineering leaders: ' + link('mohsinht.com/recommendations', 'https://mohsinht.com/recommendations')))
def footer(canvas, doc):
    canvas.saveState();canvas.setStrokeColor(colors.HexColor('#d7e0ee'));canvas.line(43, 37, A4[0]-43, 37)
    canvas.setFont('DejaVu', 7.5);canvas.setFillColor(muted);canvas.drawString(43, 25, 'Mohsin Hayat  ·  mohsinht.com');canvas.drawRightString(A4[0]-43,25,str(doc.page));canvas.restoreState()
SimpleDocTemplate(str(output), pagesize=A4, rightMargin=43, leftMargin=43, topMargin=40, bottomMargin=48, title='Mohsin Hayat Resume', author='Mohsin Hayat').build(story, onFirstPage=footer, onLaterPages=footer)
print(output)
