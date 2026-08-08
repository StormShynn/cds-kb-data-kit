---
name: I_CNSLDTNLEDGER
description: "This CDS view provides access to the master data for a consolidation ledger. This CDS view provides the prerequisites for answering the following business questions: What is the description of my consolidation ledges? What is the group currency for a certain consolidation ledger?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGER')/$value
semantic_en: "This CDS view provides access to the master data for a consolidation ledger. This CDS view provides the prerequisites for answering the following business questions: What is the description of my consolidation ledges? What is the group currency for a certain consolidation ledger?"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_CNSLDTNLEDGER

**This CDS view provides access to the master data for a consolidation ledger. This CDS view provides the prerequisites for answering the following business questions: What is the description of my consolidation ledges? What is the group currency for a certain consolidation ledger?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
