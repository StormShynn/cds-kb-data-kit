---
name: I_INSPECTIONLOTORIGINTYPE
description: "Inspectionlotorigintype"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_INSPECTIONLOTORIGINTYPE

**Inspectionlotorigintype**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotOrigin` | ✓ | |  | `cast( tq32.herkunft as vdm_qherk preserving type )` |  |  |
| `InspectionLotOriginVariant` | ✓ | |  | `variante` |  |  |
| `InspectionLotType` |  | |  | `art` |  |  |
| `_InspectionLotOrigin` | | ✓ | | | | |
| `_InspectionLotType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLotOrigin` | `I_InspectionLotOrigin` | [1..1] |
| `_InspectionLotType` | `I_InspectionLotType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTORIGNTYP'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Assignment of Inspection Type to Origin'
@Analytics.dataCategory: #DIMENSION
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionLotOriginVariant'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A 
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionLotOriginType
   as select from tq32

     association [1..1] to I_InspectionLotOrigin as _InspectionLotOrigin
        on $projection.InspectionLotOrigin = _InspectionLotOrigin.InspectionLotOrigin

     association [1..1] to I_InspectionLotType as _InspectionLotType 
        on $projection.InspectionLotType = _InspectionLotType.InspectionLotType
{
@ObjectModel.foreignKey.association: '_InspectionLotOrigin'
  key cast( tq32.herkunft as vdm_qherk preserving type ) as InspectionLotOrigin, 
  key tq32.variante as InspectionLotOriginVariant, 

@ObjectModel.foreignKey.association: '_InspectionLotType'
      tq32.art      as InspectionLotType,
      
      _InspectionLotOrigin,
      _InspectionLotType 
}
```
