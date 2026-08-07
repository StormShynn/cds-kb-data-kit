---
name: I_SLSORDWITHOUTCHARGETYPETXT
description: Slsordwithoutchargetypetxt
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
---
# I_SLSORDWITHOUTCHARGETYPETXT

**Slsordwithoutchargetypetxt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutChargeType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SlsOrdWthoutChrgTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as sd_sowoc_type_name preserving type )` |  |  |
| `_SalesOrderWithoutChargeType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderWithoutChargeType` | `I_SalesOrderWithoutChargeType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Sales Order Without Charge Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesOrderWithoutChargeType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SlsOrdWithoutChargeTypeTxt
  as select from I_SalesDocumentTypeText as Text
    inner join   I_SalesOrderWithoutChargeType    as SalesOrderWithoutChargeType on Text.SalesDocumentType = SalesOrderWithoutChargeType.SalesOrderWithoutChargeType

  association [0..1] to I_SalesOrderWithoutChargeType as _SalesOrderWithoutChargeType on $projection.SalesOrderWithoutChargeType = _SalesOrderWithoutChargeType.SalesOrderWithoutChargeType

{
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutChargeType'
      @ObjectModel.text.element: ['SlsOrdWthoutChrgTypeName']
  key SalesOrderWithoutChargeType.SalesOrderWithoutChargeType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as sd_sowoc_type_name preserving type ) as  SlsOrdWthoutChrgTypeName,

      _SalesOrderWithoutChargeType,
      Text._Language
}
```
