---
name: I_TH_CUSTOMERBRANCHCODE_2
description: Customer Branch Code for Thailand
app_component: FI-LOC-LO-TH
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODE_2')/$value
semantic_en: Customer Branch Code for Thailand
tags:
  - FI
  - bo:businesspartner
  - component:FI-LOC-LO-TH
  - customer
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-TH
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_TH_CUSTOMERBRANCHCODE_2

**Customer Branch Code for Thailand**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-TH` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `BranchCode` |  | |  |  | `CHAR(5)` | Branch Code |
| `IsDefaultValue` |  | |  |  | `CHAR(1)` | Default Branch Code |
| `AddressNumber` |  | |  |  | `CHAR(10)` | Address Number |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
