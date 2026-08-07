---
name: I_BUSINESSACTIVITYCATEGORYTEXT
description: "Businessactivitycategorytext"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSINESSACTIVITYCATEGORYTEXT

**Businessactivitycategorytext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessActivityCategory` | ✓ | |  | `category` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `BusinessActivityCategoryName` |  | |  | `description` |  |  |
| `_BusinessActivityCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessActivityCategory` | `I_BusinessActivityCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUSACTVCATETEXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Activity Category - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BusinessActivityCategory'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessActivityCategoryText
  as select from crmc_act_cat_t
  association [1..1] to I_BusinessActivityCategory as _BusinessActivityCategory on $projection.BusinessActivityCategory = _BusinessActivityCategory.BusinessActivityCategory
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_BusinessActivityCategory'
  key category                                     as BusinessActivityCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                        as Language,
      @Semantics.text: true
      description                                  as BusinessActivityCategoryName,

      _BusinessActivityCategory,
      _Language

}
```
