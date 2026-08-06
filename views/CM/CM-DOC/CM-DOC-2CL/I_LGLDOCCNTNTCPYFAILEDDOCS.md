---
name: I_LGLDOCCNTNTCPYFAILEDDOCS
description: This CDS view provides the list of failed documents during copy of document content in Create with Reference process. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_FAILED configured in Manage Legal Documents application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in this Legal Document? Is there any pending process to be completed before changing/editing this legal document? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILEDDOCS')/$value
semantic_en: This CDS view provides the list of failed documents during copy of document content in Create with Reference process. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_FAILED configured in Manage Legal Documents application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in this Legal Document? Is there any pending process to be completed before changing/editing this legal document? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CM
  - bo:companycode
  - CM-DOC
  - CM-DOC-2CL
  - component:CM-DOC-2CL
  - contract
  - document
  - interface-view
  - metadata-only
---
# I_LGLDOCCNTNTCPYFAILEDDOCS

**This CDS view provides the list of failed documents during copy of document content in Create with Reference process. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_FAILED configured in Manage Legal Documents application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in this Legal Document? Is there any pending process to be completed before changing/editing this legal document? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILEDDOCS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LglCntntMDocMappingUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocumentUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` | `CHAR(10)` | Document ID |
| `LegalTransactionUUID` | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` | `CHAR(10)` | Legal Transaction ID |
| `LglCntntMGovLaw` | `CHAR(7)` | Governing Law |
| `LglCntntMProfile` | `CHAR(10)` | Profile |
| `LglCntntMDocContentType` | `CHAR(4)` | Document Content Type |
| `LglTransAccessLvl` | `CHAR(4)` | Access Level |
| `InternalDocumentStatus` | `CHAR(2)` | Document Status |
| `LglCntntMDocAccessLvl` | `CHAR(4)` | Access Level |
