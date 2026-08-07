---
name: I_RETURNREASONTEXT
description: Returnreasontext
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
  - text-view
  - text
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNREASONTEXT

**Returnreasontext**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReturnReason` | ✓ | |  | `ret_reason` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ReturnReasonName` |  | |  | `bezei` |  |  |
| `_ReturnReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnReason` | `I_ReturnReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ReturnReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Return Reason - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IRMRETREASONT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ReturnReasonText
  as select from msr_c_ret_reasot

  association [0..1] to I_ReturnReason as _ReturnReason on $projection.ReturnReason = _ReturnReason.ReturnReason
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{
      //Key
      @ObjectModel.foreignKey.association: '_ReturnReason'
  key ret_reason as ReturnReason,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras      as Language,

      //Name
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      bezei      as ReturnReasonName,

      //Associations
      _ReturnReason,
      _Language
}
```
