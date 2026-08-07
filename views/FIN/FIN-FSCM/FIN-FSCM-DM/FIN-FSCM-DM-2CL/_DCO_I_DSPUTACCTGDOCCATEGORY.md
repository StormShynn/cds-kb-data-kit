---
name: _DCO_I_DSPUTACCTGDOCCATEGORY
description: "This CDS view provides access to dispute categories for receivable items. It serves as a basic interface view for retrieving dispute category data from the customizing table. This CDS view provides the data to answer the following business questions: What dispute categories are available for receivable items? Which dispute category is assigned to a specific receivable item? How can I categorize disputes in my dispute resolution processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTACCTGDOCCATEGORY')/$value
semantic_en: "This CDS view provides access to dispute categories for receivable items. It serves as a basic interface view for retrieving dispute category data from the customizing table. This CDS view provides the data to answer the following business questions: What dispute categories are available for receivable items? Which dispute category is assigned to a specific receivable item? How can I categorize disputes in my dispute resolution processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# _DCO_I_DSPUTACCTGDOCCATEGORY

**This CDS view provides access to dispute categories for receivable items. It serves as a basic interface view for retrieving dispute category data from the customizing table. This CDS view provides the data to answer the following business questions: What dispute categories are available for receivable items? Which dispute category is assigned to a specific receivable item? How can I categorize disputes in my dispute resolution processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTACCTGDOCCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeAcctgDocCategory` |  | |  |  | `CHAR(3)` | Dispute Category |
