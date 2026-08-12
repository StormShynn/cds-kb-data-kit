---
name: C_ARUNANLYTSALLASSGMTQUERY
description: "Demand and Assignments"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSALLASSGMTQUERY')/$value
semantic_en: "Demand and Assignments"
semantic_vi: "Demand and Assignments — CDS view tiêu dùng dựa trên I_ARunAnlytsAllAssgmtQuery."
keywords:
  - "demand"
  - "and"
  - "assignments"
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
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSALLASSGMTQUERY

**Demand and Assignments**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSALLASSGMTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` | Requirement Type |
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Purchasing requirement document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Item number of the SD document |
| `SupProtTimeBucketUUID` | ✓ | |  |  | `RAW(16)` |  |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` | ARun Stock Source |
| `SupplyNumber` | ✓ | |  |  | `CHAR(10)` | Purchasing Document Number |
| `SupplyItem` | ✓ | |  |  | `NUMC(5)` | Item number of Purchase Order |
| `SupplyScheduleLine` | ✓ | |  |  | `NUMC(4)` | ARun Stock schedule line |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSALLASSGMTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSALLASSGMTQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #INHERITED
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNALYTSALLAGQ',
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
@Analytics.query: true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Demand and Assignments'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsAllAssgmtQuery
  as select from I_ARunAnlytsAllAssgmtQuery
{
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Plant,
      @EndUserText.label: 'Product'
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Product,
      @EndUserText.label: 'Storage Location'
  key StorageLocation,
  key Batch,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Demand Type'
  key RequirementType,
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key SupProtTimeBucketUUID,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Supply Source'
  key AssignedSupplyType,
  key SupplyNumber,
  key SupplyItem,
      @EndUserText.label: 'Supply Schedule Line'
  key SupplyScheduleLine,
  key RequestedDate,
      @EndUserText.label: 'Product Availability Date'
  key ProductAvailabilityDate,
      @EndUserText.label: 'Supply Delivery Date'
  key SupplyDeliveryDate,
      @EndUserText.label: 'Requested Delivery Date'
      RequestedDeliveryDate,
      @EndUserText.label: 'Supply Availability Delay'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ARunSupDlyHrznInWeeks,
      @EndUserText.label: 'Supply Availability'
      @AnalyticsDetails.query.display: #KEY_TEXT
      SupAssgmtSupAvailySts,
      SupAssgmtSource,
      @EndUserText.label: 'Quantity'
      AssignedQuantityInBaseUnit,
      NormalAssignedQuantityInBsUnt,
      PreviewAssignedQuantityInBsUnt,
      ARunTmpAssignedQuantityInBsUnt,
      BaseUnit,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Product Group'
      ProductGroup,
      @EndUserText.label: 'Product Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProductType,
      @EndUserText.label: 'Generic Article'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrossPlantConfigurableProduct,

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
      @EndUserText.label: 'Sold To Party'
      Customer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Company Code'
      CompanyCode,
      SupAssgmtAggrgQtyUnit,
      NetPriceAmount,
      DocumentCurrency,
      @EndUserText.label: 'Requirement Segment'
      @Feature:'SW:RFM_SEGMTN_UI'
      RequirementSegment

}
```
