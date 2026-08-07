---
name: I_ASSORTMENTTYPE
description: This CDS view provides the details to extract assortment types. This CDS view provides the data to answer the following business questions: How many assortment types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value
semantic_en: This CDS view provides the details to extract assortment types. This CDS view provides the data to answer the following business questions: How many assortment types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-LST-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
  - metadata-only
---
# I_ASSORTMENTTYPE

**This CDS view provides the details to extract assortment types. This CDS view provides the data to answer the following business questions: How many assortment types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssortmentType` |  | |  |  | `CHAR(4)` | Assortment Type |
| `AssortmentDimension1` |  | |  |  | `CHAR(2)` | Assortment Dimension |
| `AssortmentDimension2` |  | |  |  | `CHAR(2)` | Assortment Dimension |
| `AssortmentDimension3` |  | |  |  | `CHAR(2)` | Assortment Dimension |
| `AsrtAsgtToLaytMdlIsPosbl` |  | |  |  | `CHAR(1)` | Flag: Assortment Can Be Assigned Layout Module |
| `LaytMdlIsCrtedAutomly` |  | |  |  | `CHAR(1)` | Flag: Create Layout Module Automatically |
| `LaytMdlIsNotRdyForInpt` |  | |  |  | `CHAR(1)` | Indicator: Field Layout Module Not Ready for Input |
