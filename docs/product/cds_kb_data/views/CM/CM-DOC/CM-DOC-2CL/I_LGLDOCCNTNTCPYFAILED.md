---
name: I_LGLDOCCNTNTCPYFAILED
description: "This CDS view provides the list of failed documents in a legal transaction, during the Create with Reference process of copying the document content. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_PENDING that is configured in the Manage Legal Transaction application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in one or more Legal Documents in this Legal transaction? Are there any pending actions to be performed to complete the Create with Reference process before changing/editing this legal transaction? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILED')/$value
semantic_en: "This CDS view provides the list of failed documents in a legal transaction, during the Create with Reference process of copying the document content. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_PENDING that is configured in the Manage Legal Transaction application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in one or more Legal Documents in this Legal transaction? Are there any pending actions to be performed to complete the Create with Reference process before changing/editing this legal transaction? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Content Copy Failed in Legal Transaction — CDS view giao diện dựa trên I_LglCntntMDocContentCopy."
keywords:
  - "content"
  - "copy"
  - "failed"
  - "legal"
  - "transaction"
  - "cntnt"
  - "mapping"
  - "document"
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
---
# I_LGLDOCCNTNTCPYFAILED

**This CDS view provides the list of failed documents in a legal transaction, during the Create with Reference process of copying the document content. This view is used as the trigger object in the situation template LCM_DOC_CNTNT_CPY_PENDING that is configured in the Manage Legal Transaction application in Enterprise Contract Management solution. This CDS view provides the data to answer the following business questions: Did the content copy process result in a failure during Create with Reference action in one or more Legal Documents in this Legal transaction? Are there any pending actions to be performed to complete the Create with Reference process before changing/editing this legal transaction? How can the user check the error logs and rectify the error to complete the document content copy process successfully? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocMappingUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionUUID` | ✓ | | `_LegalTransaction` | `LegalTransactionUUID` | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LglCntntMDocumentUUID` |  | | `_LCMDocument` | `LglCntntMDocumentUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LglCntntMGovLaw` |  | | `_LegalTransaction` | `LglCntntMGovLaw` | `CHAR(7)` | Governing Law |
| `LglCntntMProfile` |  | | `_LegalTransaction` | `LglCntntMProfile` | `CHAR(10)` | Profile |
| `LglTransAccessLvl` |  | | `_LegalTransaction` | `LglTransAccessLvl` | `CHAR(4)` | Access Level |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LGLDOCCNTNTCPYFAILED')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ILTDOCCNTFLD'
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
@EndUserText.label: 'Content Copy Failed in Legal Transaction'

define view I_LglDocCntntCpyFailed
  as select from I_LglCntntMDocContentCopy

{
                @UI.hidden: true
                @Consumption.filter.hidden : true
  key           LglCntntMDocMappingUUID                as LglCntntMDocMappingUUID,

                @UI.hidden: true
                @Consumption.filter.hidden : true
  key           _LegalTransaction.LegalTransactionUUID as LegalTransactionUUID,

                @Consumption.hidden:true
                LegalTransaction                       as LegalTransaction,

                @UI.hidden: true
                _LCMDocument.LglCntntMDocumentUUID     as LglCntntMDocumentUUID,

                @UI.hidden : true
                LglCntntMDocument                      as LglCntntMDocument,

                _LegalTransaction.LglCntntMGovLaw      as LglCntntMGovLaw,

                _LegalTransaction.LglCntntMProfile     as LglCntntMProfile,

                @UI.hidden: true
                _LegalTransaction.LglTransAccessLvl    as LglTransAccessLvl
}
where
  (
       LglCntntMDocCrtnIsFailed                 = 'X'
    or LglCntntMDocCntntCpyIsFailed             = 'X'
    or LglCntntMDocStmpCpySts                   = 'F'
    or LglCntntMDocOblgnCpySts                  = 'F'
  )
  and(
       _LegalTransaction.LegalTransactionHealth = '0001'
    or _LegalTransaction.LegalTransactionHealth = '0002'
    or _LegalTransaction.LegalTransactionHealth = '0003'
  )
```
