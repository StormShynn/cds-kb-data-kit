---
name: I_UNITEDSTATESTAXCATEGORY
description: "Unitedstatestaxcategory"
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - tax
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_UNITEDSTATESTAXCATEGORY

**Unitedstatestaxcategory**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UnitedStatesTaxCategory` | ✓ | |  | `cast(domvalue_l as txind_007a )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_UnitedStatesTaxCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIUSTAXCAT'
@EndUserText.label: 'United States Tax Category'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'UnitedStatesTaxCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_UnitedStatesTaxCategory
  as select from dd07l

  association [0..*] to I_UnitedStatesTaxCategoryText as _Text on $projection.UnitedStatesTaxCategory = _Text.UnitedStatesTaxCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as txind_007a ) as UnitedStatesTaxCategory,

      _Text
}
where
      dd07l.domname  = 'TXIND_007A'
  and dd07l.as4local = 'A';
```
