# Global Defense & Foreign Policy Research Assistant
### AI Assistant: **Kissinger**

A simple, professional single-page portfolio website showcasing an AI geopolitical and defense research assistant. Grounded in five authoritative defense literature documents from the United States, France, the United Kingdom, NATO, and Stanford/NBR (Indo-Pacific), the assistant demonstrates Retrieval-Augmented Generation (RAG) to provide attributed legal and strategic policy answers.

---

## 📁 File Structure

```text
Global_Defense_Research_Assistant/
├── index.html           # Main single-page website with all 5 sections & Jotform integration
├── css/
│   └── style.css        # Professional defense & national security theme (navy/white/gray)
├── js/
│   └── main.js          # Mobile navigation, smooth scrolling, prompt copying, preview toggles
└── README.md            # Project documentation and Jotform embedding guide
```

---

## 🚀 How to Preview the Website Locally

You can preview the website immediately on your computer using either of the following two quick methods:

### Method 1: Direct File Preview (Easiest — No Setup Needed)
1. Open your File Explorer and navigate to:  
   `C:\Users\simeo\Downloads\Global_Defense_Research_Assistant`
2. Double-click **`index.html`** (or right-click &rarr; **Open with** &rarr; select **Google Chrome**, **Microsoft Edge**, **Brave**, or **Firefox**).
3. The website will load instantly in your browser!

### Method 2: Local HTTP Server (Recommended if testing iframes/embeds)
If you want to run a local development server using Python:
1. Open PowerShell or Command Prompt in this folder.
2. Run:
   ```powershell
   python -m http.server 8000
   ```
3. Open your browser and visit:  
   `http://localhost:8000`

---

## 🤖 Jotform Chatbot Integration ("Kissinger")

The **Kissinger** AI chatbot hosted on Jotform is integrated into the briefing terminal window:
- **Agent ID:** `01a1f674763070008bdad25b94bcf87d7f33`
- **Embedded Script:** `https://cdn.jotfor.ms/agent/embedjs/01a1f674763070008bdad25b94bcf87d7f33/embed.js`
- **In-Page Interface:** Direct integration inside `<div id="jotform-embed-wrapper">` in `index.html`.
- **Sample Verification:** Collapsible reference drawer preserving the verified CRS citation test case.

---

## 🏛️ Website Sections & Features

1. **Home / Hero:**
   - Introduces the *Global Defense & Foreign Policy Research Assistant* and *Kissinger*.
   - Outlines the mission: AI-powered analytical research tool for national security scholars, foreign policy analysts, and defense practitioners.
   - Highlights the five primary defense documents, RAG architecture, document-based source attribution, and hallucination resistance testing.

2. **AI Research Assistant (Kissinger):**
   - Defense terminal aesthetic with status indicators.
   - Live embedded Jotform chatbot interface with interactive sample session preview.
   - Interactive "Recommended Research Prompts" that can be copied with one click.

3. **Research Sources (Five Curated Documents):**
   - **United States:** Congressional Research Service (CRS) — *The North Atlantic Treaty: U.S. Legal Obligations and Congressional Authorities* (Jan 2025).
   - **France:** IRSEM (Amélie Zima) — *NATO and the War in Ukraine: Limited Role but Reinforced Legitimacy?* (Aug 2023).
   - **United Kingdom:** RUSI — *UK National Security Advantage from Disruptive Technologies* (Oct 2025).
   - **NATO:** *2022 Strategic Concept* (June 2022, Madrid Summit).
   - **China / Indo-Pacific:** Oriana Skylar Mastro (Stanford / NBR) — *Close Encounters with the PLA: Regional Experiences and Implications for Deterrence* (May 7, 2024; stored as 3 separate text entries due to upload limitations).

4. **Project Overview (RAG Architecture):**
   - Detailed explanation of Retrieval-Augmented Generation (RAG) for national security research.
   - 4-step pipeline visualization: Document Parsing &rarr; Vector Indexing &rarr; Semantic Retrieval &rarr; Attributed Synthesis.
   - Defense research benefits: bounded knowledge corpus, multilateral comparative analysis, citation fidelity.

5. **Testing Results & Evaluation Audit:**
   - Distinct, non-aggregated functional testing groups:
     1. **Original Three-Document Testing (4 of 4 passed):** Tested CRS Section 1250A withdrawal restrictions, IRSEM Ukraine legitimacy and limited role, RUSI tech strengths and scaling obstacles, and tri-document comparison.
     2. **Expanded Baseline Evaluation (10 tests evaluated):** Retrieval and synthesis confirmed; broad queries require specific wording; citations and quotes require independent verification.
     3. **China / Indo-Pacific Testing (3 of 4 passed):** Tested report identification (Mastro 2024), 6-country regional encounters (Australia, India, Japan, Philippines, Taiwan, Vietnam), country-specific comparison (Philippines, Taiwan, Japan/Senkaku area), and 1 unconfirmed broad query.
     4. **NATO Strategic Concept Testing (3 of 3 passed):** Tested core tasks & primary threat (Russia), deterrence & defense strategy (Article 5, eastern flank, resilience), and synthesis of NATO Concept + CRS Section 1250A + IRSEM.
     5. **Post-Guideline Audit:** Substantive depth improved; explicit source attribution remains inconsistent.
   - **Methodological Limitations & Transparency Note:** Explains functional test scope, independent document checking requirements, query formulation sensitivity, citation verification, and non-guarantee of future outputs.

---

## 🎨 Design System

- **Color Palette:** Deep Navy Blue (`#0b192c`, `#10243e`), Slate Grays (`#334155`, `#e2e8f0`), Crisp White (`#ffffff`), with subtle gold, light blue, and cobalt accents.
- **Typography:** Modern, clean system typography with high legibility.
- **Responsiveness:** Fully responsive across mobile, tablet, and desktop viewports.
