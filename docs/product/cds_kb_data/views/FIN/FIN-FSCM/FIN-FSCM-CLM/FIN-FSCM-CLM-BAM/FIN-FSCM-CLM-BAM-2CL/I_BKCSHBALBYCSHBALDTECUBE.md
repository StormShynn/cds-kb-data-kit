---
name: I_BKCSHBALBYCSHBALDTECUBE
description: "This CDS view retrieves bank account balances of different types for the specified key date. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, ledger balance and value date balance? What is the aggregated balance of a specific type of bank accounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCSHBALBYCSHBALDTECUBE')/$value
semantic_en: "This CDS view retrieves bank account balances of different types for the specified key date. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, ledger balance and value date balance? What is the aggregated balance of a specific type of bank accounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Balances - Cube — CDS view giao diện dựa trên P_BkCshBalByCshBalDteAggAjust."
keywords:
  - "bank"
  - "account"
  - "balances"
  - "cube"
  - "internal"
  - "cash"
  - "balance"
  - "type"
  - "amount"
  - "currency"
  - "date"
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
# I_BKCSHBALBYCSHBALDTECUBE

**This CDS view retrieves bank account balances of different types for the specified key date. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, ledger balance and value date balance? What is the aggregated balance of a specific type of bank accounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCSHBALBYCSHBALDTECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` | ✓ | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `CashBalanceType` | ✓ | |  |  | `CHAR(1)` | Cash Balance Type |
| `CashBalanceAmount` |  | |  |  | `CURR(23)` | Balance Amount |
| `CashBalanceCurrency` |  | |  |  | `CUKY(5)` | Balance Currency |
| `CashBalanceDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `OriginDocument` |  | |  |  | `CHAR(32)` | Source Document ID |
| `BankStatementShortID` |  | |  | `cast ( Balance.BankStatementShortID as farp_kukey )` | `NUMC(8)` | Bank Statement Short Key |
| `CashBalanceChannel` |  | |  |  | `CHAR(10)` | Bank Account Balance Update Method |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CashBalanceCreatedAtDateTime` |  | |  |  | `DEC(21)` | FQM Flow Creation Timestamp |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | FQM Flow Create User |
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type)` | `CUKY(5)` | Display Currency |
| `TransactionDate` |  | |  | `cast($parameters.P_KeyDate as vdm_v_key_date preserving type)` | `DATS(8)` | Key Date |
| `CalculatedAmountInDspCrcy` |  | |  | `cast (currency_conversion( amount => DailyBalance.CashBalanceAmount, source_currency => DailyBalance.CashBalanceCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => $parameters.P_KeyDate, exchange_rate_type => $parameters.P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR' ) as net_amount_in_dsp_crcy)` | `CURR(19)` | Net Value in Display Currency |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCSHBALBYCSHBALDTECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCSHBALBYCSHBALDTECUBE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Account Balances - Cube'
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
define view entity I_BkCshBalByCshBalDteCube
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_key_date,
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency

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
      @Semantics.amount.currencyCode: 'CashBalanceCurrency'
      @EndUserText.label: 'Balance Amount'
      @Aggregation.default: #SUM
      DailyBalance.CashBalanceAmount,
      DailyBalance.CashBalanceCurrency,
      Balance.CashBalanceDate,
      Balance.OriginDocument,
      cast ( Balance.BankStatementShortID as farp_kukey )                           as BankStatementShortID,
      Balance.CashBalanceChannel,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      Balance.CompanyCode,
      //Administrative data
      Balance.CashBalanceCreatedAtDateTime,
      Balance.CreatedByUser,
      //Calculated data
      cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type) as DisplayCurrency,
      cast($parameters.P_KeyDate as vdm_v_key_date preserving type)                 as TransactionDate,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount =>  DailyBalance.CashBalanceAmount,
        source_currency => DailyBalance.CashBalanceCurrency,
        target_currency => $parameters.P_DisplayCurrency,
        exchange_rate_date => $parameters.P_KeyDate,
        exchange_rate_type => $parameters.P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR'
      ) as net_amount_in_dsp_crcy)                                                  as CalculatedAmountInDspCrcy,
      //Bank Account Data
      @ObjectModel.text.association: '_BankAccountTypeText'
      Account.BankAccountType,
      @ObjectModel.text.association: '_CharacteristicText'
      Account.BankAccountCharacteristic,
      Account.BankAccountNumber,
      Account.BankAccountContractType,
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
       DailyBalance.CalendarDate    = $parameters.P_KeyDate
  and(
       DailyBalance.CashBalanceType = ' '
    or DailyBalance.CashBalanceType = '1'
    or DailyBalance.CashBalanceType = '2'
    or DailyBalance.CashBalanceType = '3'
  )
```
