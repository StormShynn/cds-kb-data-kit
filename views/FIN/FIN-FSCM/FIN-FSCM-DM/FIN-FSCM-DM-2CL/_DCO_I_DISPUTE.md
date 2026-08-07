---
name: _DCO_I_DISPUTE
description: "This CDS view provides access to dispute data in the context of collections and dispute automation. It enables you to retrieve and analyze information about disputes raised by customers regarding receivable items, including dispute status, processing details, amounts, and responsible parties. This CDS view provides the data to answer the following business questions: Which disputes are currently open and assigned to my processor group? What is the total disputed amount per business partner? Which disputes have exceeded their processing step deadline? How many disputes are at a high priority or escalation level? What is the distribution of disputes across different processing steps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTE')/$value
semantic_en: "This CDS view provides access to dispute data in the context of collections and dispute automation. It enables you to retrieve and analyze information about disputes raised by customers regarding receivable items, including dispute status, processing details, amounts, and responsible parties. This CDS view provides the data to answer the following business questions: Which disputes are currently open and assigned to my processor group? What is the total disputed amount per business partner? Which disputes have exceeded their processing step deadline? How many disputes are at a high priority or escalation level? What is the distribution of disputes across different processing steps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "Dispute (Collections and Dispute Automation"
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
# _DCO_I_DISPUTE

**This CDS view provides access to dispute data in the context of collections and dispute automation. It enables you to retrieve and analyze information about disputes raised by customers regarding receivable items, including dispute status, processing details, amounts, and responsible parties. This CDS view provides the data to answer the following business questions: Which disputes are currently open and assigned to my processor group? What is the total disputed amount per business partner? Which disputes have exceeded their processing step deadline? How many disputes are at a high priority or escalation level? What is the distribution of disputes across different processing steps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeUUID` |  | |  |  | `RAW(16)` | Dispute UUID |
| `DCoDisputeUUID` |  | |  |  | `RAW(16)` | Dispute UUID |
| `DebtCollectionsDispute` |  | |  |  | `CHAR(12)` | Dispute |
| `DebtCollectionsDispute` |  | |  |  | `CHAR(12)` | Dispute |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoDisputeProcessStep` |  | |  |  | `NUMC(1)` | Processing Step for Disputes |
| `DCoDisputeProcessStep` |  | |  |  | `NUMC(1)` | Processing Step for Disputes |
| `DCoDisputeProcessStepStatus` |  | |  |  | `CHAR(3)` | Processing Step Status |
| `DCoDisputeProcessStepStatus` |  | |  |  | `CHAR(3)` | Processing Step Status |
| `DCoDisputePriority` |  | |  |  | `NUMC(1)` | Priority of the Dispute |
| `DCoDisputePriority` |  | |  |  | `NUMC(1)` | Priority of the Dispute |
| `DCoDisputeEscalationReason` |  | |  |  | `CHAR(3)` | Escalation Reason for Disputes |
| `DCoDisputeEscalationReason` |  | |  |  | `CHAR(3)` | Escalation Reason for Disputes |
| `DCoDisputeEscalationLevelValue` |  | |  |  | `NUMC(2)` | Escalation Level of Dispute |
| `DCoDisputeEscalationLevelValue` |  | |  |  | `NUMC(2)` | Escalation Level of Dispute |
| `DCoDisputeCurrency` |  | |  |  | `CUKY(5)` | Dispute Currency |
| `DCoDisputeCurrency` |  | |  |  | `CUKY(5)` | Dispute Currency |
| `DCoDisputeProcessor` |  | |  |  | `CHAR(12)` | Processor of the Dispute |
| `DCoDisputeProcessor` |  | |  |  | `CHAR(12)` | Processor of the Dispute |
| `DCoDisputeProcessorGroup` |  | |  |  | `CHAR(40)` | Processor Group for Disputes |
| `DCoDisputeProcessorGroup` |  | |  |  | `CHAR(40)` | Processor Group for Disputes |
| `DCoDisputeProcessCoordinator` |  | |  |  | `CHAR(12)` | Process Coordinator |
| `DCoDisputeProcessCoordinator` |  | |  |  | `CHAR(12)` | Process Coordinator |
| `DCoDisputeResponsiblePerson` |  | |  |  | `CHAR(12)` | Responsible for the Dispute |
| `DCoDisputeResponsiblePerson` |  | |  |  | `CHAR(12)` | Responsible for the Dispute |
| `DCoDisputeCustContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `DCoDisputeCustContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `DCoDisputeProcStepDeadlineDate` |  | |  |  | `DATS(8)` | Processing Step Deadline |
| `DCoDisputeProcStepDeadlineDate` |  | |  |  | `DATS(8)` | Processing Step Deadline |
| `DCoDisputePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Decision Date |
| `DCoDisputePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Decision Date |
| `DCoDsputDbtCollsActyIsCrted` |  | |  |  | `CHAR(1)` | Dispute Was Created During Activity |
| `DCoDsputDbtCollsActyIsCrted` |  | |  |  | `CHAR(1)` | Dispute Was Created During Activity |
| `DCoPredecessorServiceRequest` |  | |  |  | `CHAR(32)` | Preceding Service Request |
| `DCoPredecessorServiceRequest` |  | |  |  | `CHAR(32)` | Preceding Service Request |
| `DCoPredecessorServiceReqUUID` |  | |  |  | `RAW(16)` | UUID of Preceding Service Request |
| `DCoPredecessorServiceReqUUID` |  | |  |  | `RAW(16)` | UUID of Preceding Service Request |
| `DCoDebtCollectionsActivity` |  | |  |  | `CHAR(12)` | Activity |
| `DCoDebtCollectionsActivity` |  | |  |  | `CHAR(12)` | Activity |
| `DCoDsputOrigntgInbComm` |  | |  |  | `CHAR(32)` | Originating Inbound Communication |
| `DCoDsputOrigntgInbComm` |  | |  |  | `CHAR(32)` | Originating Inbound Communication |
| `DCoDsputOrigntgInbCommUUID` |  | |  |  | `RAW(16)` | Originating Inbound Communication UUID |
| `DCoDsputOrigntgInbCommUUID` |  | |  |  | `RAW(16)` | Originating Inbound Communication UUID |
| `DCoPredecessorDispute` |  | |  |  | `CHAR(12)` | Preceding Dispute |
| `DCoPredecessorDispute` |  | |  |  | `CHAR(12)` | Preceding Dispute |
| `DCoOriginatingBankStatement` |  | |  |  | `CHAR(14)` | Bank Statement |
| `DCoOriginatingBankStatement` |  | |  |  | `CHAR(14)` | Bank Statement |
| `DCoOrigntgObjectLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Originating Object |
| `DCoOrigntgObjectLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Originating Object |
| `DCoDisputeAssgdServiceRequest` |  | |  |  | `CHAR(32)` | Assigned Service Request |
| `DCoDisputeAssgdServiceRequest` |  | |  |  | `CHAR(32)` | Assigned Service Request |
| `DCoDisputeAssgdSrvcRequestUUID` |  | |  |  | `RAW(16)` | Assigned Service Request UUID |
| `DCoDisputeAssgdSrvcRequestUUID` |  | |  |  | `RAW(16)` | Assigned Service Request UUID |
| `DCoDsputCustomerInteraction` |  | |  |  | `CHAR(32)` | Customer Interaction |
| `DCoDsputCustomerInteraction` |  | |  |  | `CHAR(32)` | Customer Interaction |
| `DCoDsputCustInteractionUUID` |  | |  |  | `RAW(16)` | Customer Interaction UUID |
| `DCoDsputCustInteractionUUID` |  | |  |  | `RAW(16)` | Customer Interaction UUID |
| `DCoDisputedSumAmount` |  | |  |  | `CURR(23)` | Overall Disputed Amount |
| `DCoDisputedSumAmount` |  | |  |  | `CURR(23)` | Overall Disputed Amount |
| `DCoDisputeCorrectionSumAmount` |  | |  |  | `CURR(23)` | Overall Amount to Be Corrected |
| `DCoDisputeCorrectionSumAmount` |  | |  |  | `CURR(23)` | Overall Amount to Be Corrected |
| `DCoDsputToBeWrittenOffSumAmt` |  | |  |  | `CURR(23)` | Overall Amount to Be Written Off |
| `DCoDsputToBeWrittenOffSumAmt` |  | |  |  | `CURR(23)` | Overall Amount to Be Written Off |
| `DCoDsputAcctgDocColltdSumAmt` |  | |  |  | `CURR(23)` | Overall Amount to Be Collected |
| `DCoDsputAcctgDocColltdSumAmt` |  | |  |  | `CURR(23)` | Overall Amount to Be Collected |
| `DCoDisputeCreationUser` |  | |  |  | `CHAR(12)` | Dispute Created By |
| `DCoDisputeCreationUser` |  | |  |  | `CHAR(12)` | Dispute Created By |
| `DCoDisputeCreationDateTime` |  | |  |  | `DEC(15)` | Dispute Created On/At |
| `DCoDisputeCreationDateTime` |  | |  |  | `DEC(15)` | Dispute Created On/At |
| `DCoDisputeLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoDisputeLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoDisputeLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoDisputeLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoDisputeClosedByUser` |  | |  |  | `CHAR(12)` | Closed By |
| `DCoDisputeClosedByUser` |  | |  |  | `CHAR(12)` | Closed By |
| `DCoDisputeClosingDateTime` |  | |  |  | `DEC(15)` | Closed On/At |
| `DCoDisputeClosingDateTime` |  | |  |  | `DEC(15)` | Closed On/At |
| `DCoDisputeDecidedByUser` |  | |  |  | `CHAR(12)` | Dispute Decided By |
| `DCoDisputeDecidedByUser` |  | |  |  | `CHAR(12)` | Dispute Decided By |
| `DCoDisputeDecisionDateTime` |  | |  |  | `DEC(15)` | Dispute Decided On/At |
| `DCoDisputeDecisionDateTime` |  | |  |  | `DEC(15)` | Dispute Decided On/At |
| `DCoDisputeIsMigrated` |  | |  |  | `CHAR(1)` | Dispute Is Migrated from SAP Dispute Management |
| `DCoDisputeIsMigrated` |  | |  |  | `CHAR(1)` | Dispute Is Migrated from SAP Dispute Management |
