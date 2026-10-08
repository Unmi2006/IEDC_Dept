import { useEffect, useState } from 'react'
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  X,
  CalendarDays,
  Files,
  IndianRupee,
} from 'lucide-react'

const BASE = import.meta.env.BASE_URL || '/'

// Add more PDFs here: drop the file in /public/documents and add an entry.
const documents = [
  {
    id: 'grant-in-aid-2025',
    title: 'UEM Grant-in-Aid Projects 2025',
    description:
      'Official notice listing the Grant-in-Aid projects approved by the selection committee, with project grant numbers, faculty (PI / Co-PI), project names and approved amounts. Includes the ongoing CST & CSIT projects list.',
    date: '2025-04-24',
    dateLabel: '24 April 2025',
    pages: 5,
    amount: 'Rs. 44,27,000/- total approved',
    file: `${BASE}documents/UEM_Grant-in-Aid_Projects.pdf`,
    cover: `${BASE}documents/grant-in-aid-cover.jpg`,
    downloadName: 'UEM_Grant-in-Aid_Projects.pdf',
  },
]

function PdfViewer({ doc, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#061833]/70 p-2 sm:p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={doc.title}
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-2.5 sm:px-5">
          <FileText size={18} className="shrink-0 text-brand-blue" />
          <h3 className="min-w-0 flex-1 truncate text-sm font-bold text-navy-900 sm:text-base">
            {doc.title}
          </h3>
          <a
            href={doc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-brand-blue/10 sm:inline-flex"
          >
            <ExternalLink size={14} /> New tab
          </a>
          <a
            href={doc.file}
            download={doc.downloadName}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-3 py-1.5 text-xs font-semibold text-white hover:bg-navy-800"
          >
            <Download size={14} /> Download
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close PDF viewer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <object
          data={`${doc.file}#view=FitH`}
          type="application/pdf"
          className="min-h-0 w-full flex-1"
          aria-label={doc.title}
        >
          {/* Fallback for browsers (mostly mobile) that can't embed PDFs */}
          <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <FileText size={44} className="text-brand-blue" strokeWidth={1.5} />
            <p className="max-w-sm text-sm text-slate-600">
              Your browser can't show this PDF inside the page. Open it in a new tab or download it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white"
              >
                <ExternalLink size={16} /> Open PDF
              </a>
              <a
                href={doc.file}
                download={doc.downloadName}
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-blue"
              >
                <Download size={16} /> Download
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  )
}


// TEMPORARY: shown on the Home page for now. To remove, delete <GrantInAidNotice />
// from src/pages/Home.jsx.
export default function GrantInAidNotice() {
  const [viewing, setViewing] = useState(false)
  const doc = documents[0]

  return (
    <section className="bg-white py-10 sm:py-14" aria-labelledby="grant-notice-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
          — Latest Notice
        </p>
      <article
                className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg md:grid-cols-[260px_1fr]"
      >
        <button
          type="button"
          onClick={() => setViewing(true)}
          aria-label={`View ${doc.title}`}
          className="group relative block h-64 overflow-hidden bg-slate-100 md:h-full"
        >
          <img
            src={doc.cover}
            alt={`First page of ${doc.title}`}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-[#061833]/0 transition-colors group-hover:bg-[#061833]/35">
            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              <Eye size={16} /> Preview
            </span>
          </span>
        </button>

        <div className="flex flex-col p-5 sm:p-7">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
            <FileText size={13} /> PDF Document
          </span>
          <h2 id="grant-notice-title" className="mt-3 text-xl font-extrabold text-navy-900 sm:text-2xl">{doc.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{doc.description}</p>

          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-brand-blue" />
              <dt className="sr-only">Date</dt>
              <dd>{doc.dateLabel}</dd>
            </div>
            <div className="flex items-center gap-2">
              <Files size={16} className="text-brand-blue" />
              <dt className="sr-only">Pages</dt>
              <dd>{doc.pages} pages</dd>
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee size={16} className="text-brand-blue" />
              <dt className="sr-only">Amount</dt>
              <dd>{doc.amount}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setViewing(true)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              <Eye size={16} /> View PDF
            </button>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              <ExternalLink size={16} /> Open in new tab
            </a>
            <a
              href={doc.file}
              download={doc.downloadName}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              <Download size={16} /> Download
            </a>
          </div>
        </div>
      </article>
      </div>

      {viewing && <PdfViewer doc={doc} onClose={() => setViewing(false)} />}
    </section>
  )
}
