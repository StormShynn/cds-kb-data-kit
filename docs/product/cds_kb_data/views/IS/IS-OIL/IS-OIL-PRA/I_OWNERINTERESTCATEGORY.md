---
name: I_OWNERINTERESTCATEGORY
description: "Owner Interest Category"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTCATEGORY')/$value
semantic_en: "Owner Interest Category"
semantic_vi: "Owner Interest Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "owner"
  - "interest"
  - "category"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_OWNERINTERESTCATEGORY

**Owner Interest Category**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OwnerInterestCategory` | ✓ | |  | `cast( domvalue_l as oiu_int_cat_cd )` | `CHAR(1)` | Interest Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OwnerInterestCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTCATEGORY')/$value)*

```abap
@EndUserText.label: 'Owner Interest Category' //same as DDL description
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOWNINTCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'OwnerInterestCategory'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAOwnerInterestCategory'
define view I_OwnerInterestCategory 
   as select from dd07l
  association [0..*] to I_OwnerInterestCategoryText as _Text on $projection.OwnerInterestCategory = _Text.OwnerInterestCategory
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as oiu_int_cat_cd ) as OwnerInterestCategory,
      _Text
}
where domname  = 'OIU_INT_CAT_CD'
  and as4local = 'A'
```
