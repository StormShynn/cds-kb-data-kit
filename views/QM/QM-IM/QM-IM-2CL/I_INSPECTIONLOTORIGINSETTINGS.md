---
name: I_INSPECTIONLOTORIGINSETTINGS
description: Inspectionlotoriginsettings
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTORIGINSETTINGS

**Inspectionlotoriginsettings**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionLotOrigin` | ✓ | |  | `cast( tq33.herkunft as vdm_qherk preserving type )` |
| `BillOfOperationsType` |  | |  | `cast( tq33.plnty as vdm_plnty preserving type )` |
| `BillOfOperationsStatus` |  | |  | `cast( tq33.plnst as vdm_qplnst preserving type )` |
| `_InspectionLotOrigin` | | ✓ | | |
| `_BillOfOperationsType` | | ✓ | | |
| `_BillOfOperationsStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLotOrigin` | `I_InspectionLotOrigin` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_BillOfOperationsStatus` | `I_BillOfOperationsStatus` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settings for Inspection Lot Origin'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionLotOrigin'
@Analytics.technicalName: 'IINSPLOTORGNSTGS'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A 
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspectionLotOriginSettings as select from tq33 

    association [1..1] to I_InspectionLotOrigin         as _InspectionLotOrigin         on  $projection.InspectionLotOrigin = _InspectionLotOrigin.InspectionLotOrigin
    association [0..1] to I_BillOfOperationsType        as _BillOfOperationsType        on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
    association [0..1] to I_BillOfOperationsStatus      as _BillOfOperationsStatus      on  $projection.BillOfOperationsStatus = _BillOfOperationsStatus.BillOfOperationsStatus
    
{
       @ObjectModel.foreignKey.association: '_InspectionLotOrigin'
   key cast( tq33.herkunft as vdm_qherk preserving type )              as InspectionLotOrigin,
   
       @ObjectModel.foreignKey.association: '_BillOfOperationsType'
       cast( tq33.plnty as vdm_plnty preserving type )                 as BillOfOperationsType,
       @ObjectModel.foreignKey.association: '_BillOfOperationsStatus'
       cast( tq33.plnst as vdm_qplnst preserving type )                as BillOfOperationsStatus,
       
   /* Associations */
   _InspectionLotOrigin,
   _BillOfOperationsType,
   _BillOfOperationsStatus
    
}
```
