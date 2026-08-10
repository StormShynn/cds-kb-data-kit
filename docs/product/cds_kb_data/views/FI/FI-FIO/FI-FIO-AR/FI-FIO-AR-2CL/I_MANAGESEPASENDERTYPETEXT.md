---
name: I_MANAGESEPASENDERTYPETEXT
description: "This CDS view provides information about SEPA mandates created for Accounts Receivable (FI-AR) and Contract Accounts Receivable and Payable (FI-CA). This CDS view provides the data to answer the following business questions: What is the basic information of a SEPA mandate (for example, status, validity, and administrative data)? Who is the payer of a SEPA mandate? What is the address and bank-related information of the payer? Who is the payment recipient of a SEPA mandate? What is the address of the payment recipient? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MANAGESEPASENDERTYPETEXT')/$value
semantic_en: "This CDS view provides information about SEPA mandates created for Accounts Receivable (FI-AR) and Contract Accounts Receivable and Payable (FI-CA). This CDS view provides the data to answer the following business questions: What is the basic information of a SEPA mandate (for example, status, validity, and administrative data)? Who is the payer of a SEPA mandate? What is the address and bank-related information of the payer? Who is the payment recipient of a SEPA mandate? What is the address of the payment recipient? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-AR-2CL
  - contract
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_MANAGESEPASENDERTYPETEXT

**This CDS view provides information about SEPA mandates created for Accounts Receivable (FI-AR) and Contract Accounts Receivable and Payable (FI-CA). This CDS view provides the data to answer the following business questions: What is the basic information of a SEPA mandate (for example, status, validity, and administrative data)? Who is the payer of a SEPA mandate? What is the address and bank-related information of the payer? Who is the payment recipient of a SEPA mandate? What is the address of the payment recipient? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MANAGESEPASENDERTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateSenderType` |  | |  |  | `CHAR(10)` | Object type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SEPAMandateSenderTypeName` |  | |  |  | `CHAR(80)` | SEPA Mandate Sender Type Name |
