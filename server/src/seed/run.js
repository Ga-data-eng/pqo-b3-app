import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { db, initSchema } from '../db/index.js';
import { CERTIFICATIONS, TITLES } from './structure.js';
import { ACHIEVEMENTS } from './achievements.js';

import * as t1c1 from './questions/titulo1_cap1.js';
import * as t1c2 from './questions/titulo1_cap2.js';
import * as t1c3 from './questions/titulo1_cap3.js';
import * as t2c1 from './questions/titulo2_cap1.js';
import * as t2c2 from './questions/titulo2_cap2.js';
import * as t2c3 from './questions/titulo2_cap3.js';
import * as t2c4 from './questions/titulo2_cap4.js';
import * as t2c5 from './questions/titulo2_cap5.js';
import * as t2c6 from './questions/titulo2_cap6.js';
import * as t2c7 from './questions/titulo2_cap7.js';
import * as t2c8 from './questions/titulo2_cap8.js';
import * as t3c1 from './questions/titulo3_cap1.js';
import * as t3c2 from './questions/titulo3_cap2.js';
import * as t4c1 from './questions/titulo4_cap1.js';
import * as t4c2 from './questions/titulo4_cap2.js';
import * as t5c1 from './questions/titulo5_cap1.js';
import * as t5c2 from './questions/titulo5_cap2.js';
import * as t6c1 from './questions/titulo6_cap1.js';
import * as t6c2 from './questions/titulo6_cap2.js';
import * as t7c1 from './questions/titulo7_cap1.js';
import * as t7c2 from './questions/titulo7_cap2.js';
import * as t8c1 from './questions/titulo8_cap1.js';
import * as t8c2 from './questions/titulo8_cap2.js';
import * as t8c3 from './questions/titulo8_cap3.js';
import * as t8c4 from './questions/titulo8_cap4.js';
import * as t8c5 from './questions/titulo8_cap5.js';
import * as t8c6 from './questions/titulo8_cap6.js';
import * as t1c1cards from './flashcards/titulo1_cap1.js';
import * as t1c2cards from './flashcards/titulo1_cap2.js';
import * as t1c3cards from './flashcards/titulo1_cap3.js';
import * as t2c1cards from './flashcards/titulo2_cap1.js';
import * as t2c2cards from './flashcards/titulo2_cap2.js';
import * as t2c3cards from './flashcards/titulo2_cap3.js';
import * as t2c4cards from './flashcards/titulo2_cap4.js';
import * as t2c5cards from './flashcards/titulo2_cap5.js';
import * as t2c6cards from './flashcards/titulo2_cap6.js';
import * as t2c7cards from './flashcards/titulo2_cap7.js';
import * as t2c8cards from './flashcards/titulo2_cap8.js';
import * as t3c1cards from './flashcards/titulo3_cap1.js';
import * as t3c2cards from './flashcards/titulo3_cap2.js';
import * as t4c1cards from './flashcards/titulo4_cap1.js';
import * as t4c2cards from './flashcards/titulo4_cap2.js';
import * as t5c1cards from './flashcards/titulo5_cap1.js';
import * as t5c2cards from './flashcards/titulo5_cap2.js';
import * as t6c1cards from './flashcards/titulo6_cap1.js';
import * as t6c2cards from './flashcards/titulo6_cap2.js';
import * as t7c1cards from './flashcards/titulo7_cap1.js';
import * as t7c2cards from './flashcards/titulo7_cap2.js';
import * as t8c1cards from './flashcards/titulo8_cap1.js';
import * as t8c2cards from './flashcards/titulo8_cap2.js';
import * as t8c3cards from './flashcards/titulo8_cap3.js';
import * as t8c4cards from './flashcards/titulo8_cap4.js';
import * as t8c5cards from './flashcards/titulo8_cap5.js';
import * as t8c6cards from './flashcards/titulo8_cap6.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUESTION_MODULES = [t1c1, t1c2, t1c3, t2c1, t2c2, t2c3, t2c4, t2c5, t2c6, t2c7, t2c8, t3c1, t3c2, t4c1, t4c2, t5c1, t5c2, t6c1, t6c2, t7c1, t7c2, t8c1, t8c2, t8c3, t8c4, t8c5, t8c6];
const FLASHCARD_MODULES = [t1c1cards, t1c2cards, t1c3cards, t2c1cards, t2c2cards, t2c3cards, t2c4cards, t2c5cards, t2c6cards, t2c7cards, t2c8cards, t3c1cards, t3c2cards, t4c1cards, t4c2cards, t5c1cards, t5c2cards, t6c1cards, t6c2cards, t7c1cards, t7c2cards, t8c1cards, t8c2cards, t8c3cards, t8c4cards, t8c5cards, t8c6cards];

function run() {
  initSchema();

  const txn = db.transaction(() => {
    seedCertifications();
    const { titleIds, chapterIds } = seedStructure();
    seedAchievements();
    seedQuestions(chapterIds);
    seedFlashcards(chapterIds);
    seedGuideSections(titleIds, chapterIds);
  });
  txn();

  console.log('Seed concluído.');
  printSummary();
}

function seedCertifications() {
  const insert = db.prepare('INSERT OR IGNORE INTO certifications (code, name, order_index) VALUES (?, ?, ?)');
  CERTIFICATIONS.forEach((c, i) => insert.run(c.code, c.name, i));
}

function seedStructure() {
  const certRow = db.prepare('SELECT id FROM certifications WHERE code = ?');
  const insertTitle = db.prepare('INSERT INTO titles (number, name, order_index) VALUES (?, ?, ?)');
  const insertChapter = db.prepare(
    'INSERT INTO chapters (title_id, number, name, order_index, source_page_start, source_page_end) VALUES (?, ?, ?, ?, ?, ?)'
  );
  const insertChapterCert = db.prepare(
    'INSERT OR IGNORE INTO chapter_certifications (chapter_id, certification_id) VALUES (?, ?)'
  );

  const titleIds = {}; // "I" -> id
  const chapterIds = {}; // "I|I" -> id (titleNumber|chapterNumber)

  TITLES.forEach((title, ti) => {
    const titleId = insertTitle.run(title.number, title.name, ti).lastInsertRowid;
    titleIds[title.number] = titleId;
    title.chapters.forEach((ch, ci) => {
      const chapterId = insertChapter.run(titleId, ch.number, ch.name, ci, ch.pageStart ?? null, ch.pageEnd ?? null)
        .lastInsertRowid;
      chapterIds[`${title.number}|${ch.number}`] = chapterId;
      ch.certs.forEach((code) => {
        const cert = certRow.get(code);
        if (cert) insertChapterCert.run(chapterId, cert.id);
      });
    });
  });

  return { titleIds, chapterIds };
}

function seedAchievements() {
  const insert = db.prepare('INSERT OR IGNORE INTO achievements (code, name, description, icon) VALUES (?, ?, ?, ?)');
  ACHIEVEMENTS.forEach((a) => insert.run(a.code, a.name, a.description, a.icon));
}

function seedQuestions(chapterIds) {
  const certRow = db.prepare('SELECT id FROM certifications WHERE code = ?');
  const chapterCertCodes = db.prepare(
    `SELECT c.code FROM chapter_certifications cc JOIN certifications c ON c.id = cc.certification_id WHERE cc.chapter_id = ?`
  );
  const insertTopic = db.prepare('INSERT INTO topics (chapter_id, name, order_index) VALUES (?, ?, ?)');
  const insertQuestion = db.prepare(`
    INSERT INTO questions (
      chapter_id, topic_id, subtopic, difficulty, question_type, statement,
      option_a, option_b, option_c, option_d, option_e, correct_option,
      explanation, explanation_a, explanation_b, explanation_c, explanation_d, explanation_e,
      exam_tip, common_trap, source_title, source_chapter, source_section, source_page, status
    ) VALUES (@chapter_id, @topic_id, @subtopic, @difficulty, @question_type, @statement,
      @option_a, @option_b, @option_c, @option_d, @option_e, @correct_option,
      @explanation, @explanation_a, @explanation_b, @explanation_c, @explanation_d, @explanation_e,
      @exam_tip, @common_trap, @source_title, @source_chapter, @source_section, @source_page, @status)
  `);
  const insertQuestionCert = db.prepare(
    'INSERT OR IGNORE INTO question_certifications (question_id, certification_id) VALUES (?, ?)'
  );

  for (const mod of QUESTION_MODULES) {
    const { chapterRef, topics, questions } = mod;
    const chapterId = chapterIds[`${chapterRef.titleNumber}|${chapterRef.chapterNumber}`];
    if (!chapterId) {
      console.warn(`Capítulo não encontrado para ${chapterRef.titleNumber}/${chapterRef.chapterNumber}`);
      continue;
    }

    const topicIdByName = {};
    topics.forEach((name, i) => {
      topicIdByName[name] = insertTopic.run(chapterId, name, i).lastInsertRowid;
    });

    const certCodes = chapterCertCodes.all(chapterId).map((r) => r.code);
    const certIds = certCodes.map((code) => certRow.get(code).id);

    for (const q of questions) {
      const questionId = insertQuestion.run({
        chapter_id: chapterId,
        topic_id: topicIdByName[q.topic] ?? null,
        subtopic: q.subtopic ?? null,
        difficulty: q.difficulty,
        question_type: 'multipla_escolha',
        statement: q.statement,
        option_a: q.options.A,
        option_b: q.options.B,
        option_c: q.options.C,
        option_d: q.options.D,
        option_e: q.options.E ?? null,
        correct_option: q.correct,
        explanation: q.explanation,
        explanation_a: q.correct === 'A' ? q.explanation : q.explanationWrong.A,
        explanation_b: q.correct === 'B' ? q.explanation : q.explanationWrong.B,
        explanation_c: q.correct === 'C' ? q.explanation : q.explanationWrong.C,
        explanation_d: q.correct === 'D' ? q.explanation : q.explanationWrong.D,
        explanation_e: q.options.E ? (q.correct === 'E' ? q.explanation : q.explanationWrong.E) : null,
        exam_tip: q.examTip,
        common_trap: q.commonTrap ?? null,
        source_title: q.source_title,
        source_chapter: q.source_chapter,
        source_section: q.source_section ?? null,
        source_page: q.source_page ?? null,
        status: 'aprovada',
      }).lastInsertRowid;

      certIds.forEach((cid) => insertQuestionCert.run(questionId, cid));
    }
  }
}

function seedFlashcards(chapterIds) {
  const insert = db.prepare(
    'INSERT INTO flashcards (chapter_id, topic_id, front, back, difficulty, source_page) VALUES (?, NULL, ?, ?, ?, ?)'
  );
  for (const mod of FLASHCARD_MODULES) {
    const { chapterRef, flashcards } = mod;
    const chapterId = chapterIds[`${chapterRef.titleNumber}|${chapterRef.chapterNumber}`];
    if (!chapterId) continue;
    for (const f of flashcards) {
      insert.run(chapterId, f.front, f.back, f.difficulty, f.source_page ?? null);
    }
  }
}

function seedGuideSections(titleIds, chapterIds) {
  const jsonPath = path.join(__dirname, '..', '..', '..', 'content', 'guide_pages.json');
  if (!fs.existsSync(jsonPath)) return;
  const pages = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const insert = db.prepare(
    'INSERT INTO guide_sections (title_id, chapter_id, section_name, page_start, page_end, content) VALUES (?, ?, ?, ?, ?, ?)'
  );
  for (const p of pages) {
    const firstLine = p.text.split('\n').find((l) => l.trim().length > 0) || `Página ${p.pdf_page}`;
    insert.run(null, null, firstLine.trim().slice(0, 200), p.pdf_page, p.pdf_page, p.text);
  }
}

function printSummary() {
  const q = db.prepare('SELECT COUNT(*) n FROM questions').get().n;
  const ch = db.prepare('SELECT COUNT(*) n FROM chapters').get().n;
  const gs = db.prepare('SELECT COUNT(*) n FROM guide_sections').get().n;
  const fc = db.prepare('SELECT COUNT(*) n FROM flashcards').get().n;
  console.log(`Capítulos: ${ch} | Questões: ${q} | Flashcards: ${fc} | Páginas indexadas (busca): ${gs}`);
}

run();
