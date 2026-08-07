---
name: I_INTRASTATPRVDROFINFORMATION
description: "Intrastat Provider of Information"
app_component: FT-ITR-ISR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATPRVDROFINFORMATION')/$value
semantic_en: "Intrastat Provider of Information"
tags:
  - FT
  - bo:companycode
  - component:FT-ITR-ISR
  - FT-ITR
  - FT-ITR-ISR
  - interface-view
  - metadata-only
---
# I_INTRASTATPRVDROFINFORMATION

**Intrastat Provider of Information**

| Property | Value |
|---|---|
| App Component | `FT-ITR-ISR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATPRVDROFINFORMATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IntrastatProviderOfInformation` |  | |  |  | `CHAR(10)` | Provider of Information ID |
| `IntrastatDeclarationCountry` |  | |  |  | `CHAR(3)` | Country of Declaration |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `IntrastatLeadingCompanyCode` |  | |  |  | `CHAR(4)` | Leading Company Code for Provider of Information |
