---
name: I_JITDELIVSQNCGRPDESCBASIC
description: "This CDS view provides language-dependent text descriptions for JIT delivery sequence groups. This view stores the descriptive text for delivery sequence groups in multiple languages. This CDS view provides the data to answer the following business questions: What is the description of a delivery sequence group in a specific language? Which languages have descriptions for a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPDESCBASIC')/$value
semantic_en: "This CDS view provides language-dependent text descriptions for JIT delivery sequence groups. This view stores the descriptive text for delivery sequence groups in multiple languages. This CDS view provides the data to answer the following business questions: What is the description of a delivery sequence group in a specific language? Which languages have descriptions for a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITDELIVSQNCGRPDESCBASIC

**This CDS view provides language-dependent text descriptions for JIT delivery sequence groups. This view stores the descriptive text for delivery sequence groups in multiple languages. This CDS view provides the data to answer the following business questions: What is the description of a delivery sequence group in a specific language? Which languages have descriptions for a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPDESCBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `JITDelivSqncGrpDesc` |  | |  |  | `CHAR(40)` | Delivery Seq. Group Description |
