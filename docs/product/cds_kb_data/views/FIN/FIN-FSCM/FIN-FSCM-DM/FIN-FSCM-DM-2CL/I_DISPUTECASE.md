---
name: I_DISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of dispute cases within a business context. It integrates various attributes related to dispute cases, such as company code, customer information, case status, currency details, and coordinator information, enabling efficient management and analysis of dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What are the details of each dispute case, including the disputed and original amounts? Which company code and customer are associated with each dispute case? What is the current status of each dispute case? Who is the coordinator responsible for handling each dispute case, and what is their full name? What is the root cause of each dispute case? What currency is used for the disputed amounts, and what is the global currency and exchange rate type associated with the company code? How can the data be extracted for analytical purposes, including change data capture for dispute cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of dispute cases within a business context. It integrates various attributes related to dispute cases, such as company code, customer information, case status, currency details, and coordinator information, enabling efficient management and analysis of dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What are the details of each dispute case, including the disputed and original amounts? Which company code and customer are associated with each dispute case? What is the current status of each dispute case? Who is the coordinator responsible for handling each dispute case, and what is their full name? What is the root cause of each dispute case? What currency is used for the disputed amounts, and what is the global currency and exchange rate type associated with the company code? How can the data be extracted for analytical purposes, including change data capture for dispute cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-DM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DISPUTECASE

**This CDS view is designed to provide a comprehensive overview of dispute cases within a business context. It integrates various attributes related to dispute cases, such as company code, customer information, case status, currency details, and coordinator information, enabling efficient management and analysis of dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What are the details of each dispute case, including the disputed and original amounts? Which company code and customer are associated with each dispute case? What is the current status of each dispute case? Who is the coordinator responsible for handling each dispute case, and what is their full name? What is the root cause of each dispute case? What currency is used for the disputed amounts, and what is the global currency and exchange rate type associated with the company code? How can the data be extracted for analytical purposes, including change data capture for dispute cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `DisputedAmount` |  | |  |  | `CURR(15)` | Current Disputed Amount |
| `OriginalAmount` |  | |  |  | `CURR(15)` | Original Disputed Amount |
| `Currency` |  | |  |  | `CUKY(5)` | Currency of Dispute Case |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  |  | `CHAR(80)` | User Description |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `GlobalCurrencyExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
