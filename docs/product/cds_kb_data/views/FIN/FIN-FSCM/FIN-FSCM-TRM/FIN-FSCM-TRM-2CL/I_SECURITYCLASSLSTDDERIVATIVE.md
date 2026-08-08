---
name: I_SECURITYCLASSLSTDDERIVATIVE
description: "Security Class Listed Derivative"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYCLASSLSTDDERIVATIVE')/$value
semantic_en: "Security Class Listed Derivative"
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_SECURITYCLASSLSTDDERIVATIVE

**Security Class Listed Derivative**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYCLASSLSTDDERIVATIVE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `ListedDerivativeQuotation` |  | |  |  | `CHAR(1)` | Listed Derivative Quotation |
| `ListedDerivativeCategory` |  | |  |  | `NUMC(2)` | Options/futures category |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `LstdDerivative1stQuotationDate` |  | |  |  | `DATS(8)` | First Quotation Date |
| `LstdDerivativeLastQuotationDte` |  | |  |  | `DATS(8)` | First Quotation Date |
| `ListedDerivativeSettlementDate` |  | |  |  | `DATS(8)` | Settlement Date |
| `ListedDerivativeTermEndDate` |  | |  |  | `DATS(8)` | End of Term |
