---
name: I_BUSINESSACTIVITYCATEGORY
description: Businessactivitycategory
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSINESSACTIVITYCATEGORY

**Businessactivitycategory**

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
| `BusinessActivityClass` |  | |  | `class` |  |  |
| `_BusinessActivityCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessActivityCategoryText` | `I_BusinessActivityCategoryText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUSACTVCATEGORY'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Activity Category'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'BusinessActivityCategory'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, 
#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}
@ObjectModel.sapObjectNodeType.name: 'BusinessActivityCategory'

define view I_BusinessActivityCategory
  as select from crmc_act_categor
  association [1..*] to I_BusinessActivityCategoryText as _BusinessActivityCategoryText on $projection.BusinessActivityCategory = _BusinessActivityCategoryText.BusinessActivityCategory
{

      @ObjectModel.text.association: '_BusinessActivityCategoryText'
  key category                     as BusinessActivityCategory,
      class                        as BusinessActivityClass,

      _BusinessActivityCategoryText
}
```
