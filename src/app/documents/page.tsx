'use client';

import styles from '@/app/documents/Documents.module.css';

const examFiles = [
  { 
    id: 1, 
    name: 'ĐỀ THI THỬ TN THPT NĂM 2025',
    subject: 'môn Toán',
    number: 'Đề số 1',
    path: '/exam/toan_de_1.pdf',
    description: 'Đề thi thử môn Toán số 1',
    date: '2024-03-20'
  },
  { 
    id: 2, 
    name: 'ĐỀ THI THỬ TN THPT NĂM 2025',
    subject: 'môn Toán',
    number: 'Đề số 2',
    path: '/exam/toan_de_2.pdf',
    description: 'Đề thi thử môn Toán số 2',
    date: '2024-03-21'
  },
  { 
    id: 3, 
    name: 'ĐỀ THI THỬ TN THPT NĂM 2025',
    subject: 'môn Toán',
    number: 'Đề số 3',
    path: '/exam/toan_de_3.pdf',
    description: 'Đề thi thử môn Toán số 3',
    date: '2024-03-22'
  },
  { 
    id: 4, 
    name: 'ĐỀ THI THỬ TN THPT NĂM 2025',
    subject: 'môn Toán',
    number: 'Đề số 4',
    path: '/exam/toan_de_4.pdf',
    description: 'Đề thi thử môn Toán số 4',
    date: '2024-03-23'
  },
];

export default function Documents() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Tài liệu ôn tập</h1>
        <p className={styles.heroSubtitle}>
          Tổng hợp các tài liệu ôn tập chất lượng cao, giúp học sinh chuẩn bị tốt cho kỳ thi
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <input 
            type="text" 
            placeholder="Tìm kiếm tài liệu..." 
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div className={styles.filterButtons}>
          <button className={styles.filterButton}>Tất cả</button>
          <button className={styles.filterButton}>Môn Toán</button>
          <button className={styles.filterButton}>Môn Lý</button>
          <button className={styles.filterButton}>Môn Hóa</button>
        </div>
      </div>
      
      {/* Documents Grid */}
      <div className={styles.documentGrid}>
        {examFiles.map((file) => (
          <div key={file.id} className={styles.documentCard}>
            <div className={styles.cardHeader}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className={styles.cardDate}>{file.date}</span>
            </div>
            <div className={styles.cardTitle}>
              <div className={styles.titleRow}>
                <div className={styles.mainTitle}>
                  {file.name} <span className={styles.numberTitle}>- {file.number}</span>
                </div>
              </div>
              <div className={styles.subjectTitle}>{file.subject}</div>
            </div>
            <div className={styles.cardActions}>
              <a
                href={file.path}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewButton}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Xem tài liệu
              </a>
              <a
                href={file.path}
                download
                className={styles.downloadButton}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Tải xuống
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 