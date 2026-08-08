---
name: I_JITSUPPLYCONTROLHEADER
description: "A set of fields in Just-In-Time processing defined for a combination of customer, plant, customer supply area, and component material that controls various aspects during the lifecycle of a JIT request. This CDS view provides the data to answer the following business questions: What supply control configurations exist for a specific plant and customer? What are the tolerance levels for overdelivery/underdelivery? Which action control is assigned to a supply control? What is the scheduling schema for a specific supply control? What are the production confirmation control settings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLHEADER')/$value
semantic_en: "A set of fields in Just-In-Time processing defined for a combination of customer, plant, customer supply area, and component material that controls various aspects during the lifecycle of a JIT request. This CDS view provides the data to answer the following business questions: What supply control configurations exist for a specific plant and customer? What are the tolerance levels for overdelivery/underdelivery? Which action control is assigned to a supply control? What is the scheduling schema for a specific supply control? What are the production confirmation control settings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - material
  - plan
  - product
  - metadata-only
---
# I_JITSUPPLYCONTROLHEADER

**A set of fields in Just-In-Time processing defined for a combination of customer, plant, customer supply area, and component material that controls various aspects during the lifecycle of a JIT request. This CDS view provides the data to answer the following business questions: What supply control configurations exist for a specific plant and customer? What are the tolerance levels for overdelivery/underdelivery? Which action control is assigned to a supply control? What is the scheduling schema for a specific supply control? What are the production confirmation control settings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyControlUUID` |  | |  |  | `RAW(16)` | NodeID |
| `SupplyControlID` |  | |  |  | `CHAR(10)` | Supply Control |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerUUID` |  | |  |  | `RAW(16)` | NodeID |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustSupplyArea` |  | |  |  | `CHAR(10)` | Customer Supply Area |
| `SupplyAreaUUID` |  | |  |  | `RAW(16)` | NodeID |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `JITActionCtrl` |  | |  |  | `CHAR(10)` | Action Control |
| `JITCallType` |  | |  |  | `CHAR(1)` | Call Type |
| `JITSupplyControlStatus` |  | |  |  | `CHAR(1)` | JIT Supply Control Status |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Indicator : Partial Delivery |
| `JITUnderDeliveryToleranceInPct` |  | |  |  | `DEC(5)` | NJIT Under Delivery Tolerance |
| `JITOverDeliveryToleranceInPct` |  | |  |  | `DEC(5)` | NJIT Over Delivery Tolerance |
| `JITUnlimitedOverDelivIsAllowed` |  | |  |  | `CHAR(1)` | NJIT Unlimited Over Delivery |
| `RepetitiveManufacturingIsAllwd` |  | |  |  | `CHAR(1)` | Repetitive Manufacturing Allowed |
| `ProductionVersion` |  | |  |  | `CHAR(4)` | Production Version: JIT |
| `JITExternalProcessingStatus` |  | |  |  | `CHAR(4)` | JIT External Status at Supplier |
| `JITProdnConfirmationControl` |  | |  |  | `CHAR(1)` | Execution of production confirmation |
| `JITEntryPointForScheduling` |  | |  |  | `CHAR(1)` | Scheduling entry schema |
| `AddressID` |  | |  |  | `CHAR(10)` | Address number of the ship-to party |
| `SchedulingSchema` |  | |  |  | `CHAR(30)` | BPS – Schema |
| `JITDelivConfControl` |  | |  |  | `CHAR(1)` | Indicates the behavior for delivery confirmation |
| `CreationDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
