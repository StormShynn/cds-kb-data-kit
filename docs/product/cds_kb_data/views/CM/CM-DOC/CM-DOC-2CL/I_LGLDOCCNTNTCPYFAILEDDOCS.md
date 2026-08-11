---
name: I_LGLDOCCNTNTCPYFAILEDDOCS
description: "This CDS view provides the list of failed documents during copy of document content in Create with Reference process. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_FAILED configured in Manage Legal Documents application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in this Legal Document? Is there any pending process to be completed before changing/editing this legal document? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILEDDOCS')/$value
semantic_en: "This CDS view provides the list of failed documents during copy of document content in Create with Reference process. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_FAILED configured in Manage Legal Documents application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in this Legal Document? Is there any pending process to be completed before changing/editing this legal document? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Trigger Object for Content Copy Failed — CDS view giao diện dựa trên I_LglCntntMDocContentCopy."
keywords:
  - "trigger"
  - "object"
  - "for"
  - "content"
  - "copy"
  - "failed"
  - "cntnt"
  - "mapping"
  - "document"
  - "legal"
  - "transaction"
tags:
  - CM
  - bo:companycode
  - CM-DOC
  - CM-DOC-2CL
  - component:CM-DOC-2CL
  - contract
  - document
  - interface-view
---
# I_LGLDOCCNTNTCPYFAILEDDOCS

**This CDS view provides the list of failed documents during copy of document content in Create with Reference process. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_FAILED configured in Manage Legal Documents application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in this Legal Document? Is there any pending process to be completed before changing/editing this legal document? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILEDDOCS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocMappingUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocumentUUID` | ✓ | | `_LCMDocument` | `LglCntntMDocumentUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LegalTransactionUUID` |  | | `_LegalTransaction` | `LegalTransactionUUID` | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LglCntntMGovLaw` |  | | `_LegalTransaction` | `LglCntntMGovLaw` | `CHAR(7)` | Governing Law |
| `LglCntntMProfile` |  | | `_LegalTransaction` | `LglCntntMProfile` | `CHAR(10)` | Profile |
| `LglCntntMDocContentType` |  | |  |  | `CHAR(4)` | Document Content Type |
| `LglTransAccessLvl` |  | | `_LegalTransaction` | `LglTransAccessLvl` | `CHAR(4)` | Access Level |
| `InternalDocumentStatus` |  | | `_LCMDocument` | `InternalDocumentStatus` | `CHAR(2)` | Document Status |
| `LglCntntMDocAccessLvl` |  | | `_LCMDocument` | `LglCntntMDocAccessLvl` | `CHAR(4)` | Access Level |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILEDDOCS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILEDDOCS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ILTDOCCNTFLDDOCS'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL,

  semanticKey: [ 'LglCntntMDocument' ],
  supportedCapabilities: [#SITUATION_TRIGGER]
}
@AbapCatalog.preserveKey:true
@EndUserText.label: 'Trigger Object for Content Copy Failed'

define view I_LglDocCntntCpyFailedDocs
  as select from I_LglCntntMDocContentCopy

{
                   @UI.hidden: true
                   @Consumption.filter.hidden : true
  key              LglCntntMDocMappingUUID                as LglCntntMDocMappingUUID,

                   @UI.hidden: true
                   @Consumption.filter.hidden : true
  key              _LCMDocument.LglCntntMDocumentUUID     as LglCntntMDocumentUUID,

                   @Consumption.hidden:true
                   LglCntntMDocument                      as LglCntntMDocument,

                   @UI.hidden: true
                   _LegalTransaction.LegalTransactionUUID as LegalTransactionUUID,

                   @UI.hidden: true
                   LegalTransaction                       as LegalTransaction,

                   _LegalTransaction.LglCntntMGovLaw      as LglCntntMGovLaw,

                   _LegalTransaction.LglCntntMProfile     as LglCntntMProfile,

                   @UI.hidden: true
                   LglCntntMDocContentType,

                   @UI.hidden: true
                   _LegalTransaction.LglTransAccessLvl    as LglTransAccessLvl,

                   @UI.hidden: true
                   _LCMDocument.InternalDocumentStatus    as InternalDocumentStatus,

                   @UI.hidden: true
                   _LCMDocument.LglCntntMDocAccessLvl     as LglCntntMDocAccessLvl
}
where
  (
       LglCntntMDocCrtnIsFailed                   = 'X'
    or LglCntntMDocCntntCpyIsFailed               = 'X'
    or LglCntntMDocStmpCpySts                     = 'F'
    or LglCntntMDocOblgnCpySts                    = 'F'
  )
  and  _LCMDocument.LegalDocumentVersion          = '0001'
  and  _LCMDocument.LglCntntMDocumentIsTopVersion = 'X'
  and(
       _LCMDocument.InternalDocumentStatus        = 'NW'
    or _LCMDocument.InternalDocumentStatus        = 'AV'
  )
  and(
       _LegalTransaction.LegalTransactionHealth   = '0001'
    or _LegalTransaction.LegalTransactionHealth   = '0002'
    or _LegalTransaction.LegalTransactionHealth   = '0003'
  )
```
