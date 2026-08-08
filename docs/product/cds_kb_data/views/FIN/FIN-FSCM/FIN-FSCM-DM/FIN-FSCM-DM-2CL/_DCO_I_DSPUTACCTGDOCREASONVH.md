---
name: _DCO_I_DSPUTACCTGDOCREASONVH
description: "This CDS view provides value help for dispute reasons in collections and dispute automation. It enables users to select valid dispute reasons when creating or managing disputes related to receivable items. This CDS view provides the data to answer the following business questions: Which dispute reasons are available for a specific dispute category? What are the valid dispute reasons that can be assigned to receivable items? How can I filter dispute reasons by their associated categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTACCTGDOCREASONVH')/$value
semantic_en: "This CDS view provides value help for dispute reasons in collections and dispute automation. It enables users to select valid dispute reasons when creating or managing disputes related to receivable items. This CDS view provides the data to answer the following business questions: Which dispute reasons are available for a specific dispute category? What are the valid dispute reasons that can be assigned to receivable items? How can I filter dispute reasons by their associated categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# _DCO_I_DSPUTACCTGDOCREASONVH

**This CDS view provides value help for dispute reasons in collections and dispute automation. It enables users to select valid dispute reasons when creating or managing disputes related to receivable items. This CDS view provides the data to answer the following business questions: Which dispute reasons are available for a specific dispute category? What are the valid dispute reasons that can be assigned to receivable items? How can I filter dispute reasons by their associated categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTACCTGDOCREASONVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeAcctgDocumentReason` |  | |  |  | `CHAR(3)` | Dispute Reason |
| `DCoDisputeAcctgDocCategory` |  | |  |  | `CHAR(3)` | Dispute Category |
| `DCoDisputeAcctgDocCategoryName` |  | |  |  | `CHAR(50)` | Category Name for Disputes |
