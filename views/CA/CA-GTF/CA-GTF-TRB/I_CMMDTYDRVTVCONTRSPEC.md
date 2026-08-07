---
name: I_CMMDTYDRVTVCONTRSPEC
description: "Derivative Contract Specification LOF Commodity Currency"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYDRVTVCONTRSPEC')/$value
semantic_en: "Derivative Contract Specification LOF Commodity Currency"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - contract
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_CMMDTYDRVTVCONTRSPEC

**Derivative Contract Specification LOF Commodity Currency**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYDRVTVCONTRSPEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityCurveDrvtvContrSpec` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `ValidFrom` |  | |  |  | `DATS(8)` | Derivative Contract Specification: Valid From |
| `ConditionTermRateMktCurrency` |  | |  |  | `CUKY(5)` | Quotation Currency |
