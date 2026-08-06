---
name: I_UNITEDSTATESTAXCATEGORYTEXT
description: Unitedstatestaxcategorytext
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `UnitedStatesTaxCategory` | `cast(domvalue_l as txind_007a)` |
| key `Language` | `cast(ddlanguage as spras)` |
| `UnitedStatesTaxCategoryName` | `ddtext` |
| `_Language` | *Association* |

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
