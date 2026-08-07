---
name: I_ARUNANLYTSTOTDMNDCUBE
description: Supply Assignment Total Demand - Cube
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTDMNDCUBE')/$value
semantic_en: Supply Assignment Total Demand - Cube
semantic_vi: Supply Assignment Total Demand - Cube — CDS view tổng hợp dựa trên I_SupDmndAllDocTotDmnd.
keywords:
  - supply
  - assignment
  - total
  - demand
  - cube
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
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNANLYTSTOTDMNDCUBE

**Supply Assignment Total Demand - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTDMNDCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` | ✓ | |  |  | `RAW(16)` |  |
| `RequestedDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` |  |
| `RequirementTypeName` |  | | `_Rqmt` | `RequirementTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `ARunDocumentItemUniqueID` |  | |  | `cast( concat(concat(RequirementDocumentNumber, '/'), RequirementDocumentItem) as arun_doc_item_unique_id preserving type )` | `CHAR(17)` | Unique Identification for Supply Assignment Document Item |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(21)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `SupAssgmtReservedQtyInBaseUnit` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `FixedQuantityInBaseUnit` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `OnHoldQuantityInBaseUnit` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `SimulationRdyForRelQtyInBsUnt` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `ARunCancDteSupDlyTmeHrznCode` |  | |  | `case when _SalesDocumentItem.FashionCancelDate <> '00000000' and _SalesDocumentItem.FashionCancelDate < $session.system_date then '00' else ' ' end` | `CHAR(2)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `Product` |  | |  | `Material` | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  | `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductType` |  | |  | `MaterialType` | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Country` |  | | `_SalesOrg._Address` | `Country` | `CHAR(3)` | Country/Region Key |
| `Region` |  | | `_SalesOrg._Address` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | | `_SalesDocumentItem._SalesDocument` | `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | | `_SalesDocumentItem._SalesDocument` | `SalesGroup` | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  | `Customer` | `CHAR(10)` | Customer Number |
| `SoldToPartyCountry` |  | | `_SoldToParty` | `Country` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | | `_SoldToParty` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  | `Customer` | `CHAR(10)` | Customer Number |
| `ShipToCountry` |  | | `_ShipToParty` | `Country` | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | | `_ShipToParty` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `SupAssgmtAggrgQtyUnit` |  | |  | `cast( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `TotActualAmtInDisplayCurrency` |  | |  | `cast(currency_conversion( amount => ActlAmt, source_currency => DocumentCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => cast($session.system_date as abap.dats), round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true, error_handling => 'SET_TO_NULL' )as net_amount_in_dsp_crcy)` | `CURR(19)` | Net Value in Display Currency |
| `FashionCancelDate` |  | | `_SalesDocumentItem` | `FashionCancelDate` | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` |  | | `_SalesDocumentItem` | `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` |  | | `_SalesDocumentItem` | `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` |  | | `_SalesDocumentItem` | `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | | `_SalesDocumentItem` | `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | | `_SalesDocumentItem` | `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | | `_SalesDocumentItem` | `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | | `_SalesDocumentItem` | `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistrChnl` | | ✓ | | | | |
| `_Divn` | | ✓ | | | | |
| `_SalesDist` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_PlantCountry` | | ✓ | | | | |
| `_ShipToCountry` | | ✓ | | | | |

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
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_PlantCountry` | `I_CountryGeoPoint` | [0..1] |
| `_ShipToCountry` | `I_CountryGeoPoint` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTDMNDCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTDMNDCUBE')/$value)*

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
  sqlViewName: 'IARNALYSTDMND',
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
@EndUserText.label: 'Supply Assignment Total Demand - Cube'
define view I_ARunAnlytsTotDmndCube
  with parameters
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_SupDmndAllDocTotDmnd as Demand
  association [0..1] to I_Product               as _Product           on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup          as _ProductGroup      on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype           as _ProductType       on  $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization     as _SalesOrg          on  $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel   as _DistrChnl         on  $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division              as _Divn              on  $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict         as _SalesDist         on  $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_SalesOffice           as _SalesOffice       on  $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_SalesGroup            as _SalesGroup        on  $projection.SalesGroup = _SalesGroup.SalesGroup
  association [0..1] to I_Plant                 as _Plant             on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode           as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer              as _SoldToParty       on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_Customer              as _ShipToParty       on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_UnitOfMeasure         as _BaseUnit          on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_SupDmndAllDocRqmtType as _Rqmt              on  $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_SalesDocumentItem     as _SalesDocumentItem on  $projection.RequirementDocumentNumber = _SalesDocumentItem.SalesDocument
                                                                      and $projection.RequirementDocumentItem   = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_Currency              as _DisplayCurrency   on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  //  association [0..1] to I_CountryRegionGeoPoint as _PlantRegion       on  $projection.PlantCountry = _PlantRegion.Country
  //                                                                      and $projection.PlantRegion  = _PlantRegion.Region
  association [0..1] to I_CountryGeoPoint       as _PlantCountry      on  $projection.PlantCountry = _PlantCountry.Country
  association [0..1] to I_CountryGeoPoint       as _ShipToCountry     on  $projection.ShipToCountry = _ShipToCountry.Country

{
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key Demand.SupProtTimeBucketUUID,
  key RequestedDate,
  key ProductAvailabilityDate,
      @ObjectModel.foreignKey.association: '_Rqmt'
  key Demand.RequirementType,
      _Rqmt.RequirementTypeName                          as RequirementTypeName,
      cast(
          concat(concat(RequirementDocumentNumber, '/'), RequirementDocumentItem)
          as arun_doc_item_unique_id preserving type
      )                                                  as ARunDocumentItemUniqueID,
      Demand.RequestedDeliveryDate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      RequestedRqmtQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ConfirmedRqmtQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      DeliveredQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      OpenDemandQuantity,
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
      ARunPhysSupAssgdQtyInBsUnt,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      AssignedQuantityInBaseUnit                         as SupAssgmtReservedQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      AssignedQuantityInBaseUnit                         as FixedQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      AssignedQuantityInBaseUnit                         as OnHoldQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      AssignedQuantityInBaseUnit                         as SimulationRdyForRelQtyInBsUnt,
      case
        when _SalesDocumentItem.FashionCancelDate <> '00000000' and
             _SalesDocumentItem.FashionCancelDate < $session.system_date
         then '00' else ' '
      end                                                as ARunCancDteSupDlyTmeHrznCode,
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
      Material                                           as Product,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup                                      as ProductGroup,
      @ObjectModel.foreignKey.association: '_ProductType'
      MaterialType                                       as ProductType,
      CrossPlantConfigurableProduct,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_PlantCountry'
      PlantCountry,
      PlantRegion,
      @ObjectModel.foreignKey.association: '_SalesOrg'
      SalesOrganization,
      _SalesOrg._Address.Country                         as Country,
      _SalesOrg._Address.Region                          as Region,
      @ObjectModel.foreignKey.association: '_DistrChnl'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Divn'
      Division,
      @ObjectModel.foreignKey.association: '_SalesDist'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      _SalesDocumentItem._SalesDocument.SalesOffice      as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      _SalesDocumentItem._SalesDocument.SalesGroup       as SalesGroup,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      Customer                                           as SoldToParty,
      _SoldToParty.Country                               as SoldToPartyCountry,
      _SoldToParty.Region                                as SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      Customer                                           as ShipToParty,
      @ObjectModel.foreignKey.association: '_ShipToCountry'
      _ShipToParty.Country                               as ShipToCountry,
      _ShipToParty.Region                                as CustomerRegion,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      StorageLocation,
      SupplyProtectionName,
      @Semantics.unitOfMeasure: true
      cast( ' ' as meins )                               as SupAssgmtAggrgQtyUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.currencyCode: true
      DocumentCurrency,
      RequirementSegment,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      cast(:P_DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast(currency_conversion(
        amount => ActlAmt,
        source_currency => DocumentCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => cast($session.system_date as abap.dats),
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true,
        error_handling => 'SET_TO_NULL'
      )as net_amount_in_dsp_crcy)                        as TotActualAmtInDisplayCurrency,
      _SalesDocumentItem.FashionCancelDate               as FashionCancelDate,
      _SalesDocumentItem.ProductSeasonYear               as ProductSeasonYear,
      _SalesDocumentItem.ProductSeason                   as ProductSeason,
      _SalesDocumentItem.ProductCollection               as ProductCollection,
      _SalesDocumentItem.ProductTheme                    as ProductTheme,
      _SalesDocumentItem.ProductCharacteristic1          as ProductCharacteristic1,
      _SalesDocumentItem.ProductCharacteristic2          as ProductCharacteristic2,
      _SalesDocumentItem.ProductCharacteristic3          as ProductCharacteristic3,
      //Associations
      _Product,
      _ProductGroup,
      _ProductType,
      _SalesOrg,
      _DistrChnl,
      _Divn,
      _SalesDist,
      _SalesOffice,
      _SalesGroup,
      _Plant,
      _CompanyCode,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ShipToParty,
      _BaseUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Rqmt,
      _SalesDocumentItem,
      _DisplayCurrency,
      //      _PlantRegion,
      _PlantCountry,
      _ShipToCountry
}
```
