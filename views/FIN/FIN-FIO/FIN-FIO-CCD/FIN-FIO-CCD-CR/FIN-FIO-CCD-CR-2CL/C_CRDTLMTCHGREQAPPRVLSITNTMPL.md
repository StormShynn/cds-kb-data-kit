---
name: C_CRDTLMTCHGREQAPPRVLSITNTMPL
description: This CDS view is designed to facilitate the approval process for credit limit change requests by providing a structured template for managing and viewing approval hierarchies. It serves as a consumption view that integrates with transactional data related to credit limit requests, ensuring that the approval process is streamlined and efficient. This CDS view provides the data to answer the following business questions: What is the current status of a credit limit change request approval? Who are the approvers involved in the credit limit change request process? What is the hierarchical level of each approver in the credit limit change request approval process? Which credit segment is associated with a particular credit limit change request? What is the unique identifier (CaseID) for each credit limit change request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value
semantic_en: This CDS view is designed to facilitate the approval process for credit limit change requests by providing a structured template for managing and viewing approval hierarchies. It serves as a consumption view that integrates with transactional data related to credit limit requests, ensuring that the approval process is streamlined and efficient. This CDS view provides the data to answer the following business questions: What is the current status of a credit limit change request approval? Who are the approvers involved in the credit limit change request process? What is the hierarchical level of each approver in the credit limit change request approval process? Which credit segment is associated with a particular credit limit change request? What is the unique identifier (CaseID) for each credit limit change request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FIO-CCD-CR-2CL
  - consumption-view
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - lob:finance
  - transaction
  - metadata-only
---
# C_CRDTLMTCHGREQAPPRVLSITNTMPL

**This CDS view is designed to facilitate the approval process for credit limit change requests by providing a structured template for managing and viewing approval hierarchies. It serves as a consumption view that integrates with transactional data related to credit limit requests, ensuring that the approval process is streamlined and efficient. This CDS view provides the data to answer the following business questions: What is the current status of a credit limit change request approval? Who are the approvers involved in the credit limit change request process? What is the hierarchical level of each approver in the credit limit change request approval process? Which credit segment is associated with a particular credit limit change request? What is the unique identifier (CaseID) for each credit limit change request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` |  | |  |  | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CrdtLmtChgReqApprvlHierUUID` |  | |  |  | `RAW(16)` | UUID serving as key (parent key, root key) |
| `CrdtLmtChgReqApprvlHierLevel` |  | |  |  | `INT2(5)` | Approval Level |
| `CreditLimitChangeReqApprover` |  | |  |  | `CHAR(12)` | Approver |
| `CreditLimitChgReqApprvrGroup` |  | |  |  | `CHAR(40)` | Approver Group |
| `CreditLimitChgReqApprvlStatus` |  | |  |  | `CHAR(1)` | Status |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
