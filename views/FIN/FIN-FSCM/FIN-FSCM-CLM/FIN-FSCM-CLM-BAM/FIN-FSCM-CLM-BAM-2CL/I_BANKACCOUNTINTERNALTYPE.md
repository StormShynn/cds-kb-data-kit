---
name: I_BANKACCOUNTINTERNALTYPE
description: "This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTINTERNALTYPE')/$value
semantic_en: "This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - contract
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_BANKACCOUNTINTERNALTYPE

**This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTINTERNALTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
