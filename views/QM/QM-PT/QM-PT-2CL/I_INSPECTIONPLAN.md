---
name: I_INSPECTIONPLAN
description: Inspectionplan
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONPLAN

**Inspectionplan**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionPlanGroup` | ✓ | |  | `BillOfOperationsGroup` |  |  |
| `InspectionPlan` | ✓ | |  | `BillOfOperationsVariant` |  |  |
| `BillOfOperationsType` |  | |  |  |  |  |
| `HasChangeNumber` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Plan'
@VDM.viewType: #BASIC
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'InspectionPlan'
@Analytics.technicalName: 'IINSPPL'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION ]
define view entity I_InspectionPlan as select from I_BillOfOperations 
  association [1..1] to I_BillOfOperationsType        as _BillOfOperationsType        on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
association [1..1] to I_BillOfOperationsGroup       as _BillOfOperationsGroup       on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                      and $projection.InspectionPlanGroup = _BillOfOperationsGroup.BillOfOperationsGroup
{
  @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key BillOfOperationsGroup   as InspectionPlanGroup,
  key BillOfOperationsVariant as InspectionPlan,
  @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  BillOfOperationsType,
  HasChangeNumber,
  //HasParameterEffectivity,
  
  //LastUsageDate,  
  //NumberOfUsages,  
  
  //BillOfOperationsVersionType,
  //BillOfOperationsSubtype,

  IsMarkedForDeletion,
        
  LastChangeDate,
  LastChangeTime,
  LastChangedByUser,

  //Associations
  _BillOfOperationsGroup,
  _BillOfOperationsType
}
where BillOfOperationsType = 'Q'
```
