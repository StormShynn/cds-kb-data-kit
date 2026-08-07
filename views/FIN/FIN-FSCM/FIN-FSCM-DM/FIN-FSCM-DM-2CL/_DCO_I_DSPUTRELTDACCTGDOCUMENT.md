---
name: _DCO_I_DSPUTRELTDACCTGDOCUMENT
description: This CDS view provides access to receivable items that are related to disputes. It enables you to retrieve detailed information about receivable items associated with disputes, including disputed amounts, amounts to be collected, corrected, or written off, along with dispute reasons, decisions, and categories. This CDS view provides the data to answer the following business questions: What is the total disputed amount for a specific dispute? Which receivable items are associated with a particular dispute? What are the amounts to be collected, corrected, or written off for disputed receivable items? What are the reasons and decisions associated with disputed receivable items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTRELTDACCTGDOCUMENT')/$value
semantic_en: This CDS view provides access to receivable items that are related to disputes. It enables you to retrieve detailed information about receivable items associated with disputes, including disputed amounts, amounts to be collected, corrected, or written off, along with dispute reasons, decisions, and categories. This CDS view provides the data to answer the following business questions: What is the total disputed amount for a specific dispute? Which receivable items are associated with a particular dispute? What are the amounts to be collected, corrected, or written off for disputed receivable items? What are the reasons and decisions associated with disputed receivable items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_DSPUTRELTDACCTGDOCUMENT

**This CDS view provides access to receivable items that are related to disputes. It enables you to retrieve detailed information about receivable items associated with disputes, including disputed amounts, amounts to be collected, corrected, or written off, along with dispute reasons, decisions, and categories. This CDS view provides the data to answer the following business questions: What is the total disputed amount for a specific dispute? Which receivable items are associated with a particular dispute? What are the amounts to be collected, corrected, or written off for disputed receivable items? What are the reasons and decisions associated with disputed receivable items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTRELTDACCTGDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeUUID` |  | |  |  | `RAW(16)` | Dispute UUID |
| `DCoDsputReltdAcctgDocumentUUID` |  | |  |  | `RAW(16)` | Related Receivable Item UUID |
| `DCoAccountingDocumentUUID` |  | |  |  | `RAW(16)` | UUID of Receivable Item |
| `DCoDisputeAcctgDocCurrency` |  | |  |  | `CUKY(5)` | Receivable Item Currency |
| `DCoDsputAcctgDocDsputdAmt` |  | |  |  | `CURR(23)` | Disputed Amount |
| `DCoDsputAcctgDocToBeColltdAmt` |  | |  |  | `CURR(23)` | Amount to Be Collected |
| `DCoDsputAcctgDocCrrtnAmt` |  | |  |  | `CURR(23)` | Amount to Be Corrected |
| `DCoDsputAcctgDocWrtOffAmt` |  | |  |  | `CURR(23)` | Amount to Be Written Off |
| `DCoDisputeAcctgDocumentReason` |  | |  |  | `CHAR(3)` | Dispute Reason |
| `DCoDisputeAcctgDocDecision` |  | |  |  | `NUMC(1)` | Decision Code for Dispute |
| `DCoDisputeAcctgDocCategory` |  | |  |  | `CHAR(3)` | Dispute Category |
| `DCoDisputeAcctgDocCreationUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoDsputAcctgDocCrtnDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoDsputAcctgDocLastChgdByUsr` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoDsputAcctgDocLstChgDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
