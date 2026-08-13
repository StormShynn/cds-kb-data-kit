---
name: /DCO/I_ACCOUNTINGDOCUMENTTP
description: "Accounting DocumentUMENTTP"
semantic_vi: "View Accounting DocumentUMENTTP hiển thị dữ liệu tài khoản chứng từ, bao gồm loại tài khoản chứng từ, và được sử dụng để truy cập và xử lý tài khoản chứng từ trong thành phần FIN-FSCM-COL-2CL."
keywords:
  - "accounting document"
  - "tài khoản chứng từ"
  - "fin-fscm-col-2cl"
  - "financial component"
  - "thành phần tài chính"
  - "document type"
  - "loại tài khoản chứng từ"
  - "accounting data"
  - "dữ liệu tài khoản"
  - "sap financials"
semantic_en: "The Accounting DocumentUMENTTP view exposes accounting document data, including document types, and is used to access and process accounting documents in the FIN-FSCM-COL-2CL component."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - transactional-processing
  - accounting-document
  - document
  - component:FIN-FSCM-COL-2CL
  - lob:Other
---
# /DCO/I_ACCOUNTINGDOCUMENTTP

**Accounting DocumentUMENTTP**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoAccountingDocumentUUID` | ✓ | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `DCoAccountingDocumentOrigin` |  | |  |  |  |  |
| `DCoAccountingDocumentID` |  | |  |  |  |  |
| `DCoAccountingDocumentDate` |  | |  |  |  |  |
| `DCoAcctgDocOriginalDueDate` |  | |  |  |  |  |
| `DCoAccountingDocumentDueDate` |  | |  |  |  |  |
| `DCoAcctgDocLastPaymentDate` |  | |  |  |  |  |
| `DCoAccountingDocumentCurrency` |  | |  |  |  |  |
| `DCoAcctgDocumentOriginalAmount` |  | |  |  |  |  |
| `DCoAcctgDocumentOpenAmount` |  | |  |  |  |  |
| `DCoAcctgDocumentPaidAmount` |  | |  |  |  |  |
| `DCoAcctgDocumentCreditedAmount` |  | |  |  |  |  |
| `DCoAcctgDocWriteOffAmount` |  | |  |  |  |  |
| `DCoAcctgDocCshDiscUsedAmount` |  | |  |  |  |  |
| `DCoAccountingDocumentBranch` |  | |  |  |  |  |
| `DCoAcctgDocumentCreationUser` |  | |  |  |  |  |
| `DCoAcctgDocCreationDateTime` |  | |  |  |  |  |
| `DCoAcctgDocLastChangedByUser` |  | |  |  |  |  |
| `DCoAcctgDocLastChangeDateTime` |  | |  |  |  |  |
| `DCoDocumentReference` |  | |  |  |  |  |
| `DCoAltvDocumentReference` |  | |  |  |  |  |
| `DCoAcctgDocumentReference1ID` |  | |  |  |  |  |
| `DCoAcctgDocumentReference2ID` |  | |  |  |  |  |
| `DCoAcctgDocumentReference3ID` |  | |  |  |  |  |
| `DCoAcctgDocIsBlockedForPayment` |  | |  |  |  |  |
| `DCoAccountingDocumentNoteText` |  | |  |  |  |  |
| `DCoAccountingDocumentIsCleared` |  | |  |  |  |  |
| `DCoAcctgDocumentLogicalSystem` |  | |  |  |  |  |
| `DCoPaymentIsArranged` |  | |  |  |  |  |
| `DCoPrdcssrAcctgDocumentUUID` |  | |  |  |  |  |
| `DCoOriglAccountingDocumentUUID` |  | |  |  |  |  |
| `DCoAcctgDocHierarchyLevelValue` |  | |  |  |  |  |
| `DCoAcctgDocumentIsReversed` |  | |  |  |  |  |
| `DCoRefAccountingDocumentUUID` |  | |  |  |  |  |
| `DCoOriginalReferenceDocument` |  | |  |  |  |  |
| `DCoOriglReferenceDocumentType` |  | |  |  |  |  |
| `DCoOriglRefDocLogicalSystem` |  | |  |  |  |  |
| `DCoAccountingDocumentNoteUUID` |  | |  |  |  |  |
| `SAPObjectNodeType` |  | |  |  |  |  |
| `_BranchAccount` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_NoteBasic` | | ✓ | | | | |
| `_HDMRelation` | | ✓ | | | | |
| `_PredecessorAccountingDocument` | | ✓ | | | | |
| `_RblPyblTransactionItem` | | ✓ | | | | |
| `_ReferenceAccountingDocument` | | ✓ | | | | |
| `_OriginalAccountingDocument` | | ✓ | | | | |

## Source Code

```abap
@EndUserText: { label: 'Receivable Item - TP' }
@ObjectModel: { usageType: { dataClass:      #TRANSACTIONAL,
                             sizeCategory:   #XL,
                             serviceQuality: #A },
                semanticKey: [ 'DCoAccountingDocumentID' ],
                representativeKey: 'DCoAccountingDocumentUUID',
                sapObjectNodeType: { name: 'DCoAccountingDocument' },
                modelingPattern:       #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [ #TRANSACTIONAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #UI_PROVIDER_PROJECTION_SOURCE ] }
@VDM: { viewType:  #TRANSACTIONAL,
        usage:    { type: [ #TRANSACTIONAL_PROCESSING_SERVICE ] } }
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking:  #BLOCKED_DATA_EXCLUDED },
                  privilegedAssociations: [ '_NoteBasic',
                                            '_HDMRelation' ] }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }

define root view entity /DCO/I_AccountingDocumentTP
  provider contract transactional_interface
  as projection on /DCO/R_AccountingDocumentTP as DCoAccountingDocument

{

      @Semantics: { uuid: true }
  key DCoAccountingDocumentUUID,

      BusinessPartner,
      CompanyCode,
      DCoAccountingDocumentOrigin,
      DCoAccountingDocumentID,
      DCoAccountingDocumentDate,
      DCoAcctgDocOriginalDueDate,
      DCoAccountingDocumentDueDate,
      DCoAcctgDocLastPaymentDate,
      DCoAccountingDocumentCurrency,

      @Semantics: { amount: { currencyCode: 'DCoAccountingDocumentCurrency' } }
      DCoAcctgDocumentOriginalAmount,

      @Semantics: { amount: { currencyCode: 'DCoAccountingDocumentCurrency' } }
      DCoAcctgDocumentOpenAmount,

      @Semantics: { amount: { currencyCode: 'DCoAccountingDocumentCurrency' } }
      DCoAcctgDocumentPaidAmount,

      @Semantics: { amount: { currencyCode: 'DCoAccountingDocumentCurrency' } }
      DCoAcctgDocumentCreditedAmount,

      @Semantics: { amount: { currencyCode: 'DCoAccountingDocumentCurrency' } }
      DCoAcctgDocWriteOffAmount,

      @Semantics: { amount: { currencyCode: 'DCoAccountingDocumentCurrency' } }
      DCoAcctgDocCshDiscUsedAmount,

      DCoAccountingDocumentBranch,

      @Semantics: { user: { createdBy: true } }
      DCoAcctgDocumentCreationUser,

      @Semantics: { dateTime: true,
                    systemDateTime: { createdAt: true } }
      DCoAcctgDocCreationDateTime,

      @Semantics: { user: { lastChangedBy: true } }
      DCoAcctgDocLastChangedByUser,

      @Semantics: { dateTime: true,
                    systemDateTime: { lastChangedAt: true } }
      DCoAcctgDocLastChangeDateTime,

      DCoDocumentReference,
      DCoAltvDocumentReference,
      DCoAcctgDocumentReference1ID,
      DCoAcctgDocumentReference2ID,
      DCoAcctgDocumentReference3ID,

      @Semantics: { booleanIndicator: true }
      DCoAcctgDocIsBlockedForPayment,

      @Semantics: { text: true }
      DCoAccountingDocumentNoteText,

      DCoAccountingDocumentIsCleared,
      DCoAcctgDocumentLogicalSystem,
      DCoPaymentIsArranged,

      @Semantics: { uuid: true }
      DCoPrdcssrAcctgDocumentUUID,

      @Semantics: { uuid: true }
      DCoOriglAccountingDocumentUUID,

      DCoAcctgDocHierarchyLevelValue,

      @Semantics: { booleanIndicator: true }
      DCoAcctgDocumentIsReversed,

      @Semantics: { uuid: true }
      DCoRefAccountingDocumentUUID,

      DCoOriginalReferenceDocument,
      DCoOriglReferenceDocumentType,
      DCoOriglRefDocLogicalSystem,

      @ObjectModel: { sapObjectNodeTypeReference: 'NoteBasic' }
      @UI: { hidden: true }
      @EndUserText: { label:     'Note UUID',
                      quickInfo: 'Note UUID' }
      DCoAccountingDocumentNoteUUID,

      @UI: { hidden: true }
      SAPObjectNodeType,
      
      // Exposed associations
      _BranchAccount,
      _BusinessPartner,
      _NoteBasic,
      _HDMRelation,
      _PredecessorAccountingDocument,
      _RblPyblTransactionItem,
      _ReferenceAccountingDocument,
      _OriginalAccountingDocument

}
```
