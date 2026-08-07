---
name: C_ARUNANLYTSSUPASSGMTQRY
description: Consumption View for Assignments
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPASSGMTQRY')/$value
semantic_en: Consumption View for Assignments
semantic_vi: Consumption View for Assignments — CDS view tiêu dùng dựa trên I_ARunAnlytsSupAssgmtCube.
keywords:
  - consumption
  - for
  - assignments
  - plant
  - material
  - storage
  - location
  - batch
  - requirement
  - type
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSSUPASSGMTQRY

**Consumption View for Assignments**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPASSGMTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
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
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` | ARun Stock Source |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPASSGMTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPASSGMTQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNALYTSASGMTQY',
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
@Metadata.ignorePropagatedAnnotations:true
@Analytics.query: true
@EndUserText.label: 'Consumption View for Assignments'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsSupAssgmtQry
  as select from I_ARunAnlytsSupAssgmtCube
{
      @EndUserText.label: 'Plant'
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Plant,
      @EndUserText.label: 'Product'
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Material,
      @EndUserText.label: 'Storage Location'

  key StorageLocation,
      @EndUserText.label: 'Batch'
  key Batch,
      @EndUserText.label: 'Requirement Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
  key RequirementType,
      @EndUserText.label: 'Requriement Document'
  key RequirementDocumentNumber,
      @EndUserText.label: 'Document Item'
  key RequirementDocumentItem,
  key SupProtTimeBucketUUID,
      @EndUserText.label: 'Supply Source'
      @AnalyticsDetails.query.display: #KEY_TEXT
  key AssignedSupplyType,
      @EndUserText.label: 'Supply Number'
  key SupplyNumber,
      @EndUserText.label: 'Supply Item'
  key SupplyItem,
      @EndUserText.label: 'Supply Schedule Line'
  key SupplyScheduleLine,
      @EndUserText.label: 'Requested Date'
  key RequestedDate,
      @EndUserText.label: 'Product Availability Date'
  key ProductAvailabilityDate,
      @EndUserText.label: 'Supply Delivery Date'
  key SupplyDeliveryDate,
      @EndUserText.label: 'Requested Delivery Date'
      RequestedDeliveryDate,
      @EndUserText.label: 'Supply Availability'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ARunSupDlyHrznInWeeks,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SupAssgmtSource,
      //      CalendarYear,
      //      CalendarMonth,
      //      CalendarMonthName,

      //      CalendarWeek,
      //      CalendarDay,
      @EndUserText.label: 'Assigned Quantities'
      @DefaultAggregation: #SUM
      AssignedQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Normal Assigned Quantities'
      NormalAssignedQuantityInBsUnt,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Preview Assigned Quantities'
      PreviewAssignedQuantityInBsUnt,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Temporary Assigned Quantities'
      ARunTmpAssignedQuantityInBsUnt,
      BaseUnit,
      @EndUserText.label: 'Product Group'
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaterialGroup,
      @EndUserText.label: 'Product Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaterialType,
      @EndUserText.label: 'Generic Article'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrossPlantConfigurableProduct,
      @EndUserText.label: 'Supply Protection'
      SupplyProtectionName,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Customer'
      Customer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Company Code'
      CompanyCode,
      SupAssgmtAggrgQtyUnit,
      NetPriceAmount,
      DocumentCurrency,
      @Feature:'SW:RFM_SEGMTN_UI'
      RequirementSegment
}
```
