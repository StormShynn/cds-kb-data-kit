---
name: I_UNITOFMEASUREISOCODE
description: "Unit of MeasureISOCODE"
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
  - unit-of-measure
  - component:BC-SRV-ASF-UOM
  - lob:Basis Components
---
# I_UNITOFMEASUREISOCODE

**Unit of MeasureISOCODE**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-UOM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UnitOfMeasureISOCode` | ✓ | |  | `isocode` | `CHAR(3)` | ISO Code for Unit of Measurement |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_UnitOfMeasureISOCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUOMISOCODE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Unit of Measure ISO Code' 

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'UnitOfMeasureISOCode'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]

@Analytics.internalName: #LOCAL
@Analytics: {dataExtraction.enabled: true}

define view I_UnitOfMeasureISOCode as select from t006i 

  association [0..*] to I_UnitOfMeasureISOCodeText as _Text 
    on $projection.UnitOfMeasureISOCode = _Text.UnitOfMeasureISOCode
{
@ObjectModel.text.association: '_Text'
  key t006i.isocode as UnitOfMeasureISOCode,
  
  _Text
}
```
