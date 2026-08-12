---
name: I_ARUNANLYTSSALESRETURNS
description: "Return Sales Order"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSALESRETURNS')/$value
semantic_en: "Return Sales Order"
semantic_vi: "Return Sales Order — CDS view tổng hợp (transactional data) dựa trên I_SalesDocumentItem."
keywords:
  - "return"
  - "sales"
  - "order"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "supply"
  - "schedule"
  - "line"
  - "assigned"
  - "type"
  - "assgmt"
  - "source"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
  - bo:salesorganization
---
# I_ARUNANLYTSSALESRETURNS

**Return Sales Order**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSALESRETURNS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  | `SalesDocument` | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  | `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SupplyScheduleLine` |  | |  | `cast ( '0000' as etenr)` | `NUMC(4)` | Schedule Line Number |
| `AssignedSupplyType` |  | |  | `'R'` | `CHAR(1)` |  |
| `SupAssgmtSource` |  | |  | `'R'` | `CHAR(1)` |  |
| `SupplyDeliveryDate` |  | |  | `cast( _SalesDocument.RequestedDeliveryDate as edatu_vbak)` | `DATS(8)` | Requested Delivery Date |
| `ProductAvailabilityDate` |  | |  | `cast( _SalesDocument.RequestedDeliveryDate as edatu_vbak)` | `DATS(8)` | Requested Delivery Date |
| `RequestedDeliveryDate` |  | |  | `cast( _SalesDocument.RequestedDeliveryDate as edatu_vbak)` | `DATS(8)` | Requested Delivery Date |
| `TotalQuantity` |  | |  | `cast( SalesDocumentItem.OrderQuantity as ovr_conf_so_sl_qty )` | `QUAN(15)` | Overall confirmed sales order schedule lines: quantity |
| `OpenSupplyQuantity` |  | |  | `cast( SalesDocumentItem.OrderQuantity as abap.quan( 16,3 ) )` | `QUAN(16)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Product` |  | |  | `Material` | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  | `MaterialGroup` | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `OrderType` |  | |  | `SalesDocumentType` | `CHAR(4)` | Sales Document Type |
| `ProductType` |  | |  | `MaterialType` | `CHAR(4)` | Material Type |
| `StockSegment` |  | |  | `RequirementSegment` | `CHAR(40)` | Requirement Segment |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | | `_SalesDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | | `_SalesDocument` | `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | | `_SalesDocument` | `OrganizationDivision` | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `PurchasingOrganization` |  | |  | `cast('' as ekorg )` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  | `cast('' as ekgrp )` | `CHAR(3)` | Purchasing Group |
| `Batch` |  | |  | `cast('' as charg_d )` | `CHAR(10)` | Batch Number |
| `StorageLocation` |  | |  | `cast('' as lgort_d )` | `CHAR(4)` | Storage Location |
| `Customer` |  | |  | `cast('' as kunnr )` | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | | `_SalesDocument` | `BillingCompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  | `TransactionCurrency` | `CUKY(5)` | SD Document Currency |
| `NetAmount` |  | |  |  | `CURR(15)` | Net Value of the Document Item in Document Currency |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `RequestedRqmtQtyInBaseUnit` |  | |  | `RequestedQuantityInBaseUnit` | `QUAN(15)` | Requested Order Quantity in Base Unit |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `FashionCancelDate` |  | |  |  | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistrChnl` | | ✓ | | | | |
| `_Divn` | | ✓ | | | | |
| `_SalesDist` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductType` | `I_Producttype` | [0..1] |
| `_SalesOrg` | `I_SalesOrganization` | [0..1] |
| `_DistrChnl` | `I_DistributionChannel` | [0..1] |
| `_Divn` | `I_Division` | [0..1] |
| `_SalesDist` | `I_SalesDistrict` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSALESRETURNS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSALESRETURNS')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'IARNANLYTSRETSO',
  compiler.compareFilter: true
 }
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #X,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
   modelingPattern: #ANALYTICAL_CUBE
}
@Analytics: {
  dataCategory: #CUBE,
  internalName:#LOCAL
}
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Return Sales Order'
define view I_ARunAnlytsSalesReturns
  as select from    I_SalesDocumentItem    as SalesDocumentItem    
    inner join             I_SupDmndMaterialPlant       as marc    on  SalesDocumentItem.Product = marc.Material
                                                                   and SalesDocumentItem.Plant = marc.Plant
  association [0..1] to I_SalesDocument       as _SalesDocument     on  $projection.RequirementDocumentNumber = _SalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem   as _SalesDocumentItem on  $projection.RequirementDocumentNumber = _SalesDocumentItem.SalesDocument
                                                                    and $projection.RequirementDocumentItem   = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_Product             as _Product           on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup        as _ProductGroup      on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype         as _ProductType       on  $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization   as _SalesOrg          on  $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel as _DistrChnl         on  $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division            as _Divn              on  $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict       as _SalesDist         on  $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_Plant               as _Plant             on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode         as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer            as _Customer          on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Customer            as _SoldToParty       on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_UnitOfMeasure       as _BaseUnit          on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
{
  key  SalesDocument                             as RequirementDocumentNumber,
  key  SalesDocumentItem                         as RequirementDocumentItem,
       cast ( '0000' as etenr)                   as SupplyScheduleLine,
       'R'                                       as AssignedSupplyType,
       'R'                                       as SupAssgmtSource,
       cast( _SalesDocument.RequestedDeliveryDate as edatu_vbak)           as SupplyDeliveryDate,
       cast( _SalesDocument.RequestedDeliveryDate as edatu_vbak)           as ProductAvailabilityDate,
       cast( _SalesDocument.RequestedDeliveryDate as edatu_vbak)           as RequestedDeliveryDate,
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       cast( SalesDocumentItem.OrderQuantity as ovr_conf_so_sl_qty )       as TotalQuantity,
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       cast( SalesDocumentItem.OrderQuantity as abap.quan( 16,3 ) )        as OpenSupplyQuantity,
       @Semantics.unitOfMeasure: true
       SalesDocumentItem.BaseUnit                                          as BaseUnit,
       @ObjectModel.foreignKey.association: '_Product'
       SalesDocumentItem.Material                                as Product,
       @ObjectModel.foreignKey.association: '_ProductGroup'
       SalesDocumentItem.MaterialGroup                           as ProductGroup,
       @ObjectModel.foreignKey.association: '_Plant'
       SalesDocumentItem.Plant                                   as Plant,
       SalesDocumentItem.SalesDocumentType                       as OrderType,
       @ObjectModel.foreignKey.association: '_ProductType'
       marc.MaterialType                                          as ProductType,
       SalesDocumentItem.RequirementSegment                      as StockSegment,
       @EndUserText.label: 'Generic Article'
       marc.CrossPlantConfigurableProduct,
       @ObjectModel.foreignKey.association: '_SalesOrg'
       _SalesDocument.SalesOrganization                           as SalesOrganization,
       @ObjectModel.foreignKey.association: '_DistrChnl'
       _SalesDocument.DistributionChannel                         as DistributionChannel,
       @ObjectModel.foreignKey.association: '_Divn'
       _SalesDocument.OrganizationDivision                        as Division,
       @ObjectModel.foreignKey.association: '_SalesDist'
       SalesDocumentItem.SalesDistrict                           as SalesDistrict,
       //vbkd.bzirk                                as SalesDistrict,
       cast('' as ekorg )                        as PurchasingOrganization,
       cast('' as ekgrp )                        as PurchasingGroup,
       cast('' as charg_d )                      as Batch,
       cast('' as lgort_d )                      as StorageLocation,
       @ObjectModel.foreignKey.association: '_Customer'
       cast('' as kunnr )                        as Customer,
       //coalesce( vbpa_sp.Customer, _SoldToParty.Customer )  as Customer,
       @ObjectModel.foreignKey.association: '_CompanyCode'
       _SalesDocument.BillingCompanyCode                  as CompanyCode,
       SalesDocumentItem.SDDocumentReason                as SDDocumentReason,
       SalesDocumentItem.SalesDocumentRjcnReason         as SalesDocumentRjcnReason,
       @Semantics.amount.currencyCode: 'DocumentCurrency'
       SalesDocumentItem.NetPriceAmount                  as NetPriceAmount,
       @Semantics.currencyCode: true
       SalesDocumentItem.TransactionCurrency             as DocumentCurrency,
       @Semantics.amount.currencyCode: 'DocumentCurrency'
        SalesDocumentItem.NetAmount                      as NetAmount,
       
       SalesDocumentItem.RequirementSegment              as RequirementSegment,
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       SalesDocumentItem.RequestedQuantityInBaseUnit     as RequestedRqmtQtyInBaseUnit,
       SalesDocumentItem._SalesDocument.SalesOffice      as SalesOffice,
       SalesDocumentItem._SalesDocument.SalesGroup       as SalesGroup,
       SalesDocumentItem._SalesDocument.SoldToParty      as SoldToParty,
       SalesDocumentItem.FashionCancelDate               as FashionCancelDate,
       SalesDocumentItem.ProductSeasonYear               as ProductSeasonYear,
       SalesDocumentItem.ProductSeason                   as ProductSeason,
       SalesDocumentItem.ProductCollection               as ProductCollection,
       SalesDocumentItem.ProductTheme                    as ProductTheme,
       SalesDocumentItem.ProductCharacteristic1          as ProductCharacteristic1,
       SalesDocumentItem.ProductCharacteristic2          as ProductCharacteristic2,
       SalesDocumentItem.ProductCharacteristic3          as ProductCharacteristic3,
       //associations
       _SalesDocument,
       _SalesDocumentItem,
       _Product,
       _ProductGroup,
       _ProductType,
       _SalesOrg,
       _DistrChnl,
       _Divn,
       _SalesDist,
       _Plant,
       _CompanyCode,
       _Customer,
       _SoldToParty,
       _BaseUnit
}
where
      //vbak.vbtyp     = 'H' //Document Category = Returns
      SalesDocumentItem.SDDocumentCategory = 'H'
  and SalesDocumentItem._SoldToParty.IsBusinessPurposeCompleted = ''
  and SalesDocumentItem.SalesDocumentItemType != 'B' //Item Type != Text item
  and SalesDocumentItem.IsReturnsItem     = 'X' //Returns = 'X'
  and(
       SalesDocumentItem.InventorySpecialStockType     = ' '
    //    or vbap.sobkz = 'E'
  ) //Consider Orders on Hand
```
