---
name: _DCO_I_ACCOUNTDISPUTEVH
description: This CDS view provides value help for disputes of an account in the collection process. It enables users to search and select disputes of an account based on various criteria such as business partner, company code, dispute process step, status, priority, and responsible persons. This CDS view provides the data to answer the following business questions: Which disputes are assigned to a specific business partner? What is the current status of disputes for a given company code? Which disputes are assigned to a specific processor or processor group? What are the high-priority disputes that require immediate attention? Which disputes have exceeded their planned close date? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTDISPUTEVH')/$value
semantic_en: This CDS view provides value help for disputes of an account in the collection process. It enables users to search and select disputes of an account based on various criteria such as business partner, company code, dispute process step, status, priority, and responsible persons. This CDS view provides the data to answer the following business questions: Which disputes are assigned to a specific business partner? What is the current status of disputes for a given company code? Which disputes are assigned to a specific processor or processor group? What are the high-priority disputes that require immediate attention? Which disputes have exceeded their planned close date? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - plan
  - metadata-only
---
# _DCO_I_ACCOUNTDISPUTEVH

**This CDS view provides value help for disputes of an account in the collection process. It enables users to search and select disputes of an account based on various criteria such as business partner, company code, dispute process step, status, priority, and responsible persons. This CDS view provides the data to answer the following business questions: Which disputes are assigned to a specific business partner? What is the current status of disputes for a given company code? Which disputes are assigned to a specific processor or processor group? What are the high-priority disputes that require immediate attention? Which disputes have exceeded their planned close date? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTDISPUTEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` |  | |  |  | `RAW(16)` | UUID of Collection Account |
| `DCoDisputeUUID` |  | |  |  | `RAW(16)` | Dispute UUID |
| `DebtCollectionsDispute` |  | |  |  | `CHAR(12)` | Dispute |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
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
| `DCoPredecessorServiceRequest` |  | |  |  | `CHAR(32)` | Preceding Service Request |
| `DCoDebtCollectionsActivity` |  | |  |  | `CHAR(12)` | Activity |
| `DCoDsputOrigntgInbComm` |  | |  |  | `CHAR(32)` | Originating Inbound Communication |
| `DCoPredecessorDispute` |  | |  |  | `CHAR(12)` | Preceding Dispute |
| `DCoDsputCustomerInteraction` |  | |  |  | `CHAR(32)` | Customer Interaction |
| `DCoDisputeAssgdServiceRequest` |  | |  |  | `CHAR(32)` | Assigned Service Request |
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
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `DCoCompanyCodeName` |  | |  |  | `CHAR(50)` | Company Code in Collections and Dispute Automation (Name) |
| `DCoDisputeCustCntctPersonName` |  | |  |  | `CHAR(81)` |  |
| `DCoDisputeCreationUserName` |  | |  |  | `CHAR(80)` | User Description |
| `DCoDisputeLastChgdByUserName` |  | |  |  | `CHAR(80)` | User Description |
| `DCoDisputeClosedByUserName` |  | |  |  | `CHAR(80)` | User Description |
| `DCoDisputeDecidedByUserName` |  | |  |  | `CHAR(80)` | User Description |
| `DCoDisputeProcessorName` |  | |  |  | `CHAR(80)` | User Description |
| `DCoDisputeProcCoordinatorName` |  | |  |  | `CHAR(80)` | User Description |
| `DCoDisputeRespPersonName` |  | |  |  | `CHAR(80)` | User Description |
| `DCoDisputeEscalationReasonName` |  | |  |  | `CHAR(50)` | Name of Escalation Reason for Disputes |
| `DCoDisputePriorityName` |  | |  |  | `CHAR(30)` | Name of the Priority of the Dispute |
| `DCoDisputeProcessStepName` |  | |  |  | `CHAR(50)` | Name of the Processing Step |
| `DCoDisputeCurrencyName` |  | |  |  | `CHAR(40)` | Description |
| `DCoDisputeProcessStepStsName` |  | |  |  | `CHAR(50)` | Status Name for Processing Step |
| `DCoDisputeProcessorGroupName` |  | |  |  | `SSTR(80)` | Name of the Processor Group for Disputes |
| `DCoBusinessPartnerBranch` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
