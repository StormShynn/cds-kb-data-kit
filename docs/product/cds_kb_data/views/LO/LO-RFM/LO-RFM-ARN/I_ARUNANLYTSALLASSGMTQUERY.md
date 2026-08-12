---
name: I_ARUNANLYTSALLASSGMTQUERY
description: "Demand and Assignments - Query"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTQUERY')/$value
semantic_en: "Demand and Assignments - Query"
semantic_vi: "Demand and Assignments - Query — CDS view tổng hợp dựa trên I_ARunAnlytsAllAssgmtCube."
keywords:
  - "demand"
  - "and"
  - "assignments"
  - "query"
  - "plant"
  - "product"
  - "storage"
  - "location"
  - "batch"
  - "requirement"
  - "type"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNANLYTSALLASSGMTQUERY

**Demand and Assignments - Query**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` | Requirement Type |
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Purchasing requirement document |
| `RequirementDocumentItem` | ✓ | |  | `cast( RequirementDocumentItem as arun_sditem )` | `NUMC(6)` | Item number of the SD document |
| `SupProtTimeBucketUUID` | ✓ | |  |  | `RAW(16)` |  |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` | ARun Stock Source |
| `SupplyNumber` | ✓ | |  | `cast( SupplyNumber as ebeln )` | `CHAR(10)` | Purchasing Document Number |
| `SupplyItem` | ✓ | |  | `cast( SupplyItem as arun_poitm )` | `NUMC(5)` | Item number of Purchase Order |
| `SupplyScheduleLine` | ✓ | |  | `cast( SupplyScheduleLine as arun_setenr )` | `NUMC(4)` | ARun Stock schedule line |
| `RequestedDate` | ✓ | |  |  | `DATS(8)` | Requested date |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `SupplyDeliveryDate` | ✓ | |  |  | `DATS(8)` | Confirmed Delivery Date for Future Receipts |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `ARunSupDlyHrznInWeeks` |  | |  |  | `CHAR(2)` |  |
| `SupAssgmtSupAvailySts` |  | |  |  | `CHAR(2)` | Supply Availability Status for a Demand |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` | ARun Stock Source |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SupAssgmtAggrgQtyUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistrChnl` | | ✓ | | | | |
| `_Divn` | | ✓ | | | | |
| `_SalesDist` | | ✓ | | | | |
| `_SupType` | | ✓ | | | | |
| `_SupDlyHrznText` | | ✓ | | | | |
| `_SupAvailySts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductType` | `I_Producttype` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_SalesOrg` | `I_SalesOrganization` | [0..1] |
| `_DistrChnl` | `I_DistributionChannel` | [0..1] |
| `_Divn` | `I_Division` | [0..1] |
| `_SalesDist` | `I_SalesDistrict` | [0..1] |
| `_SupType` | `I_SupDmndAllDocSupType` | [0..1] |
| `_SupDlyHrznText` | `I_ARunSupDlyHrznText` | [0..1] |
| `_SupAvailySts` | `I_SupAssgmtSupAvailyStsTxt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTQUERY')/$value)*

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
  sqlViewName: 'IARNALYSTSUPDMQ',
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
@EndUserText.label: 'Demand and Assignments - Query'
define view I_ARunAnlytsAllAssgmtQuery
  as select from I_ARunAnlytsAllAssgmtCube
  association [0..1] to I_Product                  as _Product        on $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup             as _ProductGroup   on $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype              as _ProductType    on $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_Plant                    as _Plant          on $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode              as _CompanyCode    on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer                 as _Customer       on $projection.Customer = _Customer.Customer
  association [0..1] to I_UnitOfMeasure            as _BaseUnit       on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_SupDmndAllDocRqmtType    as _Rqmt           on $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_SalesOrganization        as _SalesOrg       on $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel      as _DistrChnl      on $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division                 as _Divn           on $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict            as _SalesDist      on $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_SupDmndAllDocSupType     as _SupType        on $projection.AssignedSupplyType = _SupType.AssignedSupplyType
  association [0..1] to I_ARunSupDlyHrznText       as _SupDlyHrznText on $projection.ARunSupDlyHrznInWeeks = _SupDlyHrznText.ARunSupDlyHrznInWeeks
  association [0..1] to I_SupAssgmtSupAvailyStsTxt as _SupAvailySts   on $projection.SupAssgmtSupAvailySts = _SupAvailySts.SupAssgmtSupAvailySts
{
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_Product'
  key Product,
  key StorageLocation,
  key Batch,
      @ObjectModel.foreignKey.association: '_Rqmt'
  key RequirementType,
  key RequirementDocumentNumber,
  key cast( RequirementDocumentItem as arun_sditem ) as RequirementDocumentItem,
  key SupProtTimeBucketUUID,
      @ObjectModel.foreignKey.association: '_SupType'
  key AssignedSupplyType,
  key cast( SupplyNumber as ebeln )                  as SupplyNumber,
  key cast( SupplyItem as arun_poitm )               as SupplyItem,
  key cast( SupplyScheduleLine as arun_setenr )      as SupplyScheduleLine,
  key RequestedDate,
  key ProductAvailabilityDate,
  key SupplyDeliveryDate,
      RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_SupDlyHrznText'
      ARunSupDlyHrznInWeeks,
      @ObjectModel.foreignKey.association: '_SupAvailySts'
      SupAssgmtSupAvailySts,
      //@ObjectModel.foreignKey.association: '_SupSrceText'
      SupAssgmtSource,
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
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @ObjectModel.foreignKey.association: '_ProductType'
      ProductType,
      CrossPlantConfigurableProduct,
      SupplyProtectionName,
      @ObjectModel.foreignKey.association: '_SalesOrg'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistrChnl'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Divn'
      Division,
      @ObjectModel.foreignKey.association: '_SalesDist'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @Semantics.unitOfMeasure: true
      SupAssgmtAggrgQtyUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.currencyCode: true
      DocumentCurrency,
      RequirementSegment,
      //Associations
      _Product,
      _ProductGroup,
      _ProductType,
      //      _SupSrceText,
      _SalesOrg,
      _DistrChnl,
      _Divn,
      _SalesDist,
      _Plant,
      _CompanyCode,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Customer,
      _BaseUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SupType,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Rqmt,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SupDlyHrznText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SupAvailySts
}
```
