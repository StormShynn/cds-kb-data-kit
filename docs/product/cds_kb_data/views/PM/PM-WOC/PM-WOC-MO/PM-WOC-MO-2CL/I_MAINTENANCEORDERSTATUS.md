---
name: I_MAINTENANCEORDERSTATUS
description: "Maintenance Order Status"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value
semantic_en: "Maintenance Order Status"
semantic_vi: "Maintenance Order Status — CDS view giao diện dựa trên P_MaintenanceOrderStatus."
keywords:
  - "maintenance"
  - "order"
  - "status"
  - "internal"
  - "created"
  - "released"
  - "maint"
  - "main"
  - "work"
  - "completed"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTENANCEORDERSTATUS

**Maintenance Order Status**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | | `_MaintOrderStatus` | `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceOrderInternalID` |  | | `_MaintOrderStatus` | `MaintenanceOrderInternalID` | `CHAR(22)` | Object Number |
| `MaintenanceOrderIsCreated` |  | |  | `cast(_MaintOrderStatus.MaintenanceOrderIsCreated as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `MaintenanceOrderIsReleased` |  | |  | `cast(_MaintOrderStatus.MaintenanceOrderIsReleased as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `MaintOrderMainWorkIsCompleted` |  | |  | `cast(_MaintOrderStatus.MaintOrderMainWorkIsCompleted as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `MaintOrdIsTechlyCmpltd` |  | |  | `cast(_MaintOrderStatus.MaintOrdIsTechlyCmpltd as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `MaintOrderIsBusinessCompleted` |  | |  | `cast(_MaintOrderStatus.MaintOrderIsBusinessCompleted as xfeld preserving type)` | `CHAR(1)` | Checkbox |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Maintenance Order Status'
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@ObjectModel.sapObjectNodeType.name:'MaintenanceOrder'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                    #EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
define view entity I_MaintenanceOrderStatus
  as select from P_MaintenanceOrderStatus as _MaintOrderStatus
{
  key _MaintOrderStatus.MaintenanceOrder,
      _MaintOrderStatus.MaintenanceOrderInternalID,
      cast(_MaintOrderStatus.MaintenanceOrderIsCreated as xfeld preserving type)     as MaintenanceOrderIsCreated,
      cast(_MaintOrderStatus.MaintenanceOrderIsReleased as xfeld preserving type)    as MaintenanceOrderIsReleased,
      cast(_MaintOrderStatus.MaintOrderMainWorkIsCompleted as xfeld preserving type) as MaintOrderMainWorkIsCompleted,
      cast(_MaintOrderStatus.MaintOrdIsTechlyCmpltd as xfeld preserving type)        as MaintOrdIsTechlyCmpltd,
      cast(_MaintOrderStatus.MaintOrderIsBusinessCompleted as xfeld preserving type) as MaintOrderIsBusinessCompleted
};
```
