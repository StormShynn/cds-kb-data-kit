---
name: I_MKTDATABASISSPREADCUBE
description: This CDS view provides the prerequisites for answering the following business questions: What is a basis spread for a quotation type in basis points at a specific point in time?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATABASISSPREADCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What is a basis spread for a quotation type in basis points at a specific point in time?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - quotation
  - metadata-only
---
# I_MKTDATABASISSPREADCUBE

**This CDS view provides the prerequisites for answering the following business questions: What is a basis spread for a quotation type in basis points at a specific point in time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATABASISSPREADCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MktDataBasisSpreadID` |  | |  |  | `CHAR(15)` | Basis Spread ID |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `SpreadQuotationType` |  | |  |  | `NUMC(1)` | Quotation Type |
| `MktDataBasisSpreadValue` |  | |  |  | `DEC(17)` | Basis Spread Value in Basis Points |
