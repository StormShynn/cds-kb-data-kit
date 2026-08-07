---
name: _DCO_I_ACCOUNTDISPUTE
description: "This CDS view provides a comprehensive view of disputes associated with collection accounts. It combines account information with dispute details, including both active disputes and draft disputes, to enable monitoring and management of dispute resolution processes. This CDS view provides the data to answer the following business questions: Which disputes are currently open for a specific collection account? What is the total disputed amount across all accounts in a specific company code? Which disputes are approaching their deadline and require immediate attention? Who is responsible for processing disputes for a particular business partner? What is the status of dispute resolution activities across different escalation levels? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTDISPUTE')/$value
semantic_en: "This CDS view provides a comprehensive view of disputes associated with collection accounts. It combines account information with dispute details, including both active disputes and draft disputes, to enable monitoring and management of dispute resolution processes. This CDS view provides the data to answer the following business questions: Which disputes are currently open for a specific collection account? What is the total disputed amount across all accounts in a specific company code? Which disputes are approaching their deadline and require immediate attention? Who is responsible for processing disputes for a particular business partner? What is the status of dispute resolution activities across different escalation levels? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_ACCOUNTDISPUTE

**This CDS view provides a comprehensive view of disputes associated with collection accounts. It combines account information with dispute details, including both active disputes and draft disputes, to enable monitoring and management of dispute resolution processes. This CDS view provides the data to answer the following business questions: Which disputes are currently open for a specific collection account? What is the total disputed amount across all accounts in a specific company code? Which disputes are approaching their deadline and require immediate attention? Who is responsible for processing disputes for a particular business partner? What is the status of dispute resolution activities across different escalation levels? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTDISPUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` |  | |  |  | `RAW(16)` | UUID of Collection Account |
| `DCoDisputeUUID` |  | |  |  | `RAW(16)` | Dispute UUID |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoBusinessPartnerBranch` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `DebtCollectionsDispute` |  | |  |  | `CHAR(12)` | Dispute |
| `DCoDisputeProcessStep` |  | |  |  | `NUMC(1)` | Processing Step for Disputes |
| `DCoDisputeProcessStepStatus` |  | |  |  | `CHAR(3)` | Processing Step Status |
| `DCoDisputePriority` |  | |  |  | `NUMC(1)` | Priority of the Dispute |
| `DCoDisputeEscalationReason` |  | |  |  | `CHAR(3)` | Escalation Reason for Disputes |
| `DCoDisputeEscalationLevelValue` |  | |  |  | `NUMC(2)` | Escalation Level of Dispute |
| `DCoDisputeCurrency` |  | |  |  | `CUKY(5)` | Dispute Currency |
| `DCoDisputeProcessor` |  | |  |  | `CHAR(12)` | Processor of the Dispute |
| `DCoDisputeProcessorGroup` |  | |  |  | `CHAR(40)` | Processor Group for Disputes |
| `DCoDisputeProcessCoordinator` |  | |  |  | `CHAR(12)` | Process Coordinator |
| `DCoDisputeResponsiblePerson` |  | |  |  | `CHAR(12)` | Responsible for the Dispute |
| `DCoDisputeCustContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `DCoDisputeProcStepDeadlineDate` |  | |  |  | `DATS(8)` | Processing Step Deadline |
| `DCoDisputePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Decision Date |
| `DCoDsputDbtCollsActyIsCrted` |  | |  |  | `CHAR(1)` | Dispute Was Created During Activity |
| `DCoPredecessorServiceRequest` |  | |  |  | `CHAR(32)` | Preceding Service Request |
| `DCoPredecessorServiceReqUUID` |  | |  |  | `RAW(16)` | UUID of Preceding Service Request |
| `DCoDebtCollectionsActivity` |  | |  |  | `CHAR(12)` | Activity |
| `DCoDsputOrigntgInbComm` |  | |  |  | `CHAR(32)` | Originating Inbound Communication |
| `DCoDsputOrigntgInbCommUUID` |  | |  |  | `RAW(16)` | Originating Inbound Communication UUID |
| `DCoDsputCustomerInteraction` |  | |  |  | `CHAR(32)` | Customer Interaction |
| `DCoDsputCustInteractionUUID` |  | |  |  | `RAW(16)` | Customer Interaction UUID |
| `DCoPredecessorDispute` |  | |  |  | `CHAR(12)` | Preceding Dispute |
| `DCoOriginatingBankStatement` |  | |  |  | `CHAR(14)` | Bank Statement |
| `DCoOrigntgObjectLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Originating Object |
| `DCoDisputeAssgdServiceRequest` |  | |  |  | `CHAR(32)` | Assigned Service Request |
| `DCoDisputeAssgdSrvcRequestUUID` |  | |  |  | `RAW(16)` | Assigned Service Request UUID |
| `DCoDisputedSumAmount` |  | |  |  | `CURR(23)` | Overall Disputed Amount |
| `DCoDisputeCorrectionSumAmount` |  | |  |  | `CURR(23)` | Overall Amount to Be Corrected |
| `DCoDsputToBeWrittenOffSumAmt` |  | |  |  | `CURR(23)` | Overall Amount to Be Written Off |
| `DCoDsputAcctgDocColltdSumAmt` |  | |  |  | `CURR(23)` | Overall Amount to Be Collected |
| `DCoDisputeCreationUser` |  | |  |  | `CHAR(12)` | Dispute Created By |
| `DCoDisputeCreationDateTime` |  | |  |  | `DEC(15)` | Dispute Created On/At |
| `DCoDisputeLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoDisputeLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoDisputeClosedByUser` |  | |  |  | `CHAR(12)` | Closed By |
| `DCoDisputeClosingDateTime` |  | |  |  | `DEC(15)` | Closed On/At |
| `DCoDisputeDecidedByUser` |  | |  |  | `CHAR(12)` | Dispute Decided By |
| `DCoDisputeDecisionDateTime` |  | |  |  | `DEC(15)` | Dispute Decided On/At |
| `DCoDisputeIsMigrated` |  | |  |  | `CHAR(1)` | Dispute Is Migrated from SAP Dispute Management |
| `DCoDisputeCriticality` |  | |  |  | `INT1(3)` | Dispute Criticality |
