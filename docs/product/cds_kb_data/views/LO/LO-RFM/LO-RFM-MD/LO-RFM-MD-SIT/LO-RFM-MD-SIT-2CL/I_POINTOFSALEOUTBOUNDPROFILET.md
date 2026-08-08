---
name: I_POINTOFSALEOUTBOUNDPROFILET
description: "This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILET')/$value
semantic_en: "This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# I_POINTOFSALEOUTBOUNDPROFILET

**This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointOfSaleOutboundProfile` |  | |  |  | `CHAR(4)` | POS Outbound Profile |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `PointOfSaleOutboundProfileName` |  | |  |  | `CHAR(20)` | Description |
