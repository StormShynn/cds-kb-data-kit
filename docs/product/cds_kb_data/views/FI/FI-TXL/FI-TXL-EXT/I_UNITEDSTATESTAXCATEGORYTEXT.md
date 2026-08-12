---
name: I_UNITEDSTATESTAXCATEGORYTEXT
description: "Unitedstatestaxcategorytext"
app_component: FI-TXL-EXT
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
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - text-view
  - tax
  - text
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_UNITEDSTATESTAXCATEGORYTEXT

**Unitedstatestaxcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT` |
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
| `UnitedStatesTaxCategory` | ✓ | |  | `cast(domvalue_l as txind_007a)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` |  |  |
| `UnitedStatesTaxCategoryName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIUSTAXCATT'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'UnitedStatesTaxCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'United States Tax Category - Text'
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_UnitedStatesTaxCategoryText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast(domvalue_l as txind_007a) as UnitedStatesTaxCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras)      as Language,

      @Semantics.text
      ddtext                         as UnitedStatesTaxCategoryName,

      _Language

}
where
      domname  = 'TXIND_007A'
  and as4local = 'A';
```
