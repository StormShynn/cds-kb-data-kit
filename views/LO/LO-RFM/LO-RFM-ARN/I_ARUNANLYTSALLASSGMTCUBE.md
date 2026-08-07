---
name: I_ARUNANLYTSALLASSGMTCUBE
description: "Demand and Assignments - Cube"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTCUBE')/$value
semantic_en: "Demand and Assignments - Cube"
semantic_vi: "Demand and Assignments - Cube — CDS view tổng hợp dựa trên I_SupDmndAllDocAssgmt."
keywords:
  - "demand"
  - "and"
  - "assignments"
  - "cube"
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
# I_ARUNANLYTSALLASSGMTCUBE

**Demand and Assignments - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Product` | ✓ | |  | `Material` | `CHAR(40)` | Material Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` | Requirement Type |
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Purchasing requirement document |
| `RequirementDocumentItem` | ✓ | |  |  | `CHAR(6)` |  |
| `SupProtTimeBucketUUID` | ✓ | |  |  | `RAW(16)` |  |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` | ARun Stock Source |
| `SupplyNumber` | ✓ | |  |  | `CHAR(12)` |  |
| `SupplyItem` | ✓ | |  |  | `CHAR(6)` |  |
| `SupplyScheduleLine` | ✓ | |  |  | `CHAR(4)` |  |
| `RequestedDate` | ✓ | |  |  | `DATS(8)` | Requested date |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `SupplyDeliveryDate` | ✓ | |  |  | `DATS(8)` | Confirmed Delivery Date for Future Receipts |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `ARunSupDlyHrznInWeeks` |  | |  |  | `CHAR(2)` |  |
| `SupAssgmtSupAvailySts` |  | |  | `cast( case when ARunSupDlyHrznInWeeks = '00' then '01' else '02' end as arun_supply_avail_status )` | `CHAR(2)` | Supply Availability Status for a Demand |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` | ARun Stock Source |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ProductGroup` |  | |  | `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductType` |  | |  | `MaterialType` | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SupAssgmtAggrgQtyUnit` |  | |  | `cast( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSALLASSGMTCUBE')/$value)*

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
  sqlViewName: 'IARNALYSTSUPDMD',
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
@EndUserText.label: 'Demand and Assignments - Cube'
define view I_ARunAnlytsAllAssgmtCube
  as select from I_SupDmndAllDocAssgmt as Assgmt
{
  key Assgmt.Plant,
  key Assgmt.Material                                                                                      as Product,
  key Assgmt.StorageLocation,
  key Assgmt.Batch,
  key Assgmt.RequirementType,
  key Assgmt.RequirementDocumentNumber,
  key Assgmt.RequirementDocumentItem,
  key Assgmt.SupProtTimeBucketUUID,
  key Assgmt.AssignedSupplyType                                                                            as AssignedSupplyType,
  key Assgmt.SupplyNumber,
  key Assgmt.SupplyItem,
  key Assgmt.SupplyScheduleLine,
  key Assgmt.RequestedDate,
  key Assgmt.ProductAvailabilityDate,
  key Assgmt.SupplyDeliveryDate,
      Assgmt.RequestedDeliveryDate,
      ARunSupDlyHrznInWeeks,
      cast( case  when ARunSupDlyHrznInWeeks = '00' then '01' else  '02' end as arun_supply_avail_status ) as SupAssgmtSupAvailySts,
      SupAssgmtSource,
      @Semantics.calendar.year: true
      Assgmt.CalendarYear,
      @Semantics.calendar.month: true
      @ObjectModel.text.element: 'CalendarMonthName'
      Assgmt.CalendarMonth,
      @Semantics.text: true
      Assgmt.CalendarMonthName,
      @Semantics.calendar.week: true
      Assgmt.CalendarWeek,
      @Semantics.calendar.dayOfMonth: true
      Assgmt.CalendarDay,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.AssignedQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.NormalAssignedQuantityInBsUnt,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.PreviewAssignedQuantityInBsUnt,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.ARunTmpAssignedQuantityInBsUnt,
      Assgmt.BaseUnit,
      Assgmt.MaterialGroup                                                                                 as ProductGroup,
      Assgmt.MaterialType                                                                                  as ProductType,
      Assgmt.CrossPlantConfigurableProduct,
      Assgmt.SupplyProtectionName,
      Assgmt.SalesOrganization,
      Assgmt.DistributionChannel,
      Assgmt.Division,
      Assgmt.SalesDistrict,
      Assgmt.Customer,
      Assgmt.CompanyCode,
      @Semantics.unitOfMeasure: true
      cast( ' ' as meins )                                                                                 as SupAssgmtAggrgQtyUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      Assgmt.NetPriceAmount,
      @Semantics.currencyCode: true
      Assgmt.DocumentCurrency,
      Assgmt.RequirementSegment
}
union all select from I_SupDmndAllDocTotDmnd
{
  key Plant,
  key Material                                 as Product,
  key StorageLocation,
  key cast ('' as charg_d )                    as Batch,
  key RequirementType,
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key SupProtTimeBucketUUID,
  key ''                                       as AssignedSupplyType,
  key ''                                       as SupplyNumber,
  key '000000'                                 as SupplyItem,
  key '0000'                                   as SupplyScheduleLine,
  key RequestedDate,
  key ProductAvailabilityDate,
  key '00000000'                               as SupplyDeliveryDate,
      RequestedDeliveryDate,
      ''                                       as ARunSupDlyHrznInWeeks,
      cast( '00' as arun_supply_avail_status ) as SupAssgmtSupAvailySts,
      ''                                       as SupAssgmtSource,
      CalendarYear,
      CalendarMonth,
      CalendarMonthName,
      CalendarWeek,
      CalendarDay,
      @DefaultAggregation: #SUM
      OpenDemandQuantity                       as AssignedQuantityInBaseUnit,
      //      @EndUserText.label: 'Normal Assigned'
      @DefaultAggregation: #SUM
      0                                        as NormalAssignedQuantityInBsUnt,
      //      @EndUserText.label: 'Preview Assigned'
      @DefaultAggregation: #SUM
      0                                        as PreviewAssignedQuantityInBsUnt,
      //      @EndUserText.label: 'Temporary Assigned'
      @DefaultAggregation: #SUM
      ARunTmpAssignedQuantityInBsUnt,
      BaseUnit,
      MaterialGroup                            as ProductGroup,
      MaterialType                             as ProductType,
      CrossPlantConfigurableProduct,
      SupplyProtectionName,
      SalesOrganization,
      DistributionChannel,
      Division,
      SalesDistrict,
      Customer,
      CompanyCode,
      @Semantics.unitOfMeasure: true
      cast( ' ' as meins )                     as SupAssgmtAggrgQtyUnit,
      NetPriceAmount,
      DocumentCurrency,
      RequirementSegment
}
where
  OpenDemandQuantity > 0
```
