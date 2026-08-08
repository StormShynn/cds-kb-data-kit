---
name: C_LEGALTRANSLINKEDOBJCUBE
description: "This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJCUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - transaction
  - metadata-only
---
# C_LEGALTRANSLINKEDOBJCUBE

**This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionLinkdObjUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMLinkdObjType` |  | |  |  | `CHAR(4)` | Linked Object Type |
| `LglCntntMLinkdObjTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMLinkdObj` |  | |  |  | `CHAR(255)` | Linked Object ID |
| `LegalTransactionTopUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionIsTriggerObj` |  | |  |  | `CHAR(1)` | Denotes if linked object is trigger object |
| `LglTransTriggerObjNameText` |  | |  |  | `CHAR(1)` | Text for Legal Transaction with Triggering Object |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMEntity` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMGovLawText` |  | |  |  | `CHAR(92)` | Governing Law Text |
| `LegalTransactionHealth` |  | |  |  | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMMainOrgTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMMainOrgName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `TotalNumberOfLegalTransactions` |  | |  |  | `INT4(10)` | Total Numbers of Legal Transaction |
| `TotNrOfLegalTransWithLinkedObj` |  | |  |  | `INT4(10)` |  |
