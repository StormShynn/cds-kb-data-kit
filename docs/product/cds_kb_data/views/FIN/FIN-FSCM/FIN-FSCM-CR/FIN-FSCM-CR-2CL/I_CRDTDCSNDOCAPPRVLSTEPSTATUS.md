---
name: I_CRDTDCSNDOCAPPRVLSTEPSTATUS
description: "This CDS view is designed to provide information about the approval step status of credit decision documents. It retrieves and presents the status of these documents, allowing users to understand the current state of approval processes. This view provides supported values for CreditDecisionDocApprvlStatus. The values and their meanings are: Value Meaning 1 Pending 2 Approved 3 Rejected 4 Redundant This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? How can I access the descriptive text associated with each approval status? What are the possible approval statuses defined for credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTATUS')/$value
semantic_en: "This CDS view is designed to provide information about the approval step status of credit decision documents. It retrieves and presents the status of these documents, allowing users to understand the current state of approval processes. This view provides supported values for CreditDecisionDocApprvlStatus. The values and their meanings are: Value Meaning 1 Pending 2 Approved 3 Rejected 4 Redundant This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? How can I access the descriptive text associated with each approval status? What are the possible approval statuses defined for credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CRDTDCSNDOCAPPRVLSTEPSTATUS

**This CDS view is designed to provide information about the approval step status of credit decision documents. It retrieves and presents the status of these documents, allowing users to understand the current state of approval processes. This view provides supported values for CreditDecisionDocApprvlStatus. The values and their meanings are: Value Meaning 1 Pending 2 Approved 3 Rejected 4 Redundant This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? How can I access the descriptive text associated with each approval status? What are the possible approval statuses defined for credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocApprvlStatus` |  | |  |  | `CHAR(1)` | Status |
