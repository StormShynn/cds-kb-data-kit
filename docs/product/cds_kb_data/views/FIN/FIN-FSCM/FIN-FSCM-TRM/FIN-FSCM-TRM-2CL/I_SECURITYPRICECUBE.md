---
name: I_SECURITYPRICECUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYPRICECUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_SECURITYPRICECUBE

**This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYPRICECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityExchange` |  | |  |  | `CHAR(10)` | Security exchange |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `SecurityClassPriceType` |  | |  |  | `CHAR(2)` | Market Data: Security Price Type |
| `SecurityClassStockPriceCrcy` |  | |  |  | `CUKY(5)` | Quotation Currency (that prices are in) |
| `SecurityClassValueInQtanUnit` |  | |  |  | `DEC(23)` | Price of Unit- or Percentage-Quoted Security |
