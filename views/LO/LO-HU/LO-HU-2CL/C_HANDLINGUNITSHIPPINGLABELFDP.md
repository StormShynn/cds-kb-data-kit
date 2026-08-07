---
name: C_HANDLINGUNITSHIPPINGLABELFDP
description: This CDS view represents a form data provider for output management. The CDS view provides data that can be used for the handling unit shipping label. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITSHIPPINGLABELFDP')/$value
semantic_en: This CDS view represents a form data provider for output management. The CDS view provides data that can be used for the handling unit shipping label. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Form Data Provider Handling Units
tags:
  - LO
  - bo:companycode
  - component:LO-HU-2CL
  - consumption-view
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
  - metadata-only
---
# C_HANDLINGUNITSHIPPINGLABELFDP

**This CDS view represents a form data provider for output management. The CDS view provides data that can be used for the handling unit shipping label. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITSHIPPINGLABELFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitNumber` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `Warehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `PackagingMaterial` |  | |  |  | `CHAR(40)` | Packaging Material |
| `HandlingUnitTareWeight` |  | |  |  | `QUAN(15)` | Tare Weight of Handling Unit |
| `HandlingUnitTareWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `GrossVolume` |  | |  |  | `QUAN(15)` | Total Volume of Handling Unit |
| `HandlingUnitNetVolume` |  | |  |  | `QUAN(15)` | Loading Volume of Handling Unit |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitTareVolume` |  | |  |  | `QUAN(15)` | Tare Volume of Handling Unit |
| `HandlingUnitTareVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitLength` |  | |  |  | `QUAN(13)` | Length |
| `HandlingUnitWidth` |  | |  |  | `QUAN(13)` | Width |
| `HandlingUnitHeight` |  | |  |  | `QUAN(13)` | Height |
| `UnitOfMeasureDimension` |  | |  |  | `UNIT(3)` | Unit of Dimension for Length/Width/Height |
| `HandlingUnitReferenceDocument` |  | |  |  | `CHAR(20)` | Key for Object to Which the Handling Unit is Assigned |
| `HandlingUnitProcessStatus` |  | |  |  | `CHAR(1)` | Handling Unit Process Status |
| `HandlingUnitIndicator` |  | |  |  | `CHAR(1)` | Virtual Handling Unit |
| `HandlingUnitQuantity` |  | |  |  | `QUAN(31)` | Quantity Field |
| `HandlingUnitQuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Batch` |  | |  |  | `CHAR(10)` | Batch |
| `InternationalArticleNumber` |  | |  |  | `CHAR(18)` | International Article Number (EAN/UPC) |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductDescription` |  | |  |  | `CHAR(40)` | Product Short Description |
| `ShipToPartyAddressLine1Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine2Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine3Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine4Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine5Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine6Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine7Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine8Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine1Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine2Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine3Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine4Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine5Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine6Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine7Text` |  | |  |  | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine8Text` |  | |  |  | `CHAR(80)` | Address line |
| `BarCodeLine1` |  | |  |  | `CHAR(64)` | Bar Code |
| `BarCodeLine2` |  | |  |  | `CHAR(64)` | Bar Code |
| `BarCodeLine3` |  | |  |  | `CHAR(64)` | Bar Code |
| `BarCodeLine1Text` |  | |  |  | `CHAR(64)` | Bar Code |
| `BarCodeLine2Text` |  | |  |  | `CHAR(64)` | Bar Code |
| `BarCodeLine3Text` |  | |  |  | `CHAR(64)` | Bar Code |
| `HandlingUnitWeightTolerance` |  | |  |  | `DEC(3)` |  |
| `HandlingUnitVolumeTolerance` |  | |  |  | `DEC(3)` |  |
| `HandlingUnitIsClosed` |  | |  |  | `CHAR(1)` | Closed Packaging Material |
| `HandlingUnitMaxVolume` |  | |  |  | `QUAN(15)` | Allowed Loading Volume for Handling Unit |
| `HandlingUnitMaxLength` |  | |  |  | `QUAN(15)` | Maximum Packing Length of a Packaging Material |
| `HandlingUnitMaxWidth` |  | |  |  | `QUAN(15)` | Maximum Allowed Packing Width of a Packaging Material |
| `HandlingUnitMaxHeight` |  | |  |  | `QUAN(15)` | Maximum Packing Height of a Packaging Material |
| `HandlingUnitMaxDimensionUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Maximum Packing Length/Width/Height |
| `HandlingUnitType` |  | |  |  | `CHAR(4)` | Handling Unit Type |
| `StorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `StorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `StorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `ConsolidationGroup` |  | |  |  | `CHAR(10)` | Consolidation Group |
| `WorkloadIdentification` |  | |  |  | `NUMC(12)` | Workload Identification |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `HandlingUnitPackingGroup` |  | |  |  | `CHAR(4)` | Packing Group |
| `HazardousSubstanceIndicator` |  | |  |  | `CHAR(1)` | Hazardous Substance |
| `HandlingUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Logical Position of Handling Unit |
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `ProcessStepCompletedInd` |  | |  |  | `CHAR(1)` | Process Step for HU Completed |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `GrossWeight` |  | |  |  | `QUAN(15)` | Total Weight of Handling Unit |
| `NetWeight` |  | |  |  | `QUAN(15)` | Loading Weight of Handling Unit |
| `HandlingUnitMaxWeight` |  | |  |  | `QUAN(15)` | Allowed Loading Weight of a Handling Unit |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `PackagingMaterialType` |  | |  |  | `CHAR(4)` | Packaging Material Type |
| `HandlingUnitBarCodePart1Value` |  | |  |  | `CHAR(1333)` |  |
| `HandlingUnitBarCodePart2Value` |  | |  |  | `CHAR(1002)` |  |
| `MatrixBarCodeNorm4994Value` |  | |  |  | `CHAR(1333)` |  |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryItem` |  | |  |  | `NUMC(6)` | Delivery Item |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `CustomerPartnerDescription` |  | |  |  | `CHAR(30)` | Cust.-Specif. Descr. of Business Partner (Plant, Stor. Loc.) |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `ActualGoodsMovementDate` |  | |  |  | `DATS(8)` | Actual Goods Movement Date |
| `GoodsMovementDate` |  | |  |  | `DATS(8)` | Goods Issue Date |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `HandlingUnitShippingLabelDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `DeliveryTime` |  | |  |  | `TIMS(6)` | Field of type TIMS |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `HandlingUnitShipLabelDateCode` |  | |  |  | `CHAR(1)` | Type of Date used in the Shipping Label for Handling Units |
| `Customer` |  | |  |  | `CHAR(30)` | Name |
| `DestinationPlant` |  | |  |  | `CHAR(4)` | Plant |
| `DestinationLocationName` |  | |  |  | `CHAR(25)` | Receiving Point |
| `Quantity` |  | |  |  | `QUAN(15)` | Base Quantity Packed in the Handling Unit Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `SupplierAccountNumberSoldTo` |  | |  |  | `CHAR(12)` | Our account number with the supplier |
| `SupplierAccountNumberShipTo` |  | |  |  | `CHAR(12)` | Our account number with the supplier |
| `CustEngineeringChgStatus` |  | |  |  | `CHAR(17)` | Customer Engineering Change Status |
| `CustomerPointOfConsumption` |  | |  |  | `CHAR(14)` | Customer point of consumption |
| `MaterialByCustomer` |  | |  |  | `CHAR(35)` | Material Number Used by Customer |
| `HandlingUnitCustomerPackMat` |  | |  |  | `CHAR(35)` | Material Number Used by Customer |
| `MaterialDescriptionByCustomer` |  | |  |  | `CHAR(40)` | Customer Description of Material |
| `NumberOfItems` |  | |  |  | `INT4(10)` | 4 Byte Signed Integer |
| `HandlingUnitLabelType` |  | |  |  | `CHAR(10)` | Character Field with Length 10 |
| `HandlingUnitContentType` |  | |  |  | `CHAR(2)` | Handling Unit Content Type  for Shipping Label |
| `Route` |  | |  |  | `CHAR(6)` | Route |
| `TimeZoneName` |  | |  |  | `CHAR(6)` | Time Zone |
