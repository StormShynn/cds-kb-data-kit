---
name: I_JITPCKGGRPHEADER
description: A Just-In-Time (JIT) packing group is a sequential collection of JIT call component groups to be delivered together. This CDS view provides the data to answer the following business questions: What packing groups exist for a specific customer and plant? What is the status of each packing group? What are the delivery and goods movement statuses? What is the sequence number range for a packing group? Which delivery sequence group is the packing group assigned to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHEADER')/$value
semantic_en: A Just-In-Time (JIT) packing group is a sequential collection of JIT call component groups to be delivered together. This CDS view provides the data to answer the following business questions: What packing groups exist for a specific customer and plant? What is the status of each packing group? What are the delivery and goods movement statuses? What is the sequence number range for a packing group? Which delivery sequence group is the packing group assigned to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - plan
  - metadata-only
---
# I_JITPCKGGRPHEADER

**A Just-In-Time (JIT) packing group is a sequential collection of JIT call component groups to be delivered together. This CDS view provides the data to answer the following business questions: What packing groups exist for a specific customer and plant? What is the status of each packing group? What are the delivery and goods movement statuses? What is the sequence number range for a packing group? Which delivery sequence group is the packing group assigned to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpID` |  | |  |  | `CHAR(20)` | Package Group ID |
| `JITPckgGrpStatus` |  | |  |  | `CHAR(1)` | Package Group Status |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `PlannedShippingDateTime` |  | |  |  | `DEC(21)` | Planned Shipping Date Time |
| `RequirementDateTime` |  | |  |  | `DEC(21)` | Requirement Date and Time |
| `DeliveryCreationDate` |  | |  |  | `DATS(8)` | Delivery Creation Date |
| `DeliveryCreationTime` |  | |  |  | `TIMS(6)` | Field of type TIMS |
| `MaterialAvailabilityDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `ProductionStartDate` |  | |  |  | `DATS(8)` | Start Date for Production |
| `ProductionEndDate` |  | |  |  | `DATS(8)` | End Date for Production |
| `GrossWeight` |  | |  |  | `CHAR(10)` | Character Field with Length 10 |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `CustSupplyArea` |  | |  |  | `CHAR(10)` | Customer Supply Area |
| `CustAssemblyLoc` |  | |  |  | `CHAR(20)` | Assembly Location at Customer Site |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CreationDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `ChangedOnDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `JITComponentIsReordered` |  | |  |  | `CHAR(1)` | NJIT: Packing Group Usage Type |
| `JITPackageLevel` |  | |  |  | `INT1(3)` | Packing Group Level |
| `HandlingUnitStatus` |  | |  |  | `CHAR(1)` | Handling Unit Status |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `JITPackingGroupIsNested` |  | |  |  | `CHAR(1)` | Packing Group Nested Indicator |
| `JITArchivingStatus` |  | |  |  | `CHAR(2)` | Archiving Status |
| `CustomerUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITAltvHndlgUnitID` |  | |  |  | `CHAR(20)` | Alternate Packing Group ID |
| `JITAltvHndlgUnitIDShrt` |  | |  |  | `CHAR(20)` | Alternate Packing Group ID Short |
| `RepetitiveManufacturingIsAllwd` |  | |  |  | `CHAR(1)` | Repetitive Manufacturing Allowed |
| `DeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Creation Status |
| `GoodsMovementStatus` |  | |  |  | `CHAR(1)` | Goods Movement Status |
| `JITBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `JITReleaseToProductionStatus` |  | |  |  | `CHAR(1)` | Release to production status |
| `JITProdnConfirmationStatus` |  | |  |  | `CHAR(1)` | Confirm to production status |
| `JITReleaseForPackingStatus` |  | |  |  | `CHAR(1)` | Release for Packing Status |
| `JITPackingConfirmationStatus` |  | |  |  | `CHAR(1)` | Packing Status |
| `JITDelivSqncGrpID` |  | |  |  | `CHAR(10)` | Delivery Sequence Group ID (Readable) |
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITExtSequenceNumberFrom` |  | |  |  | `CHAR(35)` | External Sequence Number |
| `JITExtSequenceNumberTo` |  | |  |  | `CHAR(35)` | External Sequence Number |
| `JITFormattedSequenceNmbrFrom` |  | |  |  | `NUMC(35)` | Formatted sequence number |
| `JITFormattedSequenceNmbrTo` |  | |  |  | `NUMC(35)` | Formatted sequence number |
| `JITExtStatusUpdtdOn` |  | |  |  | `DEC(21)` | External Status Updated On |
| `JITIntStatusUpdtdOn` |  | |  |  | `DEC(21)` | Internal Processing Status Updated On |
