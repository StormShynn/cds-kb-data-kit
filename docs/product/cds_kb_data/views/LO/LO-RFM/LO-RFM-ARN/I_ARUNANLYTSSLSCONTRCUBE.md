---
name: I_ARUNANLYTSSLSCONTRCUBE
description: "Contract Details - Cube"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSCONTRCUBE')/$value
semantic_en: "Contract Details - Cube"
semantic_vi: "Contract Details - Cube — CDS view tổng hợp dựa trên I_SupDmndAllDocContrCube."
keywords:
  - "contract"
  - "details"
  - "cube"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "requested"
  - "date"
  - "product"
  - "availability"
  - "type"
tags:
  - LO
  - component:LO-RFM-ARN
  - contract
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNANLYTSSLSCONTRCUBE

**Contract Details - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSCONTRCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `RequestedDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `OrderQuantityInBaseUnit` |  | |  | `( RequestedRqmtQtyInBaseUnit + SalesContractReleasedQuantity)` | `QUAN(18)` |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenForAssignmentQtyInBsUnt` |  | |  | `( RequestedRqmtQtyInBaseUnit - AssignedQuantityInBaseUnit )` | `QUAN(18)` |  |
| `SalesContractReleasedQuantity` |  | |  |  | `QUAN(16)` |  |
| `OpenReleasedQuantity` |  | |  | `RequestedRqmtQtyInBaseUnit` | `QUAN(17)` |  |
| `OpenDemandQuantity` |  | |  | `( RequestedRqmtQtyInBaseUnit - coalesce( DeliveredQuantityInBaseUnit, 0 ) - coalesce( AssignedQuantityInBaseUnit , 0 ) )` | `QUAN(20)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  | `coalesce( SalesOrganization, coalesce( SalesOrganization, '' ) )` | `CHAR(4)` |  |
| `DistributionChannel` |  | |  | `coalesce( DistributionChannel, coalesce( DistributionChannel, '') )` | `CHAR(2)` |  |
| `Division` |  | |  | `coalesce( Division, coalesce( Division, '') )` | `CHAR(2)` |  |
| `SalesDistrict` |  | |  | `coalesce( SalesDistrict, coalesce( SalesDistrict, '') )` | `CHAR(6)` |  |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  | `coalesce( CompanyCode, coalesce( CompanyCode, '') )` | `CHAR(4)` |  |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `SupAssgmtAggrgQtyUnit` |  | |  | `cast( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `AgrmtValdtyEndDate` |  | |  |  | `DATS(8)` | Valid-To Date (Outline Agreements, Product Proposals) |
| `ContractExpiryDateHorizonDays` |  | |  |  | `INT4(10)` |  |
| `ContractExpiryDateHorizon` |  | |  | `case when AgrmtValdtyEndDate < $session.system_date then '01' else ( case when ContractExpiryDateHorizonDays <= 7 then '02' else ( case when ContractExpiryDateHorizonDays <= 14 then '03' else ( case when ContractExpiryDateHorizonDays <= 21 then '04' else ( case when ContractExpiryDateHorizonDays <= 28 then '05' else '06' end ) end ) end ) end ) end` | `NUMC(2)` |  |
| `SupAssgmtContrExpryRnge` |  | |  | `cast( case when AgrmtValdtyEndDate < $session.system_date then '01' else ( case when ContractExpiryDateHorizonDays <= 7 then '02' else ( case when ContractExpiryDateHorizonDays <= 14 then '03' else ( case when ContractExpiryDateHorizonDays <= 21 then '04' else ( case when ContractExpiryDateHorizonDays <= 28 then '05' else '06' end ) end ) end ) end ) end as arun_contract_expiry_range )` | `CHAR(2)` | ARun Contract Expiry Range |
| `FixedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `SupAssgmtReservedQtyInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `ReadyForReleaseQtyInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `InboundAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `ProductSeasonYear` |  | | `_SalesDocumentItem` | `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` |  | | `_SalesDocumentItem` | `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` |  | | `_SalesDocumentItem` | `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | | `_SalesDocumentItem` | `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | | `_SalesDocumentItem` | `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | | `_SalesDocumentItem` | `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | | `_SalesDocumentItem` | `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
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
| `_SoldToParty` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_ContrExpryRnge` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_ProductGroupText` | | ✓ | | | | |
| `_ProductTypeText` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
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
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_ContrExpryRnge` | `I_ARunContrExpryRngeVH` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSCONTRCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSCONTRCUBE')/$value)*

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
  sqlViewName: 'IARNALYSTCONTR',
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
  allowExtensions:              true
//  ,ignorePropagatedAnnotations:  true
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Contract Details - Cube'
define view I_ARunAnlytsSlsContrCube
  as select from I_SupDmndAllDocContrCube
  association [0..1] to I_SalesDocumentItem     as _SalesDocumentItem on  $projection.RequirementDocumentNumber = _SalesDocumentItem.SalesDocument
                                                                      and $projection.RequirementDocumentItem   = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_Product               as _Product           on  $projection.Material = _Product.Product
  association [0..1] to I_ProductGroup          as _ProductGroup      on  $projection.MaterialGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype           as _ProductType       on  $projection.MaterialType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization     as _SalesOrg          on  $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel   as _DistrChnl         on  $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division              as _Divn              on  $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict         as _SalesDist         on  $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_Plant                 as _Plant             on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode           as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer              as _SoldToParty       on  $projection.Customer = _SoldToParty.Customer
  association [0..1] to I_UnitOfMeasure         as _BaseUnit          on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_SupDmndAllDocRqmtType as _Rqmt              on  $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_Currency              as _DisplayCurrency   on  $projection.DocumentCurrency = _DisplayCurrency.Currency
  association [0..1] to I_ARunContrExpryRngeVH  as _ContrExpryRnge    on  $projection.SupAssgmtContrExpryRnge = _ContrExpryRnge.SupAssgmtContrExpryRnge
{
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key RequestedDate,
  key ProductAvailabilityDate,
      @ObjectModel.foreignKey.association: '_Rqmt'
  key RequirementType,
      RequestedDeliveryDate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      RequestedRqmtQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ( RequestedRqmtQtyInBaseUnit + SalesContractReleasedQuantity)              as OrderQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ConfirmedRqmtQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      DeliveredQuantityInBaseUnit,
      //      ( ConfirmedRqmtQtyInBaseUnit - AssignedQuantityInBaseUnit )                      as OpenForSupAssgmtQtyInBsUnt,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ( RequestedRqmtQtyInBaseUnit - AssignedQuantityInBaseUnit )                as OpenForAssignmentQtyInBsUnt,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      SalesContractReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      RequestedRqmtQtyInBaseUnit                                                 as OpenReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ( RequestedRqmtQtyInBaseUnit
        - coalesce( DeliveredQuantityInBaseUnit, 0 )
        - coalesce( AssignedQuantityInBaseUnit , 0 )
      )                                                                          as OpenDemandQuantity,
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
      @ObjectModel.foreignKey.association: '_Product'
      Material,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductType'
      MaterialType,
      CrossPlantConfigurableProduct,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_SalesOrg'
      coalesce( SalesOrganization, coalesce( SalesOrganization, '' ) )           as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistrChnl'
      coalesce( DistributionChannel, coalesce( DistributionChannel, '') )        as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Divn'
      coalesce( Division, coalesce( Division, '') )                              as Division,
      @ObjectModel.foreignKey.association: '_SalesDist'
      coalesce( SalesDistrict, coalesce( SalesDistrict, '') )                    as SalesDistrict,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      Customer,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      coalesce( CompanyCode, coalesce( CompanyCode, '') )                        as CompanyCode,
      StorageLocation,
      @Semantics.unitOfMeasure: true
      cast( ' ' as meins )                                                       as SupAssgmtAggrgQtyUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.currencyCode: true
      DocumentCurrency,
      AgrmtValdtyEndDate,
      ContractExpiryDateHorizonDays,
      @Consumption:{ valueHelpDefinition: [{ entity: { name: 'I_ARunContrExpryRngeVH',element: 'SupAssgmtContrExpryRnge'} }] }
      case when AgrmtValdtyEndDate < $session.system_date then '01'
      else ( case when ContractExpiryDateHorizonDays <= 7 then '02'
      else ( case when ContractExpiryDateHorizonDays <= 14 then '03'
      else ( case when ContractExpiryDateHorizonDays <= 21 then '04'
      else ( case when ContractExpiryDateHorizonDays <= 28 then '05'
      else '06' end ) end ) end ) end ) end                                      as ContractExpiryDateHorizon,
      @ObjectModel.foreignKey.association: '_ContrExpryRnge'
      @Consumption:{ valueHelpDefinition: [{ entity: { name: 'I_ARunContrExpryRngeVH',element: 'SupAssgmtContrExpryRnge'} }] }
      cast( case when AgrmtValdtyEndDate < $session.system_date then '01'
       else ( case when ContractExpiryDateHorizonDays <= 7 then '02'
       else ( case when ContractExpiryDateHorizonDays <= 14 then '03'
       else ( case when ContractExpiryDateHorizonDays <= 21 then '04'
       else ( case when ContractExpiryDateHorizonDays <= 28 then '05'
       else '06' end ) end ) end ) end ) end     as arun_contract_expiry_range ) as SupAssgmtContrExpryRnge,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      FixedQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      SupAssgmtReservedQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ReadyForReleaseQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      InboundAssignedQuantityInBsUnt,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ARunPhysSupAssgdQtyInBsUnt,
      _SalesDocumentItem.ProductSeasonYear                                       as ProductSeasonYear,
      _SalesDocumentItem.ProductSeason                                           as ProductSeason,
      _SalesDocumentItem.ProductCollection                                       as ProductCollection,
      _SalesDocumentItem.ProductTheme                                            as ProductTheme,
      _SalesDocumentItem.ProductCharacteristic1                                  as ProductCharacteristic1,
      _SalesDocumentItem.ProductCharacteristic2                                  as ProductCharacteristic2,
      _SalesDocumentItem.ProductCharacteristic3                                  as ProductCharacteristic3,
      _ProductText,
      _ProductGroupText,
      _ProductTypeText,
      _Customer,
      _BaseUnit,
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
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Rqmt,
      _DisplayCurrency,
      _ContrExpryRnge

}
```
