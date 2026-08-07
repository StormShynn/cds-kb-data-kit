---
name: I_JITCUSTOMER
description: A Just-In-Time customer is a master data object comprised of attributes related to a vehicle manufacturer such as the destination information and external status mapping. This CDS view provides the data to answer the following business questions: How many JIT customers exist in the system? What are the delivery split criteria of the customer for summarized and sequenced JIT call types? How many active customers exist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMER')/$value
semantic_en: A Just-In-Time customer is a master data object comprised of attributes related to a vehicle manufacturer such as the destination information and external status mapping. This CDS view provides the data to answer the following business questions: How many JIT customers exist in the system? What are the delivery split criteria of the customer for summarized and sequenced JIT call types? How many active customers exist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - master-data
  - metadata-only
---
# I_JITCUSTOMER

**A Just-In-Time customer is a master data object comprised of attributes related to a vehicle manufacturer such as the destination information and external status mapping. This CDS view provides the data to answer the following business questions: How many JIT customers exist in the system? What are the delivery split criteria of the customer for summarized and sequenced JIT call types? How many active customers exist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerUUID` |  | |  |  | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `JITCustomerStatus` |  | |  |  | `CHAR(1)` | JIT Customer Status |
| `DaysForIntJITNumberGeneration` |  | |  |  | `NUMC(4)` | External JIT Number Usage |
| `JITDeliveryHdrSplitCriterion` |  | |  |  | `CHAR(2)` | Criteria to split Delivery |
| `JITSequenceNumberProfileID` |  | |  |  | `CHAR(10)` | Sequence Number Profile |
| `JITDelivHdrSpltCritrnForPckg` |  | |  |  | `CHAR(2)` | Criteria to split Delivery |
| `JITDelivConfIsUsed` |  | |  |  | `CHAR(1)` | Indicates if the JIT delivery is marked for confirmation |
| `JITDelivConfForReorder` |  | |  |  | `CHAR(1)` | Handle reorder JIT Calls via Delivery Confirmation |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
