---
name: I_INSPECTIONLOTSTATUS1
description: "Inspectionlotstatus 1"
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
  - status
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTSTATUS1

**Inspectionlotstatus 1**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `StatusObject` |  | |  |  |  |  |
| `_InspectionLot` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTSTS1'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Lot Status'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
 [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'StatusCode'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
}

define view I_InspectionLotStatus1
  as select from           I_StatusObjectActiveStatus
    left outer to one join I_InspectionLot on I_InspectionLot.StatusObject = I_StatusObjectActiveStatus.StatusObject

  association [1] to I_InspectionLot as _InspectionLot on $projection.InspectionLot = _InspectionLot.InspectionLot

{

      @ObjectModel.foreignKey.association: '_InspectionLot'
  key I_InspectionLot.InspectionLot,
  key I_StatusObjectActiveStatus.StatusCode,
      I_StatusObjectActiveStatus.StatusObject,

      I_StatusObjectActiveStatus._StatusObject,
      _InspectionLot
}
where
  I_StatusObjectActiveStatus.StatusObject like 'QL%'
```
