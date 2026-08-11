---
name: I_SETTLMTDATECATTEXT
description: "This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECATTEXT')/$value
semantic_en: "This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDATECATTEXT

**This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDateCat` |  | |  |  | `CHAR(1)` | Rebates: Settlement Date Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtDateCatName` |  | |  |  | `CHAR(60)` | Rebates: Settlement Date Type Description |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
