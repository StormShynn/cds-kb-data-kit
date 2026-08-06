---
name: I_PAYMENTPROPOSALITEM
description: Paymentproposalitem
app_component: FI-AP-AP-B-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - payment
  - item-level
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTPROPOSALITEM

**Paymentproposalitem**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentRunDate` | `PaymentRunDate` |
| key `PaymentRunID` | `PaymentRunID` |
| key `PaymentRunIsProposal` | `PaymentRunIsProposal` |
| key `PayingCompanyCode` | `PayingCompanyCode` |
| key `Supplier` | `Supplier` |
| key `Customer` | `Customer` |
| key `PaymentRecipient` | `PaymentRecipient` |
| key `PaymentDocument` | `PaymentDocument` |
| key `CompanyCode` | `CompanyCode` |
| key `AccountingDocument` | `AccountingDocument` |
| key `FiscalYear` | `FiscalYear` |
| key `AccountingDocumentItem` | `AccountingDocumentItem` |
| `BranchAccount` | `BranchAccount` |
| `BusinessArea` | `BusinessArea` |
| `AccountingDocumentType` | `AccountingDocumentType` |
| `DocumentDate` | `DocumentDate` |
| `DueCalculationBaseDate` | `DueCalculationBaseDate` |
| `PaymentTerms` | `PaymentTerms` |
| `PostingKey` | `PostingKey` |
| `SpecialGLCode` | `SpecialGLCode` |
| `PaymentRunItemMessageNumber` | `PaymentRunItemMessageNumber` |
| `PaymentMethod` | `PaymentMethod` |
| `PaymentBlockingReason` | `PaymentBlockingReason` |
| `AccountingDocExternalReference` | `AccountingDocExternalReference` |
| `DocumentReferenceID` | `AccountingDocExternalReference` |
| `PaymentReference` | `PaymentReference` |
| `AssetContract` | `AssetContract` |
| `PostingDate` | `PostingDate` |
| `DocumentItemText` | `DocumentItemText` |
| `GLAccount` | `GLAccount` |
| `AssignmentReference` | `AssignmentReference` |
| `TaxCode` | `TaxCode` |
| `SystemMessageNumber` | `SystemMessageNumber` |
| `PaymentCurrency` | `PaymentCurrency` |
| `AmountInTransactionCurrency` | `AmountInTransactionCurrency` |
| `CashDiscountAmtInTransacCrcy` | `CashDiscountAmtInTransacCrcy` |
| `WhldgTaxAmtInTransacCrcy` | `WhldgTaxAmtInTransacCrcy` |
| `TotDeductionAmtInTransacCrcy` | `TotDeductionAmtInTransacCrcy` |
| `NetAmountInTransacCurrency` | `NetAmountInTransacCurrency` |
| `MaxCshDiscAmtInTransacCrcy` | `MaxCshDiscAmtInTransacCrcy` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `CashDiscountAmtInCoCodeCrcy` | `CashDiscountAmtInCoCodeCrcy` |
| `WhldgTaxAmtInCoCodeCrcy` | `WhldgTaxAmtInCoCodeCrcy` |
| `TotDeductionAmtInCoCodeCrcy` | `TotDeductionAmtInCoCodeCrcy` |
| `NetAmountInCoCodeCurrency` | `NetAmountInCoCodeCurrency` |
| `HeaderAmtInCoCodeCurrency` | `HeaderAmtInCoCodeCurrency` |
| `MaxCshDiscAmtInCoCodeCrcy` | `MaxCshDiscAmtInCoCodeCrcy` |
| `FunctionalCurrency` | `FunctionalCurrency` |
| `AmountInFunctionalCurrency` | `cast( case FunctionalCurrency when CompanyCodeCurrency then HeaderAmtInCoCodeCurrency when AdditionalCurrency1 then AmountInAdditionalCurrency1 when AdditionalCurrency2 then AmountInAdditionalCurrency2 end as fins_vfccur12 preserving type )` |
| `CashDiscountAmountInFuncnlCrcy` | `cast( case FunctionalCurrency when CompanyCodeCurrency then CashDiscountAmtInTransacCrcy when AdditionalCurrency1 then CashDiscountAmtInAddlCrcy1 when AdditionalCurrency2 then CashDiscountAmtInAddlCrcy2 end as farp_cash_disc_fcsl preserving type )` |
| `CashDiscount1Days` | `CashDiscount1Days` |
| `CashDiscount2Days` | `CashDiscount2Days` |
| `CashDiscount1Percent` | `CashDiscount1Percent` |
| `CashDiscount2Percent` | `CashDiscount2Percent` |
| `StateCentralBankPaymentReason` | `StateCentralBankPaymentReason` |
| `SupplyingCountry` | `SupplyingCountry` |
| `DebitCreditCode` | `DebitCreditCode` |
| `FinancialAccountType` | `FinancialAccountType` |
| `BusinessPlace` | `BusinessPlace` |
| `TradingPartner` | `TradingPartner` |
| `HouseBank` | `HouseBank` |
| `BPBankAccountInternalID` | `BPBankAccountInternalID` |
| `ProfitCenter` | `ProfitCenter` |
| `BankReconciliationAccount` | `BankReconciliationAccount` |
| `PaymentBlockLevel` | `PaymentBlockLevel` |
| `ConsideredPaymentMethods` | `ConsideredPaymentMethods` |
| `Reference1IDByBusinessPartner` | `Reference1IDByBusinessPartner` |
| `Reference2IDByBusinessPartner` | `Reference2IDByBusinessPartner` |
| `Reference3IDByBusinessPartner` | `Reference3IDByBusinessPartner` |
| `PaymentReason` | `PaymentReason` |
| `BranchCode` | `BranchCode` |
| `_PaymentProposalPayment` | *Association* |
| `_PostingKeyWthSpclGLCodeTxt` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |
| `_PayableToleranceDay` | *Association* |
| `_PostingKeyWithSpecialGLCode` | *Association* |
| `_PaytProposalRunMessage` | *Association* |
| `_CompanyCode` | *Association* |
| `_PaymentCurrency` | *Association* |
| `_CompanyCodeCurrency` | *Association* |
| `_FunctionalCurrency` | *Association* |
| `_OperationalAcctgDocItem` | *Association* |
| `_BusinessArea` | *Association* |
| `_AccountingDocumentType` | *Association* |
| `_PostingKey` | *Association* |
| `_DebitCreditCode` | *Association* |
| `_HouseBank` | *Association* |
| `_PaymentReason` | *Association* |
| `_FinancialAccountType` | *Association* |
| `_SpecialGLCode` | *Association* |
| `_GLAccountInCompanyCode` | *Association* |
| `_PaymentBlockLevel` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentProposalPayment` | `I_PaymentProposalPayment` | [0..1] |
| `_PostingKeyWthSpclGLCodeTxt` | `I_PostingKeyWthSpclGLCodeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPAYTPRPSLITM',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Proposal Item'
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_CompanyCode', '_Supplier', '_Customer' ]
    }
@ObjectModel: {
//    representativeKey: 'AccountingDocumentItem',
    usageType.serviceQuality: #D,
    usageType.dataClass: #MIXED,
    usageType.sizeCategory: #XXL,
    
    modelingPattern: #NONE,
    supportedCapabilities: [ //#ANALYTICAL_PROVIDER, 
                             #CDS_MODELING_ASSOCIATION_TARGET, 
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE
                             //#EXTRACTION_DATA_SOURCE,
                             ]    
    }
@ClientHandling: {
    type: #INHERITED,
    algorithm: #SESSION_VARIABLE
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #FACT,
    //dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@Metadata: {
  ignorePropagatedAnnotations: true
  //allowExtensions: true 
  }

define view I_PaymentProposalItem
  as select from R_PaymentProposalItem

  association [0..1] to I_PaymentProposalPayment as _PaymentProposalPayment on  $projection.PaymentRunID         = _PaymentProposalPayment.PaymentRunID
                                                                               and $projection.PaymentRunDate       = _PaymentProposalPayment.PaymentRunDate
                                                                               and $projection.PaymentDocument      = _PaymentProposalPayment.PaymentDocument
                                                                               and $projection.PaymentRunIsProposal = _PaymentProposalPayment.PaymentRunIsProposal
                                                                               and $projection.PayingCompanyCode    = _PaymentProposalPayment.PayingCompanyCode
                                                                               and $projection.Supplier             = _PaymentProposalPayment.Supplier
                                                                               and $projection.Customer             = _PaymentProposalPayment.Customer
                                                                               and $projection.PaymentRecipient     = _PaymentProposalPayment.PaymentRecipient

association [0..*] to I_PostingKeyWthSpclGLCodeTxt as _PostingKeyWthSpclGLCodeTxt       on  $projection.PostingKey    = _PostingKeyWthSpclGLCodeTxt.PostingKey 
                                                                  and $projection.SpecialGLCode = _PostingKeyWthSpclGLCodeTxt.SpecialGLCode 

{
  key PaymentRunDate,
  key PaymentRunID,
  key PaymentRunIsProposal,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key PayingCompanyCode,
      @ObjectModel.foreignKey.association: '_Supplier'
  key Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
  key PaymentRecipient,
  key PaymentDocument,
  key CompanyCode,
  key AccountingDocument,
  key FiscalYear,
  key AccountingDocumentItem,
      BranchAccount,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      DocumentDate,
      DueCalculationBaseDate,
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PostingKey'
      @ObjectModel.text.association: '_PostingKeyWthSpclGLCodeTxt'
      PostingKey,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      SpecialGLCode,
      PaymentRunItemMessageNumber,
      
      PaymentMethod,
      PaymentBlockingReason,
      AccountingDocExternalReference,
      AccountingDocExternalReference as DocumentReferenceID,
      PaymentReference,
      AssetContract,
      PostingDate,
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
      GLAccount,
      AssignmentReference,
      TaxCode,
      @ObjectModel.text.association: '_PaytProposalRunMessage'
      SystemMessageNumber,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_PaymentCurrency'      
      PaymentCurrency,

      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      AmountInTransactionCurrency,   
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM     
      CashDiscountAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      WhldgTaxAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      TotDeductionAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      NetAmountInTransacCurrency,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      MaxCshDiscAmtInTransacCrcy,
      
      
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'      
      CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      CashDiscountAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      WhldgTaxAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      TotDeductionAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      NetAmountInCoCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      HeaderAmtInCoCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      MaxCshDiscAmtInCoCodeCrcy,
      
      
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      FunctionalCurrency,
            
      @Semantics.amount.currencyCode: 'FunctionalCurrency'
      @Aggregation.default: #SUM
      cast(
        case FunctionalCurrency
          when CompanyCodeCurrency then HeaderAmtInCoCodeCurrency
          when AdditionalCurrency1 then AmountInAdditionalCurrency1
          when AdditionalCurrency2 then AmountInAdditionalCurrency2
        end as fins_vfccur12 preserving type )                                          as AmountInFunctionalCurrency,

      @Semantics.amount.currencyCode: 'FunctionalCurrency'
      @Aggregation.default: #SUM
      cast(
        case FunctionalCurrency
          when CompanyCodeCurrency then CashDiscountAmtInTransacCrcy
          when AdditionalCurrency1 then CashDiscountAmtInAddlCrcy1
          when AdditionalCurrency2 then CashDiscountAmtInAddlCrcy2
        end as farp_cash_disc_fcsl preserving type )                                          as CashDiscountAmountInFuncnlCrcy,  
      
      CashDiscount1Days,
      CashDiscount2Days,
      CashDiscount1Percent,
      CashDiscount2Percent,
      StateCentralBankPaymentReason,
      SupplyingCountry,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      BusinessPlace,
      TradingPartner,
      @ObjectModel.foreignKey.association: '_HouseBank'
      HouseBank,
      BPBankAccountInternalID,
      ProfitCenter,
      BankReconciliationAccount,
      @ObjectModel.foreignKey.association: '_PaymentBlockLevel'
      PaymentBlockLevel,
      ConsideredPaymentMethods,
      Reference1IDByBusinessPartner,
      Reference2IDByBusinessPartner,
      Reference3IDByBusinessPartner,
      @ObjectModel.foreignKey.association: '_PaymentReason'
      PaymentReason,
      BranchCode,

      _Supplier,
      _Customer,
      _PayableToleranceDay,
      _PostingKeyWithSpecialGLCode,
      _PaytProposalRunMessage,
      _CompanyCode,
      _PaymentCurrency,
      _CompanyCodeCurrency,
      _FunctionalCurrency,
      _PaymentProposalPayment, //  _PaymentProposalHeader
      _OperationalAcctgDocItem,
      _BusinessArea,
      _AccountingDocumentType,
      _PostingKey,
      _DebitCreditCode,
      _HouseBank,
      _PaymentReason,
      _FinancialAccountType,
      _SpecialGLCode,
      _GLAccountInCompanyCode,
      _PaymentBlockLevel,
      _PostingKeyWthSpclGLCodeTxt
}
```
