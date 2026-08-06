---
name: D_CUSTRETCRTDLVITMFRMSLSDOCP
description: D Custretcrtdlvitmfrmslsdocp
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_CUSTRETCRTDLVITMFRMSLSDOCP

**D Custretcrtdlvitmfrmslsdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DeliverySelectionDate` | `lfdat_a` |

## Source Code

```abap
@EndUserText.label: 'CustRetDel Crt Dlv Itm Frm Sls Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetCrtDlvItmFrmSlsDocP{
  DeliverySelectionDate    : lfdat_a;
  _ReferenceSDDocumentItem : association [1..*] to D_CustRetDlvCrteFrmSlsDocItemP on 1 = 0;
}
```
