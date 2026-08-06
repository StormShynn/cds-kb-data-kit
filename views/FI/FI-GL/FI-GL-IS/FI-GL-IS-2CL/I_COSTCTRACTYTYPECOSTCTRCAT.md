---
name: I_COSTCTRACTYTYPECOSTCTRCAT
description: This CDS view helps you retrieve the cost center category of a cost center activity type object. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCTRACTYTYPECOSTCTRCAT')/$value
semantic_en: This CDS view helps you retrieve the cost center category of a cost center activity type object. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_COSTCTRACTYTYPECOSTCTRCAT

**This CDS view helps you retrieve the cost center category of a cost center activity type object. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCTRACTYTYPECOSTCTRCAT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `CostCenterCategory` | `CHAR(1)` |  |
| `IsGeneric` | `CHAR(1)` | Indicator: Cost Center Category is Generic |
