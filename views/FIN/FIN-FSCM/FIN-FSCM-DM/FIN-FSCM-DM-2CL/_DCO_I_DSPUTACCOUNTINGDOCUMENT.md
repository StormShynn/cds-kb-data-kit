---
name: _DCO_I_DSPUTACCOUNTINGDOCUMENT
description: This CDS view provides access to disputed receivable items within the dispute resolution process. It enables retrieval of receivable items that are under dispute, including their disputed amounts, collection amounts, correction amounts, and write-off amounts. This CDS view provides the data to answer the following business questions: What is the total disputed amount for a specific customer dispute? Which receivable items are associated with a particular dispute? What amounts need to be collected, corrected, or written off for disputed items? What are the reasons and decisions recorded for disputed receivable items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTACCOUNTINGDOCUMENT')/$value
semantic_en: This CDS view provides access to disputed receivable items within the dispute resolution process. It enables retrieval of receivable items that are under dispute, including their disputed amounts, collection amounts, correction amounts, and write-off amounts. This CDS view provides the data to answer the following business questions: What is the total disputed amount for a specific customer dispute? Which receivable items are associated with a particular dispute? What amounts need to be collected, corrected, or written off for disputed items? What are the reasons and decisions recorded for disputed receivable items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Disputed Receivable Item (Collections and Dispute Automation)
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-DM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - lob:finance
  - metadata-only
---
# _DCO_I_DSPUTACCOUNTINGDOCUMENT

**This CDS view provides access to disputed receivable items within the dispute resolution process. It enables retrieval of receivable items that are under dispute, including their disputed amounts, collection amounts, correction amounts, and write-off amounts. This CDS view provides the data to answer the following business questions: What is the total disputed amount for a specific customer dispute? Which receivable items are associated with a particular dispute? What amounts need to be collected, corrected, or written off for disputed items? What are the reasons and decisions recorded for disputed receivable items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTACCOUNTINGDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeUUID` |  | |  |  | `RAW(16)` | Dispute UUID |
| `DCoDisputeAccountingDocUUID` |  | |  |  | `RAW(16)` | Receivable Item - Link UUID |
| `DCoAccountingDocumentUUID` |  | |  |  | `RAW(16)` | UUID of Receivable Item |
| `DCoDisputeAcctgDocCurrency` |  | |  |  | `CUKY(5)` | Receivable Item Currency |
| `DCoDsputAcctgDocDsputdAmt` |  | |  |  | `CURR(23)` | Disputed Amount |
| `DCoDsputAcctgDocToBeColltdAmt` |  | |  |  | `CURR(23)` | Amount to Be Collected |
| `DCoDsputAcctgDocCrrtnAmt` |  | |  |  | `CURR(23)` | Amount to Be Corrected |
| `DCoDsputAcctgDocWrtOffAmt` |  | |  |  | `CURR(23)` | Amount to Be Written Off |
| `DCoDisputeAcctgDocumentReason` |  | |  |  | `CHAR(3)` | Dispute Reason |
| `DCoDisputeAcctgDocDecision` |  | |  |  | `NUMC(1)` | Decision Code for Dispute |
| `DCoDisputeAcctgDocCategory` |  | |  |  | `CHAR(3)` | Dispute Category |
| `DCoPrelimAccountingDocumentID` |  | |  |  | `CHAR(32)` | ID of Receivable Item |
| `DCoPrelimAcctgDocLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Receivable Item |
| `DCoAIEvaluationIsPerformed` |  | |  |  | `CHAR(1)` | Evaluated |
| `DCoAIResolutionIsPerformed` |  | |  |  | `CHAR(1)` | Resolved |
| `DCoDisputeAcctgDocCreationUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoDsputAcctgDocCrtnDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoDsputAcctgDocLastChgdByUsr` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoDsputAcctgDocLstChgDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
