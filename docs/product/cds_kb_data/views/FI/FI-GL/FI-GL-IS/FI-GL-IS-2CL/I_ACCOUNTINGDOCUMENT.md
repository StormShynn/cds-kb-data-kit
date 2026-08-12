---
name: I_ACCOUNTINGDOCUMENT
description: "This CDS view is designed to represent accounting documents within a system. It provides a structured way to access and analyze accounting document data, including various attributes and associations related to accounting documents, for example, company code, fiscal year, and document type. This CDS view provides the data to answer the following business questions: What are the details of accounting documents for a specific company code and fiscal year? How can I retrieve the document type and category for a given accounting document? What is the posting date and document date for specific accounting documents? Who created a particular accounting document, and when was it created? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENT')/$value
semantic_en: "This CDS view is designed to represent accounting documents within a system. It provides a structured way to access and analyze accounting document data, including various attributes and associations related to accounting documents, for example, company code, fiscal year, and document type. This CDS view provides the data to answer the following business questions: What are the details of accounting documents for a specific company code and fiscal year? How can I retrieve the document type and category for a given accounting document? What is the posting date and document date for specific accounting documents? Who created a particular accounting document, and when was it created? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Accounting Document — CDS view giao diện dựa trên bkpf."
keywords:
  - "accounting"
  - "document"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "type"
  - "date"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - bo:journalentry
---
# I_ACCOUNTINGDOCUMENT

**This CDS view is designed to represent accounting documents within a system. It provides a structured way to access and analyze accounting document data, including various attributes and associations related to accounting documents, for example, company code, fiscal year, and document type. This CDS view provides the data to answer the following business questions: What are the details of accounting documents for a specific company code and fiscal year? How can I retrieve the document type and category for a given accounting document? What is the posting date and document date for specific accounting documents? Who created a particular accounting document, and when was it created? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast(bkpf.bukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  | `cast(bkpf.gjahr as fis_gjahr preserving type)` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  | `cast(bkpf.belnr as farp_belnr_d preserving type)` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentType` |  | |  | `cast(bkpf.blart as farp_blart preserving type)` | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | |  | `cast(bkpf.bldat as fis_bldat preserving type)` | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | |  | `cast(bkpf.budat as fis_budat preserving type)` | `DATS(8)` | Posting Date |
| `FiscalPeriod` |  | |  | `cast( cast( concat( '0', bkpf.monat ) as abap.numc( 3 ) ) as fins_fiscalperiod)` | `NUMC(3)` | Fiscal Period |
| `AccountingDocumentCreationDate` |  | |  | `cast(bkpf.cpudt as farp_cpudt preserving type)` | `DATS(8)` | Accounting Document Entry Date |
| `CreationTime` |  | |  | `cast(bkpf.cputm as ttet_dt_cr_time preserving type)` | `TIMS(6)` | Creation Time |
| `LastChangeDate` |  | |  | `cast(bkpf.aedat as ttet_dt_chg_date preserving type)` | `DATS(8)` | Last Change Date |
| `ExchangeRateDate` |  | |  | `cast(bkpf.wwert as vdm_v_exchange_rate_date preserving type)` | `DATS(8)` | Exchange Rate Date |
| `AccountingDocCreatedByUser` |  | |  | `cast(bkpf.usnam as fis_usnam preserving type)` | `CHAR(12)` | User that created the journal entry |
| `TransactionCode` |  | |  | `tcode` | `CHAR(20)` | Transaction Code |
| `IntercompanyTransaction` |  | |  | `cast(bkpf.bvorg as fac_bvorg preserving type)` | `CHAR(16)` | Intercompany Transaction Number |
| `DocumentReferenceID` |  | |  | `xblnr` | `CHAR(16)` | Reference Document Number |
| `RecurringAccountingDocument` |  | |  | `cast(bkpf.dbblg as fac_rjet_id preserving type)` | `CHAR(10)` | Recurring Journal Entry |
| `ReverseDocument` |  | |  | `stblg` | `CHAR(10)` | Reverse Document Number |
| `ReverseDocumentFiscalYear` |  | |  | `stjah` | `NUMC(4)` | Fiscal Year of Reversal Document |
| `AccountingDocumentHeaderText` |  | |  | `bktxt` | `CHAR(25)` | Document Header Text |
| `ExchangeRate` |  | |  | `cast(bkpf.kursf as ukurs_curr preserving type)` | `DEC(9)` | Exchange Rate |
| `GroupCurrency` |  | |  | `kzwrs` | `CUKY(5)` | Currency Key for the Group Currency |
| `AccountingDocumentCategory` |  | |  | `cast(bkpf.bstat as farp_bstat_d preserving type)` | `CHAR(1)` | Document Status |
| `BusinessTransactionType` |  | |  | `cast(bkpf.glvor as fins_bttype preserving type)` | `CHAR(4)` | Business Transaction Category |
| `BatchInputSession` |  | |  | `cast(bkpf.grpid as fac_grpid preserving type)` | `CHAR(12)` | Batch Input Session Name |
| `ReferenceDocumentType` |  | |  | `cast(bkpf.awtyp as fis_awtyp)` | `CHAR(5)` | Reference Document Type |
| `OriginalReferenceDocument` |  | |  | `cast(bkpf.awkey as fac_awkey)` | `CHAR(20)` | Object key |
| `FinancialManagementArea` |  | |  | `fikrs` | `CHAR(4)` | Financial Management Area |
| `ReferenceDocumentLogicalSystem` |  | |  | `cast(bkpf.awsys as fis_awsys)` | `CHAR(10)` | Logical System of Reference Document |
| `Branch` |  | |  | `brnch` | `CHAR(4)` | Branch Number |
| `IsDiscountDocument` |  | |  | `adisc` | `CHAR(1)` | Indicator: entry represents a discount document |
| `Reference1InDocumentHeader` |  | |  | `cast(bkpf.xref1_hd as fins_xref1_hd)` | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` |  | |  | `cast(bkpf.xref2_hd as fins_xref2_hd)` | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `InvoiceReceiptDate` |  | |  | `reindat` | `DATS(8)` | Invoice Receipt Date |
| `Ledger` |  | |  | `cast(bkpf.rldnr as fis_rldnr preserving type)` | `CHAR(2)` | Ledger |
| `LedgerGroup` |  | |  | `ldgrp` | `CHAR(4)` | Ledger Group |
| `AlternativeReferenceDocument` |  | |  | `cast(bkpf.xblnr_alt as fac_xblnr_alt preserving type)` | `CHAR(26)` | Alternative Reference Number |
| `IsReversal` |  | |  | `cast(bkpf.xreversing as fins_xreversing)` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  | `cast(bkpf.xreversed as fins_xreversed)` | `CHAR(1)` | Indicator: Item is Reversed |
| `TaxReportingDate` |  | |  | `vatdate` | `DATS(8)` | Tax Reporting Date |
| `ReversalReason` |  | |  | `stgrd` | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `ParkingDate` |  | |  | `ppdat` | `DATS(8)` | Day of Parking of Accounting Document |
| `ParkingTime` |  | |  | `pptme` | `TIMS(6)` | Time of Parking |
| `Currency` |  | |  | `cast(bkpf.waers as waers preserving type)` | `CUKY(5)` | Currency Key |
| `CompanyCodeCurrency` |  | |  | `cast(bkpf.hwaer as fis_hwaer preserving type)` | `CUKY(5)` | Company Code Currency |
| `AdditionalCurrency1` |  | |  | `cast(bkpf.hwae2 as fis_hwae2 preserving type)` | `CUKY(5)` | Additional Currency 1 |
| `AdditionalCurrency2` |  | |  | `cast(bkpf.hwae3 as fis_hwae3 preserving type)` | `CUKY(5)` | Additional Currency 2 |
| `TaxIsCalculatedAutomatically` |  | |  | `xmwst` | `CHAR(1)` | Calculate Tax Automatically |
| `NmbrOfPages` |  | |  | `numpg` | `NUMC(3)` | Number of pages of invoice |
| `_AccountingDocumentTypeText` | | ✓ | | | | |
| `_BusinessTransactionTypeText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_LedgerGroup` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingDocumentTypeText` | `I_AccountingDocumentTypeText` | [0..*] |
| `_BusinessTransactionTypeText` | `I_BusTransactionTypeText` | [0..*] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_LedgerGroup` | `I_LedgerGroup` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENT')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Accounting Document'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IFIACCDOC'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'AccountingDocument'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true
//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_AccountingDocumentTypeText','_BusinessTransactionTypeText','_LedgerText']
// ]--GENERATED

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
@VDM.lifecycle.status: #DEPRECATED       
@VDM.lifecycle.successor: 'I_JournalEntry'                               
                                     
define view entity I_AccountingDocument
  as select from bkpf

  
  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..*] to I_AccountingDocumentTypeText as _AccountingDocumentTypeText on  $projection.AccountingDocumentType = _AccountingDocumentTypeText.AccountingDocumentType
  association [0..*] to I_BusTransactionTypeText     as _BusinessTransactionTypeText on $projection.BusinessTransactionType = _BusinessTransactionTypeText.BusinessTransactionType
  association [0..*] to I_LedgerText                 as _LedgerText                 on  $projection.Ledger = _LedgerText.Ledger
  // ]--GENERATED
  association [0..*] to I_OperationalAcctgDocItem    as _OperationalAcctgDocItem    on  $projection.CompanyCode = _OperationalAcctgDocItem.CompanyCode and 
                                                                                        $projection.AccountingDocument = _OperationalAcctgDocItem.AccountingDocument and
                                                                                        $projection.FiscalYear = _OperationalAcctgDocItem.FiscalYear and
                                                                                        $projection.FiscalPeriod = _OperationalAcctgDocItem.FiscalPeriod and
                                                                                        $projection.AccountingDocumentCategory = _OperationalAcctgDocItem.AccountingDocumentCategory and
                                                                                        $projection.PostingDate = _OperationalAcctgDocItem.PostingDate and
                                                                                        $projection.DocumentDate = _OperationalAcctgDocItem.DocumentDate and
                                                                                        $projection.AccountingDocumentType = _OperationalAcctgDocItem.AccountingDocumentType
  association [1..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                    and $projection.CompanyCode = _FiscalYear.CompanyCode
  //association [0..1] to I_FiscalYear                 as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
  //                                                                                  and $projection.fiscalyearvariant = _FiscalYear.FiscalYearVariant 
                                                                                      // FiscalYearVariant not in BKPF, would require join with I_CompanyCode to get FiscalYearVariant                                                                                   
  association [0..1] to I_AccountingDocumentType     as _AccountingDocumentType     on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..1] to I_User                       as _User                       on  $projection.AccountingDocCreatedByUser = _User.UserID
  association [0..1] to I_AccountingDocumentCategory as _AccountingDocumentCategory on  $projection.AccountingDocumentCategory = _AccountingDocumentCategory.AccountingDocumentCategory
  association [0..1] to I_BusinessTransactionType    as _BusinessTransactionType    on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType
  association [0..1] to I_ReferenceDocumentType      as _ReferenceDocumentType      on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1] to I_Ledger                     as _Ledger                     on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_LedgerGroup                as _LedgerGroup                on  $projection.LedgerGroup = _LedgerGroup.LedgerGroup
  association [0..1] to I_Currency                   as _Currency                   on  $projection.Currency = _Currency.Currency
  association [0..1] to I_Currency                   as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                   as _AdditionalCurrency1        on  $projection.AdditionalCurrency1 = _AdditionalCurrency1.Currency
  association [0..1] to I_Currency                   as _AdditionalCurrency2        on  $projection.AdditionalCurrency2 = _AdditionalCurrency2.Currency
  association [0..1] to I_LogicalSystem              as _LogicalSystem              on  $projection.ReferenceDocumentLogicalSystem = _LogicalSystem.LogicalSystem

{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bkpf.bukrs as fis_bukrs preserving type)                                   as CompanyCode, // FieldGroup: _BASIC
      @ObjectModel.foreignKey.association: '_FiscalYear'
//      @Semantics.fiscal.year: true
  key cast(bkpf.gjahr as fis_gjahr preserving type)                                   as FiscalYear, // FieldGroup: AccountingGroup
  key cast(bkpf.belnr as farp_belnr_d preserving type)                                as AccountingDocument, // FieldGroup: AccountingGroup

      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AccountingDocumentTypeStdVH',
                     element: 'AccountingDocumentType' }
        }]
      @ObjectModel.text.association: '_AccountingDocumentTypeText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      cast(bkpf.blart as farp_blart preserving type)                                  as AccountingDocumentType, // FieldGroup: AccountingGroup
      cast(bkpf.bldat as fis_bldat preserving type)                                   as DocumentDate, // FieldGroup: DocumentGroup
      cast(bkpf.budat as fis_budat preserving type)                                   as PostingDate, // FieldGroup: BASIC                                    //  New DTEL  toDo
      @Semantics.fiscal.period: true
      cast( cast( concat( '0', bkpf.monat ) as abap.numc( 3 ) ) as fins_fiscalperiod) as FiscalPeriod,
      --    monat as FiscalPeriod, // FieldGroup: AccountingGroup
      cast(bkpf.cpudt as farp_cpudt preserving type)                                  as AccountingDocumentCreationDate, // FieldGroup: AccountingGroup
      cast(bkpf.cputm as ttet_dt_cr_time preserving type)                             as CreationTime,
      cast(bkpf.aedat as ttet_dt_chg_date preserving type)                            as LastChangeDate,
      cast(bkpf.wwert as vdm_v_exchange_rate_date preserving type)                    as ExchangeRateDate,
      //    @ObjectModel.foreignKey.association: '_User'
      cast(bkpf.usnam as fis_usnam preserving type)                                   as AccountingDocCreatedByUser,
      bkpf.tcode                                                                      as TransactionCode,
      cast(bkpf.bvorg as fac_bvorg preserving type)                                                   as IntercompanyTransaction,
      bkpf.xblnr                                                                      as DocumentReferenceID, //FieldGroup: DocumentGroup
      cast(bkpf.dbblg as fac_rjet_id preserving type)                                                 as RecurringAccountingDocument,
      bkpf.stblg                                                                      as ReverseDocument,
      bkpf.stjah                                                                      as ReverseDocumentFiscalYear,
      bkpf.bktxt                                                                      as AccountingDocumentHeaderText,
      cast(bkpf.kursf as ukurs_curr preserving type)                                                  as ExchangeRate,
      bkpf.kzwrs                                                                      as GroupCurrency,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      cast(bkpf.bstat as farp_bstat_d preserving type)                                as AccountingDocumentCategory, //FieldGroup: AccountingGroup
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusTransTypeStdVH',
                     element: 'BusinessTransactionType' }
        }]
      @ObjectModel.text.association: '_BusinessTransactionTypeText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      cast(bkpf.glvor as fins_bttype preserving type)                                 as BusinessTransactionType,
      cast(bkpf.grpid as fac_grpid preserving type)                                   as BatchInputSession,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      cast(bkpf.awtyp as fis_awtyp)                                                   as ReferenceDocumentType,
      cast(bkpf.awkey as fac_awkey)                                                   as OriginalReferenceDocument,
      bkpf.fikrs                                                                      as FinancialManagementArea,
      cast(bkpf.awsys as fis_awsys)                                                   as ReferenceDocumentLogicalSystem, //?????????????I_LogicalSystem missing
      bkpf.brnch                                                                      as Branch,
//      @Semantics.booleanIndicator 
      bkpf.adisc                                                                      as IsDiscountDocument,
      cast(bkpf.xref1_hd as fins_xref1_hd)                                            as Reference1InDocumentHeader,
      cast(bkpf.xref2_hd as fins_xref2_hd)                                            as Reference2InDocumentHeader,
      bkpf.reindat                                                                    as InvoiceReceiptDate,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.text.association: '_LedgerText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Ledger'
      cast(bkpf.rldnr as fis_rldnr preserving type)                                   as Ledger,
      @ObjectModel.foreignKey.association: '_LedgerGroup'
      bkpf.ldgrp                                                                      as LedgerGroup,
//    cast(bkpf.xblnr_alt as fis_xblnr_alt_wo_exit preserving type)                   as AlternativeReferenceDocument,
      cast(bkpf.xblnr_alt as fac_xblnr_alt preserving type)                           as AlternativeReferenceDocument,
      cast(bkpf.xreversing as fins_xreversing)                                        as IsReversal,
      cast(bkpf.xreversed as fins_xreversed)                                          as IsReversed,
      bkpf.vatdate                                                                    as TaxReportingDate,
      bkpf.stgrd                                                                      as ReversalReason,
      bkpf.ppdat                                                                      as ParkingDate,
      bkpf.pptme                                                                      as ParkingTime,

      @ObjectModel.foreignKey.association: '_Currency'
      cast(bkpf.waers as waers preserving type)                                       as Currency,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      cast(bkpf.hwaer as fis_hwaer preserving type)                                   as CompanyCodeCurrency, //FieldGroup: AccountingGroup
      @ObjectModel.foreignKey.association: '_AdditionalCurrency1'
      cast(bkpf.hwae2 as fis_hwae2 preserving type)                                   as AdditionalCurrency1, //FieldGroup: AccountingGroup                    //  New DTEL  toDo
      @ObjectModel.foreignKey.association: '_AdditionalCurrency2'
      cast(bkpf.hwae3 as fis_hwae3 preserving type)                                   as AdditionalCurrency2, //FieldGroup: AccountingGroup                    //  New Dtel  toDo
      
      
      bkpf.xmwst as TaxIsCalculatedAutomatically,
      bkpf.numpg as NmbrOfPages,

      _OperationalAcctgDocItem,
      _CompanyCode,
      _FiscalYear,
      _AccountingDocumentType,
      _AccountingDocumentCategory,
      _BusinessTransactionType,
      _ReferenceDocumentType,
      _Ledger,
      _LedgerGroup,
      _User,
      _Currency,
      _CompanyCodeCurrency,
      _AdditionalCurrency1,
      _AdditionalCurrency2,
      _LogicalSystem,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _AccountingDocumentTypeText,
      @Consumption.hidden: true
      _BusinessTransactionTypeText,
      @Consumption.hidden: true
      _LedgerText
      // ]--GENERATED

}
```
