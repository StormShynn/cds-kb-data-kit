---
name: I_BANKSTATEMENTITEMDETAIL
description: Bankstatementitemdetail
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - bank
  - item-level
  - component:FI-FIO-AR-2CL
  - lob:Finance
  - bo:Bank
---
# I_BANKSTATEMENTITEMDETAIL

**Bankstatementitemdetail**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BankStatementShortID` | ✓ | |  |  |
| `BankStatementItem` | ✓ | |  |  |
| `BkStmntItemTransactionDetailID` | ✓ | |  |  |
| `AmountInTransactionCurrency` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `DebitCreditCode` |  | |  |  |
| `PaymentTransactionText` |  | |  |  |
| `PaymentFileMsgIdentification` |  | |  |  |
| `AccountServicerReference` |  | |  |  |
| `PaytInformationIdentification` |  | |  |  |
| `PaytInstructionIdentification` |  | |  |  |
| `PaymentEndToEndIdentification` |  | |  |  |
| `SWIFTTransactionReferenceUUID` |  | |  |  |
| `PaytTransactionIdentification` |  | |  |  |
| `BankStatementSEPAMandate` |  | |  |  |
| `BankStatementCheque` |  | |  |  |
| `PaytProcessingIdentification` |  | |  |  |
| `PaymentProprietaryType` |  | |  |  |
| `PaymentProprietaryReference` |  | |  |  |
| `PaymentAdditionalInfoString` |  | |  |  |
| `_Item` | | ✓ | | |
| `_BankStatement` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_BankStatementItem` | [1..1] |
| `_BankStatement` | `I_BankStatement` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Details of a Bank Statement Item'
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.semanticKey: ['BankStatementShortID', 'BankStatementItem', 'BkStmntItemTransactionDetailID']
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ARBankStatement'

define view entity I_BankStatementItemDetail
  as select from I_ARBankStmntItmSpcfcDataBasic

  association [1..1] to I_BankStatementItem as _Item          on  $projection.BankStatementShortID = _Item.BankStatementShortID
                                                                  and $projection.BankStatementItem    = _Item.BankStatementItem

  association [1..1] to I_BankStatement     as _BankStatement on  $projection.BankStatementShortID = _BankStatement.BankStatementShortID

{      
  key BankStatementShortID,
  key BankStatementItem,
  key BkStmntItemTransactionDetailID,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      AmountInTransactionCurrency,
      TransactionCurrency,
      DebitCreditCode,
      PaymentTransactionText,
      PaymentFileMsgIdentification,
      AccountServicerReference,
      PaytInformationIdentification,
      PaytInstructionIdentification,
      PaymentEndToEndIdentification,
      SWIFTTransactionReferenceUUID,
      PaytTransactionIdentification,
      BankStatementSEPAMandate,
      BankStatementCheque,
      PaytProcessingIdentification,
      PaymentProprietaryType,
      PaymentProprietaryReference,
      PaymentAdditionalInfoString,
      _BankStatement,
      _Item
}
```
