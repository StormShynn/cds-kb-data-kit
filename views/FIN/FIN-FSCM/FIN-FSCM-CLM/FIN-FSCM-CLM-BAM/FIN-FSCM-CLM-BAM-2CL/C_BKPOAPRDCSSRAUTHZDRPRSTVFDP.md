---
name: C_BKPOAPRDCSSRAUTHZDRPRSTVFDP
description: "This CDS view is used as data provider during the PDF generation for powers of attorney and provides information about the authorized representatives of the predecessor power of attorney. This CDS view provides the data to answer the following business questions: Who are the authorized representatives of the predecessor power of attorney? What is the comparison result between the predecessor and successor powers of attorney for the authorized representatives? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value
semantic_en: "This CDS view is used as data provider during the PDF generation for powers of attorney and provides information about the authorized representatives of the predecessor power of attorney. This CDS view provides the data to answer the following business questions: Who are the authorized representatives of the predecessor power of attorney? What is the comparison result between the predecessor and successor powers of attorney for the authorized representatives? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - metadata-only
---
# C_BKPOAPRDCSSRAUTHZDRPRSTVFDP

**This CDS view is used as data provider during the PDF generation for powers of attorney and provides information about the authorized representatives of the predecessor power of attorney. This CDS view provides the data to answer the following business questions: Who are the authorized representatives of the predecessor power of attorney? What is the comparison result between the predecessor and successor powers of attorney for the authorized representatives? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` |  | |  |  | `RAW(16)` | Power of Attorney UUID |
| `PredecessorBankPOAUUID` |  | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOAAuthzdRepresentative` |  | |  |  | `CHAR(10)` | Business Partner Number of Authorized Representative |
| `PaymentApproverGroup` |  | |  |  | `CHAR(3)` | Payment Approver Group |
| `BkPOAComparisonResult` |  | |  |  | `INT1(3)` | Comparison Result |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `FormOfAddressName` |  | |  |  | `CHAR(30)` | Title text |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `BirthDate` |  | |  |  | `DATS(8)` | Date of Birth of Business Partner |
| `BankPowerOfAttorney` |  | |  |  | `CHAR(20)` | Power of Attorney ID |
| `BankPowerOfAttorneyPredecessor` |  | |  |  | `CHAR(20)` | ID of Predecessor Power of Attorney |
