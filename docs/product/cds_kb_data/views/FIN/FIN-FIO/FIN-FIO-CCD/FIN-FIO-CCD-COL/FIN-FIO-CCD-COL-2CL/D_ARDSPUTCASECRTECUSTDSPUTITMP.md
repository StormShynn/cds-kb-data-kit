---
name: D_ARDSPUTCASECRTECUSTDSPUTITMP
description: "D Ardsputcasecrtecustdsputitmp"
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDSPUTCASECRTECUSTDSPUTITMP

**D Ardsputcasecrtecustdsputitmp**

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
@EndUserText.label: 'Create Parameter Customer Disputed Items'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ARDsputCaseCrteCustDsputItmP
{
  CompanyCode            : bukrs;
  AccountingDocument     : farp_belnr_d;
  FiscalYear             : gjahr;
  AccountingDocumentItem : farp_buzei;
  LogicalSystem          : logsys;

  _ChildToParent : association to parent D_ARDisputeCaseCreateP;
}
```
