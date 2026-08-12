---
name: I_INSPECTIONLOTTYPE
description: "Inspectionlottype"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotType` | ✓ | |  | `art` |  |  |
| `BillOfOperationsUsage` |  | |  | `pplverw` |  |  |
| `SelectedCodeSet` |  | |  | `vemenge` |  |  |
| `SelectedCodeSetHasSamePlant` |  | |  | `kzvewerks` |  |  |
| `_Text` | | ✓ | | | | |
| `_SelectedCodeSetHasSamePlant` | | ✓ | | | | |

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
