---
name: I_INSPECTIONLOTTYPE
description: Inspectionlottype
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
# I_INSPECTIONLOTTYPE

**Inspectionlottype**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionLotType` | ✓ | |  | `art` |
| `BillOfOperationsUsage` |  | |  | `pplverw` |
| `SelectedCodeSet` |  | |  | `vemenge` |
| `SelectedCodeSetHasSamePlant` |  | |  | `kzvewerks` |
| `_Text` | | ✓ | | |
| `_SelectedCodeSetHasSamePlant` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspectionLotTypeText` | [0..*] |
| `_SelectedCodeSetHasSamePlant` | `I_Indicator` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTTYPE'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Type'
@ObjectModel.compositionRoot: true
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #A }
@ObjectModel.representativeKey: 'InspectionLotType'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'InspectionLotType'
define view I_InspectionLotType as select from tq30 

   association [0..*] to I_InspectionLotTypeText as _Text 
     on $projection.InspectionLotType = _Text.InspectionLotType
     
   association [0..1] to I_Indicator as _SelectedCodeSetHasSamePlant
     on $projection.SelectedCodeSetHasSamePlant = _SelectedCodeSetHasSamePlant.IndicatorValue
     
{ 
  @ObjectModel.text.association: '_Text'
  @Search : {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  key tq30.art as InspectionLotType,
    @Search : {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
      tq30.pplverw as BillOfOperationsUsage, 
//  tq30.bilds, 
      tq30.vemenge     as SelectedCodeSet, 
//  tq30.veversion, 
//  tq30.vedatum, 
      @ObjectModel.foreignKey.association: '_SelectedCodeSetHasSamePlant'
      tq30.kzvewerks   as SelectedCodeSetHasSamePlant, 
//  tq30.kzpzdr, 
//  tq30.kzpadr, 
//  tq30.kzmessage, 
//  tq30.stsma, 
//  tq30.erfsicht, 
//  tq30.steus, 
//  tq30.qmart, 
//  tq30.vornr, 
//  tq30.prart, 
//  tq30.einemeld, 
//  tq30.auart,

   // Associations
   _Text,
   _SelectedCodeSetHasSamePlant
    
}
```
