---
name: _DCO_I_DSPUTPROCESSSTEPSTATUS
description: "This CDS view provides access to the standard processing step statuses used in the dispute resolution process. It serves as a basic interface view for retrieving customizing data related to dispute processing step statuses. This CDS view provides the data to answer the following business questions: What are the available standard processing step statuses for disputes? Which status values can be assigned to dispute processing steps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTPROCESSSTEPSTATUS')/$value
semantic_en: "This CDS view provides access to the standard processing step statuses used in the dispute resolution process. It serves as a basic interface view for retrieving customizing data related to dispute processing step statuses. This CDS view provides the data to answer the following business questions: What are the available standard processing step statuses for disputes? Which status values can be assigned to dispute processing steps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-DM-2CL
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - lob:finance
  - metadata-only
---
# _DCO_I_DSPUTPROCESSSTEPSTATUS

**This CDS view provides access to the standard processing step statuses used in the dispute resolution process. It serves as a basic interface view for retrieving customizing data related to dispute processing step statuses. This CDS view provides the data to answer the following business questions: What are the available standard processing step statuses for disputes? Which status values can be assigned to dispute processing steps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTPROCESSSTEPSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeProcessStepStatus` |  | |  |  | `CHAR(3)` | Processing Step Status |
