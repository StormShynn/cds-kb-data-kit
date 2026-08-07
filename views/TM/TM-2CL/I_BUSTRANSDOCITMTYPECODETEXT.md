---
name: I_BUSTRANSDOCITMTYPECODETEXT
description: "Bustransdocitmtypecodetext"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_BUSTRANSDOCITMTYPECODETEXT

**Bustransdocitmtypecodetext**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessTransacDocItmTypeCode` | ✓ | |  | `cast ( btditm_tco150 as njit_btd_item_type_code preserving type )` |  |  |
| `BizTransacDocumentItemTypeName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_BusTransDocItemTypeCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BTD Item Type Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'BusinessTransacDocItmTypeCode'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_BusTransDocItmTypeCodeText
  as select from /scmtms/c_btditt
  association        to parent I_BusTransDocItemTypeCode as _BusTransDocItemTypeCode on $projection.BusinessTransacDocItmTypeCode = _BusTransDocItemTypeCode.BusinessTransacDocItmTypeCode
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                                             as Language,
      @ObjectModel.foreignKey.association: '_BusTransDocItemTypeCode'
      @ObjectModel.text.element: ['BizTransacDocumentItemTypeName']
  key cast ( btditm_tco150 as njit_btd_item_type_code preserving type ) as BusinessTransacDocItmTypeCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      description                                                       as BizTransacDocumentItemTypeName,
      _BusTransDocItemTypeCode,
      _Language
}
```
