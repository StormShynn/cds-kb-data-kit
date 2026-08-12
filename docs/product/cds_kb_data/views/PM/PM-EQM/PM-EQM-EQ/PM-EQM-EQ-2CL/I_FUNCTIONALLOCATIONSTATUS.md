---
name: I_FUNCTIONALLOCATIONSTATUS
description: "Functional Location Status"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
