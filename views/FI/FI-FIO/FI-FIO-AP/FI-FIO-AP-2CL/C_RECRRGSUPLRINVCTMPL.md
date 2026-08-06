---
name: C_RECRRGSUPLRINVCTMPL
description: Recrrgsuplrinvctmpl
app_component: FI-FIO-AP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - consumption-view
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPL

**Recrrgsuplrinvctmpl**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RecrrgSuplrInvcTmplUUID` | `_Tmpl.RecrrgSuplrInvcTmplUUID` |
| `RecrrgSupplierInvoiceTemplate` | `_Tmpl.RecrrgSupplierInvoiceTemplate` |
| `AccountingDocumentType` | `_Tmpl.AccountingDocumentType` |
| `CompanyCode` | `_Tmpl.CompanyCode` |
| `DocumentReferenceID` | `_Tmpl.DocumentReferenceID` |
| `AccountingDocumentHeaderText` | `_Tmpl.AccountingDocumentHeaderText` |
| `TotalAmountInTransactionCrcy` | `_Tmpl.TotalAmountInTransactionCrcy` |
| `InvoicingParty` | `_Tmpl.InvoicingParty` |
| `ExchangeRate` | `_Tmpl.ExchangeRate` |
| `TotalAmountInLocalCurrency` | `_Tmpl.TotalAmountInLocalCurrency` |
| `TransactionCurrency` | `_Tmpl.TransactionCurrency` |
| `LocalCurrency` | `_Tmpl.LocalCurrency` |
| `AssignmentReference` | `_Tmpl.AssignmentReference` |
| `SupplierBankType` | `_Tmpl.SupplierBankType` |
| `IBAN` | `_Tmpl.IBAN` |
| `SWIFTCode` | `_Tmpl.SWIFTCode` |
| `PaymentSystem` | `case when _Tmpl.SupplierBankType is initial then '' else _BPBankAlias._BusinessPartnerBankAlias.PaymentSystem end` |
| `AliasType` | `case when _Tmpl.SupplierBankType is initial then '' else _BPBankAlias._BusinessPartnerBankAlias.AliasType end` |
| `BPBankAccountAliasName` | `case when _Tmpl.SupplierBankType is initial then '' else _BPBankAlias._BusinessPartnerBankAlias.BPBankAccountAliasName end` |
| `ReportingCountry` | `_Tmpl.ReportingCountry` |
| `CompanyCodeCountry` | `_Tmpl.CompanyCodeCountry` |
| `SupplierVATRegistration` | `_Tmpl.SupplierVATRegistration` |
| `IsEUTriangularDeal` | `_Tmpl.IsEUTriangularDeal` |
| `DocumentItemText` | `_Tmpl.DocumentItemText` |
| `CreatedByUser` | `_Tmpl.CreatedByUser` |
| `CreatedByUserName` | `_Tmpl.CreatedByUserName` |
| `CreationDate` | `_Tmpl.CreationDate` |
| `StateCentralBankPaymentReason` | `_Tmpl.StateCentralBankPaymentReason` |
| `SupplyingCountry` | `_Tmpl.SupplyingCountry` |
| `PaymentTerms` | `_Tmpl.PaymentTerms` |
| `PaymentMethod` | `_Tmpl.PaymentMethod` |
| `PaymentReference` | `_Tmpl.PaymentReference` |
| `CashDiscount1Days` | `_Tmpl.CashDiscount1Days` |
| `CashDiscount1Percent` | `_Tmpl.CashDiscount1Percent` |
| `CashDiscount2Days` | `_Tmpl.CashDiscount2Days` |
| `CashDiscount2Percent` | `_Tmpl.CashDiscount2Percent` |
| `NetPaymentDays` | `_Tmpl.NetPaymentDays` |
| `HouseBank` | `_Tmpl.HouseBank` |
| `HouseBankAccount` | `_Tmpl.HouseBankAccount` |
| `ManualCashDiscountAmount` | `_Tmpl.ManualCashDiscountAmount` |
| `PaymentMethodSupplement` | `_Tmpl.PaymentMethodSupplement` |
| `SuplrInvcPaymentBlockingReason` | `_Tmpl.SuplrInvcPaymentBlockingReason` |
| `PaytSlipWthRefCheckDigit` | `_Tmpl.PaytSlipWthRefCheckDigit` |
| `PaytSlipWthRefReference` | `_Tmpl.PaytSlipWthRefReference` |
| `PaytSlipWthRefSubscriber` | `_Tmpl.PaytSlipWthRefSubscriber` |
| `TaxCode` | `_Tmpl.TaxCode` |
| `FixedCashDiscount` | `_Tmpl.FixedCashDiscount` |
| `TaxBaseAmountInTransCrcy` | `_Tmpl.TaxBaseAmountInTransCrcy` |
| `TaxDeterminationDate` | `_Tmpl.TaxDeterminationDate` |
| `TaxJurisdiction` | `_Tmpl.TaxJurisdiction` |
| `TaxCountry` | `_Tmpl.TaxCountry` |
| `WithholdingTaxIsEnabled` | `_Tmpl.WithholdingTaxIsEnabled` |
| `GLAccount` | `_Tmpl.GLAccount` |
| `SettlmtCoCodeTaxCountry` | `_Tmpl.SettlmtCoCodeTaxCountry` |
| `RecurrenceStartDate` | `_Tmpl.RecurrenceStartDate` |
| `FirstOccurrenceDate` | `_Tmpl.FirstOccurrenceDate` |
| `NextOccurrenceDate` | `_Tmpl.NextOccurrenceDate` |
| `NextOccurrenceAmountInTC` | `_Tmpl.NextOccurrenceAmountInTC` |
| `RecurrencePattern` | `_Tmpl.RecurrencePattern` |
| `RecurrencePatternName` | `cast( _RecurrencePatternText._Text[ Language = $session.system_language ].RecurrenceTypeName as fap_rsiv_recurr_pattern preserving type )` |
| `RecurrenceIntervalInDays` | `_Tmpl.RecurrenceIntervalInDays` |
| `RecurrenceIntervalInWeeks` | `_Tmpl.RecurrenceIntervalInWeeks` |
| `RecurrenceIntervalInMonths` | `_Tmpl.RecurrenceIntervalInMonths` |
| `RecurrenceDayOfMonth` | `_Tmpl.RecurrenceDayOfMonth` |
| `RecurrenceDayOfWeek` | `_Tmpl.RecurrenceDayOfWeek` |
| `RecurrenceEndType` | `_Tmpl.RecurrenceEndType` |
| `RecurrenceEndTypeName` | `cast( _RecurrenceEndTypeText._Text[ Language = $session.system_language ].RecurrenceEndTypeName as fap_rsiv_recurr_end_type preserving type )` |
| `NumberOfOccurrences` | `_Tmpl.NumberOfOccurrences` |
| `NumberOfPostedInvoices` | `_Tmpl.NumberOfPostedInvoices` |
| `NumberOfNotPostedInvoices` | `_Tmpl.NumberOfNotPostedInvoices` |
| `LastOccurrenceDate` | `_Tmpl.LastOccurrenceDate` |
| `ForeignCrcyAmtCnvrsnRule` | `_Tmpl.ForeignCrcyAmtCnvrsnRule` |
| `BusinessPlace` | `_Tmpl.BusinessPlace` |
| `BusinessSectionCode` | `_Tmpl.BusinessSectionCode` |
| `IN_GSTPartner` | `_Tmpl.IN_GSTPartner` |
| `IN_GSTPlaceOfSupply` | `_Tmpl.IN_GSTPlaceOfSupply` |
| `IN_InvoiceReferenceNumber` | `_Tmpl.IN_InvoiceReferenceNumber` |
| `QuickResponseIBAN` | `_Tmpl.QuickResponseIBAN` |
| `OneTimeAcctCntrySpecificRef1` | `_Tmpl.OneTimeAcctCntrySpecificRef1` |
| `ReferenceAccountForIBAN` | `_Tmpl.ReferenceAccountForIBAN` |
| `_RecrrgSuplrInvcTmplItem` | *Association* |
| `_RecrrgSuplrInvcTmplInstce` | *Association* |
| `_RecrrgSuplrInvcTmplWhgdTax` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RecrrgSuplrInvcTmplItem` | `C_RecrrgSuplrInvcTmplItem` | [0..*] |
| `_RecrrgSuplrInvcTmplInstce` | `C_RecrrgSuplrInvcTmplInstce` | [0..*] |
| `_RecrrgSuplrInvcTmplWhgdTax` | `C_RecrrgSuplrInvcTmplWhgdTax` | [0..*] |
| `_RecurrencePatternText` | `I_RecurrencePattern` | [0..1] |
| `_RecurrenceEndTypeText` | `I_RecurrencePatternEndType` | [0..1] |
| `_BPBankAlias` | `I_SupplierBankDetails` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Recurring Supplier Invoice Template'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecurringSupplierInvoiceTmpl'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}


define root view entity C_RecrrgSuplrInvcTmpl
  as select from I_RecrrgSuplrInvcTmpl as _Tmpl

  association [0..*] to C_RecrrgSuplrInvcTmplItem    as _RecrrgSuplrInvcTmplItem    on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplItem.RecrrgSuplrInvcTmplUUID

  association [0..*] to C_RecrrgSuplrInvcTmplInstce  as _RecrrgSuplrInvcTmplInstce  on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplInstce.RecrrgSuplrInvcTmplUUID

  association [0..*] to C_RecrrgSuplrInvcTmplWhgdTax as _RecrrgSuplrInvcTmplWhgdTax on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplWhgdTax.RecrrgSuplrInvcTmplUUID

  association [0..1] to I_RecurrencePattern          as _RecurrencePatternText      on  $projection.RecurrencePattern = _RecurrencePatternText.RecurrenceType

  association [0..1] to I_RecurrencePatternEndType   as _RecurrenceEndTypeText      on  $projection.RecurrenceEndType = _RecurrenceEndTypeText.RecurrenceEndType

  association [0..1] to I_SupplierBankDetails        as _BPBankAlias                on  $projection.SupplierBankType        = _BPBankAlias.BPBankAccountInternalID
                                                                                    and $projection.ReferenceAccountForIBAN = _BPBankAlias.Supplier

{
  key _Tmpl.RecrrgSuplrInvcTmplUUID                                                                                                                 as RecrrgSuplrInvcTmplUUID,

      @Search.defaultSearchElement: true
      _Tmpl.RecrrgSupplierInvoiceTemplate                                                                                                           as RecrrgSupplierInvoiceTemplate,

      _Tmpl.AccountingDocumentType                                                                                                                  as AccountingDocumentType,

      _Tmpl.CompanyCode                                                                                                                             as CompanyCode,

      _Tmpl.DocumentReferenceID                                                                                                                     as DocumentReferenceID,

      _Tmpl.AccountingDocumentHeaderText                                                                                                            as AccountingDocumentHeaderText,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.TotalAmountInTransactionCrcy                                                                                                            as TotalAmountInTransactionCrcy,

      _Tmpl.InvoicingParty                                                                                                                          as InvoicingParty,

      _Tmpl.ExchangeRate                                                                                                                            as ExchangeRate,

      @Semantics.amount.currencyCode: 'LocalCurrency'
      _Tmpl.TotalAmountInLocalCurrency                                                                                                              as TotalAmountInLocalCurrency,

      _Tmpl.TransactionCurrency                                                                                                                     as TransactionCurrency,

      _Tmpl.LocalCurrency                                                                                                                           as LocalCurrency,

      _Tmpl.AssignmentReference                                                                                                                     as AssignmentReference,

      _Tmpl.SupplierBankType                                                                                                                        as SupplierBankType,

      _Tmpl.IBAN                                                                                                                                    as IBAN,

      _Tmpl.SWIFTCode                                                                                                                               as SWIFTCode,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.PaymentSystem end                                                                                 as PaymentSystem,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.AliasType end                                                                                     as AliasType,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.BPBankAccountAliasName end                                                                        as BPBankAccountAliasName,

      _Tmpl.ReportingCountry                                                                                                                        as ReportingCountry,

      _Tmpl.CompanyCodeCountry                                                                                                                      as CompanyCodeCountry,

      _Tmpl.SupplierVATRegistration                                                                                                                 as SupplierVATRegistration,

      _Tmpl.IsEUTriangularDeal                                                                                                                      as IsEUTriangularDeal,

      _Tmpl.DocumentItemText                                                                                                                        as DocumentItemText,

      _Tmpl.CreatedByUser                                                                                                                           as CreatedByUser,

      _Tmpl.CreatedByUserName                                                                                                                       as CreatedByUserName,

      _Tmpl.CreationDate                                                                                                                            as CreationDate,

      _Tmpl.StateCentralBankPaymentReason                                                                                                           as StateCentralBankPaymentReason,

      _Tmpl.SupplyingCountry                                                                                                                        as SupplyingCountry,

      _Tmpl.PaymentTerms                                                                                                                            as PaymentTerms,

      _Tmpl.PaymentMethod                                                                                                                           as PaymentMethod,

      _Tmpl.PaymentReference                                                                                                                        as PaymentReference,

      _Tmpl.CashDiscount1Days                                                                                                                       as CashDiscount1Days,

      _Tmpl.CashDiscount1Percent                                                                                                                    as CashDiscount1Percent,

      _Tmpl.CashDiscount2Days                                                                                                                       as CashDiscount2Days,

      _Tmpl.CashDiscount2Percent                                                                                                                    as CashDiscount2Percent,

      _Tmpl.NetPaymentDays                                                                                                                          as NetPaymentDays,

      _Tmpl.HouseBank                                                                                                                               as HouseBank,

      _Tmpl.HouseBankAccount                                                                                                                        as HouseBankAccount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.ManualCashDiscountAmount                                                                                                                as ManualCashDiscountAmount,

      _Tmpl.PaymentMethodSupplement                                                                                                                 as PaymentMethodSupplement,

      _Tmpl.SuplrInvcPaymentBlockingReason                                                                                                          as SuplrInvcPaymentBlockingReason,

      _Tmpl.PaytSlipWthRefCheckDigit                                                                                                                as PaytSlipWthRefCheckDigit,

      _Tmpl.PaytSlipWthRefReference                                                                                                                 as PaytSlipWthRefReference,

      _Tmpl.PaytSlipWthRefSubscriber                                                                                                                as PaytSlipWthRefSubscriber,

      _Tmpl.TaxCode                                                                                                                                 as TaxCode,

      _Tmpl.FixedCashDiscount                                                                                                                       as FixedCashDiscount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.TaxBaseAmountInTransCrcy                                                                                                                as TaxBaseAmountInTransCrcy,

      _Tmpl.TaxDeterminationDate                                                                                                                    as TaxDeterminationDate,

      _Tmpl.TaxJurisdiction                                                                                                                         as TaxJurisdiction,

      _Tmpl.TaxCountry                                                                                                                              as TaxCountry,

      _Tmpl.WithholdingTaxIsEnabled                                                                                                                 as WithholdingTaxIsEnabled,

      _Tmpl.GLAccount                                                                                                                               as GLAccount,

      _Tmpl.SettlmtCoCodeTaxCountry                                                                                                                 as SettlmtCoCodeTaxCountry,

      _Tmpl.RecurrenceStartDate                                                                                                                     as RecurrenceStartDate,

      _Tmpl.FirstOccurrenceDate                                                                                                                     as FirstOccurrenceDate,

      _Tmpl.NextOccurrenceDate                                                                                                                      as NextOccurrenceDate,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.NextOccurrenceAmountInTC                                                                                                                as NextOccurrenceAmountInTC,

      _Tmpl.RecurrencePattern                                                                                                                       as RecurrencePattern,

      cast( _RecurrencePatternText._Text[ Language = $session.system_language ].RecurrenceTypeName as fap_rsiv_recurr_pattern preserving type )     as RecurrencePatternName,

      _Tmpl.RecurrenceIntervalInDays                                                                                                                as RecurrenceIntervalInDays,

      _Tmpl.RecurrenceIntervalInWeeks                                                                                                               as RecurrenceIntervalInWeeks,

      _Tmpl.RecurrenceIntervalInMonths                                                                                                              as RecurrenceIntervalInMonths,

      _Tmpl.RecurrenceDayOfMonth                                                                                                                    as RecurrenceDayOfMonth,

      _Tmpl.RecurrenceDayOfWeek                                                                                                                     as RecurrenceDayOfWeek,

      _Tmpl.RecurrenceEndType                                                                                                                       as RecurrenceEndType,

      cast( _RecurrenceEndTypeText._Text[ Language = $session.system_language ].RecurrenceEndTypeName as fap_rsiv_recurr_end_type preserving type ) as RecurrenceEndTypeName,

      _Tmpl.NumberOfOccurrences                                                                                                                     as NumberOfOccurrences,

      _Tmpl.NumberOfPostedInvoices                                                                                                                  as NumberOfPostedInvoices,

      _Tmpl.NumberOfNotPostedInvoices                                                                                                               as NumberOfNotPostedInvoices,

      _Tmpl.LastOccurrenceDate                                                                                                                      as LastOccurrenceDate,

      _Tmpl.ForeignCrcyAmtCnvrsnRule                                                                                                                as ForeignCrcyAmtCnvrsnRule,

      _Tmpl.BusinessPlace                                                                                                                           as BusinessPlace,

      _Tmpl.BusinessSectionCode                                                                                                                     as BusinessSectionCode,

      _Tmpl.IN_GSTPartner                                                                                                                           as IN_GSTPartner,

      _Tmpl.IN_GSTPlaceOfSupply                                                                                                                     as IN_GSTPlaceOfSupply,

      _Tmpl.IN_InvoiceReferenceNumber                                                                                                               as IN_InvoiceReferenceNumber,

      _Tmpl.QuickResponseIBAN                                                                                                                       as QuickResponseIBAN,

      _Tmpl.OneTimeAcctCntrySpecificRef1                                                                                                            as OneTimeAcctCntrySpecificRef1,

      _Tmpl.ReferenceAccountForIBAN                                                                                                                 as ReferenceAccountForIBAN,

      _RecrrgSuplrInvcTmplItem,
      _RecrrgSuplrInvcTmplInstce,
      _RecrrgSuplrInvcTmplWhgdTax
}
```
