---
name: I_EHSAMOUNTSUBJECTTYPE
description: "This CDS view retrieves the type of subject (for example, listed substance, chemical, chemical/physical property, or something else) on which any amount of environmental data is based. Subjects are always specified for environmental limits and equations as well as for data collection, sampling, calculation, and location aggregation activities. This CDS view provides the data to answer the following business questions: What are the subject types defined in my system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPE')/$value
semantic_en: "This CDS view retrieves the type of subject (for example, listed substance, chemical, chemical/physical property, or something else) on which any amount of environmental data is based. Subjects are always specified for environmental limits and equations as well as for data collection, sampling, calculation, and location aggregation activities. This CDS view provides the data to answer the following business questions: What are the subject types defined in my system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_EHSAMOUNTSUBJECTTYPE

**This CDS view retrieves the type of subject (for example, listed substance, chemical, chemical/physical property, or something else) on which any amount of environmental data is based. Subjects are always specified for environmental limits and equations as well as for data collection, sampling, calculation, and location aggregation activities. This CDS view provides the data to answer the following business questions: What are the subject types defined in my system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
