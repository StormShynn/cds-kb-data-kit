---
name: I_ARUNANLYTSSLSORDREJECTION
description: Sales Order Rejection
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDREJECTION')/$value
semantic_en: Sales Order Rejection
semantic_vi: Sales Order Rejection — CDS view tổng hợp dựa trên I_SalesDocumentItem.
keywords:
  - sales
  - order
  - rejection
  - requirement
  - document
  - number
  - item
  - prot
  - time
  - bucket
  - requested
  - date
  - product
  - availability
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
---
# I_ARUNANLYTSSLSORDREJECTION

**Sales Order Rejection**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDREJECTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  | `SalesDocument` | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  | `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` |  | |  | `hextobin( '00000000000000000000000000000000' )` | `RAW(16)` |  |
| `RequestedDate` |  | |  | `cast( ' ' as mbdat )` | `DATS(8)` | Material Staging/Availability Date |
| `ProductAvailabilityDate` |  | |  | `cast( ' ' as mbdat )` | `DATS(8)` | Material Staging/Availability Date |
| `RequirementType` |  | |  | `cast( ' ' as abap.char(2) )` | `CHAR(2)` |  |
| `RequirementTypeName` |  | |  | `cast( ' ' as ddtext )` | `CHAR(60)` | Explanatory Short Text |
| `ARunDocumentItemUniqueID` |  | |  | `cast( concat(concat(SalesDocument, '/'), SalesDocumentItem) as arun_doc_item_unique_id preserving type )` | `CHAR(17)` | Unique Identification for Supply Assignment Document Item |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `RequestedRqmtQtyInBaseUnit` |  | |  | `cast(Demand.RequestedQuantityInBaseUnit as abap.quan(17, 3))` | `QUAN(17)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Product` |  | |  | `Material` | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  | `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductType` |  | |  | `MaterialType` | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | | `_SalesDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | | `_SalesDocument` | `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | | `_Plant` | `Division` | `CHAR(2)` | Division for Intercompany Billing |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CompanyCode` |  | | `_SalesDocument` | `BillingCompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `FashionCancelDate` |  | |  |  | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  | `cast( '0' as meng15 )` | `QUAN(15)` | Quantity field, 15 characters |
| `DeliveredQuantityInBaseUnit` |  | |  | `cast( '0' as abap.quan(18, 3) )` | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  | `cast( '0' as abap.quan(21, 3) )` | `QUAN(21)` |  |
| `AssignedQuantityInBaseUnit` |  | |  | `cast( '0' as meng15 )` | `QUAN(15)` | Quantity field, 15 characters |
| `NormalAssignedQuantityInBsUnt` |  | |  | `cast( '0' as meng15 )` | `QUAN(15)` | Quantity field, 15 characters |
| `PreviewAssignedQuantityInBsUnt` |  | |  | `cast( 0 as abap.dec( 12, 3 ) )` | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  | `cast( 0 as abap.dec( 12, 3 ) )` | `DEC(12)` |  |
| `CalendarYear` |  | |  | `cast( ' ' as calendaryear )` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  | `cast( ' ' as calendarmonth )` | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  | `cast( ' ' as ddtext )` | `CHAR(60)` | Explanatory Short Text |
| `CalendarWeek` |  | |  | `cast( ' ' as abap.char(63) )` | `CHAR(63)` |  |
| `CalendarDay` |  | |  | `cast( ' ' as calendarday )` | `NUMC(2)` | Calendar Day |
| `PlantCountry` |  | |  | `cast( ' ' as land1 )` | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  | `cast( ' ' as regio )` | `CHAR(3)` | Region (State, Province, County) |
| `Country` |  | |  | `cast( ' ' as land1 )` | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `cast( ' ' as regio )` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  | `cast( ' ' as kunag )` | `CHAR(10)` | Sold-to Party |
| `ShipToParty` |  | |  | `cast( ' ' as abap.char(10) )` | `CHAR(10)` |  |
| `SoldToPartyCountry` |  | |  | `cast( ' ' as land1 )` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  | `cast( ' ' as regio )` | `CHAR(3)` | Region (State, Province, County) |
| `ShipToCountry` |  | |  | `cast( ' ' as land1 )` | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  | `cast( ' ' as regio )` | `CHAR(3)` | Region (State, Province, County) |
| `SupplyProtectionName` |  | |  | `cast( ' ' as sup_object_name )` | `CHAR(60)` | Name |
| `SupAssgmtAggrgQtyUnit` |  | |  | `cast( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `NmbrOfItemsInOrder` |  | |  | `cast( 1 as item_issues )` | `INT4(10)` | Item Issues in Order |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  | `cast( Demand.TransactionCurrency as waerk )` | `CUKY(5)` | SD Document Currency |
| `TotActualAmtInDisplayCurrency` |  | |  | `cast(currency_conversion( amount => Demand.NetAmount, source_currency => Demand.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => cast($session.system_date as abap.dats), round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true, error_handling => 'SET_TO_NULL' )as net_amount_in_dsp_crcy)` | `CURR(19)` | Net Value in Display Currency |
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
| `_ShipToParty` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |

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
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_SalesDocumentRjcnReason` | `I_SalesDocumentRjcnReason` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDREJECTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDREJECTION')/$value)*

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
  sqlViewName: 'IARNALYSSOREJ',
  compiler.compareFilter: true,
  preserveKey:true
 }
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #ANALYTICAL_CUBE
}
@Metadata:{
  allowExtensions:              true,
  ignorePropagatedAnnotations:  true
}
@EndUserText.label: 'Sales Order Rejection'
define view I_ARunAnlytsSlsOrdRejection
  with parameters
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_SalesDocumentItem    as Demand
    inner join   I_SupDmndMaterialPlant as SupDmndMaterialPlant on  Demand.Plant   = SupDmndMaterialPlant.Plant
                                                                and Demand.Product = SupDmndMaterialPlant.Material
  association [0..1] to I_Product                 as _Product                 on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup            as _ProductGroup            on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype             as _ProductType             on  $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization       as _SalesOrg                on  $projection.salesorganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel     as _DistrChnl               on  $projection.distributionchannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division                as _Divn                    on  $projection.division = _Divn.Division
  association [0..1] to I_SalesDistrict           as _SalesDist               on  $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_Plant                   as _Plant                   on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer                as _SoldToParty             on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_Customer                as _ShipToParty             on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Currency                as _DisplayCurrency         on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [0..1] to I_UnitOfMeasure           as _BaseUnit                on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_SupDmndAllDocRqmtType   as _Rqmt                    on  $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_SalesDocument           as _SalesDocument           on  $projection.RequirementDocumentNumber = _SalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem       as _SalesDocumentItem       on  $projection.RequirementDocumentNumber = _SalesDocumentItem.SalesDocument
                                                                              and $projection.RequirementDocumentItem   = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_SalesDocumentRjcnReason as _SalesDocumentRjcnReason on  $projection.SalesDocumentRjcnReason = _SalesDocumentRjcnReason.SalesDocumentRjcnReason

{
  key SalesDocument                                                 as RequirementDocumentNumber,
  key SalesDocumentItem                                             as RequirementDocumentItem,
      hextobin( '00000000000000000000000000000000' )                as SupProtTimeBucketUUID,
      cast( ' ' as mbdat )                                          as RequestedDate,
      cast( ' ' as mbdat )                                          as ProductAvailabilityDate,
      cast( ' ' as abap.char(2) )                                   as RequirementType,
      cast( ' ' as ddtext )                                         as RequirementTypeName,
      cast(
          concat(concat(SalesDocument, '/'), SalesDocumentItem)
          as arun_doc_item_unique_id preserving type
      )                                                             as ARunDocumentItemUniqueID,

      Demand._SalesDocument.RequestedDeliveryDate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast(Demand.RequestedQuantityInBaseUnit  as abap.quan(17, 3)) as RequestedRqmtQtyInBaseUnit,
      Demand.BaseUnit                                               as BaseUnit,
      @ObjectModel.foreignKey.association: '_Product'
      SupDmndMaterialPlant.Material                                 as Product,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      SupDmndMaterialPlant.MaterialGroup                            as ProductGroup,
      @ObjectModel.foreignKey.association: '_ProductType'
      MaterialType                                                  as ProductType,
      CrossPlantConfigurableProduct,
      @ObjectModel.foreignKey.association: '_Plant'
      SupDmndMaterialPlant.Plant                                    as Plant,
      @ObjectModel.foreignKey.association: '_SalesOrg'
      _SalesDocument.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistrChnl'
      _SalesDocument.DistributionChannel,
      @ObjectModel.foreignKey.association: '_Divn'
      _Plant.Division,
      @ObjectModel.foreignKey.association: '_SalesDist'
      SalesDistrict,
      Demand._SalesDocument.SalesOffice                             as SalesOffice,
      Demand._SalesDocument.SalesGroup                              as SalesGroup,
      //@ObjectModel.foreignKey.association: '_SoldToParty'
      //Demand._SalesDocument.SoldToParty                                                  as  SoldToParty,
      //      @ObjectModel.foreignKey.association: '_SoldToParty'
      //      _SoldToParty.Customer                                            as  SoldToParty,
      //      @ObjectModel.foreignKey.association: '_ShipToParty'
      //      _ShipToParty.Customer                                            as  ShipToParty,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      _SalesDocument.BillingCompanyCode                             as CompanyCode,
      StorageLocation,
      RequirementSegment,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      cast(:P_DisplayCurrency as vdm_v_display_currency)            as DisplayCurrency,
      Demand.FashionCancelDate                                      as FashionCancelDate,
      Demand.ProductSeasonYear                                      as ProductSeasonYear,
      Demand.ProductSeason                                          as ProductSeason,
      Demand.ProductCollection                                      as ProductCollection,
      Demand.ProductTheme                                           as ProductTheme,
      Demand.ProductCharacteristic1                                 as ProductCharacteristic1,
      Demand.ProductCharacteristic2                                 as ProductCharacteristic2,
      Demand.ProductCharacteristic3                                 as ProductCharacteristic3,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      Demand.SalesDocumentRjcnReason                                as SalesDocumentRjcnReason,

      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast( '0' as meng15 )                                         as ConfirmedRqmtQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast( '0' as abap.quan(18, 3) )                               as DeliveredQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast( '0' as abap.quan(21, 3) )                               as OpenDemandQuantity,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast( '0' as meng15 )                                         as AssignedQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast( '0' as meng15 )                                         as NormalAssignedQuantityInBsUnt,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast( 0 as abap.dec( 12, 3 ) )                                as PreviewAssignedQuantityInBsUnt,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      cast( 0 as abap.dec( 12, 3 ) )                                as ARunTmpAssignedQuantityInBsUnt,
      cast( ' ' as calendaryear )                                   as CalendarYear,
      @ObjectModel.text.element: 'CalendarMonthName'
      cast( ' ' as calendarmonth )                                  as CalendarMonth,
      cast( ' ' as ddtext )                                         as CalendarMonthName,
      cast( ' ' as abap.char(63) )                                  as CalendarWeek,
      cast( ' ' as calendarday )                                    as CalendarDay,
      cast( ' ' as land1 )                                          as PlantCountry,
      cast( ' ' as regio )                                          as PlantRegion,
      cast( ' ' as land1 )                                          as Country,
      cast( ' ' as regio )                                          as Region,
      cast( ' ' as kunag )                                          as SoldToParty,
      cast( ' ' as abap.char(10) )                                  as ShipToParty,
      cast( ' ' as land1 )                                          as SoldToPartyCountry,
      cast( ' ' as regio )                                          as SoldToPartyRegion,
      //cast( ' ' as kunnr ) as ShipToParty,
      cast( ' ' as land1 )                                          as ShipToCountry,
      cast( ' ' as regio )                                          as CustomerRegion,
      cast( ' ' as sup_object_name )                                as SupplyProtectionName,
      @Semantics.unitOfMeasure: true
      cast( ' ' as meins )                                          as SupAssgmtAggrgQtyUnit,
      @DefaultAggregation: #SUM
      cast( 1 as item_issues )                                      as NmbrOfItemsInOrder,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      Demand.NetPriceAmount                                         as NetPriceAmount,
      @Semantics.currencyCode: true
      cast( Demand.TransactionCurrency as waerk )                   as DocumentCurrency,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast(currency_conversion(
        amount => Demand.NetAmount,
        source_currency => Demand.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => cast($session.system_date as abap.dats),
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true,
        error_handling => 'SET_TO_NULL'
      )as net_amount_in_dsp_crcy)                                   as TotActualAmtInDisplayCurrency,
      //      cast( '0' as net_amount_in_dsp_crcy ) as TotActualAmtInDisplayCurrency,

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
      _SoldToParty,
      _ShipToParty,
      _DisplayCurrency,
      _BaseUnit,
      _Rqmt,
      _SalesDocument,
      _SalesDocumentItem,
      _SalesDocumentRjcnReason
}
where
  SalesDocumentRjcnReason is not initial
```
