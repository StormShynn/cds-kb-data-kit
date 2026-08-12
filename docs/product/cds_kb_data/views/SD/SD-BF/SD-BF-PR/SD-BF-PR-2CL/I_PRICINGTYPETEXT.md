---
name: I_PRICINGTYPETEXT
description: "Pricingtypetext"
app_component: SD-BF-PR-2CL
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
  - SD-BF
  - SD-BF-PR
  - interface-view
  - text-view
  - pricing
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PRICINGTYPETEXT

**Pricingtypetext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `PricingType` | ✓ | |  | `cast ( SUBSTRING( domvalue_l, 1, 1) as knprs preserving type)` |  |  |
| `PricingTypeDesc` |  | |  | `cast( ddtext as knprs_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PricingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PricingType` | `I_PricingType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRICINGTYPETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PricingType'
@ObjectModel.usageType.dataClass: #META
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Pricing Type - Text'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
define view I_PricingTypeText
  as select from dd07t

  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
  association [1..1] to I_PricingType as _PricingType on $projection.PricingType = _PricingType.PricingType
{

      @Semantics.language
  key cast( ddlanguage as spras preserving type)                    as Language,


      @ObjectModel.foreignKey.association: '_PricingType'
  key cast ( SUBSTRING( domvalue_l, 1, 1) as knprs preserving type) as PricingType,


      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      cast( ddtext as knprs_text preserving type )        as PricingTypeDesc,

      //Association
      _PricingType,
      _Language
}
where
      domname  = 'KNPRS'
  and as4local = 'A'
```
