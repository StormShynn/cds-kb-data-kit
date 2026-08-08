---
name: I_ARUNANLYTSSUPDMNDOVWCUBE
description: "Overview of Supply and Demand - Cube"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPDMNDOVWCUBE')/$value
semantic_en: "Overview of Supply and Demand - Cube"
semantic_vi: "Overview of Supply and Demand - Cube — CDS view tổng hợp dựa trên I_SupDmndAllDocOvwCube."
keywords:
  - "overview"
  - "supply"
  - "and"
  - "demand"
  - "cube"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "prot"
  - "time"
  - "bucket"
  - "product"
  - "availability"
  - "date"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNANLYTSSUPDMNDOVWCUBE

**Overview of Supply and Demand - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPDMNDOVWCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` | ✓ | |  |  | `RAW(16)` |  |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` |  |
| `SupplyNumber` | ✓ | |  |  | `CHAR(12)` |  |
| `SupplyItem` | ✓ | |  |  | `CHAR(5)` |  |
| `SupplyScheduleLine` | ✓ | |  |  | `CHAR(4)` |  |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` |  |
| `Product` | ✓ | |  | `Material` | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `PlantCountry` |  | | `_ARunPlant` | `Country` | `CHAR(3)` | Country/Region Key |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(21)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(25)` |  |
| `AssignedSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `NormalSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `PreviewSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `ARunTmpAssgdSupQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `ProductGroup` |  | |  | `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductType` |  | |  | `MaterialType` | `CHAR(4)` | Material Type |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | | `_SalesDocumentItem._SalesDocument` | `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | | `_SalesDocumentItem._SalesDocument` | `SalesGroup` | `CHAR(3)` | Sales Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SoldToParty` |  | |  | `Customer` | `CHAR(10)` | Customer Number |
| `SoldToPartyCountry` |  | | `_SoldToParty` | `Country` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | | `_SoldToParty` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  | `Customer` | `CHAR(10)` | Customer Number |
| `ShipToCountry` |  | | `_ShipToParty` | `Country` | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | | `_ShipToParty` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Country` |  | | `_SalesOrg._Address` | `Country` | `CHAR(3)` | Country/Region Key |
| `Region` |  | | `_SalesOrg._Address` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SupAssgmtAggrgQtyUnit` |  | |  | `cast( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
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
| `_ARunPlant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_SupType` | | ✓ | | | | |
| `_SupSrce` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_PlantCountry` | | ✓ | | | | |

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
| `_ARunPlant` | `I_SupDmndOvwPlant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SupType` | `I_SupDmndAllDocSupType` | [0..1] |
| `_SupSrce` | `I_SupDmndAllDocSupSource` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_PlantCountry` | `I_CountryGeoPoint` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPDMNDOVWCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPDMNDOVWCUBE')/$value)*

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
  sqlViewName: 'IARNANLTSADOVWC',
  compiler.compareFilter: true,
  preserveKey:true
 }
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #X,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #ANALYTICAL_CUBE
}
@Metadata:{
  allowExtensions:              true,
  ignorePropagatedAnnotations:  true
}
@EndUserText.label: 'Overview of Supply and Demand - Cube'
define view I_ARunAnlytsSupDmndOvwCube
  as select from I_SupDmndAllDocOvwCube
  association [0..1] to I_Product                as _Product           on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup           as _ProductGroup      on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype            as _ProductType       on  $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization      as _SalesOrg          on  $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel    as _DistrChnl         on  $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division               as _Divn              on  $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict          as _SalesDist         on  $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_SalesOffice            as _SalesOffice       on  $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_SalesGroup             as _SalesGroup        on  $projection.SalesGroup = _SalesGroup.SalesGroup
  association [0..1] to I_Plant                  as _Plant             on  $projection.Plant = _Plant.Plant
  association [0..1] to I_SupDmndOvwPlant        as _ARunPlant         on  $projection.Plant = _ARunPlant.Plant
  association [0..1] to I_CompanyCode            as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer               as _SoldToParty       on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_Customer               as _ShipToParty       on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_UnitOfMeasure          as _BaseUnit          on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_SupDmndAllDocSupType   as _SupType           on  $projection.AssignedSupplyType = _SupType.AssignedSupplyType
  association [0..1] to I_SupDmndAllDocSupSource as _SupSrce           on  $projection.SupAssgmtSource = _SupSrce.SupAssgmtSource
  association [0..1] to I_SalesDocumentItem      as _SalesDocumentItem on  $projection.RequirementDocumentNumber = _SalesDocumentItem.SalesDocument
                                                                       and $projection.RequirementDocumentItem   = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_SupDmndAllDocRqmtType  as _Rqmt              on  $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_CountryGeoPoint        as _PlantCountry      on  $projection.PlantCountry = _PlantCountry.Country
{
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key SupProtTimeBucketUUID,
  key ProductAvailabilityDate,
      @ObjectModel.foreignKey.association: '_Rqmt'
  key RequirementType,
  key SupplyNumber,
  key SupplyItem,
  key SupplyScheduleLine,
      @ObjectModel.foreignKey.association: '_SupType'
  key AssignedSupplyType,
      @ObjectModel.foreignKey.association: '_Product'
  key Material                                      as Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
  key Batch,
  key StorageLocation,
      @ObjectModel.foreignKey.association: '_PlantCountry'
      _ARunPlant.Country                            as PlantCountry,
      RequestedDeliveryDate,
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
      OpenSupplyQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      AssignedSupplyQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      NormalSupplyQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      PreviewSupplyQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      ARunTmpAssgdSupQtyInBaseUnit,
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
      MaterialGroup                                 as ProductGroup,
      @ObjectModel.foreignKey.association: '_ProductType'
      MaterialType                                  as ProductType,
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
      @ObjectModel.foreignKey.association: '_SalesOffice'
      _SalesDocumentItem._SalesDocument.SalesOffice as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      _SalesDocumentItem._SalesDocument.SalesGroup  as SalesGroup,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      Customer                                      as SoldToParty,
      _SoldToParty.Country                          as SoldToPartyCountry,
      _SoldToParty.Region                           as SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      Customer                                      as ShipToParty,
      _ShipToParty.Country                          as ShipToCountry,
      _ShipToParty.Region                           as CustomerRegion,
      _SalesOrg._Address.Country                    as Country,
      _SalesOrg._Address.Region                     as Region,
      @Semantics.unitOfMeasure: true
      cast( ' ' as meins )                          as SupAssgmtAggrgQtyUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.currencyCode: true
      DocumentCurrency,
      //Associations
      _Product,
      _ProductGroup,
      _ProductType,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SupSrce,
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
      _SupType,
      _SalesDocumentItem,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Rqmt,
      _ARunPlant,
      _PlantCountry
}
```
