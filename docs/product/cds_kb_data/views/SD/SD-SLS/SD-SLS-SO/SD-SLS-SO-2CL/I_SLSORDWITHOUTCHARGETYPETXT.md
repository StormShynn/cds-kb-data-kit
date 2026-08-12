---
name: I_SLSORDWITHOUTCHARGETYPETXT
description: "Slsordwithoutchargetypetxt"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
