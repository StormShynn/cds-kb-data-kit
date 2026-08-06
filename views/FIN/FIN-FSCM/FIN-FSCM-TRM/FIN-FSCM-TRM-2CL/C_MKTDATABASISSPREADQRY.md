---
name: C_MKTDATABASISSPREADQRY
description: This CDS view provides the prerequisites for answering the following business question: What is a basis spread value for a specific quotation type in basis points at a specific point in time?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATABASISSPREADQRY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is a basis spread value for a specific quotation type in basis points at a specific point in time?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - quotation
  - metadata-only
---
# C_MKTDATABASISSPREADQRY

**This CDS view provides the prerequisites for answering the following business question: What is a basis spread value for a specific quotation type in basis points at a specific point in time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATABASISSPREADQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SpreadQuotationType` | `NUMC(1)` | Quotation Type |
| `MktDataBasisSpreadID` | `CHAR(15)` | Basis Spread ID |
| `CalendarDate` | `DATS(8)` | Calendar Date |
| `MktDataBasisSpreadValue` | `DEC(17)` | Basis Spread Value in Basis Points |
