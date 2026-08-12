---
name: I_RACONTRACTCATEGORYTEXT
description: "Racontractcategorytext"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - text-view
  - contract
  - text
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RACONTRACTCATEGORYTEXT

**Racontractcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` |  |  |
| `RevnAcctgContractCategory` | ✓ | |  | `contract_cat` |  |  |
| `RevnAcctgContrCategoryText` |  | |  | `cast(description as farr_contract_category_text preserving type)` |  |  |
| `_RAContractCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RAContractCategory` | `I_RAContractCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRACONTRCATTEXT'

@EndUserText.label: 'RA Contract Category - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RevnAcctgContractCategory'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@VDM.viewType: #BASIC

define view entity I_RAContractCategoryText
  as select from farr_c_contcat_t

  association [1..1] to I_RAContractCategory as _RAContractCategory
    on $projection.RevnAcctgContractCategory = _RAContractCategory.RevnAcctgContractCategory

  association [0..1] to I_Language           as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language                                                         as Language,

      @ObjectModel.foreignKey.association: '_RAContractCategory'
  key contract_cat                                                     as RevnAcctgContractCategory,

      @Semantics.text: true
      cast(description as farr_contract_category_text preserving type) as RevnAcctgContrCategoryText,

      _RAContractCategory,
      _Language

}
```
