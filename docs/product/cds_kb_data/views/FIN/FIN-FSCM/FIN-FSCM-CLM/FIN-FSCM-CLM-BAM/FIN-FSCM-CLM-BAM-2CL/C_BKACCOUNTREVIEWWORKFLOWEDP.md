---
name: C_BKACCOUNTREVIEWWORKFLOWEDP
description: "This CDS view is used as data provider for the email send to the bank account reviewers during the bank account review process. This CDS view provides the data to answer the following business questions: What is the relevant bank account review area and bank account review? What is the reference date of the bank account review? What is the relevant workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value
semantic_en: "This CDS view is used as data provider for the email send to the bank account reviewers during the bank account review process. This CDS view provides the data to answer the following business questions: What is the relevant bank account review area and bank account review? What is the reference date of the bank account review? What is the relevant workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - task
  - metadata-only
---
# C_BKACCOUNTREVIEWWORKFLOWEDP

**This CDS view is used as data provider for the email send to the bank account reviewers during the bank account review process. This CDS view provides the data to answer the following business questions: What is the relevant bank account review area and bank account review? What is the reference date of the bank account review? What is the relevant workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
| `BankAccountReviewArea` |  | |  |  | `CHAR(20)` | Review Area ID |
| `BankAccountReviewAreaName` |  | |  |  | `CHAR(40)` | Bank Account Review Area Description |
| `BkAcctReviewAreaSnapshotDate` |  | |  |  | `DATS(8)` | Bank Account Snapshot Date |
| `BkAcctReviewAreaSnapshotTime` |  | |  |  | `TIMS(6)` | Bank Account Snapshot Time |
| `BankAccountReview` |  | |  |  | `CHAR(20)` | Bank Account Review ID |
| `BankAccountReviewName` |  | |  |  | `CHAR(40)` | Bank Account Review Description |
| `BankAccountReviewDate` |  | |  |  | `DATS(8)` | Bank Account Review - Reference Date |
| `WorkflowTaskURL` |  | |  |  | `SSTR(1333)` | Workflow: Workflow Task URL |
