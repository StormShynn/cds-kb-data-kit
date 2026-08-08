---
name: I_INSURCONTRLIFECYCLESTATUST
description: "Life Cycle Sts for Contr in Plcy - Txt"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRLIFECYCLESTATUST')/$value
semantic_en: "Life Cycle Sts for Contr in Plcy - Txt"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
  - metadata-only
---
# I_INSURCONTRLIFECYCLESTATUST

**Life Cycle Sts for Contr in Plcy - Txt**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRLIFECYCLESTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `InsurContrLifeCycSts` |  | |  |  | `NUMC(3)` | Active/Inactive Status of Contract |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `InsurContrLifeCycStsName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
