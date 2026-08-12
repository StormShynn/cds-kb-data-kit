---
name: I_TH_CUSTOMERBRANCHCODE_2
description: "Customer Branch Code for Thailand"
app_component: FI-LOC-LO-TH
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODE_2')/$value
semantic_en: "Customer Branch Code for Thailand"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
