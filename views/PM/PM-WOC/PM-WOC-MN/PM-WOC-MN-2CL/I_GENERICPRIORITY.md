---
name: I_GENERICPRIORITY
description: Genericpriority
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_GENERICPRIORITY

**Genericpriority**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GenericPriorityType` | ✓ | |  | `artpr` |  |  |
| `PriorityCode` | ✓ | |  | `priok` |  |  |
| `GenericStartDateShiftFactor` |  | |  | `tagbn` |  |  |
| `GenericStrtDateShiftFactorUnit` |  | |  | `ehtbg` |  |  |
| `GenericEndDateShiftFactor` |  | |  | `tagen` |  |  |
| `GenericEndDateShiftFactorUnit` |  | |  | `ehten` |  |  |
| `GenericPriorityColorCode` |  | |  | `priocc` |  |  |
| `LtstAcceptableCompltnDteFactor` |  | |  | `lacd_unit` |  |  |
| `LtstAcceptableCompltnDteUoM` |  | |  | `lacd_uom` |  |  |
| `_GenericPriorityType` | | ✓ | | | | |
| `_GenericPriorityText` | | ✓ | | | | |
| `_GenericStrtDateShiftFctrUnit` | | ✓ | | | | |
| `_GenericEndDateShiftFactorUnit` | | ✓ | | | | |
| `_LtstAcceptableCompltnDteUoM` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GenericPriorityType` | `I_GenericPriorityType` | [0..1] |
| `_GenericPriorityText` | `I_GenericPriorityText` | [0..*] |
| `_GenericStrtDateShiftFctrUnit` | `I_UnitOfMeasure` | [0..1] |
| `_GenericEndDateShiftFactorUnit` | `I_UnitOfMeasure` | [0..1] |
| `_LtstAcceptableCompltnDteUoM` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Generic Priority'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@ObjectModel: {
  representativeKey: 'PriorityCode',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S } }
@Analytics.technicalName: 'IGENERICPRIORITY'

@Metadata.ignorePropagatedAnnotations
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_GenericPriority
  as select from t356
  association [0..1] to I_GenericPriorityType as _GenericPriorityType           on  _GenericPriorityType.GenericPriorityType = $projection.GenericPriorityType

  association [0..*] to I_GenericPriorityText as _GenericPriorityText           on  _GenericPriorityText.PriorityCode        = $projection.PriorityCode
                                                                                and _GenericPriorityText.GenericPriorityType = $projection.GenericPriorityType

  association [0..1] to I_UnitOfMeasure       as _GenericStrtDateShiftFctrUnit  on  _GenericStrtDateShiftFctrUnit.UnitOfMeasure = $projection.GenericStrtDateShiftFactorUnit

  association [0..1] to I_UnitOfMeasure       as _GenericEndDateShiftFactorUnit on  _GenericEndDateShiftFactorUnit.UnitOfMeasure = $projection.GenericEndDateShiftFactorUnit
  
  association [0..1] to I_UnitOfMeasure       as _LtstAcceptableCompltnDteUoM   on  _LtstAcceptableCompltnDteUoM.UnitOfMeasure = $projection.LtstAcceptableCompltnDteUoM
{
      @ObjectModel.foreignKey.association: '_GenericPriorityType'
  key t356.artpr  as GenericPriorityType,

      @ObjectModel.text.association: '_GenericPriorityText'
  key t356.priok  as PriorityCode,

      t356.tagbn  as GenericStartDateShiftFactor,

      @ObjectModel.foreignKey.association: '_GenericStrtDateShiftFctrUnit'
      t356.ehtbg  as GenericStrtDateShiftFactorUnit,

      t356.tagen  as GenericEndDateShiftFactor,

      @ObjectModel.foreignKey.association: '_GenericEndDateShiftFactorUnit'
      t356.ehten  as GenericEndDateShiftFactorUnit,

      t356.priocc as GenericPriorityColorCode,
      
      t356.lacd_unit as LtstAcceptableCompltnDteFactor,
      
      @ObjectModel.foreignKey.association: '_LtstAcceptableCompltnDteUoM'
      t356.lacd_uom as LtstAcceptableCompltnDteUoM, 

      // Associations
      _GenericPriorityType,
      _GenericPriorityText,
      _GenericStrtDateShiftFctrUnit,
      _GenericEndDateShiftFactorUnit,
      _LtstAcceptableCompltnDteUoM
}
```
