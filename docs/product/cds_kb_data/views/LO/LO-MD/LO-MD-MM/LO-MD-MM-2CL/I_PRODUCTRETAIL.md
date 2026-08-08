---
name: I_PRODUCTRETAIL
description: "Productretail"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTRETAIL

**Productretail**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast (maw1.matnr as productnumber preserving type )` |  |  |
| `ServiceAgreement` |  | |  | `servv` |  |  |
| `ConsumptionValueCategory` |  | |  | `wmaab` |  |  |
| `GoodsIssueUnit` |  | |  | `wausm` |  |  |
| `CountryOfOrigin` |  | |  | `cast( maw1.wherl as cmd_prd_countryoforigin preserving type )` |  |  |
| `RegionOfOrigin` |  | |  | `wherr` |  |  |
| `AssortmentGrade` |  | |  | `sstuf` |  |  |
| `StoreListingProcedure` |  | |  | `lstfl` |  |  |
| `DistrCntrListingProcedure` |  | |  | `lstvz` |  |  |
| `StoreListingStartDate` |  | |  | `cast(maw1.ldvfl as storelistingstartdate )` |  |  |
| `StoreListingEndDate` |  | |  | `cast(maw1.ldbfl as storelistingenddate )` |  |  |
| `DistrCntrListingStartDate` |  | |  | `cast(maw1.ldvzl as distrcntrlistingstartdate )` |  |  |
| `DistrCntrListingEndDate` |  | |  | `cast(maw1.ldbzl as distrcntrlistingenddate )` |  |  |
| `StoreSaleStartDate` |  | |  | `cast(maw1.vdvfl as storesalestartdate )` |  |  |
| `StoreSaleEndDate` |  | |  | `cast(maw1.vdbfl as storesaleenddate )` |  |  |
| `DistrCntrSaleStartDate` |  | |  | `cast(maw1.vdvzl as distrcntrsalestartdate )` |  |  |
| `DistrCntrSaleEndDate` |  | |  | `cast(maw1.vdbzl as distrcntrsaleenddate )` |  |  |
| `ValuationClass` |  | |  | `wbkla` |  |  |
| `CommodityCode` |  | |  | `wstaw` |  |  |
| `ValuationMargin` |  | |  | `wbwsp` |  |  |
| `CommoditiyCodeNumberUnit` |  | |  | `wexpm` |  |  |
| `SalesUnit` |  | |  | `wvrkm` |  |  |
| `PurchasingGroup` |  | |  | `wekgr` |  |  |
| `LoadingGroup` |  | |  | `wladg` |  |  |
| `ProdExtAssortmentPriority` |  | |  | `pflks` |  |  |
| `AssortmentListType` |  | |  | `bbtyp` |  |  |
| `_CountryOfOrigin` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_RegionOfOrigin` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_GoodsIssueUnit` | | ✓ | | | | |
| `_GoodsIssueText` | | ✓ | | | | |
| `_ConsumptionValueCategory` | | ✓ | | | | |
| `_ConsumptionValueCategoryText` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_LoadingGroup` | | ✓ | | | | |
| `_LoadingGroupText` | | ✓ | | | | |
| `_ProdExtAssortmentPriority` | | ✓ | | | | |
| `_ProdExtAssortmentPriorityText` | | ✓ | | | | |
| `_StoreListingProcedure` | | ✓ | | | | |
| `_StoreListingProcedureT` | | ✓ | | | | |
| `_DistrCntrListingProcedure` | | ✓ | | | | |
| `_DistrCntrListingProcedureT` | | ✓ | | | | |
| `_AssortmentGrade` | | ✓ | | | | |
| `_AssortmentGradeT` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_SalesUnitText` | | ✓ | | | | |
| `_ProductServiceAgreement` | | ✓ | | | | |
| `_ProductServiceAgreementT` | | ✓ | | | | |
| `_ValuationClass` | | ✓ | | | | |
| `_ValuationClassText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |
| `_CommodityCodeNumberUnitText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CountryOfOrigin` | `I_Country` | [0..1] |
| `_CountryText` | `I_CountryText` | [0..*] |
| `_RegionOfOrigin` | `I_Region` | [0..1] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_GoodsIssueUnit` | `I_UnitOfMeasure` | [0..1] |
| `_GoodsIssueText` | `I_UnitOfMeasureText` | [0..*] |
| `_ConsumptionValueCategory` | `I_Matlabcclassification` | [0..1] |
| `_ConsumptionValueCategoryText` | `I_Matlabcclassificationtext` | [0..*] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_LoadingGroup` | `I_LoadingGroup` | [0..1] |
| `_LoadingGroupText` | `I_LoadingGroupText` | [0..*] |
| `_ProdExtAssortmentPriority` | `I_ProdExtAsstmtPriority` | [0..1] |
| `_ProdExtAssortmentPriorityText` | `I_ProdExtAsstmtPriorityTxt` | [0..*] |
| `_StoreListingProcedure` | `I_ListingProcedure` | [0..1] |
| `_StoreListingProcedureT` | `I_ListingProcedureT` | [0..*] |
| `_DistrCntrListingProcedure` | `I_ListingProcedure` | [0..1] |
| `_DistrCntrListingProcedureT` | `I_ListingProcedureT` | [0..*] |
| `_AssortmentGrade` | `I_AssortmentGrade` | [0..1] |
| `_AssortmentGradeT` | `I_AssortmentGradeT` | [0..*] |
| `_SalesUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProductServiceAgreement` | `I_ProductServiceAgreement` | [0..1] |
| `_ProductServiceAgreementT` | `I_ProductServiceAgreementT` | [0..*] |
| `_ValuationClass` | `I_Prodvaluationclass` | [0..1] |
| `_ValuationClassText` | `I_Prodvaluationclasstxt` | [0..*] |
| `_ProductRetailExt` | `E_ProductRetail` | [0..1] |
| `_ProductDescription_2` | `I_ProductDescription_2` | [0..*] |
| `_CommodityCodeNumberUnitText` | `I_UnitOfMeasureText` | [0..*] |

## Source Code

```abap
// active core entity
@AbapCatalog.sqlViewName: 'IPRDRETAIL'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }   //addedforVH
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Retail Basic Data'
@ObjectModel.representativeKey: 'Product'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
  dataCategory: #DIMENSION,
  dataExtraction:{
   enabled: true,
   delta.changeDataCapture.automatic: true
  }
}
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'Product'
//@Search.searchable: true    //added for VH
//@ObjectModel:{
//lifecycle : {
//     enqueue : {
//        expiryBehavior :
//           #RELATIVE_TO_LAST_CHANGE,
//        expiryInterval : 'PT15M',
//       notificationBeforeExpiryInterval : 'PT2M'},
//     processing : {
//        expiryBehavior :
//            #RELATIVE_TO_LAST_CHANGE,
//        expiryInterval : 'PT30M',
//        notificationBeforeExpiryInterval :  'PT4M' }
//         }
//
//}

define view I_ProductRetail
  as select from maw1
  association [0..1] to I_Country                   as _CountryOfOrigin               on  $projection.CountryOfOrigin = _CountryOfOrigin.Country
  association [0..*] to I_CountryText               as _CountryText                   on  $projection.CountryOfOrigin = _CountryText.Country
  association [0..1] to I_Region                    as _RegionOfOrigin                on  $projection.RegionOfOrigin  = _RegionOfOrigin.Region
                                                                                      and $projection.CountryOfOrigin = _RegionOfOrigin.Country
  association [0..*] to I_RegionText                as _RegionText                    on  $projection.RegionOfOrigin  = _RegionText.Region
                                                                                      and $projection.CountryOfOrigin = _RegionText.Country
  association [0..1] to I_UnitOfMeasure             as _GoodsIssueUnit                on  $projection.GoodsIssueUnit = _GoodsIssueUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText         as _GoodsIssueText                on  $projection.GoodsIssueUnit = _GoodsIssueText.UnitOfMeasure
  association [0..1] to I_Matlabcclassification     as _ConsumptionValueCategory      on  $projection.ConsumptionValueCategory = _ConsumptionValueCategory.MaterialABCClassification
  association [0..*] to I_Matlabcclassificationtext as _ConsumptionValueCategoryText  on  $projection.ConsumptionValueCategory = _ConsumptionValueCategoryText.MaterialABCClassification

  association [0..1] to I_PurchasingGroup           as _PurchasingGroup               on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_LoadingGroup              as _LoadingGroup                  on  $projection.LoadingGroup = _LoadingGroup.LoadingGroup
  association [0..*] to I_LoadingGroupText          as _LoadingGroupText              on  $projection.LoadingGroup = _LoadingGroupText.LoadingGroup

  association [0..1] to I_ProdExtAsstmtPriority     as _ProdExtAssortmentPriority     on  $projection.ProdExtAssortmentPriority = _ProdExtAssortmentPriority.ProdExtAssortmentPriority
  association [0..*] to I_ProdExtAsstmtPriorityTxt  as _ProdExtAssortmentPriorityText on  $projection.ProdExtAssortmentPriority = _ProdExtAssortmentPriorityText.ProdExtAssortmentPriority

  association [0..1] to I_ListingProcedure          as _StoreListingProcedure         on  $projection.StoreListingProcedure = _StoreListingProcedure.StoreListingProcedure
  association [0..*] to I_ListingProcedureT         as _StoreListingProcedureT        on  $projection.StoreListingProcedure = _StoreListingProcedureT.StoreListingProcedure

  association [0..1] to I_ListingProcedure          as _DistrCntrListingProcedure     on  $projection.DistrCntrListingProcedure = _DistrCntrListingProcedure.StoreListingProcedure
  association [0..*] to I_ListingProcedureT         as _DistrCntrListingProcedureT    on  $projection.DistrCntrListingProcedure = _DistrCntrListingProcedureT.StoreListingProcedure

  association [0..1] to I_AssortmentGrade           as _AssortmentGrade               on  $projection.AssortmentGrade = _AssortmentGrade.AssortmentGrade
  association [0..*] to I_AssortmentGradeT          as _AssortmentGradeT              on  $projection.AssortmentGrade = _AssortmentGradeT.AssortmentGrade

  association [0..1] to I_UnitOfMeasure             as _SalesUnit                     on  $projection.SalesUnit = _SalesUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText         as _SalesUnitText                 on  $projection.SalesUnit = _SalesUnitText.UnitOfMeasure

  association [0..1] to I_ProductServiceAgreement   as _ProductServiceAgreement       on  $projection.ServiceAgreement = _ProductServiceAgreement.ProductServiceAgreement
  association [0..*] to I_ProductServiceAgreementT  as _ProductServiceAgreementT      on  $projection.ServiceAgreement = _ProductServiceAgreementT.ProductServiceAgreement

  association [0..1] to I_Prodvaluationclass        as _ValuationClass                on  $projection.ValuationClass = _ValuationClass.ValuationClass
  association [0..*] to I_Prodvaluationclasstxt     as _ValuationClassText            on  $projection.ValuationClass = _ValuationClassText.ValuationClass
  association [0..1] to E_ProductRetail             as _ProductRetailExt              on  $projection.Product = _ProductRetailExt.Product

  association [0..*] to I_ProductDescription_2      as _ProductDescription_2          on  $projection.Product = _ProductDescription_2.Product
  association [0..*] to I_UnitOfMeasureText         as _CommodityCodeNumberUnitText  on  $projection.CommoditiyCodeNumberUnit = _CommodityCodeNumberUnitText.UnitOfMeasure
{ // root node fields
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' },
         useAsTemplate: true
        }]
      @ObjectModel.text.association: '_ProductDescription_2' 
  key cast (maw1.matnr as productnumber preserving type )           as Product,

      @ObjectModel.foreignKey.association: '_ProductServiceAgreement'
      @ObjectModel.text.association: '_ProductServiceAgreementT'
      maw1.servv                                                    as ServiceAgreement,
      @ObjectModel.foreignKey.association: '_ConsumptionValueCategory'
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_Prodabclassfctn',
         element: 'MaterialABCClassification' },
         useAsTemplate: true
       }]
      @ObjectModel.text.association: '_ConsumptionValueCategoryText'
      maw1.wmaab                                                    as ConsumptionValueCategory, // ref. handling for MARC
      _ConsumptionValueCategory,
      _ConsumptionValueCategoryText,
      @ObjectModel.foreignKey.association: '_GoodsIssueUnit'
      @ObjectModel.text.association: '_GoodsIssueText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'}, useAsTemplate: true }]
      maw1.wausm                                                    as GoodsIssueUnit, // ref. handling for MARC
      _GoodsIssueText,
      _GoodsIssueUnit,
      @ObjectModel.foreignKey.association: '_CountryOfOrigin'
      @ObjectModel.text.association: '_CountryText'
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_CountryVH',
         element: 'Country' },
         useAsTemplate: true
       }]
      cast( maw1.wherl as cmd_prd_countryoforigin preserving type ) as CountryOfOrigin, // ref. handling for MARC
      _CountryText,
      @ObjectModel.foreignKey.association: '_RegionOfOrigin'
      @ObjectModel.text.association: '_RegionText'
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_RegionVH',
         element: 'Region' },
         useAsTemplate: true
       }]
      maw1.wherr                                                    as RegionOfOrigin, // ref. handling for MARC

      @ObjectModel.foreignKey.association: '_AssortmentGrade'
      @ObjectModel.text.association: '_AssortmentGradeT'
      maw1.sstuf                                                    as AssortmentGrade,
      @ObjectModel.foreignKey.association: '_StoreListingProcedure'
      @ObjectModel.text.association: '_StoreListingProcedureT'
      maw1.lstfl                                                    as StoreListingProcedure,
      @ObjectModel.foreignKey.association: '_DistrCntrListingProcedure'
      @ObjectModel.text.association: '_DistrCntrListingProcedureT'
      maw1.lstvz                                                    as DistrCntrListingProcedure,
      cast(maw1.ldvfl as storelistingstartdate )                    as StoreListingStartDate,
      cast(maw1.ldbfl as storelistingenddate )                      as StoreListingEndDate,
      cast(maw1.ldvzl as distrcntrlistingstartdate )                as DistrCntrListingStartDate,
      cast(maw1.ldbzl as  distrcntrlistingenddate )                 as DistrCntrListingEndDate,
      cast(maw1.vdvfl as  storesalestartdate )                      as StoreSaleStartDate,
      cast(maw1.vdbfl as  storesaleenddate  )                       as StoreSaleEndDate,
      cast(maw1.vdvzl as  distrcntrsalestartdate )                  as DistrCntrSaleStartDate,
      cast(maw1.vdbzl as  distrcntrsaleenddate )                    as DistrCntrSaleEndDate,
      @ObjectModel.foreignKey.association: '_ValuationClass'
      @ObjectModel.text.association: '_ValuationClassText'
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_Prodvaluationclass',
         element: 'ValuationClass' },
         useAsTemplate: true
       }]
      maw1.wbkla                                                    as ValuationClass, // ref. handling for MBEW
      maw1.wstaw                                                    as CommodityCode,
      maw1.wbwsp                                                    as ValuationMargin, // ref. handling for MBEW
      @ObjectModel.text.association: '_CommodityCodeNumberUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'}, useAsTemplate: true }]
      maw1.wexpm                                                    as CommoditiyCodeNumberUnit,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @ObjectModel.text.association: '_SalesUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'}, useAsTemplate: true }]
      maw1.wvrkm                                                    as SalesUnit,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      maw1.wekgr                                                    as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_LoadingGroup'
      @ObjectModel.text.association:'_LoadingGroupText'
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_LoadingGroup',
         element: 'LoadingGroup' },
         useAsTemplate: true
       }]
      maw1.wladg                                                    as LoadingGroup,
      @ObjectModel.foreignKey.association: '_ProdExtAssortmentPriority'
      @ObjectModel.text.association: '_ProdExtAssortmentPriorityText'
      maw1.pflks                                                    as ProdExtAssortmentPriority,
      maw1.bbtyp                                                    as AssortmentListType,

      _PurchasingGroup,

      _CountryOfOrigin,
      _RegionOfOrigin,
      _RegionText,
      _LoadingGroup,
      _LoadingGroupText,

      _ProdExtAssortmentPriority,
      _ProdExtAssortmentPriorityText,
      _SalesUnit,
      _SalesUnitText,
      _DistrCntrListingProcedure,
      _DistrCntrListingProcedureT,
      _StoreListingProcedure,
      _StoreListingProcedureT,
      _AssortmentGrade,
      _AssortmentGradeT,
      _ProductServiceAgreement,
      _ProductServiceAgreementT,
      _ValuationClass,
      _ValuationClassText,
      _ProductDescription_2,
      _CommodityCodeNumberUnitText
}
```
