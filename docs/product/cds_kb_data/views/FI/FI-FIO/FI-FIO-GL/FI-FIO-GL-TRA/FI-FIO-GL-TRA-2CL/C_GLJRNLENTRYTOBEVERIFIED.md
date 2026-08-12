---
name: C_GLJRNLENTRYTOBEVERIFIED
description: "This CDS view provides the prerequisites for answering the following business question: What is the General journal entry to be verified?"
app_component: FI-FIO-GL-TRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYTOBEVERIFIED')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the General journal entry to be verified?"
semantic_vi: "Inbox View of GL JE to be verified — CDS view tiêu dùng dựa trên I_GLJrnlEntryToBeVerified."
keywords:
  - "inbox"
  - "verified"
  - "accounting"
  - "document"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "work"
  - "item"
  - "task"
  - "processing"
  - "status"
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-TRA-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-TRA
  - FI-FIO-GL-TRA-2CL
  - lob:finance
---
# C_GLJRNLENTRYTOBEVERIFIED

**This CDS view provides the prerequisites for answering the following business question: What is the General journal entry to be verified?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-TRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYTOBEVERIFIED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocument` | ✓ | | `_Header` | `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `CompanyCode` | ✓ | | `_Header` | `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | | `_Header` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `WorkItem` |  | | `_Header` | `WorkItem` | `NUMC(12)` | Work item ID |
| `TaskProcessingStatus` |  | | `_Header` | `TaskProcessingStatus` | `CHAR(12)` | Processing Status of a Work Item |
| `OriginalReferenceDocument` |  | | `_Header` | `OriginalReferenceDocument` | `CHAR(18)` |  |
| `ObjectKey` |  | | `_Header` | `ObjectKey` | `CHAR(20)` | Object key |
| `AmountInCompanyCodeCurrency` |  | |  | `case when _Amount.GLDebitAmountInCoCodeCrcy < 0 then ( case when _Amount.GLDebitAmountInCoCodeCrcy < _Amount.GLCreditAmountInCoCodeCrcy then _Amount.GLDebitAmountInCoCodeCrcy else _Amount.GLCreditAmountInCoCodeCrcy end ) else ( case when _Amount.GLDebitAmountInCoCodeCrcy < _Amount.GLCreditAmountInCoCodeCrcy then _Amount.GLCreditAmountInCoCodeCrcy else _Amount.GLDebitAmountInCoCodeCrcy end ) end` | `CURR(23)` |  |
| `CompanyCodeCurrency` |  | | `_Header` | `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AccountingDocumentStatus` |  | | `_Header` | `AccountingDocumentStatus` | `CHAR(1)` | Decision status |
| `AccountingDocumentType` |  | | `_Header` | `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  | `_AccountingDocumentType._Text[1:Language = $session.system_language].AccountingDocumentTypeName` | `CHAR(20)` | Document Type Name |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `ReferenceDocument` |  | | `_Header` | `DocumentReferenceID` | `CHAR(16)` | Document Reference ID |
| `TransactionCurrency` |  | | `_Header` | `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `AccountingDocumentHeaderText` |  | | `_Header` | `AccountingDocumentHeaderText` | `CHAR(25)` | Document Header Text |
| `DocumentDate` |  | | `_Header` | `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | | `_Header` | `PostingDate` | `DATS(8)` | Posting Date |
| `CreatedByUserName` |  | | `_Creator` | `UserDescription` | `CHAR(80)` | User Description |
| `CreatedByUser` |  | | `_Header` | `CreatedByUser` | `CHAR(12)` | User Name |
| `ParkedByUser` |  | | `_Header` | `ParkedByUser` | `CHAR(12)` | Name of User Who Parked This Document |
| `ParkedByUserName` |  | | `_Requestor` | `UserDescription` | `CHAR(80)` | User Description |
| `AccountingDocumentCreationDate` |  | | `_Header` | `AccountingDocumentCreationDate` | `DATS(8)` | Accounting Document Entry Date |
| `AccountingDocumentCategory` |  | | `_Header` | `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `ReversalReason` |  | | `_Header` | `ReversalReason` | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `PlannedReversalDate` |  | |  | `cast (_Header.PlannedReversalDate as rbdat)` | `DATS(8)` | Planned Date for the Reverse Posting |
| `LedgerGroup` |  | | `_Header` | `LedgerGroup` | `CHAR(4)` | Ledger Group |
| `_LineItem` | | ✓ | | | | |
| `_TaxItem` | | ✓ | | | | |
| `_MultiInstance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LineItem` | `C_GLJrnlEntryItemToBeVerified` | [1..*] |
| `_TaxItem` | `C_GLJrnlEntryTaxItem` | [0..*] |
| `_StatusText` | `I_WorkflowStatusTxt` | [0..*] |
| `_Amount` | `I_GLJrnlEntryItemAmount` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Creator` | `I_User` | [1..1] |
| `_Requestor` | `I_User` | [1..1] |
| `_MultiInstance` | `C_CoCodeJrnlEntrItmUnverified` | [1..*] |
| `_ReversalReasonText` | `I_ReversalReasonText` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYTOBEVERIFIED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYTOBEVERIFIED')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGLJEVER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Inbox View of GL JE to be verified'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]

define view C_GLJrnlEntryToBeVerified
  as select from I_GLJrnlEntryToBeVerified as _Header
  association [1..*] to C_GLJrnlEntryItemToBeVerified as _LineItem               on  $projection.CompanyCode        = _LineItem.SourceCompanyCode //CompanyCode
                                                                                 and $projection.AccountingDocument = _LineItem.AccountingDocument
                                                                                 and $projection.FiscalYear         = _LineItem.FiscalYear
  association [0..*] to C_GLJrnlEntryTaxItem          as _TaxItem                on  $projection.CompanyCode        = _TaxItem.SourceCompanyCode
                                                                                 and $projection.AccountingDocument = _TaxItem.AccountingDocument
                                                                                 and $projection.FiscalYear         = _TaxItem.FiscalYear
  association [0..*] to I_WorkflowStatusTxt           as _StatusText             on  $projection.AccountingDocumentStatus = _StatusText.AccountingDocumentStatus
  association [0..1] to I_GLJrnlEntryItemAmount       as _Amount                 on  $projection.CompanyCode        = _Amount.CompanyCode
                                                                                 and $projection.AccountingDocument = _Amount.AccountingDocument
                                                                                 and $projection.FiscalYear         = _Amount.FiscalYear
  association [0..1] to I_AccountingDocumentType      as _AccountingDocumentType on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [1..1] to I_CompanyCode                 as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_User                        as _Creator                on  $projection.CreatedByUser = _Creator.UserID
  association [1..1] to I_User                        as _Requestor              on  $projection.ParkedByUser = _Requestor.UserID

  association [1..*] to C_CoCodeJrnlEntrItmUnverified as _MultiInstance          on  $projection.CompanyCode        = _MultiInstance.SourceCompanyCode //CompanyCode
                                                                                 and $projection.AccountingDocument = _MultiInstance.AccountingDocument
                                                                                 and $projection.FiscalYear         = _MultiInstance.FiscalYear

  association [1..1] to I_ReversalReasonText          as _ReversalReasonText     on  $projection.ReversalReason = _ReversalReasonText.ReversalReason

{
      @UI.facet:[
        {
                label:'General Information',
                id:'GeneralInfo',
                type:#COLLECTION,
                position:10,
                isSummary,
                targetQualifier: 'GeneralInfo'
        },
        {
          id:'RequestData',
          parentId:'GeneralInfo',
          type:#FIELDGROUP_REFERENCE,
          position: 20,
          targetQualifier:'RequestData',
          isSummary
        }
        ,{
              label:'Journal Entry Line Item',
              id:'LineItems',
              type:#LINEITEM_REFERENCE,
              position:30,
              targetElement:'_LineItem'
         }
         ,{
              label:'Tax Items',
              id:'TaxItems',
              type:#LINEITEM_REFERENCE,
              position:40,
              targetElement:'_TaxItem'
         }
      ]

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 10,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]


  key _Header.AccountingDocument,

      @ObjectModel.text.element:  [ 'CompanyCodeName' ]
  key _Header.CompanyCode,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 60,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
  key _Header.FiscalYear,
      _Header.WorkItem,
      _Header.TaskProcessingStatus,
      _Header.OriginalReferenceDocument,
      //  concat( CompanyCode, concat (LPad(AccountingDocument, 10, '0'), FiscalYear )) as OriginalReferenceDocument,

      _Header.ObjectKey,
      @Semantics.amount.currencyCode:  'CompanyCodeCurrency'
      case when _Amount.GLDebitAmountInCoCodeCrcy < 0
           then ( case when  _Amount.GLDebitAmountInCoCodeCrcy <  _Amount.GLCreditAmountInCoCodeCrcy
                  then _Amount.GLDebitAmountInCoCodeCrcy
                  else _Amount.GLCreditAmountInCoCodeCrcy
                  end
                )
            else
             ( case when  _Amount.GLDebitAmountInCoCodeCrcy <  _Amount.GLCreditAmountInCoCodeCrcy
                  then _Amount.GLCreditAmountInCoCodeCrcy
                  else _Amount.GLDebitAmountInCoCodeCrcy
                  end
                  )
            end                                                                                       as AmountInCompanyCodeCurrency,


      // case when ABS( _Amount.GLDebitAmountInCoCodeCrcy ) < ABS( _Amount.GLCreditAmountInCoCodeCrcy )
      //  then _Amount.GLDebitAmountInCoCodeCrcy
      // else _Amount.GLCreditAmountInCoCodeCrcy
      //end as AmountInCompanyCodeCurrency,
      //_Amount.AmountInCompanyCodeCurrency,
      @Semantics.currencyCode: true
      _Header.CompanyCodeCurrency,
      _Header.AccountingDocumentStatus,
      _StatusText[1:Language = $session.system_language].AccountingDocumentStatusName,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 20,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      @ObjectModel.text.element:  [ 'AccountingDocumentTypeName' ]
      _Header.AccountingDocumentType,
      _AccountingDocumentType._Text[1:Language = $session.system_language].AccountingDocumentTypeName as AccountingDocumentTypeName,

      _CompanyCode.CompanyCodeName                                                                    as CompanyCodeName,
      //  _Header.CompanyCodeName,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 30,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      _Header.DocumentReferenceID                                                                     as ReferenceDocument,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 40,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      _Header.TransactionCurrency,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 50,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD}]
      _Header.AccountingDocumentHeaderText,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 70,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      _Header.DocumentDate,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 80,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      _Header.PostingDate,

      _Creator.UserDescription                                                                        as CreatedByUserName,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 90,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      @ObjectModel.text.element:  [ 'CreatedByUserName' ]
      _Header.CreatedByUser                                                                           as CreatedByUser,

      @ObjectModel.text.element:  [ 'ParkedByUserName' ]
      _Header.ParkedByUser                                                                            as ParkedByUser,
      _Requestor.UserDescription                                                                      as ParkedByUserName,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 100,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      _Header.AccountingDocumentCreationDate,

      _Header.AccountingDocumentCategory,

      // auto reversal
      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 110,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      @ObjectModel.text.element:  [ 'ReversalReasonName' ]
      _Header.ReversalReason,
      _ReversalReasonText[1:Language = $session.system_language].ReversalReasonName,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 120,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
      cast (_Header.PlannedReversalDate as rbdat)                                                     as PlannedReversalDate,

      @UI.fieldGroup: [{
         qualifier: 'RequestData',
         groupLabel: 'Request',
         position: 130,
         exclude: false,
         importance: #HIGH,
         type:#STANDARD }]
       _Header.LedgerGroup, // 20210930, i530367 
        
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _LineItem,
      _TaxItem,
      _MultiInstance
}
```
