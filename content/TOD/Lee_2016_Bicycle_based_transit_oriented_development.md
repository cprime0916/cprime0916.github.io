---
type: paper
note_id: "Lee_2016_Bicycle_based_transit_oriented_development"
title: "Bicycle-based transit-oriented development as an alternative to overcome the criticisms of the conventional transit-oriented development"
title_zh: "以自行车为基础的导向型开发（B-TOD）：克服传统TOD批判的替代方案"
authors:
  - "Jaeyeong Lee"
  - "Keechoo Choi"
  - "Yountaik Leem"
year: 2016
publication: "International Journal of Sustainable Transportation"
doi: "10.1080/15568318.2014.923547"
url: "https://doi.org/10.1080/15568318.2014.923547"
citekey: "Lee2016Bicycle"
reading_status: processed
language: "English"
research_domains:
  - "[[Transit-Oriented Development]]"
  - "[[Sustainable Transportation]]"
  - "[[Active Mobility]]"
concepts:
  - "[[Bicycle-Based TOD]]"
  - "[[Station Catchment Area]]"
  - "[[Trip Chaining]]"
  - "[[Feeder-Distributor-Circulator]]"
methods:
  - "[[Cumulative Distribution Model]]"
  - "[[Regression Modeling]]"
  - "[[Stated Preference Survey]]"
  - "[[GIS Buffering]]"
data_types:
  - "[[Commuter Survey Data]]"
  - "[[Spatial Network Data]]"
spatial_scales:
  - "[[Metropolitan Scale]]"
  - "[[Station Catchment Scale]]"
study_areas:
  - "[[Seoul Metropolitan Area]]"
  - "[[Daejeon Metropolitan City]]"
supports:
  - "[[Schneider_1992_PRT_Deployment_Strategy]]"
  - "[[Martens_2004_Bicycle_as_Feedering_Mode]]"
contrasts:
  - "[[Calthorpe_1993_Next_American_Metropolis]]"
extends:
  - "[[Calthorpe_1993_Next_American_Metropolis]]"
  - "[[Schneider_1992_PRT_Deployment_Strategy]]"
theoretical_foundations:
  - "[[Calthorpe_1993_Next_American_Metropolis]]"
  - "[[Schneider_1992_PRT_Deployment_Strategy]]"
methodologically_related:
  - "[[Hino_2000_Complementary_Index]]"
  - "[[OSullivan_1996_Walking_Distances]]"
empirically_related:
  - "[[Lee_2010_UBike_Service_Analysis]]"
tags:
  - literature
  - TOD
  - active-transport
  - spatial-analysis
created: "2026-09-12"
---

# Bicycle-based transit-oriented development as an alternative to overcome the criticisms of the conventional transit-oriented development

> [!summary] One-Sentence Positioning
> This paper proposes Bicycle-based Transit-Oriented Development (B-TOD) to resolve the rigid trade-off between transit ridership and living quality in walking-only TOD, empirically demonstrating via Korean metro commuter surveys that cycling extends station access boundaries to 1.96 km and expands real urban transit coverage from 29.9% to 93.6%.

## 1. Basic Information

| Field | Content |
|---|---|
| Authors | Jaeyeong Lee, Keechoo Choi, Yountaik Leem |
| Year | 2016 |
| Source | International Journal of Sustainable Transportation, Vol. 10, No. 10, pp. 975–984 |
| DOI | 10.1080/15568318.2014.923547 |
| Research Domain | [[Transit-Oriented Development]], [[Sustainable Transportation]], [[Urban Planning]] |
| Research Type | Empirical Study / Conceptual & Methodological Framework |
| Research Object | Bicycle commuters accessing subway stations and non-cycling transit passengers |
| Study Area | Seoul Metropolitan Area and Daejeon Metropolitan City, South Korea |
| Spatial Scale | Metropolitan & Station Catchment Area (Sub-city scale) |
| Temporal Scope | Empirical surveys conducted in 2010 and 2011 |

## 2. Research Background & Questions

### 2.1 Research Background
Since Calthorpe (1993) introduced Transit-Oriented Development (TOD), high-density mixed-use development within a walking catchment (~500 m or 2,000 ft) has been widely adopted to boost transit ridership (PDF p. 975). However, traditional TOD faces severe criticisms: forcing artificial hyper-density causes urban environmental degradation, traffic congestion, loss of livability, and social unfairness between inner and outer station zones (PDF pp. 975–976). In highly urbanized Asian contexts like South Korea (density 14,000–31,000 persons/$km^2$), applying US-based walking density standards triggers local community opposition and fails due to high land costs and saturated development capacity (PDF p. 976).

### 2.2 Literature Gap
Existing research treats walking as the sole primary access mode to transit, creating an unavoidable zero-sum trade-off between transit patronage and environmental comfort (PDF p. 976). Alternative proposals like Schneider's (1992) Extended TOD (E-TOD)—which relies on Personal Rapid Transit (PRT) or Light Rail Transit (LRT) circulators—impose high capital infrastructure costs, vertical transfer penalties, and lower eco-friendliness compared to active modes (PDF p. 977). Furthermore, prior bicycle access studies lack a robust, empirically derived mathematical method to define station catchment boundaries for TOD planning (PDF p. 979).

### 2.3 Research Objectives & Questions
- **Research Objectives**: To formulate the theoretical concept of Bicycle-based TOD (B-TOD) and establish an empirical regression methodology to estimate realistic station impact boundaries for bicycle access.
- **Research Questions**:
  1. How can the conventional walking-based TOD framework be restructured around bicycle access?
  2. What is the empirical catchment boundary for bicycle access to subway stations based on actual commuter trip behavior?
  3. How significantly can B-TOD expand spatial coverage and induce access mode shifts from walking/driving to cycling?
- **Hypotheses**: Original text did not state explicit formal hypotheses.

## 3. Theoretical & Conceptual Framework

### 3.1 Core Concepts

| Concept | Definition/Usage in Paper | Operationalization | Obsidian Link |
|---|---|---|---|
| Bicycle-based TOD (B-TOD) | A strategic planning framework integrating cycling and public transit to enlarge station catchment areas while relaxing density constraints | Two-tiered spatial zoning (walking core + cycling outer zone) with a negative exponential density gradient | [[Bicycle-Based TOD]] |
| Station Impact Area / Catchment Area | The spatial boundary surrounding a transit station accessible within an acceptable travel threshold | 85th percentile cumulative arrival distance of bicycle commuters | [[Station Catchment Area]] |
| Trip Chaining | Sequential multimodal transport connections linking home, transit, and destination | Classification into 5 access/egress chain types (e.g., Home $\rightarrow$ Bike $\rightarrow$ PT $\rightarrow$ Walk $\rightarrow$ Destination) | [[Trip Chaining]] |
| Extended TOD (E-TOD) | Schneider's (1992) model utilizing Feeder-Distributor-Circulator (F-D-C) transit systems to expand station reach | Automated transit networks expanding coverage up to 1,280 acres | [[Extended TOD]] |

### 3.2 Theoretical Foundations
- **Calthorpe's (1993) Walking TOD**: Establishes the traditional 2,000 ft (400–500 m) walking radius baseline (PDF p. 975).
- **Schneider's (1992) Extended TOD (E-TOD)**: Introduces the Feeder-Distributor-Circulator (F-D-C) network concept to decouple station reach from walking boundaries (PDF p. 977).
- **Negative Exponential Density Gradient**: B-TOD relies on land-use density that declines smoothly as distance from the station center increases, prioritizing movement efficiency over uniform high density (PDF p. 979).

### 3.3 Conceptual Relationships
In conventional TOD:
Walking-only Access Boundary (500 m) $\rightarrow$ Requires Extreme Local Density $\rightarrow$ Degraded Living Quality & Social Unfairness.

In B-TOD:
Bicycle Access Boundary (~2.0 km) $\rightarrow$ 36-fold Theoretical Area Expansion $\rightarrow$ Relaxed / Distributed Density Gradient $\rightarrow$ Maintained Transit Demand + Enhanced Amenity / Livability.

## 4. Data & Methods

### 4.1 Research Design
Quantitative empirical research design combining commuter travel surveys, non-linear cumulative regression modeling, and GIS spatial buffer simulation across two South Korean metropolitan areas.

### 4.2 Data

| Data / Sample | Source | Quantity & Period | Spatial Granularity | Purpose | Limitations |
|---|---|---|---|---|---|
| Commuter Trip Survey (2010) | Seoul Metro (20 stations) & Daejeon Metro (6 stations) | N = 173 valid bicycle trips (110 Seoul, 63 Daejeon) | Station point level | Modeling distance-cumulative trip distribution curves | Small sample size for specific sub-chain types |
| B-TOD Stated Preference Survey (2011) | 10 Seoul stations with bike parking | N = 274 subway commuters (Oct 26 – Nov 4, 2011) | Station catchment area | Assessing willingness to shift access mode to bicycle | Hypothetical stated preference bias |
| Seoul Subway Network GIS Data | Seoul Municipal Government | 305 operating subway stations in Seoul | Citywide network level (570 $km^2$) | Simulating real non-overlapping spatial catchment expansion | Ignores elevation/topography and road circuity |

### 4.3 Methodological Workflow
1. Categorize bicycle transit trip chains into 5 distinct operational types (PDF p. 981).
2. Isolate Origin (Home)-to-Station access trips and Station-to-Destination (Work) egress trips.
3. Fit non-linear regression models (quadratic, cubic, S-curve) linking travel distance ($x$) to cumulative arrival percentage ($y$) (PDF pp. 981–982).
4. Apply the 85th percentile threshold ($y = 85\%$) to derive marginal access distances ($x$).
5. Conduct spatial buffering and overlapping network analysis across 305 stations in Seoul to compute citywide coverage (PDF pp. 982–983).

### 4.4 Models, Indicators & Variables

| Name | Type | Definition / Formula | Role in Study |
|---|---|---|---|
| Cumulative Arrival Function $\zeta i$ | Mathematical Model | $\zeta i=\int_{0}^{D}A(X)dx$ | Expresses total cumulative accessibility indicator up to distance $D$ (PDF p. 981) |
| Access Distance ($x$) | Independent Variable | Bicycle travel distance from origin to station (km) | Predictor for cumulative arrival percentile |
| Cumulative Percentile ($y$) | Dependent Variable | Cumulative percentage of total bicycle arrivals (%) | Solved at $y = 85\%$ to establish boundary |
| Quadratic / Cubic Regression Model | Empirical Model | $y = \beta_0 + \beta_1 x + \beta_2 x^2 + \beta_3 x^3$ | Fits S-shaped trip distribution curves |

The mathematical expression for cumulative opportunity $\zeta i$ is transcribed from PDF p. 981:

$$\zeta i=\int_{0}^{D}A(X)dx$$

Where $\zeta i$ represents the total accessibility indicator within distance $D$, and $A(X)$ denotes the accessibility function at distance $X$.

### 4.5 Method Evaluation
- **Methodological Soundness**: Adopting the 85th percentile threshold directly aligns with traffic engineering design standards (e.g., speed limits, design speed), making boundary estimation more realistic than mean distance measures (PDF p. 982).
- **Improvements**: Replaces arbitrary circular buffers with empirical user behavior curves.
- **Potential Biases**: Stated preference surveys tend to overestimate actual mode shift. GIS buffer simulation assumes isotropic movement and ignores micro-topography (Analytical Induction).
- **Missing Information for Reproducibility**: Network routing matrices, exact slope parameters, and complete survey questionnaires were not provided.

## 5. Main Findings

### 5.1 Core Findings
1. **Empirical B-TOD Access Boundaries**: The 85th percentile access distance for Home-to-Station trips is **1.96 km**, and for Station-to-Work trips is **2.13 km** (PDF p. 982).
2. **Catchment Expansion Effect**: A single station's theoretical catchment area expands 11-fold ($12.06\text{ km}^2$ vs $1.17\text{ km}^2$). In Seoul, due to inter-station distance overlaps (1.0–1.5 km apart), B-TOD expands actual subway catchment coverage from 29.9% ($182.1\text{ km}^2$) to **93.6% ($570.0\text{ km}^2$)** of the entire city—a 3.1-fold real increase (PDF pp. 982–983).
3. **Mode Shift Potential**: Under improved B-TOD infrastructure, **40.6% of walking access users** and **23.5% of bus access users** expressed willingness to switch to bicycle access (PDF p. 983).
4. **Dominant Trip Chains**: The primary chain is Home $\rightarrow$ Bike $\rightarrow$ PT $\rightarrow$ Walk $\rightarrow$ Work (34%), followed by Home $\rightarrow$ Walk $\rightarrow$ PT $\rightarrow$ Bike $\rightarrow$ Work (23%) (PDF p. 981).

### 5.2 Secondary Findings & Anomalies
- Station-to-Work egress distance (2.13 km) is slightly longer than Home-to-Station access distance (1.96 km) (PDF p. 982).
- Daejeon exhibited shorter bicycle access distances than the Capital Area across all modes due to smaller urban scale (PDF p. 982).
- 35% of surveyed station bicycle parking users utilized the facilities solely for parking without transferring to public transit (PDF p. 981).

### 5.3 Research Question Alignment

| Research Question / Goal | Corresponding Result | Supported? | Location |
|---|---|---|---|
| Restructure TOD for bicycle access | Proposed strategic two-tiered zoning and negative exponential density gradients | Yes | PDF p. 979 |
| Estimate empirical B-TOD extent | Established 1.96 km (Home-to-Station) access boundary based on 85th percentile | Yes | PDF p. 982 |
| Quantify real coverage expansion in Seoul | Metro catchment expanded from 29.9% to 93.6% of Seoul's area | Yes | PDF p. 983 |
| Evaluate access mode shift potential | Confirmed 40.6% walk-to-bike and 23.5% bus-to-bike shift potential | Yes | PDF p. 983 |

## 6. Discussion & Contributions

### 6.1 Theoretical Contributions
Formalized B-TOD theory, establishing that changing the transit access mode from walking to cycling breaks the zero-sum trade-off between high transit patronage and urban living comfort (PDF p. 976, 979).

### 6.2 Methodological Contributions
Introduced percentile-based non-linear regression modeling of cumulative trip arrival curves to replace arbitrary radial buffers in transit catchment planning (PDF pp. 981–982).

### 6.3 Empirical Contributions
Provided concrete empirical access metrics (1.96 km home-to-station, 2.13 km station-to-work) derived from real Asian metropolitan commuter data (PDF p. 982).

### 6.4 Practical or Policy Implications
Allows urban planners to significantly expand transit coverage into lower-density peripheral neighborhoods without forcing politically controversial hyper-dense redevelopment; underscores the critical necessity of secure bike parking and continuous cycle networks at transit hubs (PDF p. 979, 983).

## 7. Limitations & Future Research

### 7.1 Author-Acknowledged Limitations
Sample sizes were restricted to Seoul and Daejeon; variations in city size, transit network hierarchy, and regional user characteristics require broader validation (PDF p. 983).

### 7.2 Additional Identified Limitations (Analytical Induction)
- Assumes planar isotropic space in GIS coverage modeling, completely neglecting topography (slopes severely reduce cycling range) and dedicated cycle track availability.
- Overlooks severe seasonal weather constraints (e.g., East Asian humid summer monsoons or freezing winters) on cycling willingness.

### 7.3 Future Research Directions
- **Author Recommendations**: Conduct broader surveys across diverse city scales, transit modal hierarchies, and micro-built environments (PDF p. 983).
- **Analytical Recommendations**: Integrate micro-topographical DEMs (slope gradients) and seasonal climate variables into bicycle accessibility modeling.

## 8. Key Evidence & Quotable Statements

| Purpose | Quote or Accurate Paraphrase | Page | Usage Note |
|---|---|---|---|
| Definition | "The B-TOD, based on a combination of cycling and PT, is a new concept to enlarge the station area to generate a bicycle-friendly environment, while adopting the traditional TOD concept within walking range." | PDF p. 979 | Direct Quote |
| Trade-off Critique | If transit access is restricted to walking, "it may be impossible to avoid the trade-off between transit ridership and comfort." | PDF p. 976 | Direct Quote |
| Empirical Result | Home-to-station bicycle access distance at the 85th percentile is 1.96 km, expanding single-station theoretical catchment area to 12.06 $km^2$. | PDF p. 982 | Accurate Paraphrase |
| Coverage Effect | B-TOD expands actual subway catchment coverage in Seoul from 29.9% to 93.6% of the municipal area. | PDF p. 983 | Accurate Paraphrase |

## 9. Relation to My Research Topic

**My Research Question**: *What are the key environmental and structural limitations of Hong Kong’s traditional "Rail plus Property" (R+P) TOD framework when deployed in ecologically sensitive wetland ecosystems in the Northern Metropolis?*

- **Theoretical Transferability**: Lee et al.'s critique of conventional TOD—that hyper-dense land accumulation around station cores degrades local living quality and creates rigid spatial equity issues—directly parallels the ecological conflict inherent in Hong Kong's R+P model. Forcing R+P hyper-density podiums into ecologically sensitive wetland buffer zones in the Northern Metropolis risks ecological destruction and habitat fragmentation.
- **Methodological Application**: The 1.96 km B-TOD catchment boundary provides a quantitative framework to demonstrate how active feeder modes (cycling/light active transport) can decouple transit ridership from localized podium hyper-density.
- **Comparative Insight**: In sensitive wetland areas, B-TOD principles could allow MTR stations to draw commuters from lower-density, environmentally sensitive surrounding villages via non-motorized corridors without erecting massive podium structures directly on wetland habitats.
- **Conflicting Viewpoint**: Hong Kong's R+P model relies financially on high land premiums generated by podium property development. Adopting lower-density B-TOD around wetland stations would undermine MTR Corp's private financing mechanism, requiring state-level ecological compensation or alternative value-capture subsidies.

## 10. Literature Network

### 10.1 Strong-Relation Papers

| Related Paper | Relation Type | Explanation | Basis | Confidence | Note Status |
|---|---|---|---|---|---|
| [[Calthorpe_1993_Next_American_Metropolis]] | Theoretical Foundation / Contrast | Establishes traditional walking TOD baseline (2,000 ft radius) which Lee et al. critique | PDF p. 975 | High | To create |
| [[Schneider_1992_PRT_Deployment_Strategy]] | Extension / Contrast | Proposes E-TOD using PRT/LRT; Lee et al. extend this by substituting expensive PRT with active cycling | PDF p. 977 | High | To create |
| [[Lin_2006_TOD_Planning_Model]] | Support | Demonstrates density trade-offs between transit patronage gains and living environment costs | PDF p. 976 | High | To create |
| [[Martens_2004_Bicycle_as_Feedering_Mode]] | Methodologically Related | Empirical benchmark for European bicycle feeder access to transit | PDF p. 978 | Medium | To create |

### 10.2 Concept, Method & Case Nodes

| Node | Type | Role in Paper | Suggested Linking Direction |
|---|---|---|---|
| [[Bicycle-Based TOD]] | Concept | Core framework introduced by paper | Link to Active Transport & Sustainable TOD |
| [[Station Catchment Area]] | Concept / Method | Target outcome measured via cumulative distribution | Link to Spatial Accessibility & Transit Planning |
| [[Trip Chaining]] | Concept | Operational classification of commuter journeys | Link to Travel Behavior & Multimodal Transport |
| [[Cumulative Distribution Model]] | Method | Regression method to solve 85th percentile boundaries | Link to Spatial Econometrics |
| [[Seoul Metropolitan Area]] | Region / Case | Primary empirical testing location | Link to East Asian Urban Planning Cases |

### 10.3 Network Summary
This paper functions as a critical bridge connecting walking-centric TOD literature (Calthorpe, 1993) with active mobility integration studies. It extends Schneider's (1992) Extended TOD (E-TOD) framework by replacing capital-intensive PRT infrastructure with low-cost bicycle networks. Within the broader literature, it provides quantitative empirical support to critiques of TOD hyper-density (Lin & Gau, 2006) and offers foundational benchmarks for active transport station feeder boundaries.

## 11. Post-Reading Research Memorandum

> [!question] Questions Worth Pursuing
> 1. How does micro-topography (e.g., steep slopes or elevated structures) in complex terrains like Hong Kong alter the 1.96 km bicycle catchment boundary?
> 2. What financial mechanisms can replace Hong Kong's "Rail plus Property" land premium profits if station surroundings adopt low-density B-TOD to protect wetland ecosystems?
> 3. How can cycleway feeder paths be constructed through ecologically sensitive wetland buffer zones without inducing habitat fragmentation?

> [!idea] Transferable Methods / Ideas
> - Applying 85th percentile cumulative distribution modeling to establish empirical non-motorized catchment boundaries instead of drawing arbitrary Euclidean circles.
> - Disaggregating multimodal feeder journeys into 5 trip chain types to evaluate spatial equity and transfer friction.

> [!warning] Operational Constraints
> - Assumes flat terrain and segregated cycle infrastructure; unsuited for unmitigated steep urban slopes or high-speed mixed traffic corridors.
> - Ignores severe seasonal weather barriers (monsoons, high heat, humidity).

## 12. Reference Clues

| Suggested Note Link | Recommendation Reason | Relation to Current Paper | Priority |
|---|---|---|---|
| [[Calthorpe_1993_Next_American_Metropolis]] | Foundational text defining original walking TOD metrics | Theoretical Foundation | High |
| [[Schneider_1992_PRT_Deployment_Strategy]] | Originator of Extended TOD (E-TOD) and F-D-C circulators | Theoretical Basis / Contrast | High |
| [[Lin_2006_TOD_Planning_Model]] | Key empirical evidence on density vs livability trade-offs | Critical Background | High |
| [[Martens_2004_Bicycle_as_Feedering_Mode]] | European empirical baseline for bicycle feeder distances | Comparative Baseline | High |
| [[Gordon_1997_Are_Compact_Cities_Desirable]] | Classic critique on transit investment vs ridership returns | Literature Gap | Medium |
| [[Crane_1998_Does_Neighborhood_Design_Influence_Travel]] | Behavioral analysis of micro-urban design on travel | Literature Gap | Medium |
| [[Cervero_2009_Influences_of_Built_Environments]] | Analyzes built environment impacts on cycling (Bogotá) | Methodological Source | Medium |
| [[Hino_2000_Development_of_Complementary_Index]] | Originator of the cumulative percent arrival curve method | Methodological Source | Medium |
| [[OSullivan_1996_Walking_Distances_LRT]] | Source for applying percentile thresholds to access distances | Methodological Source | Medium |
| [[Department_of_Transport_WA_2012_WA_Bicycle_Network_Plan]] | Benchmark setting bicycle station catchment to 3 km | Empirical Baseline | Medium |

## 13. Minimal Review

- **One-sentence Research Question**: How can bicycle access overcome the spatial coverage and density limitations of conventional walking-based TOD?
- **One-sentence Method**: Non-linear regression modeling of cumulative commuter arrival curves (85th percentile threshold) using Korean survey data, combined with citywide GIS buffer simulation in Seoul.
- **One-sentence Conclusion**: Bicycle access extends effective station catchment boundaries to 1.96 km, expanding real subway coverage in Seoul from 29.9% to 93.6% while relieving density pressure around station cores.
- **One-sentence Contribution**: Formulates a quantitative B-TOD framework that breaks the zero-sum trade-off between transit ridership maximization and urban environmental comfort.
- **One-sentence Limitation**: Relying on Korean urban empirical data, the model assumes flat terrain and does not incorporate topography or severe weather constraints.
- **Worth Reading Closely**: Yes
- **Recommended Priority**: ★★★★★