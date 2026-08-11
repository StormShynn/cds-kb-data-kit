---
name: I_TERNARYLOGICALSTATE
description: "This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATE')/$value
semantic_en: "This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - metadata-only
---
# I_TERNARYLOGICALSTATE

**This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TernaryLogicalState` |  | |  |  | `CHAR(1)` | Tristate |
