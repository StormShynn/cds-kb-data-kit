---
name: I_RETURNSREFUNDEXTENT
description: "Returnsrefundextent"
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSREFUNDEXTENT

**Returnsrefundextent**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReturnsRefundExtent` | ✓ | |  | `cast (returns_refund as returns_refund_extent)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ReturnsRefundExtentText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ReturnsRefundExtent'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ReturnsRefundExtent'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@EndUserText.label: 'Returns Refund Extent'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IRMRFNDEXTNT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true

define view I_ReturnsRefundExtent
  as select from msr_c_ret_refund

  association [0..*] to I_ReturnsRefundExtentText as _Text on $projection.ReturnsRefundExtent = _Text.ReturnsRefundExtent
{
      //Key
      @ObjectModel.text.association: '_Text'
  key cast (returns_refund as returns_refund_extent) as ReturnsRefundExtent,

      //Associations
      _Text
}
```
