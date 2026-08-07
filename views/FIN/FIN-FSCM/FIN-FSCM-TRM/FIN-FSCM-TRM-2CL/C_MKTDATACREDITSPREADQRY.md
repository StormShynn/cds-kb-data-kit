---
name: C_MKTDATACREDITSPREADQRY
description: This CDS view provides the prerequisites for answering the following business question: What is the credit spread value for a specific quotation type and over a specific period of time?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATACREDITSPREADQRY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is the credit spread value for a specific quotation type and over a specific period of time?
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
# C_MKTDATACREDITSPREADQRY

**This CDS view provides the prerequisites for answering the following business question: What is the credit spread value for a specific quotation type and over a specific period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATACREDITSPREADQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryReferenceEntity` |  | |  |  | `CHAR(15)` | Reference Entity |
| `CreditSpreadID` |  | |  |  | `CHAR(15)` | Credit Spread ID |
| `SpreadQuotationType` |  | |  |  | `NUMC(1)` | Quotation Type |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `CreditSpreadValue` |  | |  |  | `DEC(17)` | Credit Spread Value in Basis Points |
