---
type: paper
note_id: "Edge_2025_GraphRAG_Query_Focused_Summarization"
title: "From Local to Global: A GraphRAG Approach to Query-Focused Summarization"
title_zh: "从局部到全局：面向查询聚焦摘要的 GraphRAG 方法"
authors:
  - "Darren Edge"
  - "Ha Trinh"
  - "Newman Cheng"
  - "Joshua Bradley"
  - "Alex Chao"
  - "Apurva Mody"
  - "Steven Truitt"
  - "Dasha Metropolitansky"
  - "Robert Osazuwa Ness"
  - "Jonathan Larson"
year: 2025
publication: "arXiv preprint arXiv:2404.16130v2 [cs.CL], 19 Feb 2025 (marked 'Preprint. Under review.')"
doi: null
url: "https://github.com/microsoft/graphrag"
citekey: "edge2025graphrag"
reading_status: processed
language: "English"
research_domains:
  - "[[Retrieval_Augmented_Generation]]"
  - "[[Query_Focused_Summarization]]"
  - "[[Knowledge_Graph_Construction_with_LLMs]]"
concepts:
  - "[[GraphRAG]]"
  - "[[Vector_RAG]]"
  - "[[Global_Sensemaking]]"
  - "[[Community_Summaries]]"
  - "[[Adaptive_Benchmarking]]"
methods:
  - "[[LLM_Knowledge_Graph_Extraction]]"
  - "[[Leiden_Community_Detection]]"
  - "[[Map_Reduce_Query_Focused_Summarization]]"
  - "[[LLM_as_Judge_Evaluation]]"
  - "[[Claim_Based_Evaluation]]"
  - "[[Persona_Based_Question_Generation]]"
data_types:
  - "[[News_Articles_MultiHop_RAG_Dataset]]"
  - "[[Podcast_Transcripts_Behind_the_Tech]]"
spatial_scales: []
study_areas: []
supports: []
contrasts: []
extends:
  - "[[Lewis_2020_Retrieval_Augmented_Generation]]"
theoretical_foundations:
  - "[[Klein_2006_Making_Sense_of_Sensemaking]]"
  - "[[Newman_2006_Modularity_Community_Structure]]"
  - "[[Cheng_2024_Retrieval_Augmented_Self_Memory]]"
methodologically_related:
  - "[[Traag_2019_From_Louvain_to_Leiden]]"
  - "[[Zheng_2024_LLM_as_a_Judge]]"
  - "[[Sarthi_2024_RAPTOR]]"
  - "[[Wang_2023_Knowledge_Graph_Prompting]]"
  - "[[He_2024_G_Retriever]]"
  - "[[Metropolitansky_2025_Effective_Extraction_Factual_Claims]]"
  - "[[Padmakumar_2024_Writing_Content_Diversity]]"
empirically_related:
  - "[[Tang_2024_MultiHop_RAG]]"
  - "[[Yang_2018_HotpotQA]]"
tags:
  - literature
  - GraphRAG
  - RAG
  - knowledge-graph
  - LLM-evaluation
created: "2026-10-09"
---

# From Local to Global: A GraphRAG Approach to Query-Focused Summarization

> [!summary] One-sentence positioning
> GraphRAG builds an LLM-derived entity graph, Leiden communities and community summaries, then answers global questions by map-reduce. On two ~1M-token corpora it beats a vector-RAG baseline on LLM-judged comprehensiveness and diversity. (PDF pp. 1, 9–10)

*Legend: **[Analytical inference]** (分析性归纳) marks my own judgement, not an author claim. Page numbers are PDF page numbers (they equal printed page numbers). Items I could not confirm are written as "not stated" or null.*

---

## 1. Basic information

| Field | Content |
|---|---|
| Authors | Darren Edge, Ha Trinh (equal contribution, †), Newman Cheng, Joshua Bradley, Alex Chao, Apurva Mody, Steven Truitt, Dasha Metropolitansky, Robert Osazuwa Ness, Jonathan Larson (Microsoft Research / Strategic Missions and Technologies / Office of the CTO) (PDF p. 1) |
| Year | 2025 (arXiv v2, 19 Feb 2025) (PDF p. 1) |
| Source | arXiv preprint arXiv:2404.16130v2 [cs.CL], "Preprint. Under review." Open-source code: https://github.com/microsoft/graphrag (PDF pp. 1–2) |
| DOI | Not stated (null) |
| Research domains | Retrieval-augmented generation; query-focused summarization; LLM-based knowledge graph construction |
| Research type | Method paper with comparative empirical evaluation |
| Research object | Answering "global" sensemaking questions over a whole text corpus with LLMs |
| Study area | No geographic area (text corpora) |
| Spatial scale | Not applicable |
| Time range | Evaluation corpora: podcast transcripts (dates not stated) and news articles from September 2013 to December 2023 (PDF p. 8) |

---

## 2. Background and research problem

### 2.1 Research background
- RAG lets LLMs answer over corpora too large for the context window; in canonical RAG the system retrieves records that are individually relevant to the query and collectively fit the window. The authors call this family "vector RAG" (PDF pp. 1–2).
- Vector RAG "works well for queries that can be answered with information localized within a small set of records", but not for sensemaking queries that need global understanding of an entire dataset (PDF p. 2).
- Sensemaking is defined via Klein et al. (2006) as reasoning over connections among people, places and events to anticipate trajectories and act effectively (PDF p. 2).

### 2.2 Literature gap (as stated by the authors)
1. RAG "fails on global questions directed at an entire text corpus" such as "What are the main themes in the dataset?", because such questions are query-focused summarization (QFS) tasks rather than retrieval tasks (PDF p. 1).
2. Prior QFS methods do not scale to the text quantities indexed by typical RAG systems (PDF p. 1).
3. Existing benchmarks (HotPotQA, MultiHop-RAG, MT-Bench) are oriented to vector-RAG performance on explicit fact retrieval, so no benchmark targets global sensemaking (PDF p. 3).
4. Earlier graph-with-LLM approaches use subgraphs, graph elements or graph-structure properties in prompts, or let an agent traverse a graph at query time; the authors say they overlook graph modularity and nested communities (PDF p. 3).

### 2.3 Research objectives and questions
- **Objective:** a graph-based RAG approach to question answering over private text corpora that scales with both the generality of questions and the quantity of source text (PDF p. 1).
- **Implicit questions:** (a) Does GraphRAG beat vector RAG on global sensemaking questions? (b) Which level of the community hierarchy gives the best trade-off? (c) Do claim-based metrics confirm the LLM-judge results? (PDF pp. 6, 9–11)
- **Hypotheses:** the paper states no formal hypotheses ("原文未提出明确假设").

---

## 3. Theory and conceptual framework

### 3.1 Core concepts

| Concept | Definition or use in the paper | Operationalisation | Obsidian link |
|---|---|---|---|
| Vector RAG | Conventional RAG retrieving records closest to the query in embedding space; used as a collective name for conventional approaches (PDF p. 2) | Condition "SS": text chunks retrieved and added to the context window until the token limit (PDF p. 8) | [[Vector_RAG]] |
| GraphRAG | Graph-based RAG using an LLM-built entity knowledge graph, hierarchical communities and pre-generated community summaries (PDF p. 1) | Pipeline in Fig. 1 / Section 3.1; conditions C0–C3 (PDF pp. 4–6, 8) | [[GraphRAG]] |
| Global sensemaking / QFS | Questions needing understanding of the entire corpus rather than retrieval of low-level facts (PDF pp. 1–2, 6) | LLM-generated questions via Algorithm 1; 125 per dataset (PDF pp. 6–7) | [[Global_Sensemaking]] |
| Community summaries | Report-like summaries of each community in the hierarchy; usable as an index and independently (PDF p. 6) | LLM summarization of element summaries with token-limit prioritisation (PDF p. 6) | [[Community_Summaries]] |
| Adaptive benchmarking | Dynamically generating evaluation benchmarks tailored to a domain or use case (PDF p. 3) | Persona → task → question generation (PDF pp. 6–7) | [[Adaptive_Benchmarking]] |
| Comprehensiveness, Diversity, Empowerment, Directness | Four criteria for head-to-head judging; Directness is a "control criterion" (PDF pp. 7–8) | LLM judge prompts (App. F) and claim-based proxies for the first two (PDF pp. 9, 25) | [[LLM_as_Judge_Evaluation]] |

### 3.2 Theoretical foundations
- **Sensemaking** (Klein et al., 2006) gives the task definition → [[Klein_2006_Making_Sense_of_Sensemaking]] (PDF p. 2).
- **Graph modularity and nested community structure** (Newman, 2006; Louvain; Leiden) justify partitioning the graph into hierarchical communities; the authors call this a "previously unexplored quality of graphs in this context" → [[Newman_2006_Modularity_Community_Structure]], [[Traag_2019_From_Louvain_to_Leiden]] (PDF p. 3).
- **Self-memory** (Cheng et al., 2024): summaries over large sections of the data are treated as a form of self-memory used later to answer queries → [[Cheng_2024_Retrieval_Augmented_Self_Memory]] (PDF p. 3).
- **LLM-as-a-judge** (Zheng et al., 2024) underlies the head-to-head evaluation → [[Zheng_2024_LLM_as_a_Judge]] (PDF pp. 2, 4).

### 3.3 Concept relationships
The paper's pipeline has seven stages (PDF p. 4, Fig. 1):

```mermaid
flowchart LR
    A[Source documents] -->|chunking| B[Text chunks]
    B -->|LLM extraction| C[Entities, relationships, claims]
    C -->|aggregate and summarise| D[Knowledge graph]
    D -->|Leiden, hierarchical| E[Graph communities]
    E -->|LLM summarisation| F[Community summaries]
    F -->|map: partial answers with 0-100 helpfulness| G[Community answers]
    G -->|reduce: ranked merge| H[Global answer]
```

Indexing time covers A→F; query time covers F→H (PDF p. 4).

---

## 4. Data and methods

### 4.1 Research design
Comparative method evaluation. Experiment 1 is pairwise head-to-head LLM-judge comparison of six conditions on four criteria across two datasets; Experiment 2 validates comprehensiveness and diversity with claim-based measures (PDF pp. 8–9). Non-parametric significance tests are reported (PDF p. 26).

### 4.2 Data

| Data or sample | Source | Quantity and time | Spatial granularity | Use | Limitation |
|---|---|---|---|---|---|
| Podcast transcripts | *Behind the Tech with Kevin Scott* (Scott, 2024) (PDF p. 8) | 1,669 chunks × 600 tokens, 100-token overlap, about 1M tokens; dates not stated | Not applicable | Evaluation corpus | One podcast; domain is science and technology conversation |
| News articles | Benchmark dataset of Tang and Yang (2024), Sept 2013 – Dec 2023, categories incl. entertainment, business, sports, technology, health, science (PDF p. 8) | 3,197 chunks × 600 tokens, 100-token overlap, about 1.7M tokens | Not applicable | Evaluation corpus | News only |
| Generated test questions | LLM via Algorithm 1 from short corpus descriptions (PDF pp. 6–7) | K = N = M = 5, so 125 per dataset | Not applicable | Global sensemaking test set | Question quality and diversity depend on the generating LLM; full question lists not given in the paper (examples in Table 1) |
| Extracted claims | Claimify on all answers (PDF p. 9) | 47,075 unique claims; about 31 per answer | Not applicable | Experiment 2 metrics | Depends on Claimify extraction quality |
| HotPotQA sample | Yang et al. (2018) (PDF p. 18) | Size not stated | Not applicable | Chunk-size vs entity-extraction check (App. A.2) | Used only for an extraction-recall demonstration |
| MultiHop-RAG corpus index | Same corpus as the News dataset (PDF p. 19, Fig. 4) | Graph with 15,754 nodes and 19,520 edges (PDF p. 9) | Not applicable | Community-structure visualisation | Illustration only |

### 4.3 Method flow
1. **Chunking:** Documents → text chunks (600 tokens with 100-token overlap in the experiments). Larger chunks cost fewer LLM calls but degrade recall for early chunk content (PDF pp. 4, 8).
2. **Entity, relationship and claim extraction:** Input: a chunk. An LLM prompt returns entities (name, type, description), relationships (source, target, description, strength score) and optionally claims; few-shot exemplars can be tailored to the domain (PDF pp. 4–5, 21). Output: instance lists. Self-reflection ("gleaning") is used to recover missed entities in larger chunks (PDF p. 18).
3. **Knowledge graph:** Duplicate instances are merged into nodes and edges; duplicate counts become edge weights; descriptions are summarised. Entity matching uses exact string matching in this paper (PDF p. 5).
4. **Community detection:** Hierarchical Leiden (graspologic) recursively partitions the graph; each level is mutually exclusive and collectively exhaustive (PDF pp. 5–6, 9).
5. **Community summaries:** Leaf communities: element summaries prioritised by combined node degree until the token limit. Higher levels: use element summaries if they fit, else substitute sub-community summaries (PDF p. 6).
6. **Query-time map step:** Summaries are randomly shuffled and split into chunks; the LLM writes partial answers in parallel and a 0–100 helpfulness score; score-0 answers are dropped (PDF p. 6).
7. **Reduce step:** Partial answers sorted by helpfulness and added to a new context window until the token limit; the final global answer is generated (PDF p. 6).
8. **Evaluation:** Algorithm 1 generates questions; an LLM judge compares answers pairwise; claim-based metrics validate the results (PDF pp. 6–9).

### 4.4 Models, indicators and variables

| Name | Type | Definition or calculation | Role in study |
|---|---|---|---|
| Condition (C0, C1, C2, C3, TS, SS) | Independent variable | C0 root-level, C1 high-level, C2 intermediate-level, C3 low-level community summaries; TS map-reduce on source text; SS vector-RAG semantic search (PDF p. 8) | Systems compared; context window 8k tokens and prompts identical except context content (PDF pp. 8–9) |
| Comprehensiveness (LLM) | Indicator | How much detail the answer gives to cover all aspects of the question (PDF p. 7) | Head-to-head win rate |
| Diversity (LLM) | Indicator | How varied and rich the answer is in perspectives and insights (PDF p. 7) | Head-to-head win rate |
| Empowerment (LLM) | Indicator | How well the answer helps the reader understand and make informed judgements (PDF p. 7) | Head-to-head win rate |
| Directness (LLM) | Control indicator | How specifically and clearly the answer addresses the question; expected to oppose comprehensiveness and diversity (PDF p. 8) | Validity check on the other criteria |
| Win-rate score | Indicator | Winner scored 100, loser 0, tie 50 per question; averaged over five runs (PDF p. 26) | Basis of Fig. 2 and Table 6 |
| Claim-based comprehensiveness | Indicator | Average number of unique factual claims per answer (PDF p. 9) | Experiment 2 |
| Claim-based diversity | Indicator | Average number of claim clusters per answer; agglomerative clustering, complete linkage, distance 1 − ROUGE-L, thresholds 0.5–0.8 (PDF pp. 9, 12) | Experiment 2 |
| Helpfulness score | Model output | 0–100 score generated with each partial answer in the map step (PDF p. 6) | Ranking and filtering partial answers |
| Statistical tests | Analysis | Shapiro–Wilk (non-normal), Wilcoxon signed-rank with Holm–Bonferroni correction (PDF p. 26) | Significance of pairwise differences |

*Formulas:* The paper presents no mathematical equations. The scoring rule and clustering distance are given in prose above (PDF pp. 9, 26).

### 4.5 Method evaluation
- **Soundness:**
  - The design isolates context construction by holding window size, prompts and answer-generation LLM fixed across the six conditions (PDF p. 8).
  - Including TS (graph-free global map-reduce) separates the effect of the graph index from the effect of global map-reduce (PDF p. 8).
  - Directness as a control criterion is a sensible validity check (PDF p. 8).
  - Claim-based metrics add an LLM-independent-of-judge check, and alignment with the LLM judge is reported (PDF p. 11).
- **Improvement over prior methods (as claimed):** Beyond vector RAG, it supports global questions; versus hierarchical-index approaches (e.g., RAPTOR) it adds a graph index and community-based thematic partitioning (PDF pp. 2–3).
- **Bias and validity risks [Analytical inference]:**
  - The questions are global by design, which favours global methods over a vector baseline built for local retrieval. The paper does not test local or multi-hop fact questions (PDF pp. 2–3, 6).
  - Only one vector-RAG implementation (SS, fill-to-token-limit) is compared; no hybrid, reranked, or other graph-RAG baselines (PDF p. 8).
  - LLM-judge criteria reward breadth; a long, broad answer may win without being more accurate. No faithfulness or fabrication-rate comparison is given; the authors acknowledge this (PDF p. 11).
  - Claim counts reward claim volume, not correctness (PDF p. 9).
  - The context window was tuned for the baseline SS using comprehensiveness and diversity win rates (App. C), then fixed for all conditions; this is a fair attempt to strengthen the baseline but uses the same metrics as the evaluation (PDF p. 19).
  - Two corpora of about 1–1.7M tokens; generalisation is unknown (acknowledged, PDF p. 11).
  - GPT-4 family is the main LLM; behaviour with other LLMs is not evaluated (PDF pp. 1, 9).
- **Missing for reproducibility [Analytical inference]:**
  - The judge model is not separately identified in the text I read; answer-order randomisation or position-bias control is not described.
  - Sampling temperature and other decoding settings are not given.
  - Entity types and the few-shot exemplars per dataset are summarised only ("...More examples...", PDF p. 21).
  - Indexing time is reported for Podcast only (281 min); News indexing time and dollar cost are not reported (PDF p. 9).
  - Full question sets are not reproduced; Claimify is described in a separate paper.
  - Code is open-source (PDF p. 2).

---

## 5. Main results

### 5.1 Core findings

1. **Global approaches beat vector RAG on LLM-judged comprehensiveness and diversity.**
   - *Content:* All GraphRAG conditions (C0–C3) and TS beat SS. Comprehensiveness win rates 72–83% (Podcast) and 72–80% (News), p<.001; diversity win rates 75–82% (p<.001) and 62–71% (p<.01).
   - *Evidence:* Fig. 2 and Table 6; 125 questions per comparison, five repeats (PDF pp. 9–10, 26).
   - *Authors' interpretation:* GraphRAG substantially improves over vector RAG for global sensemaking; vector RAG is the most direct (PDF pp. 1, 9).
2. **Claim-based measures confirm the comprehensiveness result and partly confirm diversity.**
   - *Content:* SS extracted the fewest claims (25.23 News, 26.50 Podcast) versus about 31–34 for C0–C3 and TS, with p<.05 in all comparisons. For diversity, all global conditions beat SS on Podcast across all thresholds; on News only C0 beats SS across all thresholds. No significant differences among global conditions or between global conditions and TS.
   - *Evidence:* Tables 3–4; 47,075 unique claims (PDF pp. 9, 11–12).
   - *Interpretation:* findings align with Experiment 1; the LLM label matched the claim-based label in 78% of non-tie comparisons for comprehensiveness and 69–70% for diversity ("moderately strong alignment") (PDF p. 11).
3. **Empowerment is mixed.**
   - *Content:* Empowerment comparisons showed mixed results for global approaches vs SS and for GraphRAG vs TS; the authors attribute this to specific examples, quotes and citations being key to informed understanding.
   - *Evidence:* Fig. 2; Table 6 (e.g., C0 vs SS on empowerment: 42.96 vs 57.04 in Podcast and 42.72 vs 57.28 in News, both significant) (PDF pp. 9–10, 26).
   - *Interpretation:* tuning element extraction prompts may retain more detail (PDF p. 10).
4. **Community summaries give a small gain over source-text summarisation and use fewer tokens.**
   - *Content:* C2 (Podcast) and C3 (News) reach comprehensiveness win rates of 57% and 64% over TS (p<.001); diversity 57% (p=.036) and 60% (p<.001). C3 needs 26–33% fewer context tokens than TS; C0 needs over 97% fewer.
   - *Evidence:* Table 2, Table 6 (PDF pp. 10, 26).
   - *Interpretation:* scalability advantage of GraphRAG over TS (PDF p. 10).
5. **Root-level summaries (C0) offer an efficient option.**
   - *Content:* C0 retains a 72% comprehensiveness and 62% diversity win rate over vector RAG at a small fraction of the tokens.
   - *Evidence:* Table 2 (2.6% and 2.3% of the TS token count) and text (PDF pp. 10, 12).
   - *Interpretation:* suited to the many global queries that characterise sensemaking over one dataset (PDF pp. 10, 12).

### 5.2 Secondary findings and anomalies
- **Fig. 2 caption vs Table 6:** The caption says C1–C3 slightly improve over TS; Table 6 shows significance only for some cells (comprehensiveness: C2, C3 in Podcast, C1–C3 in News; diversity: C2 in Podcast, C3 in News) (PDF pp. 10, 26). Several C0–TS comparisons are non-significant.
- **Empowerment and directness patterns:** C0 loses to TS on empowerment in both datasets and to SS in both datasets; TS beats SS on empowerment in Podcast only (57.52, p<.001) (PDF p. 26). Directness favours SS across conditions, as expected for the control criterion (PDF pp. 8–9).
- **Graph sizes:** Podcast 8,564 nodes and 20,691 edges; News 15,754 nodes and 19,520 edges (PDF p. 9). Table 2 gives numbers of community summaries per level (Podcast C0–C3: 34, 367, 969, 1,310; News: 55, 555, 1,797, 2,142) (PDF p. 10).
- **Table 2 caption:** says C0 requires "9x–43x" fewer tokens per query; the text says over 97% fewer. The basis of the lower end (9x) is not explained in the text I read (PDF p. 10).
- **Context-window selection:** 8k beat 16k, 32k and 64k for SS on comprehensiveness (average win rate 58.1%), with comparable diversity (52.4%) and empowerment (51.3%) (PDF p. 19).
- **Chunk size and gleaning:** On a HotPotQA sample GPT-4 extracted almost twice as many entity references with 600-token chunks as with 2,400-token chunks; self-reflection iterations let larger chunks avoid that drop (PDF p. 18).
- **Indexing cost:** Podcast indexing took 281 minutes on a VM using gpt-4-turbo (PDF p. 9).
- **Exact ties:** claim-based exact ties were rare, and results were sensitive to any tie threshold, so alignment analysis used only non-tie LLM labels (33% of comparisons for comprehensiveness, 39% for diversity) (PDF p. 11).

### 5.3 Mapping to research questions

| Question | Result | Supported? | Evidence |
|---|---|---|---|
| Does GraphRAG outperform vector RAG on global sensemaking? | Higher comprehensiveness and diversity win rates; more claims | Yes (for LLM-judged and claim-based breadth) | Fig. 2, Tables 3–4, 6; PDF pp. 9–12, 26 |
| Does it improve empowerment? | Mixed; C0 worse than SS and TS | Not supported | Fig. 2, Table 6; PDF pp. 9–10, 26 |
| Does the graph index beat graph-free global map-reduce (TS)? | Small gains at C2/C3; no significant claim-based differences | Partly | Table 6; Tables 3–4; PDF pp. 10–12 |
| Which hierarchy level is best? | Intermediate (Podcast) or low (News) for comprehensiveness; C0 for efficiency | Partly | PDF pp. 10, 26 |
| Do claim-based metrics validate the LLM judge? | 78% (comprehensiveness) and 69–70% (diversity) agreement on non-ties | Partly (moderately strong) | PDF p. 11 |

---

## 6. Discussion and contributions

### 6.1 Theoretical contribution
- Frames global sensemaking over a corpus as a QFS problem distinct from retrieval (PDF p. 1).
- Positions graph modularity and community hierarchy as a basis for recursive, scalable summarisation (PDF p. 3).
- **[Analytical inference]** No new theory is tested; the contribution is conceptual framing plus an architecture.

### 6.2 Methodological contribution
- GraphRAG indexing and query pipeline, with hierarchical community summaries and map-reduce answering (PDF pp. 4–6).
- Adaptive benchmarking: persona → task → question generation of global questions (Algorithm 1) (PDF pp. 6–7).
- Criteria set (comprehensiveness, diversity, empowerment, directness) and claim-based validation (PDF pp. 7–9).

### 6.3 Empirical contribution
Evidence that graph-index global approaches beat a vector baseline on breadth criteria for two ~1M-token corpora, with cost evidence showing community summaries need fewer query-time tokens than source-text map-reduce (PDF pp. 9–12).

### 6.4 Practical or policy implications
- The authors suggest root-level community summaries as an efficient index for many global queries over one dataset (PDF p. 12).
- They note GraphRAG may mitigate the risk of "samples of retrieved facts falsely presented as global summaries" compared with vector RAG, **a prospect, not a tested result**; they also warn of risks if answers misrepresent the source and recommend disclosures of AI use (PDF p. 12).
- Versions are available in LangChain, LlamaIndex, NebulaGraph and Neo4j (PDF p. 2).

---

## 7. Limitations and future research

### 7.1 Limitations explicitly acknowledged by the authors
- Evaluation covers sensemaking questions on two corpora of roughly 1M tokens; generalisation across domains and use cases is unknown (PDF p. 11).
- Comparison of fabrication rates (e.g., with SelfCheckGPT) would strengthen the analysis (PDF p. 11).
- Empowerment weakness may stem from lost examples, quotes and citations in the graph index (PDF p. 10).
- Entity matching uses exact string matching; softer approaches are possible (PDF p. 5).
- Risk of downstream errors if answers misrepresent source data (PDF p. 12).

### 7.2 Further limitations identified **[Analytical inference]**
1. **Question-type bias.** Only global questions are evaluated, so the result does not show GraphRAG's behaviour on local, fact-seeking or multi-hop queries where vector RAG is said to work well (basis: PDF pp. 2, 6).
2. **Single baseline family.** Only one vector-RAG implementation; no reranking, hybrid, or alternative graph-RAG comparison (basis: PDF p. 8).
3. **Judge dependence.** All Experiment 1 results rely on an LLM judge; the judge identity, order-randomisation and position-bias handling are not described (basis: PDF pp. 7–9).
4. **Breadth metrics favour long answers.** Claim count and cluster count do not measure correctness (basis: PDF p. 9).
5. **Indexing cost and update cost.** Only one indexing time (Podcast) is reported; the cost of rebuilding the graph after corpus changes is not discussed (basis: PDF pp. 9, 12).
6. **Quality of the extracted graph is not evaluated directly.** Entity-resolution errors, missed relationships or extraction hallucinations are not measured; the claim that GraphRAG is "generally resilient to duplicate entities" is stated, not tested (basis: PDF p. 5).
7. **Domain-specific corpora.** Tests use general podcast and news text, not specialised technical literature, though the paper suggests domain-tailored prompts (basis: PDF pp. 5, 8).
8. **No agent or decision-making evaluation.** The system is used as a single question-answering pipeline, not as a tool inside multi-agent workflows (basis: whole paper).

### 7.3 Future research directions
- **Authors' suggestions:** RAG approaches operating more locally via embedding-based matching of queries and graph annotations; hybrid schemes combining embedding matching with just-in-time community report generation; "roll-up" across hierarchy levels; "drill-down" following the information scent in higher-level summaries (PDF p. 12).
- **Analytical suggestions [Analytical inference]:** evaluate on multi-hop and local question benchmarks against strong vector/hybrid baselines; report faithfulness; measure graph-extraction quality; study incremental index updates; evaluate in multi-agent settings with shared graph memory.

---

## 8. Key evidence and quotable content

| Use | Original short quote or accurate paraphrase | Page | Reminder |
|---|---|---|---|
| Problem | "RAG fails on global questions directed at an entire text corpus" | PDF p. 1 | Verbatim fragment from the abstract |
| Definition | Vector RAG "works well for queries that can be answered with information localized within a small set of records." | PDF p. 2 | Verbatim; the authors' characterisation of vector RAG |
| Method | Paraphrase: an LLM builds an entity knowledge graph, hierarchical Leiden communities are summarised bottom-up, and queries are answered by map-reduce over community summaries. | PDF pp. 1–2, 5–6 | Paraphrase |
| Distinctive idea | GraphRAG "contrasts with these approaches by focusing on a previously unexplored quality of graphs in this context: their inherent modularity" | PDF p. 3 | Verbatim; sentence continues with Newman (2006) |
| Result | "GraphRAG leads to substantial improvements over a conventional RAG baseline for both the comprehensiveness and diversity of generated answers" | PDF p. 1 | Verbatim; applies to global questions on about 1M-token datasets |
| Result | Paraphrase: empowerment comparisons were mixed for global approaches vs vector RAG and for GraphRAG vs source-text summarisation. | PDF p. 9 | Paraphrase |
| Limitation | "More work is needed to understand how performance generalizes to datasets from various domains with different use cases." | PDF p. 11 | Verbatim |
| Conclusion | "summaries of root-level communities in the entity-based graph index provide a data index that is both superior to vector RAG and achieves competitive performance to other global methods at a fraction of the token cost" | PDF p. 12 | Verbatim; applies to situations with many global queries over one dataset |

---

## 9. Relation to my research

**Research context (user-supplied).** Overall: How can Graph AI tools (especially GraphRAG) be used to define research gaps and solution space to support the integration of TOD and NbS design for reducing hydrological and ecological impacts near San Tin Technopole? Focus: How does GraphRAG improve multi-hop reasoning, context retrieval, and decision-making in multi-agent LLM systems compared to standard vector-based RAG?

**Overall relevance [Analytical inference]:** High for the GraphRAG-vs-vector-RAG part of the focus topic (it is the primary GraphRAG source), but partial: the paper evaluates global sensemaking, not multi-hop reasoning, not multi-agent systems, and not decision quality or any TOD/NbS/hydrology domain.

- **Theory to borrow:**
  - Sensemaking as reasoning over connections (Klein et al. via PDF p. 2).
  - Graph modularity and hierarchical community structure as an organising principle for corpus-level understanding (PDF p. 3).
  - The query-focused-summarisation vs retrieval distinction as a way to separate "find a fact" from "understand the whole corpus" (PDF p. 1).
- **Reusable methods and indicators:**
  - Domain-tailorable entity, relationship and claim extraction prompts (PDF pp. 4–5, 21); **[Analytical inference]** these could be tailored with hydrology, ecology and transit-oriented-development exemplars.
  - Hierarchical community summaries that can be scanned for themes without a query (PDF p. 6); **[Analytical inference]** a candidate route to map research themes and gaps in a literature corpus.
  - Algorithm 1 (persona → task → question) for building a domain test set (PDF pp. 6–7); **[Analytical inference]** personas could be planners, hydrologists, ecologists.
  - Head-to-head LLM-judge criteria and claim-based validation (PDF pp. 7–9, 25–26).
- **Comparable data or cases:** None domain-specific. The corpora are about 1M–1.7M tokens (PDF p. 8); **[Analytical inference]** a literature corpus on TOD, NbS and San Tin could fall in a similar size range, but this is not tested.
- **Arguments it can support:**
  - For global, corpus-level questions, a graph-community index outperforms a vector-RAG baseline on breadth (comprehensiveness, diversity) (PDF pp. 9–12).
  - The index can cut query-time tokens relative to source-text map-reduce (PDF p. 10).
  - Graph-structured summaries can serve as a reusable thematic index (PDF pp. 6, 12).
- **Possible conflicts or cautions:**
  - It does not demonstrate improved multi-hop reasoning; it explicitly says existing multi-hop-style benchmarks target vector-RAG fact retrieval and builds its own global-question set (PDF p. 3).
  - Empowerment (understanding and informed judgement) does not improve, and C0 is worse than the vector baseline on it (PDF pp. 9–10, 26); this matters if "decision-making" is the outcome of interest.
  - Costs: indexing is LLM-heavy (281 min for 1M tokens) and update costs are not discussed (PDF p. 9).
- **Research gaps this suggests:**
  - Graph-based vs vector retrieval inside multi-agent LLM workflows (shared graph memory, role-specific retrieval).
  - Evaluation on multi-hop and local questions and on decision tasks, with faithfulness measures.
  - Domain-specific corpora (environmental planning, hydrology, ecology) and extraction quality for technical text.
  - Hybrid local-global schemes, which the authors themselves propose (PDF p. 12).

---

## 10. Literature relationship network

*No existing Obsidian notes were provided ("無"). The links below are unresolved links built from this paper's text and reference list; all are marked "To create". Re-validate once other notes are added.*

### 10.1 Strong relationships

| Linked paper | Relation type | Explanation | Basis | Confidence | Note status |
|---|---|---|---|---|---|
| [[Lewis_2020_Retrieval_Augmented_Generation]] | Extension | GraphRAG extends canonical RAG to global queries over an entire corpus | PDF pp. 1–2 | High | To create |
| [[Klein_2006_Making_Sense_of_Sensemaking]] | Theoretical foundation | Source of the sensemaking definition used to frame global questions | PDF p. 2 | High | To create |
| [[Newman_2006_Modularity_Community_Structure]] | Theoretical foundation | Graph modularity underpins the community-partitioning rationale | PDF p. 3 | High | To create |
| [[Cheng_2024_Retrieval_Augmented_Self_Memory]] | Theoretical foundation | Community summaries are treated as a form of "self-memory" | PDF p. 3 | High | To create |
| [[Traag_2019_From_Louvain_to_Leiden]] | Method similar | Leiden algorithm used (via graspologic) for hierarchical community detection | PDF pp. 3, 5, 9 | High | To create |
| [[Sarthi_2024_RAPTOR]] | Method similar | Hierarchical-index summarisation approach the authors say GraphRAG resembles; GraphRAG instead builds a graph index with community detection | PDF p. 3 | High | To create |
| [[Wang_2023_Knowledge_Graph_Prompting]] | Method similar | Uses a knowledge graph to enhance retrieval with an LLM agent traversing a graph at query time; the authors contrast GraphRAG's pre-computed community summaries | PDF p. 3 | Medium | To create |
| [[He_2024_G_Retriever]] | Method similar | Cited with other techniques that put subgraphs or graph properties in the prompt | PDF p. 3 | Medium | To create |
| [[Zheng_2024_LLM_as_a_Judge]] | Method similar | Head-to-head LLM-as-a-judge evaluation adapted to questions without ground truth | PDF pp. 2, 4 | High | To create |
| [[Metropolitansky_2025_Effective_Extraction_Factual_Claims]] | Method similar | Claimify used to extract factual claims for Experiment 2 | PDF p. 9 | High | To create |
| [[Padmakumar_2024_Writing_Content_Diversity]] | Method similar | Clustering approach adopted for the diversity metric | PDF p. 9 | High | To create |
| [[Tang_2024_MultiHop_RAG]] | Data similar | Source of the News articles corpus; also used for the community-structure illustration | PDF pp. 8, 19 | High | To create |
| [[Yang_2018_HotpotQA]] | Data similar | HotPotQA sample used in the chunk-size and self-reflection check; also cited as a benchmark oriented to vector-RAG fact retrieval | PDF pp. 3, 18 | High | To create |

### 10.2 Concept, method and case nodes

| Node | Type | Role in this paper | Suggested connection direction |
|---|---|---|---|
| [[GraphRAG]] | Concept | The proposed approach | Graph-based RAG papers, RAG surveys, multi-agent memory papers |
| [[Vector_RAG]] | Concept | Baseline family (condition SS) | RAG baselines, embedding retrieval papers |
| [[Retrieval_Augmented_Generation]] | Domain | Parent field | RAG surveys and benchmarks |
| [[Query_Focused_Summarization]] | Domain | Task framing for global questions | Summarisation papers |
| [[Global_Sensemaking]] | Concept | Target task type | Sensemaking and corpus-analysis papers |
| [[Community_Summaries]] | Concept | Core index element | Hierarchical-summary indexes, thematic mapping |
| [[LLM_Knowledge_Graph_Extraction]] | Method | Builds the entity graph from text | KG construction papers |
| [[Knowledge_Graph_Construction_with_LLMs]] | Domain | Parent field of the extraction step | KG construction and reasoning surveys |
| [[Leiden_Community_Detection]] | Method | Hierarchical partitioning | Network-science and graph-clustering papers |
| [[Map_Reduce_Query_Focused_Summarization]] | Method | Query-time answering over summaries | Long-context summarisation papers |
| [[LLM_as_Judge_Evaluation]] | Method | Head-to-head evaluation | Evaluation-methodology papers |
| [[Claim_Based_Evaluation]] | Method | Claim counts and clusters | Faithfulness and diversity evaluation papers |
| [[Adaptive_Benchmarking]] | Concept | LLM-generated corpus-specific question sets | Benchmark-generation papers |
| [[Persona_Based_Question_Generation]] | Method | Persona → task → question pipeline | Synthetic test-set papers |
| [[News_Articles_MultiHop_RAG_Dataset]] | Data | News corpus used for evaluation | Other papers using MultiHop-RAG |

*The Podcast corpus node in the YAML is a one-off data node and is not repeated here.*

### 10.3 Relationship summary
Built from this paper's text and references only (no existing notes). The paper sits at the junction of RAG, knowledge-graph construction and query-focused summarisation, extending canonical vector RAG to corpus-level questions. It takes sensemaking from Klein, modularity from Newman, and the Leiden algorithm from Traag, and is close to RAPTOR-style hierarchical indexing while differing in using entity graphs and communities. Its evaluation branch (LLM-as-judge, claim-based checks, persona-generated questions) makes it a bridge to evaluation-methodology work. The node [[LLM_as_Judge_Evaluation]] is shared with the earlier OASIS note in this conversation (Yang_2025_OASIS_Million_Agent_Simulation); this is a shared-method link only, not a strong paper relation. Re-validate after adding other notes.

---

## 11. Post-reading memo

> [!question] Questions worth pursuing
> 1. Does GraphRAG's advantage persist on multi-hop and local questions against strong hybrid or reranked vector baselines?
> 2. How would a multi-agent system use community summaries or the graph: per-role retrieval, shared memory, or drill-down from C0 to lower levels?
> 3. How accurate is the LLM-extracted graph on technical corpora (hydrology, ecology, planning), and how do entity-matching errors propagate?
> 4. Can the community hierarchy be used directly to detect thematic gaps (sparse or isolated communities), and how would that be validated?
> 5. What does the empowerment drop at root level imply for decision-support use, and can citation-preserving extraction fix it?

> [!idea] Transferable methods or ideas
> - Persona → task → question generation to build a domain test set without gold answers.
> - Four-criterion head-to-head judging with a control criterion (Directness) and a claim-based cross-check.
> - Using hierarchical community summaries as a browsable thematic map of a corpus.
> - Map-reduce answering with 0–100 helpfulness scores to filter and rank partial answers.

> [!warning] Limits on use
> Results apply to global sensemaking questions on two English corpora of about 1–1.7M tokens with GPT-4-family models and an LLM judge. They do not show gains for multi-hop reasoning, local fact retrieval, multi-agent systems, decision quality, or domain-specific technical corpora. Faithfulness was not compared.

---

## 12. Reference leads

| Suggested note link | Reason | Relation to this paper | Priority |
|---|---|---|---|
| [[Wang_2023_Knowledge_Graph_Prompting]] | KG-based retrieval with an LLM agent traversing a graph for multi-document QA; closest to the multi-hop and agent angle | Key contrast | High |
| [[Sarthi_2024_RAPTOR]] | Hierarchical summary-tree retrieval; main non-graph comparator | Key contrast | High |
| [[He_2024_G_Retriever]] | Graph RAG for textual graph understanding and QA | Related method | High |
| [[Tang_2024_MultiHop_RAG]] | Multi-hop RAG benchmark and the source of the News corpus | Data source / benchmark | High |
| [[Cheng_2024_Retrieval_Augmented_Self_Memory]] | Self-memory idea behind community summaries; links to agent memory | Theoretical foundation | Medium |
| [[Gao_2023_RAG_Survey]] | RAG survey cited for vector RAG and KG-as-index approaches | Survey entry | Medium |
| [[Zhu_2024_LLMs_for_KG_Construction_and_Reasoning]] | Cited on how prompt engineering affects KG extraction quality (bibliographic details incomplete in the reference list; information to be checked) | Method source | Medium |
| [[Traag_2019_From_Louvain_to_Leiden]] | The community detection algorithm used | Method source | Medium |
| [[Zheng_2024_LLM_as_a_Judge]] | Evaluation method for answers without ground truth | Method source | Medium |
| [[Metropolitansky_2025_Effective_Extraction_Factual_Claims]] | Claim extraction used for validation (bibliographic details incomplete in the reference list; information to be checked) | Method source | Medium |

---

## 13. Quick recap

- **One-sentence research question:** How can RAG answer global, corpus-wide sensemaking questions that vector retrieval cannot?
- **One-sentence method:** An LLM builds an entity graph, hierarchical Leiden communities and summaries, then answers queries by map-reduce over community summaries, evaluated by pairwise LLM judging and claim-based metrics on two ~1M-token corpora.
- **One-sentence conclusion:** GraphRAG beats a vector-RAG baseline on comprehensiveness and diversity (not on empowerment or directness), and root-level summaries do so at a fraction of the token cost.
- **One-sentence contribution:** A scalable graph-index approach to global QFS plus an adaptive-benchmarking evaluation protocol for questions without ground truth.
- **One-sentence limitation:** Only global questions, two corpora, one vector baseline and LLM-judged breadth metrics, with no faithfulness, multi-hop or multi-agent evaluation.
- **Worth close reading:** Yes for the GraphRAG-vs-vector-RAG focus topic; partial for multi-hop and multi-agent aspects.
- **Recommended priority:** ★★★★☆
