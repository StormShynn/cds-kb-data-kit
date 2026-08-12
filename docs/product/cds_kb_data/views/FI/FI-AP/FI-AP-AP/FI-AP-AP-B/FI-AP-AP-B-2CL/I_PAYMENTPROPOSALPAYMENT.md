---
name: I_PAYMENTPROPOSALPAYMENT
description: "Paymentproposalpayment"
app_component: FI-AP-AP-B-2CL
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
  - FI-AP
  - FI-AP-AP
  - interface-view
  - payment
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTPROPOSALPAYMENT

**Paymentproposalpayment**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
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
| `PaymentRunDate` | ✓ | |  |  |  |  |
| `PaymentRunID` | ✓ | |  |  |  |  |
| `PaymentRunIsProposal` | ✓ | |  |  |  |  |
| `PayingCompanyCode` | ✓ | |  |  |  |  |
| `Supplier` | ✓ | |  |  |  |  |
| `Customer` | ✓ | |  |  |  |  |
| `PaymentRecipient` | ✓ | |  |  |  |  |
| `PaymentDocument` | ✓ | |  |  |  |  |
| `FinancialAccountType` |  | |  |  |  |  |
| `SendingCompanyCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `PaymentReason` |  | |  |  |  |  |
| `BranchCode` |  | |  |  |  |  |
| `DirectDebitType` |  | |  |  |  |  |
| `PaymentDueDate` |  | |  |  |  |  |
| `PaymentRequestPaymentGroup` |  | |  |  |  |  |
| `NumberOfTextLines` |  | |  |  |  |  |
| `NumberOfPaidItems` |  | |  |  |  |  |
| `CompanyCodeCountry` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `PaymentMethodSupplement` |  | |  |  |  |  |
| `PaymentReference` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PaymentOrder` |  | |  |  |  |  |
| `ValueDate` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `PaymentsGroupingCriterion` |  | |  |  |  |  |
| `PaymentOrigin` |  | |  |  |  |  |
| `SWIFTTransactionReferenceUUID` |  | |  |  |  |  |
| `BusinessPlace` |  | |  |  |  |  |
| `AccountingClerk` |  | |  |  |  |  |
| `AccountByShipper` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `StreetAddressName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `POBoxDeviatingCityName` |  | |  |  |  |  |
| `OrganizationBPName1` |  | |  |  |  |  |
| `OrganizationBPName2` |  | |  |  |  |  |
| `OrganizationBPName3` |  | |  |  |  |  |
| `OrganizationBPName4` |  | |  |  |  |  |
| `BankControlKey` |  | |  |  |  |  |
| `BankCountry` |  | |  |  |  |  |
| `Bank` |  | |  |  |  |  |
| `BankInternalID` |  | |  |  |  |  |
| `BankAccount` |  | |  |  |  |  |
| `BankAccountLongID` |  | |  |  |  |  |
| `IBAN` |  | |  |  |  |  |
| `HouseBank` |  | |  |  |  |  |
| `HouseBankAccount` |  | |  |  |  |  |
| `PayeeTitle` |  | |  |  |  |  |
| `PayeeLanguage` |  | |  |  |  |  |
| `PayeeName` |  | |  |  |  |  |
| `PayeeAdditionalName` |  | |  |  |  |  |
| `PayeeCountry` |  | |  |  |  |  |
| `PayeeRegion` |  | |  |  |  |  |
| `PayeeCityName` |  | |  |  |  |  |
| `PayeeDistrictName` |  | |  |  |  |  |
| `PayeeStreet` |  | |  |  |  |  |
| `PayeePostalCode` |  | |  |  |  |  |
| `PayeePOBox` |  | |  |  |  |  |
| `PayeePOBoxPostalCode` |  | |  |  |  |  |
| `PayeeBankControlKey` |  | |  |  |  |  |
| `PayeeBankCountry` |  | |  |  |  |  |
| `PayeeBank` |  | |  |  |  |  |
| `PayeeBankKey` |  | |  |  |  |  |
| `PayeeBankAccount` |  | |  |  |  |  |
| `PayeeBankAccountLongID` |  | |  |  |  |  |
| `PayeeSEPASequenceType` |  | |  |  |  |  |
| `PayeeSEPAMandateUUID` |  | |  |  |  |  |
| `PayeeIBAN` |  | |  |  |  |  |
| `PayeeSWIFTCode` |  | |  |  |  |  |
| `PayeeBankDetailReference` |  | |  |  |  |  |
| `PayeeBankAccountHolderName` |  | |  |  |  |  |
| `PaymentCurrency` |  | |  |  |  |  |
| `CashDiscountAmountInPaytCrcy` |  | |  |  |  |  |
| `PaymentAmountInPaytCurrency` |  | |  |  |  |  |
| `LostCashDiscountInPaytCrcy` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `CashDiscountAmtInCoCodeCrcy` |  | |  |  |  |  |
| `PaytAmountInCoCodeCurrency` |  | |  |  |  |  |
| `LostCashDiscountInCoCodeCrcy` |  | |  |  |  |  |
| `FunctionalCurrency` |  | |  |  |  |  |
| `PaymentAmountInFunctionalCrcy` |  | |  |  |  |  |
| `CashDiscountAmountInFuncnlCrcy` |  | |  |  |  |  |
| `AdditionalCurrency1` |  | |  |  |  |  |
| `PaymentAmountInAdditionalCrcy1` |  | |  |  |  |  |
| `CashDiscountAmtInAddlCrcy1` |  | |  |  |  |  |
| `AdditionalCurrency2` |  | |  |  |  |  |
| `PaymentAmountInAdditionalCrcy2` |  | |  |  |  |  |
| `CashDiscountAmtInAddlCrcy2` |  | |  |  |  |  |
| `EDIPaymentOrderStatus` |  | |  |  |  |  |
| `EDIPaymentAdviceStatus` |  | |  |  |  |  |
| `DataExchangeInstructionKey` |  | |  |  |  |  |
| `DataExchangeInstruction1` |  | |  |  |  |  |
| `DataExchangeInstruction2` |  | |  |  |  |  |
| `DataExchangeInstruction3` |  | |  |  |  |  |
| `DataExchangeInstruction4` |  | |  |  |  |  |
| `BillOfExchangeIssueDate` |  | |  |  |  |  |
| `BillOfExchangeDueDate` |  | |  |  |  |  |
| `BankChainBank1Type` |  | |  |  |  |  |
| `BankChainBank1Country` |  | |  |  |  |  |
| `BankChainBank1` |  | |  |  |  |  |
| `BankChainBank1BankAccount` |  | |  |  |  |  |
| `BankChainBank1ControlKey` |  | |  |  |  |  |
| `BankChainBank1DetailReference` |  | |  |  |  |  |
| `BankChainBank1IBAN` |  | |  |  |  |  |
| `BankChainBank2Type` |  | |  |  |  |  |
| `BankChainBank2Country` |  | |  |  |  |  |
| `BankChainBank2` |  | |  |  |  |  |
| `BankChainBank2BankAccount` |  | |  |  |  |  |
| `BankChainBank2ControlKey` |  | |  |  |  |  |
| `BankChainBank2DetailReference` |  | |  |  |  |  |
| `BankChainBank2IBAN` |  | |  |  |  |  |
| `BankChainBank3Type` |  | |  |  |  |  |
| `BankChainBank3Country` |  | |  |  |  |  |
| `BankChainBank3` |  | |  |  |  |  |
| `BankChainBank3BankAccount` |  | |  |  |  |  |
| `BankChainBank3ControlKey` |  | |  |  |  |  |
| `BankChainBank3DetailReference` |  | |  |  |  |  |
| `BankChainBank3IBAN` |  | |  |  |  |  |
| `PayeePaymentSystem` |  | |  |  |  |  |
| `PayeeAliasType` |  | |  |  |  |  |
| `PayeeAliasName` |  | |  |  |  |  |
| `_PaymentProposalItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CompanyCodeCountry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_PaymentmethodSupplement` | | ✓ | | | | |
| `_PayableToleranceDay` | | ✓ | | | | |
| `_PaymentReason` | | ✓ | | | | |
| `_SendingCompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_BankCountry` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_DataExchangeInstructionKeys` | | ✓ | | | | |
| `_PayeeCountry` | | ✓ | | | | |
| `_PayeeBankCountry` | | ✓ | | | | |
| `_PayeeBank` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_PayeePaymentSystem` | | ✓ | | | | |
| `_PayeeAliasType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentProposalItem` | `I_PaymentProposalItem` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPAYTPRPSLPAYT',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Proposal Payment'
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_CompanyCode', '_Supplier', '_Customer' ]
    }
@ObjectModel: {
//    representativeKey: 'PaymentDocument',
    usageType.serviceQuality: #D,
    usageType.dataClass: #MIXED,
    usageType.sizeCategory: #XL,
    
    modelingPattern: #NONE,
    supportedCapabilities: [ 
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


define view I_PaymentProposalPayment
  as select from R_PaymentProposalPayment
  association [0..*] to I_PaymentProposalItem as _PaymentProposalItem on  $projection.PaymentRunID         = _PaymentProposalItem.PaymentRunID
                                                                      and $projection.PaymentRunDate       = _PaymentProposalItem.PaymentRunDate
                                                                      and $projection.PaymentDocument      = _PaymentProposalItem.PaymentDocument
                                                                      and $projection.PaymentRunIsProposal = _PaymentProposalItem.PaymentRunIsProposal
                                                                      and $projection.PayingCompanyCode    = _PaymentProposalItem.PayingCompanyCode
                                                                      and $projection.Supplier             = _PaymentProposalItem.Supplier
                                                                      and $projection.Customer             = _PaymentProposalItem.Customer
                                                                      and $projection.PaymentRecipient     = _PaymentProposalItem.PaymentRecipient

{
  key   PaymentRunDate,
  key   PaymentRunID,
  key   PaymentRunIsProposal,
        @ObjectModel.foreignKey.association: '_CompanyCode'
  key   PayingCompanyCode,
        @ObjectModel.foreignKey.association: '_Supplier'
  key   Supplier,
        @ObjectModel.foreignKey.association: '_Customer'
  key   Customer,
  key   PaymentRecipient,
  key   PaymentDocument,

        FinancialAccountType,

        @ObjectModel.foreignKey.association: '_SendingCompanyCode'
        SendingCompanyCode,
        BusinessArea,
        @ObjectModel.foreignKey.association: '_PaymentReason'
        PaymentReason,
        BranchCode,
        DirectDebitType,
        PaymentDueDate, //PaidItemDueDate,
        PaymentRequestPaymentGroup,
        NumberOfTextLines,
        NumberOfPaidItems,
        @ObjectModel.foreignKey.association: '_CompanyCodeCountry'
        CompanyCodeCountry,
        @ObjectModel.foreignKey.association: '_PaymentMethod'
        PaymentMethod,
        @ObjectModel.foreignKey.association: '_PaymentMethodSupplement'
        PaymentMethodSupplement,
        PaymentReference,
        PersonnelNumber,
        PostingDate,
        PaymentOrder,
        ValueDate,
        ExchangeRate,
        PaymentsGroupingCriterion, //PaymentOrigin,
        PaymentOrigin, //BankPaymentGroupingOrigin,
        SWIFTTransactionReferenceUUID,
        BusinessPlace,

        AccountingClerk,
        AccountByShipper, //SupplierClerkIDBySupplier,
        AddressID,
        @ObjectModel.foreignKey.association: '_Country'
        Country, //SupplierCountry,
        Region,
        CityName, //SupplierCityName,
        StreetAddressName,
        PostalCode,
        POBox,
        POBoxPostalCode,
        POBoxDeviatingCityName,
        OrganizationBPName1,
        OrganizationBPName2,
        OrganizationBPName3,
        OrganizationBPName4,

        BankControlKey,
        @ObjectModel.foreignKey.association: '_BankCountry'
        BankCountry,
        Bank,
        @ObjectModel.foreignKey.association: '_Bank'
        BankInternalID,
        BankAccount,
        BankAccountLongID,
        IBAN,
        @ObjectModel.foreignKey.association: '_HouseBank'
        HouseBank,
        @ObjectModel.foreignKey.association: '_HouseBankAccount'
        HouseBankAccount,

        PayeeTitle,
        PayeeLanguage,
        PayeeName,
        PayeeAdditionalName,
        @ObjectModel.foreignKey.association: '_PayeeCountry'
        PayeeCountry,
        PayeeRegion, //SupplierRegion,
        PayeeCityName,
        PayeeDistrictName,
        PayeeStreet,
        PayeePostalCode,
        PayeePOBox,
        PayeePOBoxPostalCode,
        PayeeBankControlKey,
        @ObjectModel.foreignKey.association: '_PayeeBankCountry'
        PayeeBankCountry,
        PayeeBank,
        @ObjectModel.foreignKey.association: '_PayeeBank'
        PayeeBankKey,
        PayeeBankAccount,
        PayeeBankAccountLongID,
        PayeeSEPASequenceType, //SEPASequenceType,
        PayeeSEPAMandateUUID, //SEPAMandateUUID,
        PayeeIBAN,
        PayeeSWIFTCode, //SWIFTCode,
        PayeeBankDetailReference, //BankAccountReferenceText,
        PayeeBankAccountHolderName, //BankAccountHolderName

        @Semantics.currencyCode:true
        @ObjectModel.foreignKey.association: '_PaymentCurrency'
        PaymentCurrency,

        @Semantics.amount.currencyCode: 'PaymentCurrency'
        @Aggregation.default: #SUM
        CashDiscountAmountInPaytCrcy, //CashDiscountAmtInTransacCrcy,
        @Semantics.amount.currencyCode: 'PaymentCurrency'
        @Aggregation.default: #SUM
        PaymentAmountInPaytCurrency, //PaidAmountInPaytCurrency,
        @Semantics.amount.currencyCode: 'PaymentCurrency'
        @Aggregation.default: #SUM
        LostCashDiscountInPaytCrcy, //LostCashDiscountInTransacCrcy,

        @Semantics.currencyCode:true
        @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
        CompanyCodeCurrency,

        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @Aggregation.default: #SUM
        CashDiscountAmtInCoCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @Aggregation.default: #SUM
        PaytAmountInCoCodeCurrency, //AmountInCompanyCodeCurrency,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @Aggregation.default: #SUM
        LostCashDiscountInCoCodeCrcy,

        @Semantics.currencyCode:true
        @ObjectModel.foreignKey.association: '_FunctionalCurrency'
        FunctionalCurrency,

        @Semantics.amount.currencyCode: 'FunctionalCurrency'
        PaymentAmountInFunctionalCrcy,
        @Semantics.amount.currencyCode: 'FunctionalCurrency'
        @Aggregation.default: #SUM
        CashDiscountAmountInFuncnlCrcy,
        
        @Semantics.currencyCode:true
        AdditionalCurrency1,

        @Semantics.amount.currencyCode: 'AdditionalCurrency1'
        @Aggregation.default: #SUM
        PaymentAmountInAdditionalCrcy1,
        @Semantics.amount.currencyCode: 'AdditionalCurrency1'
        @Aggregation.default: #SUM
        CashDiscountAmtInAddlCrcy1,   
        
        @Semantics.currencyCode:true
        AdditionalCurrency2,

        @Semantics.amount.currencyCode: 'AdditionalCurrency2'
        @Aggregation.default: #SUM
        PaymentAmountInAdditionalCrcy2,
        @Semantics.amount.currencyCode: 'AdditionalCurrency2'
        @Aggregation.default: #SUM
        CashDiscountAmtInAddlCrcy2,               

        EDIPaymentOrderStatus,
        EDIPaymentAdviceStatus,
        @ObjectModel.foreignKey.association: '_DataExchangeInstructionKeys'
        DataExchangeInstructionKey,
        DataExchangeInstruction1,
        DataExchangeInstruction2,
        DataExchangeInstruction3,
        DataExchangeInstruction4,
        BillOfExchangeIssueDate,
        BillOfExchangeDueDate,

        BankChainBank1Type,
        BankChainBank1Country,
        BankChainBank1,
        BankChainBank1BankAccount,
        BankChainBank1ControlKey,
        BankChainBank1DetailReference,
        BankChainBank1IBAN,
        BankChainBank2Type,
        BankChainBank2Country,
        BankChainBank2,
        BankChainBank2BankAccount,
        BankChainBank2ControlKey,
        BankChainBank2DetailReference,
        BankChainBank2IBAN,
        BankChainBank3Type,
        BankChainBank3Country,
        BankChainBank3,
        BankChainBank3BankAccount,
        BankChainBank3ControlKey,
        BankChainBank3DetailReference,
        BankChainBank3IBAN,
        
        PayeePaymentSystem,
        PayeeAliasType,
        PayeeAliasName,

        _PaymentProposalItem,


        _CompanyCode,
        _CompanyCodeCountry,
        _CompanyCodeCurrency,
        _Supplier,
        _Customer,
        _PaymentCurrency,
        _PaymentMethod,
        //_PaymentMethodText,
        _PaymentmethodSupplement,
        //_PaymentmethodSupplementtext,
        _PayableToleranceDay,
        _PaymentReason,
        _SendingCompanyCode,
        _Country,
        _BankCountry,
        _Bank,
        _HouseBank,
        _HouseBankAccount,
        //_HouseBankAccountText,
        _DataExchangeInstructionKeys,
        _PayeeCountry,
        _PayeeBankCountry,
        _PayeeBank,
        _FunctionalCurrency,
        _PayeePaymentSystem,
        _PayeeAliasType
}
```
