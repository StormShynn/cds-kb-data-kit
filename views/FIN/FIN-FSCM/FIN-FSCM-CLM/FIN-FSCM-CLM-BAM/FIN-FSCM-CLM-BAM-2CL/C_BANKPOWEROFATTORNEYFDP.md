---
name: C_BANKPOWEROFATTORNEYFDP
description: "This CDS view is used during the creation of a PDF for powers of attorney and provides the header information of powers of attorney, such as the ID, the authorization group, valid-from date, the payment approval rule, the power of attorney type, and the bank account assignment type of the powers of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPOWEROFATTORNEYFDP')/$value
semantic_en: "This CDS view is used during the creation of a PDF for powers of attorney and provides the header information of powers of attorney, such as the ID, the authorization group, valid-from date, the payment approval rule, the power of attorney type, and the bank account assignment type of the powers of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - payment
  - metadata-only
---
# C_BANKPOWEROFATTORNEYFDP

**This CDS view is used during the creation of a PDF for powers of attorney and provides the header information of powers of attorney, such as the ID, the authorization group, valid-from date, the payment approval rule, the power of attorney type, and the bank account assignment type of the powers of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPOWEROFATTORNEYFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` |  | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BankPowerOfAttorney` |  | |  |  | `CHAR(20)` | Power of Attorney ID |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `BkPOAAdjustedValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `BankPowerOfAttorneyType` |  | |  |  | `CHAR(4)` | Power of Attorney Type |
| `BankPowerOfAttorneyTypeName` |  | |  |  | `CHAR(50)` | Power of Attorney Type Description |
| `BkPOABankAccountAssignmentType` |  | |  |  | `CHAR(2)` | Bank Account Assignment Type |
| `BkPOABkAcctAssignmentTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `BankPowerOfAttorneyName` |  | |  |  | `CHAR(40)` | Power of Attorney Description |
| `PaymentApprovalRule` |  | |  |  | `CHAR(20)` | Payment Approval Rule ID |
