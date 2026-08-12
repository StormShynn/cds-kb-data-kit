---
name: I_RETURNSREFUNDEXTENTTEXT
description: "Returnsrefundextenttext"
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - text-view
  - text
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSREFUNDEXTENTTEXT

**Returnsrefundextenttext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `ReturnsRefundExtentDesc` |  | |  | `cast (bezei as returns_refund_extent_desc)` |  |  |
| `_ReturnsRefundExtent` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnsRefundExtent` | `I_ReturnsRefundExtent` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ReturnsRefundExtent'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Returns Refund Extent - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IRMRFNDEXTNTT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ReturnsRefundExtentText
  as select from msr_c_ret_refunt

  association [0..1] to I_ReturnsRefundExtent as _ReturnsRefundExtent on $projection.ReturnsRefundExtent = _ReturnsRefundExtent.ReturnsRefundExtent
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      //Key
      @ObjectModel.foreignKey.association: '_ReturnsRefundExtent'
  key cast (returns_refund as returns_refund_extent) as ReturnsRefundExtent,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                          as Language,

      //Name
      @Semantics.text: true
      @Search:{
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      cast (bezei as returns_refund_extent_desc)     as ReturnsRefundExtentDesc,

      //Associations
      _ReturnsRefundExtent,
      _Language
}
```
