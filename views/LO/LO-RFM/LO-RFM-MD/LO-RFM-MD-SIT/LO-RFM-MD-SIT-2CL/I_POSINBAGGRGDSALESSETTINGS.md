---
name: I_POSINBAGGRGDSALESSETTINGS
description: This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value
semantic_en: This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_POSINBAGGRGDSALESSETTINGS

**This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointOfSaleInboundProfile` |  | |  |  | `CHAR(4)` | POS Inbound Profile |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `SalesGoodsMovementType` |  | |  |  | `CHAR(3)` | Movement type: Sale |
| `ReturnsGoodsMovementType` |  | |  |  | `CHAR(3)` | Movement type: return |
