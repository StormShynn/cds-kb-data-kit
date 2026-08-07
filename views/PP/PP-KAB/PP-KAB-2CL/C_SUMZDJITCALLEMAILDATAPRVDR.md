---
name: C_SUMZDJITCALLEMAILDATAPRVDR
description: This CDS view forms the basis for the predelivered Output Management email template for summarized JIT calls (PP_SUM_JIT_CALL_EMAIL). This CDS view provides the fields that can be used in the template for the email message body, specifically focusing on the output partner and plant information. This CDS view provides the data to answer the following business questions: Which fields are included in the email template for Output Management for Summarized JIT Calls? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value
semantic_en: This CDS view forms the basis for the predelivered Output Management email template for summarized JIT calls (PP_SUM_JIT_CALL_EMAIL). This CDS view provides the fields that can be used in the template for the email message body, specifically focusing on the output partner and plant information. This CDS view provides the data to answer the following business questions: Which fields are included in the email template for Output Management for Summarized JIT Calls? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - PP
  - bo:companycode
  - component:PP-KAB-2CL
  - consumption-view
  - lob:manufacturing
  - plan
  - PP-KAB
  - PP-KAB-2CL
  - metadata-only
---
# C_SUMZDJITCALLEMAILDATAPRVDR

**This CDS view forms the basis for the predelivered Output Management email template for summarized JIT calls (PP_SUM_JIT_CALL_EMAIL). This CDS view provides the fields that can be used in the template for the email message body, specifically focusing on the output partner and plant information. This CDS view provides the data to answer the following business questions: Which fields are included in the email template for Output Management for Summarized JIT Calls? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallNumber` |  | |  |  | `CHAR(10)` | JIT Call Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `OutputPartnerForSumzdJITCall` |  | |  |  | `CHAR(10)` | Output Partner |
| `JITCallProfile` |  | |  |  | `CHAR(4)` | JIT Call Profile |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
