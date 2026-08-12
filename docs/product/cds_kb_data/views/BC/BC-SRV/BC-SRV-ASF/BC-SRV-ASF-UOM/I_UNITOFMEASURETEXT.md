---
name: I_UNITOFMEASURETEXT
description: "Unit of MeasureTEXT"
app_component: BC-SRV-ASF-UOM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_UNITOFMEASURETEXT

**Unit of MeasureTEXT**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-UOM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `UnitOfMeasure` | ✓ | |  | `msehi` | `UNIT(3)` | Unit of Measurement |
| `UnitOfMeasureLongName` |  | |  | `msehl` | `CHAR(30)` | Unit of Measurement Long Text with a 30-Character Maximum |
| `UnitOfMeasureName` |  | |  | `mseht` | `CHAR(10)` | Unit of Measurement Short Text with a 10-Character Maximum |
| `UnitOfMeasureTechnicalName` |  | |  | `mseh6` | `CHAR(6)` | External Technical Unit of Measurement (6-Character Format) |
| `UnitOfMeasure_E` |  | |  | `mseh3` | `CHAR(3)` | External Commercial Unit of Measurement (3-Character Format) |
| `UnitOfMeasureCommercialName` |  | |  | `mseh3` | `CHAR(3)` | External Commercial Unit of Measurement (3-Character Format) |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUNITOFMEASTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 2
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Unit of Measure Text'
@Search.searchable: true

@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'UnitOfMeasure'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]

@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true

define view I_UnitOfMeasureText 
  as select from t006a
   
    association [0..1] to I_UnitOfMeasure as _UnitOfMeasure
        on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure
    association [0..1] to I_Language as _Language
        on $projection.Language = _Language.Language 
             
 {
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    _Language,
    
    @Semantics.unitOfMeasure: true
    @ObjectModel.foreignKey.association: '_UnitOfMeasure'
    key msehi as UnitOfMeasure,
    _UnitOfMeasure,


    @Search.defaultSearchElement: true 
    @Search.fuzzinessThreshold: 0.8       
    @Semantics.text: true
    msehl as UnitOfMeasureLongName,

    @Semantics.text: true
    mseht as UnitOfMeasureName,

    @Semantics.text: true
    mseh6 as UnitOfMeasureTechnicalName,    
           
    mseh3 as UnitOfMeasure_E,       
    
    @Semantics.text: true
    mseh3 as UnitOfMeasureCommercialName
}
```
