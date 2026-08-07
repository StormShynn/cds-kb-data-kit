---
name: I_LGLDOCCNTNTCPYFAILED
description: This CDS view provides the list of failed documents in a legal transaction, during the Create with Reference process of copying the document content. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_PENDING that is configured in the Manage Legal Transaction application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in one or more Legal Documents in this Legal transaction? Are there any pending actions to be performed to complete the Create with Reference process before changing/editing this legal transaction? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILED')/$value
semantic_en: This CDS view provides the list of failed documents in a legal transaction, during the Create with Reference process of copying the document content. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_PENDING that is configured in the Manage Legal Transaction application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in one or more Legal Documents in this Legal transaction? Are there any pending actions to be performed to complete the Create with Reference process before changing/editing this legal transaction? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CM
  - bo:companycode
  - CM-DOC
  - CM-DOC-2CL
  - component:CM-DOC-2CL
  - contract
  - document
  - interface-view
  - transaction
  - metadata-only
---
# I_LGLDOCCNTNTCPYFAILED

**This CDS view provides the list of failed documents in a legal transaction, during the Create with Reference process of copying the document content. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_PENDING that is configured in the Manage Legal Transaction application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in one or more Legal Documents in this Legal transaction? Are there any pending actions to be performed to complete the Create with Reference process before changing/editing this legal transaction? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocMappingUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LglCntntMDocumentUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LglCntntMGovLaw` |  | |  |  | `CHAR(7)` | Governing Law |
| `LglCntntMProfile` |  | |  |  | `CHAR(10)` | Profile |
| `LglTransAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
