---
name: C_BKPOWEROFATTORNEYWORKFLOWEDP
description: "This CDS view is used during the workflow for powers of attorney as data provider for the email notifications. This CDS view provides the data to answer the following business questions: Which power of attorney is affected? What is the URL for the workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOWEROFATTORNEYWORKFLOWEDP')/$value
semantic_en: "This CDS view is used during the workflow for powers of attorney as data provider for the email notifications. This CDS view provides the data to answer the following business questions: Which power of attorney is affected? What is the URL for the workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - notification
  - task
  - metadata-only
---
# C_BKPOWEROFATTORNEYWORKFLOWEDP

**This CDS view is used during the workflow for powers of attorney as data provider for the email notifications. This CDS view provides the data to answer the following business questions: Which power of attorney is affected? What is the URL for the workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOWEROFATTORNEYWORKFLOWEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
| `BankPowerOfAttorney` |  | |  |  | `CHAR(20)` | Power of Attorney ID |
| `BankPowerOfAttorneyName` |  | |  |  | `CHAR(40)` | Power of Attorney Description |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `BankPowerOfAttorneyType` |  | |  |  | `CHAR(4)` | Power of Attorney Type |
| `BankPowerOfAttorneyTypeName` |  | |  |  | `CHAR(50)` | Power of Attorney Type Description |
| `BankPowerOfAttorneyStatus` |  | |  |  | `CHAR(2)` | Power of Attorney Status |
| `BankPowerOfAttorneyStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `WorkflowTaskURL` |  | |  |  | `SSTR(1333)` | Workflow: Workflow Task URL |
