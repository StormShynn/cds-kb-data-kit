---
name: I_LOADINGPOINTTEXT
description: Loadingpointtext
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_LOADINGPOINTTEXT

**Loadingpointtext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ShippingPoint` | ✓ | |  | `vstel` |
| `LoadingPoint` | ✓ | |  | `lstel` |
| `Language` | ✓ | |  | `spras` |
| `LoadingPointName` |  | |  | `vtext` |
| `_LoadingPoint` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_ShippingPoint` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoadingPoint` | `I_LoadingPoint` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'LoadingPointText'
@ObjectModel.representativeKey: 'LoadingPoint'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Loading Point - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AbapCatalog.sqlViewName: 'ILELOADINGPOINTT'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_LoadingPointText
as select from
tvlat
association [0..1] to I_LoadingPoint as _LoadingPoint on $projection.ShippingPoint = _LoadingPoint.ShippingPoint and $projection.LoadingPoint = _LoadingPoint.LoadingPoint
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association [0..1] to I_ShippingPoint as _ShippingPoint on $projection.ShippingPoint = _ShippingPoint.ShippingPoint
{
    @ObjectModel.foreignKey.association: '_ShippingPoint'
    key vstel as ShippingPoint,
    @ObjectModel.foreignKey.association: '_LoadingPoint'
    key lstel as LoadingPoint,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Semantics.text: true
    vtext as LoadingPointName,

    _LoadingPoint,
    _Language,

    _ShippingPoint
};
```
