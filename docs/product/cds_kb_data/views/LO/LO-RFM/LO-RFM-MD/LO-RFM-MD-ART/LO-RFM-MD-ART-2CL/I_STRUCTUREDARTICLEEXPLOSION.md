---
name: I_STRUCTUREDARTICLEEXPLOSION
description: "Split Structure material"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STRUCTUREDARTICLEEXPLOSION')/$value
semantic_en: "Split Structure material"
tags:
  - LO
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - material
  - metadata-only
---
# I_STRUCTUREDARTICLEEXPLOSION

**Split Structure material**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STRUCTUREDARTICLEEXPLOSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SequenceNumber` |  | |  |  | `NUMC(3)` | Sequence Number (Three Characters) |
| `ProductCategory` |  | |  |  | `CHAR(2)` | Material Category |
| `StrucdArticleExplsnRlvtAppl` |  | |  |  | `NUMC(3)` | Transaction Key |
| `PlantCategory` |  | |  |  | `CHAR(1)` | Plant category |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Site` |  | |  |  | `CHAR(4)` | Plant |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Product` |  | |  |  | `CHAR(40)` | Structured Material |
| `StructuredArticleExplsnType` |  | |  |  | `CHAR(1)` | Indicates splitting type of a structured material |
