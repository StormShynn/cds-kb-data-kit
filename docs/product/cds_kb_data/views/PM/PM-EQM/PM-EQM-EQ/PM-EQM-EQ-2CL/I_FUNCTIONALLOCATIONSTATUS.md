---
name: I_FUNCTIONALLOCATIONSTATUS
description: "Functional Location Status"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value
semantic_en: "Functional Location Status"
semantic_vi: "Functional Location Status — CDS view giao diện dựa trên P_FuncnlLocStatusAggrgn."
keywords:
  - "functional"
  - "location"
  - "status"
  - "maint"
  - "object"
  - "internal"
  - "funcnl"
  - "marked"
  - "deletion"
  - "deleted"
  - "active"
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
---
# I_FUNCTIONALLOCATIONSTATUS

**Functional Location Status**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` | ✓ | | `_FuncnlLocStatus` | `FunctionalLocation` | `CHAR(30)` | Functional Location |
| `MaintObjectInternalID` |  | | `_FuncnlLocStatus` | `MaintObjectInternalID` | `CHAR(22)` | Object Number |
| `FuncnlLocIsMarkedForDeletion` |  | |  | `cast(_FuncnlLocStatus.FuncnlLocIsMarkedForDeletion as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `FuncnlLocIsDeleted` |  | |  | `cast(_FuncnlLocStatus.FuncnlLocIsDeleted as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `FunctionalLocationIsActive` |  | |  | `cast(_FuncnlLocStatus.FunctionalLocationIsActive as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `FunctionalLocationIsCreated` |  | |  | `cast(_FuncnlLocStatus.FunctionalLocationIsCreated as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `FuncnlLocIsDeactivated` |  | |  | `cast(_FuncnlLocStatus.FuncnlLocIsDeactivated as xfeld preserving type)` | `CHAR(1)` | Checkbox |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@EndUserText.label: 'Functional Location Status'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view entity I_FunctionalLocationStatus
  as select from P_FuncnlLocStatusAggrgn as _FuncnlLocStatus
{
  key _FuncnlLocStatus.FunctionalLocation,
      _FuncnlLocStatus.MaintObjectInternalID,
      cast(_FuncnlLocStatus.FuncnlLocIsMarkedForDeletion as xfeld preserving type) as FuncnlLocIsMarkedForDeletion,
      cast(_FuncnlLocStatus.FuncnlLocIsDeleted as xfeld preserving type)           as FuncnlLocIsDeleted,
      cast(_FuncnlLocStatus.FunctionalLocationIsActive as xfeld preserving type)   as FunctionalLocationIsActive,
      cast(_FuncnlLocStatus.FunctionalLocationIsCreated as xfeld preserving type)  as FunctionalLocationIsCreated,   //Added : 2308 
      cast(_FuncnlLocStatus.FuncnlLocIsDeactivated as xfeld preserving type)       as FuncnlLocIsDeactivated
};
```
