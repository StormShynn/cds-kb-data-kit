---
name: C_ARUNANLYTSOPENDELIVQUERY
description: "Open Deliveries"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSOPENDELIVQUERY')/$value
semantic_en: "Open Deliveries"
semantic_vi: "Open Deliveries — CDS view tiêu dùng dựa trên I_ARunAnlytsOpenDelivCube."
keywords:
  - "open"
  - "deliveries"
  - "delivery"
  - "document"
  - "item"
  - "requirement"
  - "type"
  - "sales"
  - "district"
  - "shipping"
  - "point"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSOPENDELIVQUERY

**Open Deliveries**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSOPENDELIVQUERY')/$value) |

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
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `SupAssgmtAggrgQtyUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSOPENDELIVQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSOPENDELIVQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #INHERITED
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNALYTSOPDLV',
  compiler.compareFilter: true,
  preserveKey:true
}
@ObjectModel:{
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   }
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations:true
@Analytics.query: true
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
@EndUserText.label: 'Open Deliveries'
define view C_ARunAnlytsOpenDelivQuery
  as select from I_ARunAnlytsOpenDelivCube
{
  key DeliveryDocument,
  key DeliveryDocumentItem,
      @EndUserText.label: 'Requirement Type'
      RequirementType,
      @EndUserText.label: 'Sales District'
      SalesDistrict,
      @EndUserText.label: 'Shipping Point'
      ShippingPoint,
      @EndUserText.label: 'Sales Organization'
      SalesOrganization,
      @EndUserText.label: 'Document Type'
      DeliveryDocumentType,
      @EndUserText.label: 'Billing Block'
      HeaderBillingBlockReason,
      @EndUserText.label: 'Delivery Block'
      DeliveryBlockReason,
      @EndUserText.label: 'Delivery Priority'
      DeliveryPriority,
      @EndUserText.label: 'Ship To Party'
      ShipToParty,
      @EndUserText.label: 'Sold To Party'
      SoldToParty,
      @EndUserText.label: 'Sales Office'
      SalesOffice,
      @EndUserText.label: 'Product'
      Product,
      @EndUserText.label: 'Plant'
      Plant,
      @EndUserText.label: 'Storage Location'
      StorageLocation,
      @EndUserText.label: 'Stock Segment'
      @Feature:'SW:RFM_SEGMTN_UI'
      StockSegment,
      @EndUserText.label: 'Requirement Segment'
      @Feature:'SW:RFM_SEGMTN_UI'
      RequirementSegment,
      @EndUserText.label: 'Distribution Channel'
      DistributionChannel,
      @EndUserText.label: 'Division'
      Division,
      @EndUserText.label: 'Product Group'
      ProductGroup,
      @EndUserText.label: 'Delivery Date'
      ProductAvailabilityDate,
      RequestedDeliveryDate,
      @EndUserText.label: 'Delivery Quantity'
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      DeliveredQuantityInBaseUnit,
      @Semantics.unitOfMeasure: true
      SupAssgmtAggrgQtyUnit
}
```
