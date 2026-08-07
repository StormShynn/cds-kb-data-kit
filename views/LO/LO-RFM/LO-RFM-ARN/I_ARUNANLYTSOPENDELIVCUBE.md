---
name: I_ARUNANLYTSOPENDELIVCUBE
description: Open Deliveries - Cube
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSOPENDELIVCUBE')/$value
semantic_en: Open Deliveries - Cube
semantic_vi: Open Deliveries - Cube — CDS view tổng hợp dựa trên I_SupDmndOpenDelivCube.
keywords:
  - open
  - deliveries
  - cube
  - delivery
  - document
  - item
  - requirement
  - type
  - sales
  - district
  - shipping
  - point
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNANLYTSOPENDELIVCUBE

**Open Deliveries - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSOPENDELIVCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` | ✓ | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | ✓ | |  |  | `NUMC(6)` | Delivery Item |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `HeaderBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block in SD Document |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Delivery Block (Document Header) |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `Product` |  | |  | `Material` | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ProductGroup` |  | |  | `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `SupAssgmtAggrgQtyUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistrChnl` | | ✓ | | | | |
| `_Divn` | | ✓ | | | | |
| `_SalesDist` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_DeliveryDocumentType` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_SalesOrg` | `I_SalesOrganization` | [0..1] |
| `_DistrChnl` | `I_DistributionChannel` | [0..1] |
| `_Divn` | `I_Division` | [0..1] |
| `_SalesDist` | `I_SalesDistrict` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_DeliveryDocumentType` | `I_DeliveryDocumentType` | [0..1] |
| `_DeliveryPriority` | `I_DeliveryPriority` | [0..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_HeaderBillingBlockReason` | `I_BillingBlockReason` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSOPENDELIVCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSOPENDELIVCUBE')/$value)*

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
  sqlViewName: 'IARNALYSOPDLV',
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
@EndUserText.label: 'Open Deliveries - Cube'
define view I_ARunAnlytsOpenDelivCube
  as select from I_SupDmndOpenDelivCube
  association [0..1] to I_Product               as _Product                  on $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup          as _ProductGroup             on $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_SalesOrganization     as _SalesOrg                 on $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel   as _DistrChnl                on $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division              as _Divn                     on $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict         as _SalesDist                on $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_SalesOffice           as _SalesOffice              on $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_Plant                 as _Plant                    on $projection.Plant = _Plant.Plant
  association [0..1] to I_Customer              as _SoldToParty              on $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_Customer              as _ShipToParty              on $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_SupDmndAllDocRqmtType as _Rqmt                     on $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_DeliveryDocumentType  as _DeliveryDocumentType     on $projection.DeliveryDocumentType = _DeliveryDocumentType.DeliveryDocumentType
  association [0..1] to I_DeliveryPriority      as _DeliveryPriority         on $projection.DeliveryPriority = _DeliveryPriority.DeliveryPriority
  association [0..1] to I_DeliveryBlockReason   as _DeliveryBlockReason      on $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason
  association [0..1] to I_BillingBlockReason    as _HeaderBillingBlockReason on $projection.HeaderBillingBlockReason = _HeaderBillingBlockReason.BillingBlockReason
{
  key DeliveryDocument,
  key DeliveryDocumentItem,
      @ObjectModel.foreignKey.association: '_Rqmt'
      RequirementType,
      @ObjectModel.foreignKey.association: '_SalesDist'
      SalesDistrict,
      ShippingPoint,
      @ObjectModel.foreignKey.association: '_SalesOrg'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DeliveryDocumentType'
      DeliveryDocumentType,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      HeaderBillingBlockReason,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      DeliveryBlockReason,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      DeliveryPriority,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_Product'
      Material      as Product,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      StorageLocation,
      Batch,
      StockSegment,
      RequirementSegment,
      @ObjectModel.foreignKey.association: '_DistrChnl'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Divn'
      Division,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup as ProductGroup,
      ProductAvailabilityDate,
      RequestedDeliveryDate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      DeliveredQuantityInBaseUnit,
      @Semantics.unitOfMeasure: true
      SupAssgmtAggrgQtyUnit,
      _Product,
      _ProductGroup,
      _SalesOrg,
      _DistrChnl,
      _Divn,
      _SalesDist,
      _SalesOffice,
      _Plant,
      _SoldToParty,
      _ShipToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Rqmt,
      _DeliveryDocumentType,
      _HeaderBillingBlockReason,
      _DeliveryBlockReason,
      _DeliveryPriority
}
```
