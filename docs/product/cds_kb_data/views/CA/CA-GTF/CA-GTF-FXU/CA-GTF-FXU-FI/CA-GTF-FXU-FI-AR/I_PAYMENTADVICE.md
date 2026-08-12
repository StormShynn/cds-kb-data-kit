---
name: I_PAYMENTADVICE
description: "Paymentadvice"
app_component: CA-GTF-FXU-FI-AR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - payment
  - component:CA-GTF-FXU-FI-AR
  - lob:Cross-Application Components
---
# I_PAYMENTADVICE

**Paymentadvice**

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
| `IsOutgoingPayment` |  | |  | `xausg` |  |  |
| `PaymentDocument` |  | |  | `cast(vblnr as farp_pa_vblnr preserving type)` |  |  |
| `AccountByShipper` |  | |  | `cast(eikto as farp_pa_eikto preserving type)` |  |  |
| `PaymentCurrency` |  | |  | `cast(waers as farp_fwaer preserving type)` |  |  |
| `PaymentDate` |  | |  | `cast(zaldt as farp_payment_date preserving type)` |  |  |
| `PaidAmountInPaytCurrency` |  | |  | `rwbtr` |  |  |
| `CashDiscountAmountInPaytCrcy` |  | |  | `cast(rwskt as fis_wskto)` |  |  |
| `BillOfExchangeDueDate` |  | |  | `wefae` |  |  |
| `PaymentMethod` |  | |  | `rzawe` |  |  |
| `PartnerBank` |  | |  | `cast(zbnkl as farp_pa_dzbnkl preserving type)` |  |  |
| `PartnerBankAccount` |  | |  | `cast(zbnkn as farp_pa_dzbnkn preserving type)` |  |  |
| `PartnerBankCountry` |  | |  | `zbnks` |  |  |
| `PartnerBankSWIFTCode` |  | |  | `zbswi` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `PaymentAdviceHeaderText` |  | |  | `cast(avtxt as farp_avtxt_avik preserving type)` |  |  |
| `PaymentAdviceType` |  | |  | `avsrt` |  |  |
| `CreationTime` |  | |  | `cputm` |  |  |
| `PaymentAdviceStatus` |  | |  | `astat` |  |  |
| `PaymentAdviceIsHeld` |  | |  | `xkeep` |  |  |
| `PaymentAdviceHasSingleAccount` |  | |  | `xuniq` |  |  |
| `PaytAdvcDiffDeterminationRule` |  | |  | `cast(vrsdg as farp_vrsdg preserving type)` |  |  |
| `PaymentAdviceSelectionRule` |  | |  | `sregl` |  |  |
| `OriginalReferenceDocument` |  | |  | `xbenr` |  |  |
| `ReferenceDocumentType` |  | |  | `xbtyp` |  |  |
| `BankReference` |  | |  | `vgref` |  |  |
| `BankPostingDate` |  | |  | `bvdat` |  |  |
| `ValueDateTime` |  | |  | `butim` |  |  |
| `FeeAmountInTransactionCrcy` |  | |  | `spesk` |  |  |
| `PaymentTransaction` |  | |  | `vorgc` |  |  |
| `ExchangeRate` |  | |  | `cast(kursf as farp_kursf)` |  |  |
| `BillOfExchangeFailureDate` |  | |  | `jpdat` |  |  |
| `Cheque` |  | |  | `chect` |  |  |
| `ValueDate` |  | |  | `valut` |  |  |
| `BusinessPartnerName` |  | |  | `zbprn` |  |  |
| `CAPaymentDocument` |  | |  | `fica_apbel` |  |  |
| `ContractAccount` |  | |  | `fica_vkont` |  |  |
| `CAPaymentAdvice` |  | |  | `fica_avkey` |  |  |
| `_UserContactCard` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PaytAdvcDiffDeterminationRule` | | ✓ | | | | |
| `_PaytAdviceSelRules` | | ✓ | | | | |
| `_PaymentAdviceType` | | ✓ | | | | |
| `_PaymentAdviceItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserContactCard` | `I_UserContactCard` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_PaytAdvcDiffDeterminationRule` | `I_ReasonCodeConversionVers` | [1..1] |
| `_PaytAdviceSelRules` | `I_PaytAdviceSelRules` | [1..1] |
| `_PaymentAdviceType` | `I_PaymentAdviceType` | [1..1] |
| `_PaymentAdviceItem` | `I_PaymentAdviceItem` | [1..*] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYTADVC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: [ '_UserContactCard' ]

@EndUserText.label: 'Payment Advice Header'

@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #NONE ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentAdvice
  as select from avik

  association [0..1] to I_UserContactCard          as _UserContactCard               on  $projection.CreatedByUser = _UserContactCard.ContactCardID

  association [1..1] to I_CompanyCode              as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Currency                 as _Currency                      on  $projection.PaymentCurrency = _Currency.Currency

  association [1..1] to I_ReasonCodeConversionVers as _PaytAdvcDiffDeterminationRule on  $projection.PaytAdvcDiffDeterminationRule = _PaytAdvcDiffDeterminationRule.PaytAdvcDiffDeterminationRule

  association [1..1] to I_PaytAdviceSelRules       as _PaytAdviceSelRules            on  $projection.PaymentAdviceSelectionRule = _PaytAdviceSelRules.PaymentAdviceSelectionRule

  association [1..1] to I_PaymentAdviceType        as _PaymentAdviceType             on  $projection.PaymentAdviceType = _PaymentAdviceType.PaymentAdviceType

  association [1..*] to I_PaymentAdviceItem        as _PaymentAdviceItem             on  $projection.CompanyCode              = _PaymentAdviceItem.CompanyCode
                                                                                     and $projection.PaymentAdviceAccountType = _PaymentAdviceItem.PaymentAdviceAccountType
                                                                                     and $projection.PaymentAdviceAccount     = _PaymentAdviceItem.PaymentAdviceAccount
                                                                                     and $projection.PaymentAdvice            = _PaymentAdviceItem.PaymentAdvice

  association [0..1] to I_Customer                 as _Customer                      on  $projection.PaymentAdviceAccount = _Customer.Customer

  association [1..1] to I_CustomerCompany          as _CustomerCompany               on  $projection.PaymentAdviceAccount = _CustomerCompany.Customer
                                                                                     and $projection.CompanyCode          = _CustomerCompany.CompanyCode

  association [0..1] to I_Supplier                 as _Supplier                      on  $projection.PaymentAdviceAccount = _Supplier.Supplier

  association [1..1] to I_SupplierCompany          as _SupplierCompany               on  $projection.PaymentAdviceAccount = _SupplierCompany.Supplier
                                                                                     and $projection.CompanyCode          = _SupplierCompany.CompanyCode
                                                                                     
  association [0..1] to I_BusinessPartner          as _BusinessPartner               on  $projection.PaymentAdviceAccount = _BusinessPartner.BusinessPartner
                                                                                     and  $projection.PaymentAdviceAccountType = 'G'                                                                                    

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PaytAdviceCompanyCodeVH', element : 'CompanyCode' } }]
  key bukrs                                             as CompanyCode,
  key koart                                             as PaymentAdviceAccountType,
  key konto                                             as PaymentAdviceAccount,
  key cast(avsid as farp_pa_avsid preserving type)      as PaymentAdvice,
      xausg                                             as IsOutgoingPayment,
      cast(vblnr as farp_pa_vblnr preserving type)      as PaymentDocument,
      cast(eikto as farp_pa_eikto preserving type)      as AccountByShipper,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      cast(waers as farp_fwaer preserving type)         as PaymentCurrency,
      cast(zaldt as farp_payment_date preserving type)  as PaymentDate,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      rwbtr                                             as PaidAmountInPaytCurrency,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      cast(rwskt as fis_wskto)                          as CashDiscountAmountInPaytCrcy,
      wefae                                             as BillOfExchangeDueDate,
      rzawe                                             as PaymentMethod,
      cast(zbnkl as farp_pa_dzbnkl preserving type)     as PartnerBank,
      cast(zbnkn as farp_pa_dzbnkn preserving type)     as PartnerBankAccount,
      zbnks                                             as PartnerBankCountry,
      zbswi                                             as PartnerBankSWIFTCode,
      @ObjectModel.foreignKey.association: '_UserContactCard'
      ernam                                             as CreatedByUser,
      erdat                                             as CreationDate,
      aedat                                             as LastChangeDate,
      lastchangedatetime                                as LastChangeDateTime,
      aenam                                             as LastChangedByUser,
      cast(avtxt as farp_avtxt_avik preserving type)    as PaymentAdviceHeaderText,
      @ObjectModel.foreignKey.association: '_PaymentAdviceType'
      avsrt                                             as PaymentAdviceType,
      cputm                                             as CreationTime,
      astat                                             as PaymentAdviceStatus,
      xkeep                                             as PaymentAdviceIsHeld,
      xuniq                                             as PaymentAdviceHasSingleAccount,
      @ObjectModel.foreignKey.association: '_PaytAdvcDiffDeterminationRule'
      cast(vrsdg as farp_vrsdg preserving type)         as PaytAdvcDiffDeterminationRule,
      @ObjectModel.foreignKey.association: '_PaytAdviceSelRules'
      sregl                                             as PaymentAdviceSelectionRule,
      xbenr                                             as OriginalReferenceDocument,
      xbtyp                                             as ReferenceDocumentType,
      vgref                                             as BankReference,
      bvdat                                             as BankPostingDate,
      butim                                             as ValueDateTime,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      spesk                                             as FeeAmountInTransactionCrcy,
      vorgc                                             as PaymentTransaction,
      cast(kursf as farp_kursf)                         as ExchangeRate,
      jpdat                                             as BillOfExchangeFailureDate,
      chect                                             as Cheque,
      valut                                             as ValueDate,
      zbprn                                             as BusinessPartnerName,
      fica_apbel                                        as CAPaymentDocument,
      fica_vkont                                        as ContractAccount,
      fica_avkey                                        as CAPaymentAdvice,
//      paymentadviceattachmentkey                        as PaymentAdviceAttachmentKey,

      _PaymentAdviceItem,
      _CompanyCode,
      _Currency,
      _PaytAdvcDiffDeterminationRule,
      _PaytAdviceSelRules,
      _UserContactCard,
      _PaymentAdviceType,
      _Customer,
      _CustomerCompany,
      _Supplier,
      _SupplierCompany,
      _BusinessPartner
}
```
