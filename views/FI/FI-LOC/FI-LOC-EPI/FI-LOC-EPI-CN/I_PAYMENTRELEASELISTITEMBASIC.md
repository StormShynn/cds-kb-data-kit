---
name: I_PAYMENTRELEASELISTITEMBASIC
description: Paymentreleaselistitembasic
app_component: FI-LOC-EPI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-EPI
  - interface-view
  - payment
  - lease
  - item-level
  - component:FI-LOC-EPI-CN
  - lob:Finance
---
# I_PAYMENTRELEASELISTITEMBASIC

**Paymentreleaselistitembasic**

| Property | Value |
|---|---|
| App Component | `FI-LOC-EPI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PaymentReleaseListItemUUID` | ✓ | |  | `guid` |
| `PaymentReleaseList` |  | |  | `cast ( list_id as fprl_list_id preserving type)` |
| `PaymentReleaseListItemStatus` |  | |  | `cast ( status as fprl_item_status preserving type )` |
| `PaytRelListItemApprovalLevel` |  | |  | `cast ( alevel as fprl_level preserving type )` |
| `CreatedByUser` |  | |  | `crea_user` |
| `LastChangedByUser` |  | |  | `change_user` |
| `PaymentReleaseListApplication` |  | |  | `cast ( applic as fprl_application preserving type )` |
| `CompanyCode` |  | |  | `cast( bukrs as bukrs preserving type )` |
| `AccountingDocument` |  | |  | `belnr` |
| `FiscalYear` |  | |  | `gjahr` |
| `AccountingDocumentItem` |  | |  | `buzei` |
| `Supplier` |  | |  | `cast ( lifnr as lifnr preserving type )` |
| `Customer` |  | |  | `cast ( kunnr as kunnr preserving type )` |
| `BranchAccount` |  | |  | `filkd` |
| `PayerPayee` |  | |  | `empfb` |
| `PartnerCompany` |  | |  | `cast ( vbund as rassc preserving type )` |
| `DebitCreditCode` |  | |  | `shkzg` |
| `TransactionCurrency` |  | |  | `cast ( waers as waers preserving type )` |
| `AmountInTransactionCurrency` |  | |  | `} wrbtr` |
| `CashDiscountBaseAmount` |  | |  | `} skfbt` |
| `CashDiscountAmtInTransacCrcy` |  | |  | `} wskto` |
| `WhldgTaxAmtInTransacCrcy` |  | |  | `} qbshb` |
| `BalanceTransactionCurrency` |  | |  | `pswsl` |
| `AmountInBalanceTransacCrcy` |  | |  | `} pswbt` |
| `CashDiscountAmount` |  | |  | `} psskt` |
| `AccountingDocumentType` |  | |  | `cast ( blart as blart preserving type )` |
| `PostingDate` |  | |  | `budat` |
| `DocumentDate` |  | |  | `bldat` |
| `FinancialAccountType` |  | |  | `koart` |
| `PostingKey` |  | |  | `cast ( bschl as bschl preserving type )` |
| `GLAccount` |  | |  | `cast ( hkont as hkont preserving type )` |
| `OperationalGLAccount` |  | |  | `cast ( saknr as saknr preserving type )` |
| `SpecialGLCode` |  | |  | `cast ( umskz as umskz preserving type )` |
| `BusinessArea` |  | |  | `cast ( gsber as gsber preserving type )` |
| `TaxCode` |  | |  | `mwskz` |
| `WithholdingTaxCode` |  | |  | `qsskz` |
| `DocumentItemText` |  | |  | `sgtxt` |
| `DueCalculationBaseDate` |  | |  | `zfbdt` |
| `CashDiscount1Days` |  | |  | `zbd1t` |
| `CashDiscount2Days` |  | |  | `zbd2t` |
| `NetPaymentDays` |  | |  | `zbd3t` |
| `CashDiscount1Percent` |  | |  | `zbd1p` |
| `CashDiscount2Percent` |  | |  | `zbd2p` |
| `PurchasingDocument` |  | |  | `cast ( ebeln as ebeln preserving type )` |
| `PurchasingDocumentItem` |  | |  | `cast ( ebelp as ebelp preserving type )` |
| `VATRegistration` |  | |  | `stceg` |
| `DocumentReferenceID` |  | |  | `xblnr` |
| `StateCentralBankPaymentReason` |  | |  | `cast ( lzbkz as lzbkz preserving type )` |
| `SupplyingCountry` |  | |  | `cast ( landl as landl preserving type )` |
| `ProjectNetwork` |  | |  | `nplnr` |
| `OrderInternalBillOfOperations` |  | |  | `aufpl` |
| `AssignmentReference` |  | |  | `zuonr` |
| `AssetContract` |  | |  | `vertn` |
| `FollowOnDocumentType` |  | |  | `rebzt` |
| `CostCenter` |  | |  | `kostl` |
| `SalesDocument` |  | |  | `vbel2` |
| `SalesDocumentItem` |  | |  | `posn2` |
| `ProfitCenter` |  | |  | `prctr` |
| `Reference1IDByBusinessPartner` |  | |  | `xref1` |
| `Reference2IDByBusinessPartner` |  | |  | `xref2` |
| `Reference3IDByBusinessPartner` |  | |  | `xref3` |
| `DataExchangeInstruction1` |  | |  | `dtws1` |
| `DataExchangeInstruction2` |  | |  | `dtws2` |
| `DataExchangeInstruction3` |  | |  | `dtws3` |
| `DataExchangeInstruction4` |  | |  | `dtws4` |
| `AddressAndBankIsSetManually` |  | |  | `xcpdd` |
| `BusinessPlace` |  | |  | `bupla` |
| `PartnerProfitCenter` |  | |  | `pprct` |
| `GrantID` |  | |  | `grant_nbr` |
| `FunctionalArea` |  | |  | `fkber` |
| `Fund` |  | |  | `geber` |
| `PaymentRequest` | ✓ | |  | `keyno` |
| `PaymentRequestAmountInPaytCrcy` |  | |  | `} pamtf` |
| `PaymentRequestOrigin` |  | |  | `origin` |
| `CurrentProcessor` |  | |  | `epic_processor` |
| `PaymentItemStatus` |  | |  | `epic_status` |
| `ReferencePurchasingDocument` |  | |  | `ebeln_co` |
| `EarmarkedFundsDocument` |  | |  | `kblnr` |
| `TaxID2` |  | |  | `stcd2` |
| `PaymentRunItemMessageNumber` |  | |  | `poken` |
| `PaymentBlockingReason` |  | |  | `cast ( zlspr as dzlspr preserving type )` |
| `PaymentRunDate` |  | |  | `laufd_pay` |
| `PaymentRunID` |  | |  | `laufi_pay` |
| `PaymentDocument` |  | |  | `vblnr_pay` |
| `PaymentOrder` |  | |  | `pyord_pay` |
| `ProposalRunDate` |  | |  | `laufd` |
| `ProposalRunNumber` |  | |  | `laufi` |
| `PayingCompanyCode` |  | |  | `cast ( zbukr as dzbukr preserving type )` |
| `SendingCompanyCode` |  | |  | `absbu` |
| `PayeeAdditionalName` |  | |  | `znme1` |
| `PayeePostalCode` |  | |  | `zpstl` |
| `PayeeCityName` |  | |  | `zort1` |
| `PayeeCountry` |  | |  | `zland` |
| `PayeeRegion` |  | |  | `zregi` |
| `PayeeLanguage` |  | |  | `zspra` |
| `Name` |  | |  | `name1` |
| `PayeeBankCountry` |  | |  | `zbnks` |
| `PayeeBank` |  | |  | `zbnky` |
| `PayeeBankNumber` |  | |  | `zbnkl` |
| `PayeeBankAccount` |  | |  | `zbnkn` |
| `PayeeBankControlKey` |  | |  | `zbkon` |
| `BankDetailReference` |  | |  | `bkref` |
| `PayeeBankIdentifierCode` |  | |  | `zswif` |
| `PayeeIBAN` |  | |  | `ziban` |
| `BankAccountHolderName` |  | |  | `koinh` |
| `HouseBankAccount` |  | |  | `hktid` |
| `HouseBank` |  | |  | `cast ( hbkid as hbkid preserving type )` |
| `BankCountry` |  | |  | `ubnks` |
| `Bank` |  | |  | `ubnky` |
| `BankNumber` |  | |  | `ubnkl` |
| `BankAccount` |  | |  | `ubknt` |
| `BankControlKey` |  | |  | `ubkon` |
| `GLAccountForBankAccount` |  | |  | `ubhkt` |
| `SupplierPaymentMethod` |  | |  | `cast ( rzawe as dzlsch preserving type )` |
| `PaymentMethodSupplement` |  | |  | `cast ( uzawe as uzawe preserving type )` |
| `DataExchangeInstructionKey` |  | |  | `dtaws` |
| `PaymentDocumentPostingDate` |  | |  | `zaldt` |
| `ValueDate` |  | |  | `valut` |
| `PaidItemDueDate` |  | |  | `ausfd` |
| `BillOfExchangeDueDate` |  | |  | `wefae` |
| `BillOfExchangeIssueDate` |  | |  | `wdate` |
| `AccountingClerk` |  | |  | `busab` |
| `AccountByShipper` |  | |  | `eikto` |
| `PaymentReference` |  | |  | `kidno` |
| `SEPAMandateUUID` |  | |  | `mguid` |
| `SEPAMandate` |  | |  | `mndid` |
| `InvoiceReference` |  | |  | `inv_no` |
| `InvoiceReferenceFiscalYear` |  | |  | `inv_year` |
| `InvoiceItemReference` |  | |  | `inv_item` |
| `ControllingArea` |  | |  | `kokrs` |
| `ValidityEndDate` |  | |  | `datbi` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CN_PaymentReleaseListItem` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'CN Payment Release List Item'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'PaymentReleaseList'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL
}
define view entity I_PaymentReleaseListItemBasic
  as select from fprl_item
  association [0..1] to E_CN_PaymentReleaseListItem as _Extension on $projection.PaymentReleaseListItemUUID = _Extension.PaymentReleaseListItemUUID
{
  key guid                                                 as PaymentReleaseListItemUUID,

      //Item status
      cast ( list_id as fprl_list_id preserving type)      as PaymentReleaseList,
      cast ( status as fprl_item_status preserving type )  as PaymentReleaseListItemStatus,
      cast ( alevel as fprl_level preserving type )        as PaytRelListItemApprovalLevel,

      //list data
      crea_user                                            as CreatedByUser,
      change_user                                          as LastChangedByUser,
      cast ( applic  as fprl_application preserving type ) as PaymentReleaseListApplication,

      //item data
      cast( bukrs as bukrs  preserving type )              as CompanyCode,
      belnr                                                as AccountingDocument,
      gjahr                                                as FiscalYear,
      buzei                                                as AccountingDocumentItem,
      cast ( lifnr as lifnr preserving type )              as Supplier,
      cast ( kunnr as kunnr preserving type )              as Customer,
      filkd                                                as BranchAccount,
      empfb                                                as PayerPayee,
      cast ( vbund as rassc preserving type )              as PartnerCompany,
      shkzg                                                as DebitCreditCode,
      cast ( waers as  waers preserving type )             as TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      wrbtr                                                as AmountInTransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      skfbt                                                as CashDiscountBaseAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      wskto                                                as CashDiscountAmtInTransacCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      qbshb                                                as WhldgTaxAmtInTransacCrcy,
      pswsl                                                as BalanceTransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      pswbt                                                as AmountInBalanceTransacCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      psskt                                                as CashDiscountAmount,
      cast ( blart as blart preserving type )              as AccountingDocumentType,
      budat                                                as PostingDate,
      bldat                                                as DocumentDate,
      koart                                                as FinancialAccountType,
      cast ( bschl as bschl preserving type )              as PostingKey,
      cast ( hkont as hkont preserving type )              as GLAccount,
      cast ( saknr as saknr preserving type )              as OperationalGLAccount,
      cast ( umskz as umskz preserving type )              as SpecialGLCode,
      cast ( gsber as gsber preserving type )              as BusinessArea,
      mwskz                                                as TaxCode,
      qsskz                                                as WithholdingTaxCode,
      sgtxt                                                as DocumentItemText,
      zfbdt                                                as DueCalculationBaseDate,
      zbd1t                                                as CashDiscount1Days,
      zbd2t                                                as CashDiscount2Days,
      zbd3t                                                as NetPaymentDays,
      zbd1p                                                as CashDiscount1Percent,
      zbd2p                                                as CashDiscount2Percent,
      cast ( ebeln as ebeln preserving type )              as PurchasingDocument,
      cast ( ebelp as ebelp preserving type )              as PurchasingDocumentItem,
      stceg                                                as VATRegistration,
      xblnr                                                as DocumentReferenceID,
      cast ( lzbkz as lzbkz preserving type )              as StateCentralBankPaymentReason,
      cast ( landl as landl preserving type )              as SupplyingCountry,
      nplnr                                                as ProjectNetwork,
      aufpl                                                as OrderInternalBillOfOperations,
      zuonr                                                as AssignmentReference,
      vertn                                                as AssetContract,
      rebzt                                                as FollowOnDocumentType,
      kostl                                                as CostCenter,
      vbel2                                                as SalesDocument,
      posn2                                                as SalesDocumentItem,
      prctr                                                as ProfitCenter,
      xref1                                                as Reference1IDByBusinessPartner,
      xref2                                                as Reference2IDByBusinessPartner,
      xref3                                                as Reference3IDByBusinessPartner,
      dtws1                                                as DataExchangeInstruction1,
      dtws2                                                as DataExchangeInstruction2,
      dtws3                                                as DataExchangeInstruction3,
      dtws4                                                as DataExchangeInstruction4,
      xcpdd                                                as AddressAndBankIsSetManually,
      bupla                                                as BusinessPlace,
      pprct                                                as PartnerProfitCenter,
      grant_nbr                                            as GrantID,
      fkber                                                as FunctionalArea,
      geber                                                as Fund,
      keyno                                                as PaymentRequest,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      pamtf                                                as PaymentRequestAmountInPaytCrcy,
      origin                                               as PaymentRequestOrigin,

      //EPIC Append Structure
      epic_processor                                       as CurrentProcessor,
      epic_status                                          as PaymentItemStatus,

      //Chorus Erweiterungen
      ebeln_co                                             as ReferencePurchasingDocument,
      kblnr                                                as EarmarkedFundsDocument, //note '2784922' Global field name change.
      stcd2                                                as TaxID2,

      //exception data
      poken                                                as PaymentRunItemMessageNumber,
      cast ( zlspr as dzlspr preserving type )             as PaymentBlockingReason,

      //Payment Data
      laufd_pay                                            as PaymentRunDate,
      laufi_pay                                            as PaymentRunID,
      vblnr_pay                                            as PaymentDocument,
      pyord_pay                                            as PaymentOrder,
      laufd                                                as ProposalRunDate,
      laufi                                                as ProposalRunNumber,
      cast ( zbukr as dzbukr preserving type )             as PayingCompanyCode,
      absbu                                                as SendingCompanyCode,
      znme1                                                as PayeeAdditionalName,
      zpstl                                                as PayeePostalCode,
      zort1                                                as PayeeCityName,
      zland                                                as PayeeCountry,
      zregi                                                as PayeeRegion,
      zspra                                                as PayeeLanguage,
      name1                                                as Name,
      zbnks                                                as PayeeBankCountry,
      zbnky                                                as PayeeBank,
      zbnkl                                                as PayeeBankNumber,
      zbnkn                                                as PayeeBankAccount,
      zbkon                                                as PayeeBankControlKey,
      bkref                                                as BankDetailReference,
      zswif                                                as PayeeBankIdentifierCode,
      ziban                                                as PayeeIBAN,
      koinh                                                as BankAccountHolderName,
      hktid                                                as HouseBankAccount,
      cast ( hbkid as hbkid preserving type )              as HouseBank,
      ubnks                                                as BankCountry,
      ubnky                                                as Bank,
      ubnkl                                                as BankNumber,
      ubknt                                                as BankAccount,
      ubkon                                                as BankControlKey,
      ubhkt                                                as GLAccountForBankAccount,
      cast ( rzawe as dzlsch preserving type )             as SupplierPaymentMethod,
      cast ( uzawe as uzawe preserving type )              as PaymentMethodSupplement,
      dtaws                                                as DataExchangeInstructionKey,
      zaldt                                                as PaymentDocumentPostingDate,
      valut                                                as ValueDate,
      ausfd                                                as PaidItemDueDate,
      wefae                                                as BillOfExchangeDueDate,
      wdate                                                as BillOfExchangeIssueDate,
      busab                                                as AccountingClerk,
      eikto                                                as AccountByShipper,
      kidno                                                as PaymentReference,
      mguid                                                as SEPAMandateUUID,
      mndid                                                as SEPAMandate,

      //Item Data Invoice Reference
      inv_no                                               as InvoiceReference,
      inv_year                                             as InvoiceReferenceFiscalYear,
      inv_item                                             as InvoiceItemReference,
      kokrs                                                as ControllingArea,
      datbi                                                as ValidityEndDate
}
```
