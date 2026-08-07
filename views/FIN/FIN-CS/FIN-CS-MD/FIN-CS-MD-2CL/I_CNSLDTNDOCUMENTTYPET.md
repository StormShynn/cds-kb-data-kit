---
name: I_CNSLDTNDOCUMENTTYPET
description: Consolidation Document Type - Text
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDOCUMENTTYPET')/$value
semantic_en: Consolidation Document Type - Text
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - document
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNDOCUMENTTYPET

**Consolidation Document Type - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDOCUMENTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ConsolidationDocumentTypeText` |  | |  |  | `CHAR(30)` | Description |
