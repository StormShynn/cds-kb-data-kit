---
name: I_MKTDATACREDITSPREADCUBE
description: This CDS view provides the prerequisites for answering the following business question: What is a credit spread for a quotation type in basis points at a specific point in time?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACREDITSPREADCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is a credit spread for a quotation type in basis points at a specific point in time?
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
# I_MKTDATACREDITSPREADCUBE

**This CDS view provides the prerequisites for answering the following business question: What is a credit spread for a quotation type in basis points at a specific point in time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACREDITSPREADCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryReferenceEntity` |  | |  |  | `CHAR(15)` | Reference Entity |
| `CreditSpreadID` |  | |  |  | `CHAR(15)` | Credit Spread ID |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `SpreadQuotationType` |  | |  |  | `NUMC(1)` | Quotation Type |
| `CreditSpreadValue` |  | |  |  | `DEC(17)` | Credit Spread Value in Basis Points |
