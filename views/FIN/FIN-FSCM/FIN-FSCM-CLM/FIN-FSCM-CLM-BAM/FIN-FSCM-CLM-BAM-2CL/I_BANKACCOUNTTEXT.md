---
name: I_BANKACCOUNTTEXT
description: This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTEXT')/$value
semantic_en: This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_BANKACCOUNTTEXT

**This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
