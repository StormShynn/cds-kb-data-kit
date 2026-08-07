---
name: I_MERCHANDISECATEGORY
description: Merchandisecategory
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - component:LO-RFM-MD-MC
  - lob:Logistics General
---
# I_MERCHANDISECATEGORY

**Merchandisecategory**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MerchandiseCategory` | ✓ | |  | `cast ( MerchandiseCategory.matkl as rfm_mrchdscategory preserving type )` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `ContactPersonStdDepartment` |  | |  | `abtnr` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `MaterialGroupRefMaterial` |  | |  | `wwgda` |  |  |
| `PurchasingValueKey` |  | |  | `ekwsl` |  |  |
| `ValuationClass` |  | |  | `bklas` |  |  |
| `LastChangeDateTime` |  | |  | `last_changed_at` |  |  |
| `ClassInternalID` |  | |  | `clint` |  |  |
| `_ProductGroup` | | ✓ | | | | |
| `_MerchandiseCategoryText` | | ✓ | | | | |
| `_MrchdsCategoryCharacteristic` | | ✓ | | | | |
| `_MrchdsCategoryHierarchyNode` | | ✓ | | | | |
| `_MrchdsCatCharcValRestriction` | | ✓ | | | | |
| `_MrchdsCmpltHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductGroup` | `I_ProductGroup_2` | [1..1] |
| `_MerchandiseCategoryText` | `I_MerchandiseCategoryText` | [0..*] |
| `_MrchdsCategoryCharacteristic` | `I_MrchdsCatCharacteristic` | [0..*] |
| `_MrchdsCategoryHierarchyNode` | `I_MrchdsCatToHierarchyNode` | [0..1] |
| `_MrchdsCatCharcValRestriction` | `I_MrchdsCatCharcValRstrcn` | [0..*] |
| `_MrchdsCmpltHierarchyNode` | `I_MrchdsCatCmpltHierarchyNode` | [0..1] |

## Source Code

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  dataCategory                      : #DIMENSION,
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #CHECK
@ObjectModel: {
   representativeKey                : 'MerchandiseCategory',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION
                                        ],
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,
   usageType                        : {serviceQuality: #A,sizeCategory: #M,dataClass: #MASTER }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@ObjectModel.sapObjectNodeType.name : 'MerchandiseCategory'
@EndUserText.label                  : 'Merchandise Category'

define view entity I_MerchandiseCategory
  as select from t023 as MerchandiseCategory
    inner join   klah as MrchdsCategory on  MerchandiseCategory.matkl = MrchdsCategory.class
                                        and MrchdsCategory.wwskz      = '1'

  association [1..1] to I_ProductGroup_2              as _ProductGroup                 on $projection.MerchandiseCategory = _ProductGroup.ProductGroup
  association [0..*] to I_MerchandiseCategoryText     as _MerchandiseCategoryText      on $projection.MerchandiseCategory = _MerchandiseCategoryText.MerchandiseCategory
  association [0..*] to I_MrchdsCatCharacteristic     as _MrchdsCategoryCharacteristic on $projection.MerchandiseCategory = _MrchdsCategoryCharacteristic.MerchandiseCategory
  association [0..1] to I_MrchdsCatToHierarchyNode    as _MrchdsCategoryHierarchyNode  on $projection.MerchandiseCategory = _MrchdsCategoryHierarchyNode.MerchandiseCategory
  association [0..*] to I_MrchdsCatCharcValRstrcn     as _MrchdsCatCharcValRestriction on $projection.MerchandiseCategory = _MrchdsCatCharcValRestriction.MerchandiseCategory
  association [0..1] to I_MrchdsCatCmpltHierarchyNode as _MrchdsCmpltHierarchyNode     on $projection.MerchandiseCategory = _MrchdsCmpltHierarchyNode.MerchandiseCategory
{
      @ObjectModel.hierarchy.association : '_MrchdsCmpltHierarchyNode'
  key cast ( MerchandiseCategory.matkl as  rfm_mrchdscategory preserving type   ) as MerchandiseCategory,
      MerchandiseCategory.begru                                                   as AuthorizationGroup,
      MerchandiseCategory.abtnr                                                   as ContactPersonStdDepartment,
      MerchandiseCategory.spart                                                   as Division,
      MerchandiseCategory.wwgda                                                   as MaterialGroupRefMaterial,
      MerchandiseCategory.ekwsl                                                   as PurchasingValueKey,
      MerchandiseCategory.bklas                                                   as ValuationClass,
      @Semantics.systemDateTime.lastChangedAt: true
      MerchandiseCategory.last_changed_at                                         as LastChangeDateTime,
      MrchdsCategory.clint                                                        as ClassInternalID,
      
      /* Associations */
      _ProductGroup,
      _MerchandiseCategoryText,
      _MrchdsCategoryCharacteristic,
      _MrchdsCategoryHierarchyNode,
      _MrchdsCatCharcValRestriction,
      _MrchdsCmpltHierarchyNode
}
```
