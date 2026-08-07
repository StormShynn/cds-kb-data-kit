---
name: I_TRANSPSHIPGTYPEMOTASSGTOCHRG
description: This CDS view is a basic view to retrieve transportation modes and shipping type that are assigned to a charge type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPSHIPGTYPEMOTASSGTOCHRG')/$value
semantic_en: This CDS view is a basic view to retrieve transportation modes and shipping type that are assigned to a charge type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - TM
  - bo:companycode
  - component:TM-MD-CM-2CL
  - interface-view
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
  - metadata-only
---
# I_TRANSPSHIPGTYPEMOTASSGTOCHRG

**This CDS view is a basic view to retrieve transportation modes and shipping type that are assigned to a charge type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPSHIPGTYPEMOTASSGTOCHRG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeType` |  | |  |  | `CHAR(15)` | Charge Type |
| `TransportationMode` |  | |  |  | `CHAR(2)` | Transportation Mode Code |
| `TransportationShippingType` |  | |  |  | `CHAR(3)` | Shipping Type |
