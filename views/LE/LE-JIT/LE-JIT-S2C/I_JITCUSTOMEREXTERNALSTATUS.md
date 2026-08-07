---
name: I_JITCUSTOMEREXTERNALSTATUS
description: The JIT customer external status mapping contains the mapping between transmitted status and external status. However, different customers often transmit different descriptions for the same business process. You convert the external status information into an external status that is unique within your system. This CDS view provides the data to answer the following business questions: What is the status mapping for each customer? Which external status information does your customer transmit? How is the transmitted status converted to external status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMEREXTERNALSTATUS')/$value
semantic_en: The JIT customer external status mapping contains the mapping between transmitted status and external status. However, different customers often transmit different descriptions for the same business process. You convert the external status information into an external status that is unique within your system. This CDS view provides the data to answer the following business questions: What is the status mapping for each customer? Which external status information does your customer transmit? How is the transmitted status converted to external status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITCUSTOMEREXTERNALSTATUS

**The JIT customer external status mapping contains the mapping between transmitted status and external status. However, different customers often transmit different descriptions for the same business process. You convert the external status information into an external status that is unique within your system. This CDS view provides the data to answer the following business questions: What is the status mapping for each customer? Which external status information does your customer transmit? How is the transmitted status converted to external status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMEREXTERNALSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExternalStatusMappingUUID` |  | |  |  | `RAW(16)` | NodeID |
| `CustomerUUID` |  | |  |  | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `TransmittedExtStatusByMfr` |  | |  |  | `CHAR(35)` | Transmitted External Status by Manufacturer |
| `JITExtStatusAtSupplier` |  | |  |  | `CHAR(4)` | JIT External Status at Supplier |
