---
name: I_SUPPLIERINVOICEAPI01
description: "Supplier InvoiceAPI 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - supplier
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERINVOICEAPI01

**Supplier InvoiceAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `SupplierInvoiceWthnFiscalYear` |  | |  | `cast( concat(SupplierInvoice , FiscalYear) as mmiv_belnr_gjahr_internal )` |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `InvoiceReceiptDate` |  | |  |  |  |  |
| `SupplierInvoiceIDByInvcgParty` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `IsInvoice` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `InvoiceGrossAmount` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `SupplierInvoiceStatus` |  | |  |  |  |  |
| `SupplierInvoiceOrigin` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `InvoiceReference` |  | |  |  |  |  |
| `InvoiceReferenceFiscalYear` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `TaxIsCalculatedAutomatically` |  | |  |  |  |  |
| `BusinessPlace` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `SuplrInvcLstChgDteTmeTxt` |  | |  | `cast( SuplrInvcLastChangeDateTime as mmiv_si_lastchangedatetime_txt )` |  |  |
| `UnplannedDeliveryCost` |  | |  |  |  |  |
| `UnplannedDeliveryCostTaxCode` |  | |  |  |  |  |
| `UnplndDelivCostTaxJurisdiction` |  | |  |  |  |  |
| `DocumentHeaderText` |  | |  |  |  |  |
| `SupplierPostingLineItemText` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `DueCalculationBaseDate` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `ManualCashDiscount` |  | |  |  |  |  |
| `FixedCashDiscount` |  | |  |  |  |  |
| `StateCentralBankPaymentReason` |  | |  |  |  |  |
| `SupplyingCountry` |  | |  |  |  |  |
| `BPBankAccountInternalID` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `PaymentReference` |  | |  |  |  |  |
| `PaytSlipWthRefSubscriber` |  | |  |  |  |  |
| `PaytSlipWthRefCheckDigit` |  | |  |  |  |  |
| `PaytSlipWthRefReference` |  | |  |  |  |  |
| `PaymentReason` |  | |  |  |  |  |
| `ReverseDocument` |  | |  |  |  |  |
| `ReverseDocumentFiscalYear` |  | |  |  |  |  |
| `SuplrInvcManuallyReducedAmount` |  | |  |  |  |  |
| `SuplrInvcAutomReducedAmount` |  | |  |  |  |  |
| `TaxDeterminationDate` |  | |  |  |  |  |
| `TaxReportingDate` |  | |  |  |  |  |
| `TaxFulfillmentDate` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `UnplndDeliveryCostTaxCountry` |  | |  |  |  |  |
| `DeliveryOfGoodsReportingCntry` |  | |  |  |  |  |
| `SupplierVATRegistration` |  | |  |  |  |  |
| `IsEUTriangularDeal` |  | |  |  |  |  |
| `SuplrInvcDebitCrdtCodeDelivery` |  | |  |  |  |  |
| `SuplrInvcDebitCrdtCodeReturns` |  | |  |  |  |  |
| `ElectronicInvoiceUUID` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef1` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate1` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef2` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate2` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef3` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate3` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef4` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate4` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef5` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate5` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificBP1` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificBP2` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_SuplrInvcItemPurOrdRefAPI01` | | ✓ | | | | |
| `_SuplrInvoiceItemGLAcctAPI01` | | ✓ | | | | |
| `_SuplrInvcItemMaterialAPI01` | | ✓ | | | | |
| `_SuplrInvcItemAssetAPI01` | | ✓ | | | | |
| `_SupplierInvoiceTaxAPI01` | | ✓ | | | | |
| `_SuplrInvcHeaderWhldgTaxAPI01` | | ✓ | | | | |
| `_SuplrInvcSeldPurgDocAPI01` | | ✓ | | | | |
| `_SuplrInvcSeldDelivNoteAPI01` | | ✓ | | | | |
| `_SuplrInvcSeldInbBOLAPI01` | | ✓ | | | | |
| `_SuplrInvcSeldSESLeanAPI01` | | ✓ | | | | |
| `_SuplrInvcItemCsgnmtAPI01` | | ✓ | | | | |
| `_SupplierInvoiceBlockAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_SuplrInvcItemPurOrdRefAPI01` | `I_SuplrInvcItemPurOrdRefAPI01` | [1..*] |
| `_SuplrInvoiceItemGLAcctAPI01` | `I_SuplrInvoiceItemGLAcctAPI01` | [1..*] |
| `_SuplrInvcItemMaterialAPI01` | `I_SuplrInvcItemMaterialAPI01` | [1..*] |
| `_SuplrInvcItemAssetAPI01` | `I_SuplrInvcItemAssetAPI01` | [1..*] |
| `_SupplierInvoiceTaxAPI01` | `I_SupplierInvoiceTaxAPI01` | [1..*] |
| `_SuplrInvcHeaderWhldgTaxAPI01` | `I_SuplrInvcHeaderWhldgTaxAPI01` | [1..*] |
| `_SuplrInvcSeldPurgDocAPI01` | `I_SuplrInvcSeldPurgDocAPI01` | [1..*] |
| `_SuplrInvcSeldDelivNoteAPI01` | `I_SuplrInvcSeldDelivNoteAPI01` | [1..*] |
| `_SuplrInvcSeldInbBOLAPI01` | `I_SuplrInvcSeldInbBOLAPI01` | [1..*] |
| `_SuplrInvcSeldSESLeanAPI01` | `I_SuplrInvcSeldSESLeanAPI01` | [1..*] |
| `_SuplrInvcItemCsgnmtAPI01` | `I_SuplrInvcItemCsgnmtAPI01` | [1..*] |
| `_SupplierInvoiceBlockAPI01` | `I_SupplierInvoiceBlockAPI01` | [0..*] |
| `_HeaderExtension` | `E_SupplierInvoice` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISUPLRINVCAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@Workflow: { enabledFor: [ #CUSTOM_TASK_ATTRIBUTES ] }

define view I_SupplierInvoiceAPI01
  as select from I_SupplierInvoice

  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Currency                     as _Currency                     on  $projection.DocumentCurrency = _Currency.Currency

  association [1..*] to I_SuplrInvcItemPurOrdRefAPI01  as _SuplrInvcItemPurOrdRefAPI01  on  $projection.SupplierInvoice = _SuplrInvcItemPurOrdRefAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcItemPurOrdRefAPI01.FiscalYear

  association [1..*] to I_SuplrInvoiceItemGLAcctAPI01  as _SuplrInvoiceItemGLAcctAPI01  on  $projection.SupplierInvoice = _SuplrInvoiceItemGLAcctAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvoiceItemGLAcctAPI01.FiscalYear

  association [1..*] to I_SuplrInvcItemMaterialAPI01   as _SuplrInvcItemMaterialAPI01   on  $projection.SupplierInvoice = _SuplrInvcItemMaterialAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcItemMaterialAPI01.FiscalYear

  association [1..*] to I_SuplrInvcItemAssetAPI01      as _SuplrInvcItemAssetAPI01      on  $projection.SupplierInvoice = _SuplrInvcItemAssetAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcItemAssetAPI01.FiscalYear

  association [1..*] to I_SupplierInvoiceTaxAPI01      as _SupplierInvoiceTaxAPI01      on  $projection.SupplierInvoice = _SupplierInvoiceTaxAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SupplierInvoiceTaxAPI01.FiscalYear

  association [1..*] to I_SuplrInvcHeaderWhldgTaxAPI01 as _SuplrInvcHeaderWhldgTaxAPI01 on  $projection.SupplierInvoice = _SuplrInvcHeaderWhldgTaxAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcHeaderWhldgTaxAPI01.FiscalYear

  association [1..*] to I_SuplrInvcSeldPurgDocAPI01    as _SuplrInvcSeldPurgDocAPI01    on  $projection.SupplierInvoice = _SuplrInvcSeldPurgDocAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcSeldPurgDocAPI01.FiscalYear

  association [1..*] to I_SuplrInvcSeldDelivNoteAPI01  as _SuplrInvcSeldDelivNoteAPI01  on  $projection.SupplierInvoice = _SuplrInvcSeldDelivNoteAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcSeldDelivNoteAPI01.FiscalYear

  association [1..*] to I_SuplrInvcSeldInbBOLAPI01     as _SuplrInvcSeldInbBOLAPI01     on  $projection.SupplierInvoice = _SuplrInvcSeldInbBOLAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcSeldInbBOLAPI01.FiscalYear

  association [1..*] to I_SuplrInvcSeldSESLeanAPI01    as _SuplrInvcSeldSESLeanAPI01    on  $projection.SupplierInvoice = _SuplrInvcSeldSESLeanAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcSeldSESLeanAPI01.FiscalYear
                                                                                        
  association [1..*] to I_SuplrInvcItemCsgnmtAPI01      as _SuplrInvcItemCsgnmtAPI01    on  $projection.SupplierInvoice = _SuplrInvcItemCsgnmtAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SuplrInvcItemCsgnmtAPI01.FiscalYear                                                                                      

  association [0..*] to I_SupplierInvoiceBlockAPI01    as _SupplierInvoiceBlockAPI01    on  $projection.SupplierInvoice = _SupplierInvoiceBlockAPI01.SupplierInvoice
                                                                                        and $projection.FiscalYear      = _SupplierInvoiceBlockAPI01.FiscalYear

  association [1..1] to E_SupplierInvoice              as _HeaderExtension              on  $projection.SupplierInvoice           = _HeaderExtension.SupplierInvoice
                                                                                        and $projection.FiscalYear                = _HeaderExtension.FiscalYear
                                                                                        and I_SupplierInvoice.SupplierInvoiceUUID = _HeaderExtension.SupplierInvoiceUUID
{
      //Key
  key SupplierInvoice,
  key FiscalYear,

      //-------------------------------------------------------------------------------------------------
      // General header data
      //-------------------------------------------------------------------------------------------------
      //For easier joins against BKPF-AWKEY
      cast( concat(SupplierInvoice , FiscalYear) as mmiv_belnr_gjahr_internal ) as SupplierInvoiceWthnFiscalYear,
      CompanyCode,
      DocumentDate,
      PostingDate,
      InvoiceReceiptDate,
      SupplierInvoiceIDByInvcgParty,
      InvoicingParty,
      IsInvoice,
      @Semantics.currencyCode: true
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      InvoiceGrossAmount,
      ExchangeRate,
      AccountingDocumentType,
      SupplierInvoiceStatus,
      SupplierInvoiceOrigin,
      CreatedByUser,
      LastChangedByUser,
      InvoiceReference,
      InvoiceReferenceFiscalYear,
      AssignmentReference,
      TaxIsCalculatedAutomatically,
      BusinessPlace,
      CreationDate,
      CreationTime,
      cast( SuplrInvcLastChangeDateTime as mmiv_si_lastchangedatetime_txt ) as SuplrInvcLstChgDteTmeTxt,

      //-------------------------------------------------------------------------------------------------
      //Unplanned delivery costs
      //-------------------------------------------------------------------------------------------------
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      UnplannedDeliveryCost,
      UnplannedDeliveryCostTaxCode,
      UnplndDelivCostTaxJurisdiction,

      //-------------------------------------------------------------------------------------------------
      //Texts
      //-------------------------------------------------------------------------------------------------
      DocumentHeaderText,
      SupplierPostingLineItemText,

      //-------------------------------------------------------------------------------------------------
      //Payment
      //-------------------------------------------------------------------------------------------------
      PaymentTerms,
      DueCalculationBaseDate,
      CashDiscount1Percent,
      CashDiscount1Days,
      CashDiscount2Percent,
      CashDiscount2Days,
      NetPaymentDays,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ManualCashDiscount,
      FixedCashDiscount,
      StateCentralBankPaymentReason,
      SupplyingCountry,
      BPBankAccountInternalID,
      PaymentMethod,
      PaymentReference,
      PaytSlipWthRefSubscriber,
      PaytSlipWthRefCheckDigit,
      PaytSlipWthRefReference,
      PaymentReason,

      //-------------------------------------------------------------------------------------------------
      //Cancellation
      //-------------------------------------------------------------------------------------------------
      ReverseDocument,
      ReverseDocumentFiscalYear,

      //-------------------------------------------------------------------------------------------------
      //Invoice reduction
      //-------------------------------------------------------------------------------------------------
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      SuplrInvcManuallyReducedAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      SuplrInvcAutomReducedAmount,

      //-------------------------------------------------------------------------------------------------
      // Taxes
      //-------------------------------------------------------------------------------------------------
      TaxDeterminationDate,
      TaxReportingDate,
      TaxFulfillmentDate,
      TaxCountry,
      UnplndDeliveryCostTaxCountry,

      //-------------------------------------------------------------------------------------------------
      //Tax reporting
      //-------------------------------------------------------------------------------------------------
      DeliveryOfGoodsReportingCntry,
      SupplierVATRegistration,
      IsEUTriangularDeal,

      //-------------------------------------------------------------------------------------------------
      // Preliminary fields (parked, held, batch)
      //-------------------------------------------------------------------------------------------------
      SuplrInvcDebitCrdtCodeDelivery,
      SuplrInvcDebitCrdtCodeReturns,

      //-------------------------------------------------------------------------------------------------
      // Localization
      //-------------------------------------------------------------------------------------------------
      ElectronicInvoiceUUID, //Mexico
      JrnlEntryCntrySpecificRef1,
      JrnlEntryCntrySpecificDate1,
      JrnlEntryCntrySpecificRef2,
      JrnlEntryCntrySpecificDate2,
      JrnlEntryCntrySpecificRef3,
      JrnlEntryCntrySpecificDate3,
      JrnlEntryCntrySpecificRef4,
      JrnlEntryCntrySpecificDate4,
      JrnlEntryCntrySpecificRef5,
      JrnlEntryCntrySpecificDate5,
      JrnlEntryCntrySpecificBP1,
      JrnlEntryCntrySpecificBP2,

      _CompanyCode,
      _Currency,
      _SuplrInvcItemPurOrdRefAPI01,
      _SuplrInvoiceItemGLAcctAPI01,
      _SuplrInvcItemMaterialAPI01,
      _SuplrInvcItemAssetAPI01,
      _SupplierInvoiceTaxAPI01,
      _SuplrInvcHeaderWhldgTaxAPI01,
      _SuplrInvcSeldPurgDocAPI01,
      _SuplrInvcSeldDelivNoteAPI01,
      _SuplrInvcSeldInbBOLAPI01,
      _SuplrInvcSeldSESLeanAPI01,
      _SuplrInvcItemCsgnmtAPI01,
      _SupplierInvoiceBlockAPI01
}
where
     IsEndOfPurposeBlocked = ''
  or IsEndOfPurposeBlocked is null
```
