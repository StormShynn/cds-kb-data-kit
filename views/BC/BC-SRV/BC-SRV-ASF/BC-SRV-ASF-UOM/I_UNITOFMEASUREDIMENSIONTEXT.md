---
name: I_UNITOFMEASUREDIMENSIONTEXT
description: Unit of MeasureDIMENSIONTEXT
app_component: BC-SRV-ASF-UOM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - text-view
  - unit-of-measure
  - text
  - component:BC-SRV-ASF-UOM
  - lob:Basis Components
---
# I_UNITOFMEASUREDIMENSIONTEXT

**Unit of MeasureDIMENSIONTEXT**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-UOM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `UnitOfMeasureDimension` | ✓ | |  | `dimid` |
| `UnitOfMeasureDimensionName` |  | |  | `txdim` |
| `_UnitOfMeasureDimension` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UnitOfMeasureDimension` | `I_UnitOfMeasureDimension` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUNITOFMEADIMTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Unit of Measure Dimension Text'

@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'UnitOfMeasureDimension'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]

@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true

define view I_UnitOfMeasureDimensionText 
  as select from t006t 

  association[1..1] to I_UnitOfMeasureDimension as _UnitOfMeasureDimension
    on $projection.UnitOfMeasureDimension = _UnitOfMeasureDimension.UnitOfMeasureDimension
  association[0..1] to I_Language as _Language 
    on $projection.Language = _Language.Language

{
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    _Language,
    
    @ObjectModel.foreignKey.association: '_UnitOfMeasureDimension'
    key dimid as UnitOfMeasureDimension,
    _UnitOfMeasureDimension,

    @Semantics.text: true
    txdim as UnitOfMeasureDimensionName
    
}
```
