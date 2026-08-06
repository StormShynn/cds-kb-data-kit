---
name: _DCO_I_ACTIVITYDIRECTION
description: This CDS view provides access to data about the direction of activities in the collection process. It serves as a basic interface view for retrieving activity direction information from the customizing table. This CDS view provides the data to answer the following business questions: What are the available activity directions in the system? Which was the activity direction of a specific activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACTIVITYDIRECTION')/$value
semantic_en: This CDS view provides access to data about the direction of activities in the collection process. It serves as a basic interface view for retrieving activity direction information from the customizing table. This CDS view provides the data to answer the following business questions: What are the available activity directions in the system? Which was the activity direction of a specific activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_ACTIVITYDIRECTION

**This CDS view provides access to data about the direction of activities in the collection process. It serves as a basic interface view for retrieving activity direction information from the customizing table. This CDS view provides the data to answer the following business questions: What are the available activity directions in the system? Which was the activity direction of a specific activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACTIVITYDIRECTION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DCoActivityDirection` | `CHAR(1)` | Activity Direction |
