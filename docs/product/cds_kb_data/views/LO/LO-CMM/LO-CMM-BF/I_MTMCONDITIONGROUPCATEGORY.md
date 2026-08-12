---
name: I_MTMCONDITIONGROUPCATEGORY
description: "Mark To Market Condition Group Category"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUPCATEGORY')/$value
semantic_en: "Mark To Market Condition Group Category"
semantic_vi: "MtM Condition Group Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "mtm"
  - "condition"
  - "group"
  - "category"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MTMCONDITIONGROUPCATEGORY

**Mark To Market Condition Group Category**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUPCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMConditionGroupCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as cmm_mtm_cgroup_cat)` | `CHAR(1)` | Categorization of Condition Group |
| `_MtmConditionGroupCategoryT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MtmConditionGroupCategoryT` | `I_MtmConditionGroupCategoryT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUPCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUPCATEGORY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMCGCAT'
@Metadata.ignorePropagatedAnnotations:true 
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'MTMConditionGroupCategory'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'MtM Condition Group Category'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_Mtmconditiongroupcategory
  as select from dd07l
  association [0..*] to I_MtmConditionGroupCategoryT as _MtmConditionGroupCategoryT on $projection.MTMConditionGroupCategory = _MtmConditionGroupCategoryT.MTMConditionGroupCategory
{
      @ObjectModel.text.association: '_MtmConditionGroupCategoryT'
  key cast ( substring( domvalue_l, 1, 1 ) as cmm_mtm_cgroup_cat) as MTMConditionGroupCategory,
      _MtmConditionGroupCategoryT
}
where
      dd07l.domname  = 'CMM_MTM_CGROUP_CAT'
  and dd07l.as4local = 'A'
```
