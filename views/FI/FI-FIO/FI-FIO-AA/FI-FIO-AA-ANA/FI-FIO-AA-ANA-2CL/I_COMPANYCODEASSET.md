---
name: I_COMPANYCODEASSET
description: This CDS view provides the prerequisites for answering the following business question: How many company codes are defined that can be used in asset accounting?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEASSET')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many company codes are defined that can be used in asset accounting?
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_COMPANYCODEASSET

**This CDS view provides the prerequisites for answering the following business question: How many company codes are defined that can be used in asset accounting?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEASSET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ChartOfDepreciation` |  | |  |  | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
