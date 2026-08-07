---
name: I_CAINVCGOFFSETTINGCATEGORY
description: Cainvcgoffsettingcategory
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGOFFSETTINGCATEGORY

**Cainvcgoffsettingcategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInvcgOffsettingCategory` | ✓ | |  | `offset_cat` |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAInvcgOffsettingCategoryTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Typ der Anrechnung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgOffsettingCategory',
  sapObjectNodeType.name: 'ContrAcctgInvcgOffstgCategory',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgOffsettingCategory
  as select from tfk2609
  association [0..*] to I_CAInvcgOffsettingCategoryTxt as _Text on $projection.CAInvcgOffsettingCategory = _Text.CAInvcgOffsettingCategory
{
      @ObjectModel.text.association: '_Text'
  key offset_cat  as CAInvcgOffsettingCategory,
      offset_proc as CAInvcgOffsettingProcedure,
      //      offset_level,
      //      offset_in_total,

      _Text
}
```
