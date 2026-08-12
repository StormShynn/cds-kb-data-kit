---
name: I_PAYMENTADVICEITEM
description: "Paymentadviceitem"
app_component: CA-GTF-FXU-FI-AR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - payment
  - item-level
  - component:CA-GTF-FXU-FI-AR
  - lob:Cross-Application Components
---
# I_PAYMENTADVICEITEM

**Paymentadviceitem**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-AR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `PaymentAdviceAccountType` | ✓ | |  | `koart` |  |  |
| `PaymentAdviceAccount` | ✓ | |  | `konto` |  |  |
| `PaymentAdvice` | ✓ | |  | `cast(avsid as farp_pa_avsid preserving type)` |  |  |
| `PaymentAdviceItem` | ✓ | |  | `avspo` |  |  |
| `PaymentAdviceAltvAccount` |  | |  | `abwko` |  |  |
| `AlternativeCompanyCode` |  | |  | `cast(abwbu as farp_abwbu_av preserving type)` |  |  |
| `AccountingDocument` |  | |  | `belnr` |  |  |
| `DocumentReferenceID` |  | |  | `cast(xblnr as far_pa_xblnr1 preserving type)` |  |  |
| `LockboxInvoiceReference` |  | |  | `lbinvref` |  |  |
| `BillingDocument` |  | |  | `vbeln` |  |  |
| `BranchAccount` |  | |  | `cast(filkd as farp_filkd preserving type)` |  |  |
| `AccountingDocumentCreationDate` |  | |  | `cast(cpudt as farp_cpudt preserving type)` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `AssignmentReference` |  | |  | `cast(zuonr as farp_dzuonr preserving type)` |  |  |
| `PaytDifferenceReasonExtCode` |  | |  | `restg` |  |  |
| `DocumentItemText` |  | |  | `cast(sgtxt as farp_sgtxt preserving type)` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `cast(mwsts as farp_mwsts preserving type)` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `GrossAmountInPaymentCurrency` |  | |  | `wrbtr` |  |  |
| `NetPaymentAmountInPaytCurrency` |  | |  | `nebtr` |  |  |
| `CashDiscountAmountInPaytCrcy` |  | |  | `cast(wskto as far_pa_wskto_av preserving type )` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `AccountingDocumentItem` |  | |  | `cast(buzei as farp_buzei preserving type)` |  |  |
| `PaymentAdviceAltvAccountType` |  | |  | `cast(abwka as farp_abwka_av preserving type)` |  |  |
| `CashDiscountPercent` |  | |  | `zbdxp` |  |  |
| `CashDiscountDays` |  | |  | `zbdxt` |  |  |
| `DifferenceAmountInCoCodeCrcy` |  | |  | `cast(difhw as farp_difhw preserving type)` |  |  |
| `DifferenceAmount` |  | |  | `cast(diffw as farp_diffw preserving type)` |  |  |
| `DiffAmtInAdditionalCurrency1` |  | |  | `cast(difh2 as farp_difh2 preserving type)` |  |  |
| `DiffAmtInAdditionalCurrency2` |  | |  | `cast(difh3 as farp_difh3 preserving type)` |  |  |
| `ItemIsActivated` |  | |  | `cast(xaktp as farp_xaktp preserving type)` |  |  |
| `CashDiscountIsActivated` |  | |  | `cast(xakts as far_pa_xakts preserving type)` |  |  |
| `IsPartialPayment` |  | |  | `cast(xppmt as farp_xppmt preserving type)` |  |  |
| `PaytDiffRsdlBalIsCarriedFwd` |  | |  | `cast(xvort as farp_xvort preserving type)` |  |  |
| `PaymentDifferenceReason` |  | |  | `rstgn` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `Reference1IDByBusinessPartner` |  | |  | `cast(xref1 as farp_xref1 preserving type)` |  |  |
| `Reference2IDByBusinessPartner` |  | |  | `cast(xref2 as farp_xref2 preserving type)` |  |  |
| `DeliveryDocument` |  | |  | `liefn` |  |  |
| `InvoiceDate` |  | |  | `cast(redat as farp_pa_redat preserving type)` |  |  |
| `PurchasingDocReferenceByCust` |  | |  | `bstnk` |  |  |
| `IsPostedOnAccount` |  | |  | `xacon` |  |  |
| `PaymentAdviceStatus` |  | |  | `cast(astat as farp_astat_avik preserving type)` |  |  |
| `DeductionAmountInPaytCurrency` |  | |  | `cast(abbtr as far_pa_abbtr_av preserving type)` |  |  |
| `PaymentReference` |  | |  | `cast(kidno as farp_kidno preserving type)` |  |  |
| `PaymentAdviceSelectionField` |  | |  | `sfeld` |  |  |
| `PaymentAdviceSelectionValue` |  | |  | `swert` |  |  |
| `PaytAdvcExternalSelectionField` |  | |  | `cast(afeld as farp_afeld_av preserving type)` |  |  |
| `CASelectionValue` |  | |  | `fica_selw1` |  |  |
| `CASelectionCategory` |  | |  | `fica_selt1` |  |  |
| `CADocumentNumber` |  | |  | `fica_opbel` |  |  |
| `CAAssignedAmountInPaytCrcy` |  | |  | `fica_betrw_ac` |  |  |
| `TaxCalculationProcedure` |  | |  | `cast(_CompanyCode._Country.TaxCalculationProcedure as farp_kalsm_d preserving type )` |  |  |
| `AdditionalCurrency1` |  | | `_OperationalAcctgDocItem` | `AdditionalCurrency1` |  |  |
| `AdditionalCurrency2` |  | | `_OperationalAcctgDocItem` | `AdditionalCurrency2` |  |  |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_AlternativeCompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_PaymentDifferenceReason` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PaymentAdviceSubItem` | | ✓ | | | | |
| `_TaxCalculationProcedure` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AlternativeCompanyCode` | `I_CompanyCode` | [1..1] |
| `_BusinessArea` | `I_BusinessArea` | [1..1] |
| `_TaxCode` | `I_TaxCode` | [1..1] |
| `_PaymentDifferenceReason` | `I_PaymentDifferenceReason` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_PaymentAdviceSubItem` | `I_PaymentAdviceSubItem` | [1..*] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [1..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYTADVCITM'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'Payment Advice Item'

@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #NONE ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentAdviceItem
  as select from avip

  association [1..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_CompanyCode             as _AlternativeCompanyCode  on  $projection.AlternativeCompanyCode = _AlternativeCompanyCode.CompanyCode

  association [1..1] to I_BusinessArea            as _BusinessArea            on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [1..1] to I_TaxCode                 as _TaxCode                 on  $projection.TaxCode                 = _TaxCode.TaxCode
                                                                              and $projection.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure

  association [1..1] to I_PaymentDifferenceReason as _PaymentDifferenceReason on  $projection.CompanyCode             = _PaymentDifferenceReason.CompanyCode
                                                                              and $projection.PaymentDifferenceReason = _PaymentDifferenceReason.PaymentDifferenceReason

  association [0..1] to I_Currency                as _Currency                on  $projection.Currency = _Currency.Currency

  association [1..*] to I_PaymentAdviceSubItem    as _PaymentAdviceSubItem    on  $projection.CompanyCode              = _PaymentAdviceSubItem.CompanyCode
                                                                              and $projection.PaymentAdviceAccountType = _PaymentAdviceSubItem.PaymentAdviceAccountType
                                                                              and $projection.PaymentAdviceAccount     = _PaymentAdviceSubItem.PaymentAdviceAccount
                                                                              and $projection.PaymentAdvice            = _PaymentAdviceSubItem.PaymentAdvice
                                                                              and $projection.PaymentAdviceItem        = _PaymentAdviceSubItem.PaymentAdviceItem

  association [1..1] to I_TaxCalculationProcedure as _TaxCalculationProcedure on  $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure

  association [0..1] to I_OperationalAcctgDocItem as _OperationalAcctgDocItem on  $projection.AccountingDocument     = _OperationalAcctgDocItem.AccountingDocument
                                                                              and $projection.AccountingDocumentItem = _OperationalAcctgDocItem.AccountingDocumentItem
                                                                              and $projection.FiscalYear             = _OperationalAcctgDocItem.FiscalYear
                                                                              and $projection.CompanyCode            = _OperationalAcctgDocItem.CompanyCode

  association [0..1] to I_Customer                as _Customer                on  $projection.PaymentAdviceAccount = _Customer.Customer

  association [1..1] to I_CustomerCompany         as _CustomerCompany         on  $projection.PaymentAdviceAccount = _CustomerCompany.Customer
                                                                              and $projection.CompanyCode          = _CustomerCompany.CompanyCode

  association [0..1] to I_Supplier                as _Supplier                on  $projection.PaymentAdviceAccount = _Supplier.Supplier

  association [1..1] to I_SupplierCompany         as _SupplierCompany         on  $projection.PaymentAdviceAccount = _SupplierCompany.Supplier
                                                                              and $projection.CompanyCode          = _SupplierCompany.CompanyCode
                                                                              
  association [0..1] to I_BusinessPartner          as _BusinessPartner        on  $projection.PaymentAdviceAccount = _BusinessPartner.BusinessPartner
                                                                              and  $projection.PaymentAdviceAccountType = 'G'                                                                            

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PaytAdviceCompanyCodeVH', element : 'CompanyCode' } }]
  key bukrs                                                                                as CompanyCode,
  key koart                                                                                as PaymentAdviceAccountType,
  key konto                                                                                as PaymentAdviceAccount,
  key cast(avsid as farp_pa_avsid preserving type)                                         as PaymentAdvice,
  key avspo                                                                                as PaymentAdviceItem,
      abwko                                                                                as PaymentAdviceAltvAccount,
      @ObjectModel.foreignKey.association: '_AlternativeCompanyCode'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PaytAdviceCompanyCodeVH', element : 'CompanyCode' } }]
      cast(abwbu as farp_abwbu_av preserving type)                                         as AlternativeCompanyCode,
      belnr                                                                                as AccountingDocument,
      cast(xblnr as far_pa_xblnr1 preserving type)                                         as DocumentReferenceID,
      lbinvref                                                                             as LockboxInvoiceReference,
      vbeln                                                                                as BillingDocument,
      cast(filkd as farp_filkd preserving type)                                            as BranchAccount,
      cast(cpudt as farp_cpudt preserving type)                                            as AccountingDocumentCreationDate,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_BusinessAreaStdVH', element : 'BusinessArea' } }]
      gsber                                                                                as BusinessArea,
      cast(zuonr as farp_dzuonr preserving type)                                           as AssignmentReference,
      restg                                                                                as PaytDifferenceReasonExtCode,
      cast(sgtxt as farp_sgtxt preserving type)                                            as DocumentItemText,
      @Semantics.amount.currencyCode: 'Currency'
      cast(mwsts as farp_mwsts preserving type)                                            as TaxAmountInCoCodeCrcy,
      @ObjectModel.foreignKey.association: '_TaxCode'
      mwskz                                                                                as TaxCode,
      @Semantics.amount.currencyCode: 'Currency'
      wrbtr                                                                                as GrossAmountInPaymentCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      nebtr                                                                                as NetPaymentAmountInPaytCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      cast(wskto as far_pa_wskto_av preserving type )                                      as CashDiscountAmountInPaytCrcy,
      gjahr                                                                                as FiscalYear,
      cast(buzei as farp_buzei preserving type)                                            as AccountingDocumentItem,
      cast(abwka as farp_abwka_av preserving type)                                         as PaymentAdviceAltvAccountType,
      zbdxp                                                                                as CashDiscountPercent,
      zbdxt                                                                                as CashDiscountDays,
      @Semantics.amount.currencyCode: 'Currency'
      cast(difhw as farp_difhw preserving type)                                            as DifferenceAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(diffw as farp_diffw preserving type)                                            as DifferenceAmount,
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      cast(difh2 as farp_difh2 preserving type)                                            as DiffAmtInAdditionalCurrency1,
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      cast(difh3 as farp_difh3 preserving type)                                            as DiffAmtInAdditionalCurrency2,
      cast(xaktp as farp_xaktp preserving type)                                            as ItemIsActivated,
      cast(xakts as far_pa_xakts preserving type)                                          as CashDiscountIsActivated,
      cast(xppmt as farp_xppmt preserving type)                                            as IsPartialPayment,
      cast(xvort as farp_xvort preserving type)                                            as PaytDiffRsdlBalIsCarriedFwd,
      @ObjectModel.foreignKey.association: '_PaymentDifferenceReason'
      rstgn                                                                                as PaymentDifferenceReason,
      @ObjectModel.foreignKey.association: '_CURRENCY'
      @Semantics.currencyCode: true
      waers                                                                                as Currency,
      cast(xref1 as farp_xref1 preserving type)                                            as Reference1IDByBusinessPartner,
      cast(xref2 as farp_xref2 preserving type)                                            as Reference2IDByBusinessPartner,
      liefn                                                                                as DeliveryDocument,
      cast(redat as farp_pa_redat preserving type)                                         as InvoiceDate,
      bstnk                                                                                as PurchasingDocReferenceByCust,
      xacon                                                                                as IsPostedOnAccount,
      cast(astat as farp_astat_avik preserving type)                                       as PaymentAdviceStatus,
      @Semantics.amount.currencyCode: 'Currency'
      cast(abbtr as far_pa_abbtr_av preserving type)                                       as DeductionAmountInPaytCurrency,
      cast(kidno as farp_kidno preserving type)                                            as PaymentReference,
      sfeld                                                                                as PaymentAdviceSelectionField,
      swert                                                                                as PaymentAdviceSelectionValue,
      cast(afeld as farp_afeld_av preserving type)                                         as PaytAdvcExternalSelectionField,
      fica_selw1                                                                           as CASelectionValue,
      fica_selt1                                                                           as CASelectionCategory,
      fica_opbel                                                                           as CADocumentNumber,
      @Semantics.amount.currencyCode: 'Currency'
      fica_betrw_ac                                                                        as CAAssignedAmountInPaytCrcy,      
      
      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure'
      cast(_CompanyCode._Country.TaxCalculationProcedure as farp_kalsm_d preserving type ) as TaxCalculationProcedure,
      @Semantics.currencyCode: true
      _OperationalAcctgDocItem.AdditionalCurrency1,
      @Semantics.currencyCode: true
      _OperationalAcctgDocItem.AdditionalCurrency2,
      @Semantics.currencyCode: true
      _CompanyCode.Currency as CompanyCodeCurrency,

      _CompanyCode,
      _AlternativeCompanyCode,
      _BusinessArea,
      _TaxCode,
      _PaymentDifferenceReason,
      _Currency,
      _PaymentAdviceSubItem,
      _TaxCalculationProcedure,
      _OperationalAcctgDocItem,
      _Customer,
      _CustomerCompany,
      _Supplier,
      _SupplierCompany,
      _BusinessPartner
}
```
