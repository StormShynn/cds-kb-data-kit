---
name: D_ARDISPUTECASECRTEDSPUTDITMP
description: "D Ardisputecasecrtedsputditmp"
semantic_vi: "View D_ARDISPUTECASECRTEDSPUTDITMP hiển thị dữ liệu chi tiết tài khoản liên quan đến tranh chấp, có thể được sử dụng khi phân tích hoặc giải quyết tranh chấp tài chính trong một công ty."
keywords:
  - "dispute"
  - "accounting document item"
  - "financial dispute"
  - "tài khoản tranh chấp"
  - "chi tiết tài khoản"
  - "tranh chấp tài chính"
semantic_en: "The D_ARDISPUTECASECRTEDSPUTDITMP view exposes accounting document item data related to disputes, which can be used when analyzing or resolving financial disputes within a company."
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECRTEDSPUTDITMP

**D Ardisputecasecrtedsputditmp**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `AccountingDocument` |  | |  | `farp_belnr_d` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `AccountingDocumentItem` |  | |  | `farp_buzei` |  |  |
| `LogicalSystem` |  | |  | `logsys` |  |  |
| `_ChildToParent` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Create Parameter Disputed Items'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ARDisputeCaseCrteDsputdItmP
{
  CompanyCode            : bukrs;
  AccountingDocument     : farp_belnr_d;
  FiscalYear             : gjahr;
  AccountingDocumentItem : farp_buzei;
  LogicalSystem          : logsys;

  _ChildToParent         : association to parent D_ARDisputeCaseCreateP;
}
```
