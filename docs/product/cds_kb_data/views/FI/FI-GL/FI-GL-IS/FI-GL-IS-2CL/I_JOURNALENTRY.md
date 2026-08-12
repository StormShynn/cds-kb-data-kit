---
name: I_JOURNALENTRY
description: "Journal Entry"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - journal-entry
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:JournalEntry
---
# I_JOURNALENTRY

**Journal Entry**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `FiscalYear` | ✓ | |  | `gjahr` |  |  |
| `AccountingDocument` | ✓ | |  | `belnr` |  |  |
| `AccountingDocumentType` |  | |  | `blart` |  |  |
| `DocumentDate` |  | |  | `bldat` |  |  |
| `PostingDate` |  | |  | `budat` |  |  |
| `FiscalPeriod` |  | |  | `cast( P_BKPF_COM.monat as fins_fiscalperiod )` |  |  |
| `AccountingDocumentCreationDate` |  | |  | `cpudt` |  |  |
| `CreationTime` |  | |  | `cputm` |  |  |
| `LastManualChangeDate` |  | |  | `cast ( P_BKPF_COM.aedat as fis_lastmanualchangedate preserving type )` |  |  |
| `LastAutomaticChangeDate` |  | |  | `cast ( P_BKPF_COM.upddt as fis_lastautomaticchangedate preserving type )` |  |  |
| `LastChangeDate` |  | |  | `case when ( P_BKPF_COM.upddt is not initial and P_BKPF_COM.upddt > P_BKPF_COM.aedat ) then upddt when P_BKPF_COM.aedat is not initial then cast ( P_BKPF_COM.aedat as ttet_dt_chg_date preserving type ) else cast ( P_BKPF_COM.cpudt as ttet_dt_chg_date preserving type ) end` |  |  |
| `ExchangeRateDate` |  | |  | `wwert` |  |  |
| `AccountingDocCreatedByUser` |  | |  | `usnam` |  |  |
| `TransactionCode` |  | |  | `tcode` |  |  |
| `IntercompanyTransaction` |  | |  | `bvorg` |  |  |
| `DocumentReferenceID` |  | |  | `xblnr` |  |  |
| `RecurringAccountingDocument` |  | |  | `dbblg` |  |  |
| `RecrrgJournalEntryCompanyCode` |  | |  | `dbblg_bukrs` |  |  |
| `RecrrgJournalEntryFiscalYear` |  | |  | `dbblg_gjahr` |  |  |
| `ReverseDocument` |  | |  | `stblg` |  |  |
| `ReverseDocumentFiscalYear` |  | |  | `stjah` |  |  |
| `AccountingDocumentHeaderText` |  | |  | `bktxt` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `AbsoluteExchangeRate` |  | |  | `cast(abs(P_BKPF_COM.kursf) as fis_absolute_exchangerate preserving type)` |  |  |
| `ExchangeRate` |  | |  | `kursf` |  |  |
| `ExchRateIsIndirectQuotation` |  | |  | `cast(case when P_BKPF_COM.kursf < 0 then 'X' when P_BKPF_COM.kursf >= 0 then ' ' end as fis_indirect_quotation preserving type)` |  |  |
| `EffectiveExchangeRate` |  | |  | `cast(case when P_BKPF_COM.kursf < 0 then division(1,abs(P_BKPF_COM.kursf),5) when P_BKPF_COM.kursf >= 0 then P_BKPF_COM.kursf end as fis_effective_exchangerate)` |  |  |
| `AccountingDocumentCategory` |  | |  | `bstat` |  |  |
| `NetAmountIsPosted` |  | |  | `xnetb` |  |  |
| `JrnlEntryIsPostedToPrevPeriod` |  | |  | `xrueb` |  |  |
| `BusinessTransactionType` |  | |  | `glvor` |  |  |
| `JrnlEntryBusinessTransType` |  | |  | `cbttype` |  |  |
| `BatchInputSession` |  | |  | `grpid` |  |  |
| `ReferenceDocumentType` |  | |  | `awtyp` |  |  |
| `OriginalReferenceDocument` |  | |  | `awkey` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `CompanyCodeCurrency` |  | |  | `hwaer` |  |  |
| `AdditionalCurrency1` |  | |  | `hwae2` |  |  |
| `AdditionalCurrency2` |  | |  | `hwae3` |  |  |
| `ReversalIsPlanned` |  | |  | `xstov` |  |  |
| `PlannedReversalDate` |  | |  | `stodt` |  |  |
| `TaxIsCalculatedAutomatically` |  | |  | `xmwst` |  |  |
| `AdditionalCurrency1Role` |  | |  | `curt2` |  |  |
| `AdditionalCurrency2Role` |  | |  | `curt3` |  |  |
| `TaxBaseAmountIsNetAmount` |  | |  | `xsnet` |  |  |
| `SourceCompanyCode` |  | |  | `ausbk` |  |  |
| `LogicalSystem` |  | |  | `awsys` |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  | `cast(P_BKPF_COM.awsys as fis_awsys preserving type)` |  |  |
| `TaxAbsoluteExchangeRate` |  | |  | `cast(abs(P_BKPF_COM.txkrs) as fis_absolute_txkrs_bkpf preserving type)` |  |  |
| `TaxExchangeRate` |  | |  | `txkrs` |  |  |
| `TaxExchRateIsIndirectQuotation` |  | |  | `cast(case when P_BKPF_COM.txkrs < 0 then 'X' when P_BKPF_COM.txkrs >= 0 then ' ' end as fis_tax_indirect_quotation preserving type)` |  |  |
| `TaxEffectiveExchangeRate` |  | |  | `cast(case when P_BKPF_COM.txkrs < 0 then division(1,abs(P_BKPF_COM.txkrs),5) when P_BKPF_COM.txkrs >= 0 then P_BKPF_COM.txkrs end as fis_tax_effective_exchangerate)` |  |  |
| `CtryCrcyTxAbsoluteExchangeRate` |  | |  | `cast(abs(P_BKPF_COM.ctxkrs) as ctrycrcytxabsoluteexchangerate preserving type)` |  |  |
| `CtryCrcyTaxEffctvExchangeRate` |  | |  | `cast(case when P_BKPF_COM.ctxkrs < 0 then division(1,abs(P_BKPF_COM.ctxkrs),5) when P_BKPF_COM.ctxkrs >= 0 then P_BKPF_COM.ctxkrs end as ctrycrcytaxeffctvexchangerate)` |  |  |
| `ReversalReason` |  | |  | `stgrd` |  |  |
| `ParkedByUser` |  | |  | `cast(P_BKPF_COM.ppnam as fis_ppnam preserving type )` |  |  |
| `ParkingDate` |  | |  | `ppdat` |  |  |
| `ParkingTime` |  | |  | `pptme` |  |  |
| `ParkingTransactionCode` |  | |  | `PPTCOD` |  |  |
| `Branch` |  | |  | `brnch` |  |  |
| `NmbrOfPages` |  | |  | `numpg` |  |  |
| `IsDiscountDocument` |  | |  | `adisc` |  |  |
| `Reference1InDocumentHeader` |  | |  | `xref1_hd` |  |  |
| `Reference2InDocumentHeader` |  | |  | `xref2_hd` |  |  |
| `InvoiceReceiptDate` |  | |  | `reindat` |  |  |
| `Ledger` |  | |  | `rldnr` |  |  |
| `LedgerGroup` |  | |  | `ldgrp` |  |  |
| `AlternativeReferenceDocument` |  | |  | `cast(P_BKPF_COM.xblnr_alt as fis_xblnr_alt_alpha preserving type )` |  |  |
| `TaxReportingDate` |  | |  | `vatdate` |  |  |
| `TaxFulfillmentDate` |  | |  | `fulfilldate` |  |  |
| `AccountingDocumentClass` |  | |  | `doccat` |  |  |
| `ExchangeRateType` |  | |  | `kurst` |  |  |
| `MarketDataAbsoluteExchangeRate` |  | |  | `cast(abs(P_BKPF_COM.kursx) as marketdataabsoluteexchangerate preserving type)` |  |  |
| `MktDataEffectiveExchangeRate` |  | |  | `cast(case when P_BKPF_COM.kursx < 0 then division(1,abs(P_BKPF_COM.kursx),5) when P_BKPF_COM.kursx >= 0 then P_BKPF_COM.kursx end as mktdataeffectiveexchangerate)` |  |  |
| `SenderLogicalSystem` |  | |  | `logsystem_sender` |  |  |
| `SenderCompanyCode` |  | |  | `bukrs_sender` |  |  |
| `SenderAccountingDocument` |  | |  | `belnr_sender` |  |  |
| `SenderFiscalYear` |  | |  | `gjahr_sender` |  |  |
| `ReversalReferenceDocumentCntxt` |  | |  | `aworg_rev` |  |  |
| `ReversalReferenceDocument` |  | |  | `awref_rev` |  |  |
| `LatePaymentReason` |  | |  | `penrc` |  |  |
| `SalesDocumentCondition` |  | |  | `knumv` |  |  |
| `IsReversal` |  | |  | `xreversing` |  |  |
| `IsReversed` |  | |  | `xreversed` |  |  |
| `GLBusinessTransactionGroup` |  | |  | `glbtgrp` |  |  |
| `CostAccountingValuationDate` |  | |  | `co_valdt` |  |  |
| `TaxCountry` |  | |  | `TAX_COUNTRY_HD` |  |  |
| `JournalEntryLastChangeDateTime` |  | |  | `last_change_datetime` |  |  |
| `JournalEntryIsSecondaryEntry` |  | |  | `XSECONDARY` |  |  |
| `JournalEntryReprocessingStatus` |  | |  | `reprocessing_status_code` |  |  |
| `JrnlEntryCntrySpecificRef1` |  | |  | `glo_ref1_hd` |  |  |
| `JrnlEntryCntrySpecificDate1` |  | |  | `glo_dat1_hd` |  |  |
| `JrnlEntryCntrySpecificRef2` |  | |  | `glo_ref2_hd` |  |  |
| `JrnlEntryCntrySpecificDate2` |  | |  | `glo_dat2_hd` |  |  |
| `JrnlEntryCntrySpecificRef3` |  | |  | `glo_ref3_hd` |  |  |
| `JrnlEntryCntrySpecificDate3` |  | |  | `glo_dat3_hd` |  |  |
| `JrnlEntryCntrySpecificRef4` |  | |  | `glo_ref4_hd` |  |  |
| `JrnlEntryCntrySpecificDate4` |  | |  | `glo_dat4_hd` |  |  |
| `JrnlEntryCntrySpecificRef5` |  | |  | `glo_ref5_hd` |  |  |
| `JrnlEntryCntrySpecificDate5` |  | |  | `glo_dat5_hd` |  |  |
| `JrnlEntryCntrySpecificBP1` |  | |  | `glo_bp1_hd` |  |  |
| `JrnlEntryCntrySpecificBP2` |  | |  | `glo_bp2_hd` |  |  |
| `WithholdingTaxReportingDate` |  | |  | `whtdate` |  |  |
| `EntryViewPostingControl` |  | |  | `ev_postng_ctrl` |  |  |
| `_AccountingDocumentTypeText` | | ✓ | | | | |
| `_BusinessTransactionTypeText` | | ✓ | | | | |
| `_FinancialManagementAreaText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_RefDocumentLogicalSystem` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_LedgerGroup` | | ✓ | | | | |
| `_AdditionalCurrency1Role` | | ✓ | | | | |
| `_AdditionalCurrency2Role` | | ✓ | | | | |
| `_JournalEntryItem` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_AddlLedgerOplAcctgDocItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingDocumentTypeText` | `I_AccountingDocumentTypeText` | [0..*] |
| `_BusinessTransactionTypeText` | `I_BusTransactionTypeText` | [0..*] |
| `_FinancialManagementAreaText` | `I_FinancialManagementAreaText` | [0..*] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_RefDocumentLogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_LedgerGroup` | `I_LedgerGroup` | [0..1] |
| `_AdditionalCurrency1Role` | `I_CurrencyRole` | [0..1] |
| `_AdditionalCurrency2Role` | `I_CurrencyRole` | [0..1] |
| `_JournalEntryItem` | `I_JournalEntryItem` | [1..*] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..*] |
| `_AddlLedgerOplAcctgDocItem` | `I_AddlLedgerOplAcctgDocItem` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Journal Entry'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'AccountingDocument'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@Analytics: { 
      dataCategory: #DIMENSION, 
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping: 
            [
              { 
                table: 'BKPF',
                role: #MAIN,
                viewElement: ['CompanyCode', 'FiscalYear', 'AccountingDocument'],
                tableElement: ['bukrs', 'gjahr', 'belnr']
              }
            ] 
         }
      }
    }
@Analytics.technicalName: 'IFIJOURNALENT'
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true
//--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
@AccessControl.privilegedAssociations: ['_AccountingDocumentTypeText','_BusinessTransactionTypeText','_FinancialManagementAreaText','_LedgerText']
// ]--GENERATED

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'JournalEntry'                                     
                                     
define view entity I_JournalEntry as select from P_BKPF_COM as P_BKPF_COM

/* *************************************************************
 *  association zur ID
 * *************************************************************
*/ 
 

  //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
  association [0..*] to I_AccountingDocumentTypeText      as _AccountingDocumentTypeText on   $projection.AccountingDocumentType = _AccountingDocumentTypeText.AccountingDocumentType
  association [0..*] to I_BusTransactionTypeText      as _BusinessTransactionTypeText on   $projection.BusinessTransactionType = _BusinessTransactionTypeText.BusinessTransactionType
  association [0..*] to I_FinancialManagementAreaText      as _FinancialManagementAreaText on   $projection.FinancialManagementArea = _FinancialManagementAreaText.FinancialManagementArea
  association [0..*] to I_LedgerText      as _LedgerText on   $projection.Ledger = _LedgerText.Ledger
  // ]--GENERATED
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on $projection.CompanyCode                     = _CompanyCode.CompanyCode
association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear                   on $projection.FiscalYear                      = _FiscalYear.FiscalYear
                                                                                     and $projection.CompanyCode                     = _FiscalYear.CompanyCode  
association [0..1] to I_AccountingDocumentType       as _AccountingDocumentType       on $projection.AccountingDocumentType          = _AccountingDocumentType.AccountingDocumentType
association [1..1] to I_Currency                     as _CompanyCodeCurrency          on $projection.CompanyCodeCurrency             = _CompanyCodeCurrency.Currency 
association [0..1] to I_Currency                     as _TransactionCurrency          on  $projection.TransactionCurrency            = _TransactionCurrency.Currency
association [0..1] to I_Currency                 as _AdditionalCurrency1      on $projection.AdditionalCurrency1      = _AdditionalCurrency1.Currency 
association [0..1] to I_Currency                 as _AdditionalCurrency2      on $projection.AdditionalCurrency2      = _AdditionalCurrency2.Currency
association [0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod                 on $projection.FiscalYear                      = _FiscalPeriod.FiscalYear
                                                                                     and $projection.FiscalPeriod                    = _FiscalPeriod.FiscalPeriod
                                                                                     and $projection.CompanyCode                     = _FiscalPeriod.CompanyCode  
association [0..1] to I_AccountingDocumentCategory   as _AccountingDocumentCategory   on $projection.AccountingDocumentCategory      = _AccountingDocumentCategory.AccountingDocumentCategory
association [0..1] to I_BusinessTransactionType      as _BusinessTransactionType      on $projection.BusinessTransactionType         = _BusinessTransactionType.BusinessTransactionType
association [0..1] to I_FinancialManagementArea      as _FinancialManagementArea      on $projection.FinancialManagementArea         = _FinancialManagementArea.FinancialManagementArea                                                                                                                                                                                                                                                            
association [0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType        on $projection.ReferenceDocumentType           = _ReferenceDocumentType.ReferenceDocumentType
association [0..1] to I_LogicalSystem                as _LogicalSystem                on $projection.LogicalSystem                   = _LogicalSystem.LogicalSystem  
association [0..1] to I_LogicalSystem                as _RefDocumentLogicalSystem     on $projection.ReferenceDocumentLogicalSystem  = _RefDocumentLogicalSystem.LogicalSystem
association [0..1] to I_User                         as _User                         on  $projection.AccountingDocCreatedByUser     = _User.UserID                                                                                                                                                                                                                                                          
association [1..1] to I_Ledger                       as _Ledger                       on $projection.Ledger                          = _Ledger.Ledger
association [0..1] to I_LedgerGroup                  as _LedgerGroup                  on  $projection.LedgerGroup                    = _LedgerGroup.LedgerGroup
association [0..1] to I_CurrencyRole                 as _AdditionalCurrency1Role      on  $projection.AdditionalCurrency1Role        = _AdditionalCurrency1Role.CurrencyRole
association [0..1] to I_CurrencyRole                 as _AdditionalCurrency2Role      on  $projection.AdditionalCurrency2Role        = _AdditionalCurrency2Role.CurrencyRole
  
association [1..*] to I_JournalEntryItem             as _JournalEntryItem             on $projection.CompanyCode                = _JournalEntryItem.CompanyCode
                                                                                     and $projection.FiscalYear                 = _JournalEntryItem.FiscalYear
                                                                                     and $projection.AccountingDocument         = _JournalEntryItem.AccountingDocument
                                                                                     
association [0..*] to I_OperationalAcctgDocItem      as _OperationalAcctgDocItem      on $projection.CompanyCode                = _OperationalAcctgDocItem.CompanyCode
                                                                                     and $projection.FiscalYear                 = _OperationalAcctgDocItem.FiscalYear
                                                                                     and $projection.AccountingDocument         = _OperationalAcctgDocItem.AccountingDocument
                                                                                     
association [0..*] to I_AddlLedgerOplAcctgDocItem    as _AddlLedgerOplAcctgDocItem    on $projection.CompanyCode                = _AddlLedgerOplAcctgDocItem.CompanyCode
                                                                                     and $projection.FiscalYear                 = _AddlLedgerOplAcctgDocItem.FiscalYear
                                                                                     and $projection.AccountingDocument         = _AddlLedgerOplAcctgDocItem.AccountingDocument                                                                                                                                                                          
                                                                                         
{
    
      //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_CompanyCode'
key P_BKPF_COM.bukrs as CompanyCode,
@ObjectModel.foreignKey.association: '_FiscalYear'
key P_BKPF_COM.gjahr as FiscalYear,
key P_BKPF_COM.belnr as AccountingDocument,

      //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AccountingDocumentTypeStdVH',
                     element: 'AccountingDocumentType' }
        }]
      @ObjectModel.text.association: '_AccountingDocumentTypeText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
P_BKPF_COM.blart as AccountingDocumentType, 
P_BKPF_COM.bldat as DocumentDate,
P_BKPF_COM.budat as PostingDate,
@ObjectModel.foreignKey.association: '_FiscalPeriod'
cast( P_BKPF_COM.monat as fins_fiscalperiod ) as FiscalPeriod,
P_BKPF_COM.cpudt as AccountingDocumentCreationDate,
P_BKPF_COM.cputm as CreationTime,
cast ( P_BKPF_COM.aedat as fis_lastmanualchangedate preserving type )    as LastManualChangeDate,
cast ( P_BKPF_COM.upddt as fis_lastautomaticchangedate preserving type ) as LastAutomaticChangeDate,
case 
  when ( P_BKPF_COM.upddt is not initial  and P_BKPF_COM.upddt > P_BKPF_COM.aedat ) then upddt  
  when P_BKPF_COM.aedat is not initial then cast ( P_BKPF_COM.aedat as ttet_dt_chg_date preserving type )
  else cast ( P_BKPF_COM.cpudt as ttet_dt_chg_date preserving type )
end as LastChangeDate,
P_BKPF_COM.wwert as ExchangeRateDate,
P_BKPF_COM.usnam as AccountingDocCreatedByUser,
P_BKPF_COM.tcode as TransactionCode,
P_BKPF_COM.bvorg as IntercompanyTransaction,
P_BKPF_COM.xblnr as DocumentReferenceID,
P_BKPF_COM.dbblg as RecurringAccountingDocument,    // or new RecurringJournalEntry ??
P_BKPF_COM.dbblg_bukrs as RecrrgJournalEntryCompanyCode,
P_BKPF_COM.dbblg_gjahr as RecrrgJournalEntryFiscalYear,
P_BKPF_COM.stblg as ReverseDocument,
P_BKPF_COM.stjah as ReverseDocumentFiscalYear,
P_BKPF_COM.bktxt as AccountingDocumentHeaderText,

@ObjectModel.foreignKey.association: '_TransactionCurrency'
P_BKPF_COM.waers as TransactionCurrency,
//@Aggregation.default: #NOP

cast(abs(P_BKPF_COM.kursf) as fis_absolute_exchangerate preserving type) as AbsoluteExchangeRate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'AbsoluteExchangeRate'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'AbsoluteExchangeRate'
P_BKPF_COM.kursf as ExchangeRate,
@Semantics.booleanIndicator:true
cast(case when P_BKPF_COM.kursf < 0 then 'X' 
          when P_BKPF_COM.kursf >= 0 then ' ' end as fis_indirect_quotation preserving type) as ExchRateIsIndirectQuotation,
cast(case when P_BKPF_COM.kursf < 0 then division(1,abs(P_BKPF_COM.kursf),5) 
          when P_BKPF_COM.kursf >= 0 then P_BKPF_COM.kursf end as fis_effective_exchangerate) as EffectiveExchangeRate,

//@Semantics.currencyCode:true
//kzwrs as GroupCurrency,
//kzkrs as GroupCurrencyExchangeRate,

@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
P_BKPF_COM.bstat as AccountingDocumentCategory,
P_BKPF_COM.xnetb as NetAmountIsPosted,
//frath,
P_BKPF_COM.xrueb as JrnlEntryIsPostedToPrevPeriod,
      //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusTransTypeStdVH',
                     element: 'BusinessTransactionType' }
        }]
      @ObjectModel.text.association: '_BusinessTransactionTypeText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
P_BKPF_COM.glvor as BusinessTransactionType,
P_BKPF_COM.cbttype as JrnlEntryBusinessTransType,
P_BKPF_COM.grpid as BatchInputSession,
//dokid,
//arcid,
//iblar,
@ObjectModel.foreignKey.association: '_ReferenceDocumentType'
P_BKPF_COM.awtyp as ReferenceDocumentType,
P_BKPF_COM.awkey as OriginalReferenceDocument,
      //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.text.association: '_FinancialManagementAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_FinancialManagementArea'
P_BKPF_COM.fikrs as FinancialManagementArea,

@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
P_BKPF_COM.hwaer as CompanyCodeCurrency,
P_BKPF_COM.hwae2 as AdditionalCurrency1,
P_BKPF_COM.hwae3 as AdditionalCurrency2,

//kurs2 as AdditionalCrcy1ExchangeRate,
//kurs3 as AdditionalCrcy2ExchangeRate,

//basw2,
//basw3,
//umrd2,
//umrd3,
//@Semantics.booleanIndicator 
P_BKPF_COM.xstov as ReversalIsPlanned,
P_BKPF_COM.stodt as PlannedReversalDate,
//@Semantics.booleanIndicator 
P_BKPF_COM.xmwst as TaxIsCalculatedAutomatically,

@Analytics.internalName: #LOCAL
P_BKPF_COM.curt2 as AdditionalCurrency1Role,
@Analytics.internalName: #LOCAL
P_BKPF_COM.curt3 as AdditionalCurrency2Role,
//kuty2 as AddtionalCrcy1ExchangeRateType,
//kuty3 as AddtionalCrcy2ExchangeRateType,
//@Semantics.booleanIndicator 
P_BKPF_COM.xsnet as TaxBaseAmountIsNetAmount,
P_BKPF_COM.ausbk as SourceCompanyCode,
//xusvr,
//duefl,
@ObjectModel.foreignKey.association: '_LogicalSystem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ReferenceDocumentLogicalSystem'
P_BKPF_COM.awsys as LogicalSystem,
@ObjectModel.foreignKey.association: '_RefDocumentLogicalSystem'
@Analytics.internalName: #LOCAL
cast(P_BKPF_COM.awsys as fis_awsys preserving type) as ReferenceDocumentLogicalSystem,
//@Aggregation.default: #NOP

cast(abs(P_BKPF_COM.txkrs) as fis_absolute_txkrs_bkpf preserving type) as TaxAbsoluteExchangeRate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'TaxAbsoluteExchangeRate'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'TaxAbsoluteExchangeRate'
P_BKPF_COM.txkrs as TaxExchangeRate,
@Semantics.booleanIndicator:true
cast(case when P_BKPF_COM.txkrs < 0 then 'X' 
          when P_BKPF_COM.txkrs >= 0 then ' ' end as fis_tax_indirect_quotation preserving type) as TaxExchRateIsIndirectQuotation,
cast(case when P_BKPF_COM.txkrs < 0 then division(1,abs(P_BKPF_COM.txkrs),5) 
          when P_BKPF_COM.txkrs >= 0 then P_BKPF_COM.txkrs end as fis_tax_effective_exchangerate) as TaxEffectiveExchangeRate,
          
cast(abs(P_BKPF_COM.ctxkrs) as ctrycrcytxabsoluteexchangerate preserving type) as CtryCrcyTxAbsoluteExchangeRate,

cast(case when P_BKPF_COM.ctxkrs < 0 then division(1,abs(P_BKPF_COM.ctxkrs),5) 
          when P_BKPF_COM.ctxkrs >= 0 then P_BKPF_COM.ctxkrs end as ctrycrcytaxeffctvexchangerate) as CtryCrcyTaxEffctvExchangeRate,          

//lotkz,
//xwvof,
P_BKPF_COM.stgrd as ReversalReason,
cast(P_BKPF_COM.ppnam as fis_ppnam preserving type ) as ParkedByUser,
P_BKPF_COM.ppdat as ParkingDate,
P_BKPF_COM.pptme as ParkingTime,
P_BKPF_COM.PPTCOD as ParkingTransactionCode,
P_BKPF_COM.brnch as Branch,
P_BKPF_COM.numpg as NmbrOfPages,
//@Semantics.booleanIndicator 
P_BKPF_COM.adisc as IsDiscountDocument,
P_BKPF_COM.xref1_hd as Reference1InDocumentHeader,
P_BKPF_COM.xref2_hd as Reference2InDocumentHeader,
P_BKPF_COM.reindat as InvoiceReceiptDate,
      //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.text.association: '_LedgerText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_Ledger'      
P_BKPF_COM.rldnr as Ledger,
P_BKPF_COM.ldgrp as LedgerGroup,
//propmano,
cast(P_BKPF_COM.xblnr_alt as fis_xblnr_alt_alpha preserving type ) as AlternativeReferenceDocument,
P_BKPF_COM.vatdate as TaxReportingDate,
P_BKPF_COM.fulfilldate as TaxFulfillmentDate,
P_BKPF_COM.doccat as AccountingDocumentClass,
//xsplit,
//cash_alloc,
//follow_on,
//xreorg,
//subset,
P_BKPF_COM.kurst as ExchangeRateType,
cast(abs(P_BKPF_COM.kursx) as marketdataabsoluteexchangerate preserving type) as MarketDataAbsoluteExchangeRate,

cast(case when P_BKPF_COM.kursx < 0 then division(1,abs(P_BKPF_COM.kursx),5) 
          when P_BKPF_COM.kursx >= 0 then P_BKPF_COM.kursx end as mktdataeffectiveexchangerate) as MktDataEffectiveExchangeRate,
//kur2x,
//kur3x,
//xmca,
//resubmission,
P_BKPF_COM.logsystem_sender as SenderLogicalSystem,
P_BKPF_COM.bukrs_sender as SenderCompanyCode,
P_BKPF_COM.belnr_sender as SenderAccountingDocument,
P_BKPF_COM.gjahr_sender as SenderFiscalYear,
P_BKPF_COM.aworg_rev as ReversalReferenceDocumentCntxt,
P_BKPF_COM.awref_rev as ReversalReferenceDocument,
//ccins,
//ccnum,
P_BKPF_COM.penrc as LatePaymentReason,
P_BKPF_COM.knumv as SalesDocumentCondition,
//@Semantics.booleanIndicator 
P_BKPF_COM.xreversing as IsReversal,
//@Semantics.booleanIndicator 
P_BKPF_COM.xreversed as IsReversed,
P_BKPF_COM.glbtgrp as GLBusinessTransactionGroup,
@Analytics.internalName: #LOCAL
P_BKPF_COM.co_valdt as CostAccountingValuationDate, 

P_BKPF_COM.TAX_COUNTRY_HD as TaxCountry,
P_BKPF_COM.last_change_datetime as JournalEntryLastChangeDateTime,

P_BKPF_COM.XSECONDARY as JournalEntryIsSecondaryEntry,
P_BKPF_COM.reprocessing_status_code as JournalEntryReprocessingStatus,

// .INCLUDE FAC_BKPF_EXT_GLO  STRU  0 0 Document Header: Extension include for globalisation
P_BKPF_COM.glo_ref1_hd as JrnlEntryCntrySpecificRef1,
P_BKPF_COM.glo_dat1_hd as JrnlEntryCntrySpecificDate1,
P_BKPF_COM.glo_ref2_hd as JrnlEntryCntrySpecificRef2,
P_BKPF_COM.glo_dat2_hd as JrnlEntryCntrySpecificDate2,
P_BKPF_COM.glo_ref3_hd as JrnlEntryCntrySpecificRef3,
P_BKPF_COM.glo_dat3_hd as JrnlEntryCntrySpecificDate3,
P_BKPF_COM.glo_ref4_hd as JrnlEntryCntrySpecificRef4,
P_BKPF_COM.glo_dat4_hd as JrnlEntryCntrySpecificDate4,
P_BKPF_COM.glo_ref5_hd as JrnlEntryCntrySpecificRef5,
P_BKPF_COM.glo_dat5_hd as JrnlEntryCntrySpecificDate5,
P_BKPF_COM.glo_bp1_hd as JrnlEntryCntrySpecificBP1,
P_BKPF_COM.glo_bp2_hd as JrnlEntryCntrySpecificBP2,

P_BKPF_COM.whtdate as WithholdingTaxReportingDate,
P_BKPF_COM.ev_postng_ctrl as EntryViewPostingControl,

_CompanyCode,
_FiscalYear,
_AccountingDocumentType,
_CompanyCodeCurrency,
_TransactionCurrency,
_AdditionalCurrency1,
_AdditionalCurrency2,
_FiscalPeriod,
_AccountingDocumentCategory,
_BusinessTransactionType,
_FinancialManagementArea,
_ReferenceDocumentType,
_User,
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_RefDocumentLogicalSystem'
_LogicalSystem,
_RefDocumentLogicalSystem,
_Ledger,
_LedgerGroup,
_AdditionalCurrency1Role,
_AdditionalCurrency2Role,

_JournalEntryItem,
_OperationalAcctgDocItem,
_AddlLedgerOplAcctgDocItem,

                                                                                   
      //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
      @Consumption.hidden: true
      _AccountingDocumentTypeText,
      @Consumption.hidden: true
      _BusinessTransactionTypeText,
      @Consumption.hidden: true
      _FinancialManagementAreaText,
      @Consumption.hidden: true
      _LedgerText
      // ]--GENERATED

}
```
