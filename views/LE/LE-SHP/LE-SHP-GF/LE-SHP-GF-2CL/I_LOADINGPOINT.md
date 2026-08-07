---
name: I_LOADINGPOINT
description: Loadingpoint
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
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_LOADINGPOINT

**Loadingpoint**

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
| `_Text` | | ✓ | | |
| `_ShippingPoint` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoadingPointText` | [0..*] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'LoadingPoint'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Loading Point'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck:#CHECK
@AbapCatalog.sqlViewName: 'ILELOADINGPOINT'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'LoadingPoint'

define view I_LoadingPoint
as select from
tvla
association [0..*] to I_LoadingPointText as _Text on $projection.LoadingPoint = _Text.LoadingPoint and $projection.ShippingPoint = _Text.ShippingPoint
association [0..1] to I_ShippingPoint as _ShippingPoint on $projection.ShippingPoint = _ShippingPoint.ShippingPoint
{
    @ObjectModel.foreignKey.association: '_ShippingPoint'
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
    key vstel as ShippingPoint,
    @ObjectModel.text.association: '_Text'
    key lstel as LoadingPoint,

    _Text,

    _ShippingPoint
};
```
