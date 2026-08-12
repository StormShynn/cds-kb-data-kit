---
name: I_UNITOFMEASUREISOCODETEXT
description: "Unit of MeasureISOCODETEXT"
app_component: BC-SRV-ASF-UOM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
# I_UNITOFMEASUREISOCODETEXT

**Unit of MeasureISOCODETEXT**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-UOM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `UnitOfMeasureISOCode` | ✓ | |  | `isocode` | `CHAR(3)` | ISO Code for Unit of Measurement |
| `UnitOfMeasureISOCodeName` |  | |  | `isotxt` | `CHAR(25)` | ISO Code Text |
| `_ISOCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ISOCode` | `I_UnitOfMeasureISOCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUOMISOCODETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Unit of Measure ISO Code Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'UnitOfMeasureISOCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]
                                     
@Analytics.internalName: #LOCAL
@Analytics: {dataExtraction.enabled: true}

define view I_UnitOfMeasureISOCodeText as select from t006j

  association[1..1] to I_UnitOfMeasureISOCode as _ISOCode
   on $projection.UnitOfMeasureISOCode = _ISOCode.UnitOfMeasureISOCode
  association[0..1] to I_Language as _Language
    on $projection.Language = _Language.Language  
{
 @Semantics.language: true
 @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,
  _Language,
  
 @ObjectModel.foreignKey.association: '_ISOCode'  
  key t006j.isocode as UnitOfMeasureISOCode,

 @Semantics.text: true  
  t006j.isotxt as UnitOfMeasureISOCodeName,
  
  _ISOCode
}
```
