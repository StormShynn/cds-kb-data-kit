---
name: I_BKCASHBALANCEFORPERIODCUBE
description: "This CDS view retrieves bank account balances of different types for a specified date range. This CDS view provides the data to answer the following business questions: What are the ledger balances, available balances, value date balances, and adjusted value date balances of a bank account for key dates during a user-defined date range? Are there any differences between different balance types, for example, ledger balance and value date balance, on a specific key date during the date range? What is the aggregated balance of a specific type of bank account on a specific key date during the date range? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCASHBALANCEFORPERIODCUBE')/$value
semantic_en: "This CDS view retrieves bank account balances of different types for a specified date range. This CDS view provides the data to answer the following business questions: What are the ledger balances, available balances, value date balances, and adjusted value date balances of a bank account for key dates during a user-defined date range? Are there any differences between different balance types, for example, ledger balance and value date balance, on a specific key date during the date range? What is the aggregated balance of a specific type of bank account on a specific key date during the date range? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Balances for Period - Cube — CDS view giao diện dựa trên P_BkCshBalByCshBalDteAggAjust."
keywords:
  - "bank"
  - "account"
  - "balances"
  - "for"
  - "period"
  - "cube"
  - "internal"
  - "cash"
  - "balance"
  - "type"
  - "transaction"
  - "date"
  - "amount"
  - "currency"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
---
# I_BKCASHBALANCEFORPERIODCUBE

**This CDS view retrieves bank account balances of different types for a specified date range. This CDS view provides the data to answer the following business questions: What are the ledger balances, available balances, value date balances, and adjusted value date balances of a bank account for key dates during a user-defined date range? Are there any differences between different balance types, for example, ledger balance and value date balance, on a specific key date during the date range? What is the aggregated balance of a specific type of bank account on a specific key date during the date range? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCASHBALANCEFORPERIODCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` | ✓ | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `CashBalanceType` | ✓ | |  |  | `CHAR(1)` | Cash Balance Type |
| `TransactionDate` | ✓ | |  | `CalendarDate` | `DATS(8)` | Calendar Date |
| `CashBalanceAmount` |  | |  |  | `CURR(23)` | Balance Amount |
| `CashBalanceCurrency` |  | |  |  | `CUKY(5)` | Balance Currency |
| `CashBalanceKey` |  | |  |  | `NUMC(16)` |  |
| `CashBalanceDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `OriginDocument` |  | |  |  | `CHAR(32)` | Source Document ID |
| `BankStatementShortID` |  | |  |  | `NUMC(8)` | Short Key for Bank Statement (Surrogate Key) |
| `CashBalanceChannel` |  | |  |  | `CHAR(10)` | Bank Account Balance Update Method |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CashBalanceCreatedAtDateTime` |  | |  |  | `DEC(21)` | FQM Flow Creation Timestamp |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | FQM Flow Create User |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` |  | |  |  | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankAccountDescription` |  | | `_BankAccountText` | `BankAccountDescription` | `CHAR(60)` | Account Description |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `_CompanyCode` | | ✓ | | | | |
| `_BankAccountTypeText` | | ✓ | | | | |
| `_BankAccountText` | | ✓ | | | | |
| `_CharacteristicText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BankAccountTypeText` | `I_BankAccountTypeText` | [0..1] |
| `_BankAccountText` | `I_BankAccountText` | [0..1] |
| `_CharacteristicText` | `I_BankAcctCharacteristicText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCASHBALANCEFORPERIODCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCASHBALANCEFORPERIODCUBE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Account Balances for Period - Cube'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #D,
    sizeCategory:   #XL
  }
}
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern:#ANALYTICAL_CUBE
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
define view entity I_BkCashBalanceForPeriodCube
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_StartDate : valut,
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate   : valut

  as select from           P_BkCshBalByCshBalDteAggAjust as DailyBalance
    inner join             I_BankAccount                 as Account on DailyBalance.BankAccountInternalID = Account.BankAccountInternalID
    left outer to one join I_BankCashBalanceHistory      as Balance on DailyBalance.CashBalanceKey = Balance.CashBalanceKey
  association [0..1] to I_CompanyCode                as _CompanyCode         on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BankAccountTypeText        as _BankAccountTypeText on  $projection.BankAccountType   = _BankAccountTypeText.BankAccountType
                                                                             and _BankAccountTypeText.Language = $session.system_language
  association [0..1] to I_BankAccountText            as _BankAccountText     on  $projection.BankAccountInternalID = _BankAccountText.BankAccountInternalID
                                                                             and _BankAccountText.Language         = $session.system_language
  association [0..1] to I_BankAcctCharacteristicText as _CharacteristicText  on  $projection.BankAccountCharacteristic = _CharacteristicText.BankAccountCharacteristic
                                                                             and _CharacteristicText.Language          = $session.system_language
{
      @ObjectModel.text.element: [ 'BankAccountDescription' ]
  key Account.BankAccountInternalID,
  key DailyBalance.CashBalanceType,
  key DailyBalance.CalendarDate as TransactionDate,
      @Semantics.amount.currencyCode: 'CashBalanceCurrency'
      @EndUserText.label: 'Balance Amount'
      @Aggregation.default: #SUM
      DailyBalance.CashBalanceAmount,
      DailyBalance.CashBalanceCurrency,
      DailyBalance.CashBalanceKey,
      Balance.CashBalanceDate,
      Balance.OriginDocument,
      Balance.BankStatementShortID,
      Balance.CashBalanceChannel,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      Balance.CompanyCode,
      //Administrative data
      Balance.CashBalanceCreatedAtDateTime,
      Balance.CreatedByUser,
      //Bank Account Data
      @ObjectModel.text.association: '_BankAccountTypeText'
      Account.BankAccountType,
      @ObjectModel.text.association: '_CharacteristicText'
      Account.BankAccountCharacteristic,
      Account.BankAccountNumber,
      Account.BankAccountContractType,
      @Semantics.text:true
      _BankAccountText.BankAccountDescription,
      Account.BankAccountStatus,
      //Bank Data
      Account.BankCountry,
      Account.Bank,
      Account._Bank.SWIFTCode,
      Account._Bank.BankName,
      _CompanyCode,
      _BankAccountText,
      _BankAccountTypeText,
      _CharacteristicText

}
where
       DailyBalance.CalendarDate    >= $parameters.P_StartDate
  and  DailyBalance.CalendarDate    <= $parameters.P_EndDate
  and(
       DailyBalance.CashBalanceType = ' '
    or DailyBalance.CashBalanceType = '1'
    or DailyBalance.CashBalanceType = '2'
    or DailyBalance.CashBalanceType = '3'
  )
```
