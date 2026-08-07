---
name: I_INTERNALORDERSTDVH
description: This CDS view provides value help for internal order objects. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_InternalOrder view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALORDERSTDVH')/$value
semantic_en: This CDS view provides value help for internal order objects. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_InternalOrder view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CO
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - order
  - metadata-only
---
# I_INTERNALORDERSTDVH

**This CDS view provides value help for internal order objects. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_InternalOrder view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALORDERSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalOrder` |  | |  |  | `CHAR(12)` | Internal Order |
| `InternalOrderDescription` |  | |  |  | `CHAR(40)` | Internal Order Description |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
