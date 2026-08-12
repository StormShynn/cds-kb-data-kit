---
name: I_ARUNANLYTSPURGCONTRCUBE
description: "Purchasing Contract Details - Cube"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSPURGCONTRCUBE')/$value
semantic_en: "Purchasing Contract Details - Cube"
semantic_vi: "Purchasing Contract Details - Cube — CDS view tổng hợp dựa trên I_SupDmndAllDocPurgContrC."
keywords:
  - "purchasing"
  - "contract"
  - "details"
  - "cube"
  - "product"
  - "plant"
  - "batch"
  - "storage"
  - "location"
  - "supply"
  - "number"
tags:
  - LO
  - component:LO-RFM-ARN
  - contract
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNANLYTSPURGCONTRCUBE

**Purchasing Contract Details - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSPURGCONTRCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `Material` | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `SupplyNumber` | ✓ | |  |  | `CHAR(12)` |  |
| `SupplyItem` | ✓ | |  |  | `CHAR(5)` |  |
| `SupplyScheduleLine` | ✓ | |  |  | `CHAR(4)` |  |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Purchasing Document Date |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `TotalQuantity` |  | |  |  | `QUAN(14)` |  |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(15)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ReleasedQuantity` |  | |  |  | `QUAN(13)` | Target Quantity |
| `OpenReleasedQuantity` |  | |  | `OpenSupplyQuantity` | `QUAN(15)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `ProductGroup` |  | |  | `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductType` |  | |  | `MaterialType` | `CHAR(4)` | Material Type |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization for Intercompany Billing |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel for Intercompany billing |
| `Division` |  | |  |  | `CHAR(2)` | Division for Intercompany Billing |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` |  |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` |  |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SupAssgmtAggrgQtyUnit` |  | |  | `cast( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistrChnl` | | ✓ | | | | |
| `_Divn` | | ✓ | | | | |
| `_SalesDist` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_SupType` | | ✓ | | | | |
| `_SupSrce` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductType` | `I_Producttype` | [0..1] |
| `_SalesOrg` | `I_SalesOrganization` | [0..1] |
| `_DistrChnl` | `I_DistributionChannel` | [0..1] |
| `_Divn` | `I_Division` | [0..1] |
| `_SalesDist` | `I_SalesDistrict` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_SupType` | `I_SupDmndAllDocSupType` | [0..1] |
| `_SupSrce` | `I_SupDmndAllDocSupSource` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSPURGCONTRCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSPURGCONTRCUBE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {
  dataCategory: #CUBE,
  internalName:#LOCAL
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'IARNANYTSPCC',
  compiler.compareFilter: true,
  preserveKey:true
 }
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #ANALYTICAL_CUBE
}
@Metadata:{
  allowExtensions:              true,
  ignorePropagatedAnnotations:  true
}
@EndUserText.label: 'Purchasing Contract Details - Cube'
define view I_ARunAnlytsPurgContrCube
  as select from I_SupDmndAllDocPurgContrC
  association [0..1] to I_Product                as _Product                on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup           as _ProductGroup           on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype            as _ProductType            on  $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization      as _SalesOrg               on  $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel    as _DistrChnl              on  $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division               as _Divn                   on  $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict          as _SalesDist              on  $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_Plant                  as _Plant                  on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_UnitOfMeasure          as _BaseUnit               on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  //  association [0..1] to I_SalesDocumentItem      as _SalesDocumentItem on  $projection.RequirementDocumentNumber = _SalesDocumentItem.SalesDocument
  //                                                                       and $projection.RequirementDocumentItem   = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_PurchasingOrganization as _PurchasingOrganization on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
//                                                                            and $projection.CompanyCode            = _PurchasingOrganization.CompanyCode
  association [0..1] to I_PurchasingGroup        as _PurchasingGroup        on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_SupDmndAllDocSupType   as _SupType                on  $projection.AssignedSupplyType = _SupType.AssignedSupplyType

  association [0..1] to I_SupDmndAllDocSupSource as _SupSrce                on  $projection.SupAssgmtSource = _SupSrce.SupAssgmtSource
{
       @ObjectModel.foreignKey.association: '_Product'
  key  Material             as Product,
  key  Plant,
  key  Batch,
  key  StorageLocation,
  key  SupplyNumber,
  key  SupplyItem,
  key  SupplyScheduleLine,
  key  ProductAvailabilityDate,
       @ObjectModel.foreignKey.association: '_SupType'
  key  AssignedSupplyType,
       RequestedDeliveryDate,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       TotalQuantity,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       OpenSupplyQuantity,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       AssignedQuantityInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       NormalAssignedQuantityInBsUnt,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       PreviewAssignedQuantityInBsUnt,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       ARunTmpAssignedQuantityInBsUnt,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       ReleasedQuantity,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
       OpenSupplyQuantity   as OpenReleasedQuantity,
       @ObjectModel.foreignKey.association: '_BaseUnit'
       BaseUnit,
       @Semantics.calendar.year: true
       CalendarYear,
       @Semantics.calendar.month: true
       @ObjectModel.text.element: 'CalendarMonthName'
       CalendarMonth,
       @Semantics.text: true
       CalendarMonthName,
       @Semantics.calendar.week: true
       CalendarWeek,
       @Semantics.calendar.dayOfMonth: true
       CalendarDay,
       @ObjectModel.foreignKey.association: '_ProductGroup'
       MaterialGroup        as ProductGroup,
       @ObjectModel.foreignKey.association: '_ProductType'
       MaterialType         as ProductType,
       @ObjectModel.foreignKey.association: '_SupSrce'
       SupAssgmtSource,
       CrossPlantConfigurableProduct,
       @ObjectModel.foreignKey.association: '_SalesOrg'
       SalesOrganization,
       @ObjectModel.foreignKey.association: '_DistrChnl'
       DistributionChannel,
       @ObjectModel.foreignKey.association: '_Divn'
       Division,
       @ObjectModel.foreignKey.association: '_SalesDist'
       SalesDistrict,
       Customer,
       @ObjectModel.foreignKey.association: '_CompanyCode'
       CompanyCode,
       @ObjectModel.foreignKey.association: '_PurchasingOrganization'
       PurchasingOrganization,
       @ObjectModel.foreignKey.association: '_PurchasingGroup'
       PurchasingGroup,
       @Semantics.unitOfMeasure: true
       cast( ' ' as meins ) as SupAssgmtAggrgQtyUnit,
       @Semantics.amount.currencyCode: 'DocumentCurrency'
       NetPriceAmount,
       @Semantics.currencyCode: true
       DocumentCurrency,
       //Associations
       _Product,
       _ProductGroup,
       _ProductType,
       _SalesOrg,
       _DistrChnl,
       _Divn,
       _SalesDist,
       _Plant,
       _CompanyCode,
       _BaseUnit,
       _PurchasingOrganization,
       _PurchasingGroup,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       _SupType,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       _SupSrce
       //_SalesDocumentItem,
}
```
