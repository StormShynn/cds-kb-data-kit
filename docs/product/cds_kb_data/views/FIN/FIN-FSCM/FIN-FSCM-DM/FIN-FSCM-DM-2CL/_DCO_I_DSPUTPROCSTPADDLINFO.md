---
name: _DCO_I_DSPUTPROCSTPADDLINFO
description: "This CDS view provides additional information for dispute processing steps in collections and dispute automation. It serves as a basic interface view that exposes customizing data related to dispute processing steps, including associated URL links for additional information resources. This CDS view provides the data to answer the following business questions: What additional information is available for a specific dispute processing step in a company code? Which URL links are configured for dispute processing steps across different company codes? How can I access supplementary documentation for dispute resolution procedures? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTPROCSTPADDLINFO')/$value
semantic_en: "This CDS view provides additional information for dispute processing steps in collections and dispute automation. It serves as a basic interface view that exposes customizing data related to dispute processing steps, including associated URL links for additional information resources. This CDS view provides the data to answer the following business questions: What additional information is available for a specific dispute processing step in a company code? Which URL links are configured for dispute processing steps across different company codes? How can I access supplementary documentation for dispute resolution procedures? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-DM-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - lob:finance
  - metadata-only
---
# _DCO_I_DSPUTPROCSTPADDLINFO

**This CDS view provides additional information for dispute processing steps in collections and dispute automation. It serves as a basic interface view that exposes customizing data related to dispute processing steps, including associated URL links for additional information resources. This CDS view provides the data to answer the following business questions: What additional information is available for a specific dispute processing step in a company code? Which URL links are configured for dispute processing steps across different company codes? How can I access supplementary documentation for dispute resolution procedures? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTPROCSTPADDLINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoDisputeProcessStep` |  | |  |  | `NUMC(1)` | Processing Step for Disputes |
| `DCoDsputProcStpAddlInfoURLTxt` |  | |  |  | `CHAR(255)` | URL for Additional Information in Processing Step |
