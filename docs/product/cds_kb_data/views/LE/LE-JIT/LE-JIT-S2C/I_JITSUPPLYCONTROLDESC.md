---
name: I_JITSUPPLYCONTROLDESC
description: "This CDS view provides language-dependent text descriptions for JIT supply control configurations. It stores the descriptive text for supply controls in multiple languages, supporting internationalization of the supply control master data. This CDS view provides the data to answer the following business questions: What is the description of a supply control in a specific language? Which languages have descriptions for a supply control? What is the supply control ID associated with a description? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLDESC')/$value
semantic_en: "This CDS view provides language-dependent text descriptions for JIT supply control configurations. It stores the descriptive text for supply controls in multiple languages, supporting internationalization of the supply control master data. This CDS view provides the data to answer the following business questions: What is the description of a supply control in a specific language? Which languages have descriptions for a supply control? What is the supply control ID associated with a description? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - master-data
  - metadata-only
---
# I_JITSUPPLYCONTROLDESC

**This CDS view provides language-dependent text descriptions for JIT supply control configurations. It stores the descriptive text for supply controls in multiple languages, supporting internationalization of the supply control master data. This CDS view provides the data to answer the following business questions: What is the description of a supply control in a specific language? Which languages have descriptions for a supply control? What is the supply control ID associated with a description? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLDESC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyControlUUID` |  | |  |  | `RAW(16)` | NodeID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SupplyControlID` |  | |  |  | `CHAR(10)` | Supply Control |
| `SupplyControlDesc` |  | |  |  | `CHAR(40)` | Supply Control Description |
