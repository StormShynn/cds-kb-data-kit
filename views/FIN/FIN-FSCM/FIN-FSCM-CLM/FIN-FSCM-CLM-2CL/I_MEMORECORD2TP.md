---
name: I_MEMORECORD2TP
description: "Memorecord 2TP"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_MEMORECORD2TP

**Memorecord 2TP**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MemoRecord` | ✓ | |  |  |  |  |
| `MemoRecordDescription` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `MemoRecordCategory` |  | |  |  |  |  |
| `MemoRecordType` |  | |  |  |  |  |
| `PlanningLevel` |  | |  |  |  |  |
| `MemoRecordBalanceDateDimension` |  | |  |  |  |  |
| `TransactionDate` |  | |  |  |  |  |
| `MemoRecordExpirationDateTime` |  | |  |  |  |  |
| `MemoRecordStatus_2` |  | |  |  |  |  |
| `MemoRecordStatus` |  | |  |  |  |  |
| `BankAccountInternalID` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `CashFlowReconciliationBundle` |  | |  |  |  |  |
| `CashPlanningGroup` |  | |  |  |  |  |
| `LiquidityItem` |  | |  |  |  |  |
| `BankStatementShortID` |  | |  | `cast( BankStatementShortID as kukey_eb preserving type )` |  |  |
| `BankStatement` |  | |  | `cast( BankStatement as aznum_lg_eb preserving type )` |  |  |
| `BankStatementItem` |  | |  | `cast( BankStatementItem as esnum_eb preserving type )` |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `MemoRecordStatisticsIndicator` |  | |  |  |  |  |
| `MemoRecordCharacteristic` |  | |  |  |  |  |
| `MemoRecordInternalReference` |  | |  |  |  |  |
| `BankStatementDate` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `BankAccountNumber` |  | |  |  |  |  |
| `MemoRecordStatusCriticality` |  | |  |  |  |  |
| `MemoRecdExprtnCritlty` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeByUser` |  | |  |  |  |  |
| `CompanyCodeName` |  | |  |  |  |  |
| `MemoRecdOffstgCoCodeName` |  | |  |  |  |  |
| `ProfitCenterValidityEndDate` |  | |  |  |  |  |
| `HouseBank` |  | |  |  |  |  |
| `HouseBankAccount` |  | |  |  |  |  |
| `MemoRecordImport` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `MemoRecordIsLeadingDocument` |  | |  |  |  |  |
| `MemoRecdOffsettingCompanyCode` |  | |  |  |  |  |
| `MemoRecordOffsettingHouseBank` |  | |  |  |  |  |
| `MemoRecdOffstgHouseBankAccount` |  | |  |  |  |  |
| `MemoRecordPairingReason` |  | |  |  |  |  |
| `MemoRecdOffstgBkAcctInternalID` |  | |  |  |  |  |
| `OffsettingMemoRecord` |  | |  |  |  |  |
| `MemoRecdOffstgTransactionDate` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Memo Record - TP'
@AccessControl.authorizationCheck: #MANDATORY
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM : { viewType: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    sapObjectNodeType.name: 'MemoRecord',
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    semanticKey: [ 'MemoRecord' ],
    usageType: {
        serviceQuality: #C,
        sizeCategory:   #L,
        dataClass:      #TRANSACTIONAL
    }
}
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['MemoRecord'],
  elementSuffix: 'MMS',
  quota: {
    maximumFields: 350, //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 10000 //Set to maximum allowed bytes
  }
}


define root view entity I_MemoRecord2TP
  provider contract transactional_interface
  as projection on R_MemoRecordTP as MemoRecord
{
  key MemoRecord,
      MemoRecordDescription,
      CompanyCode,
      MemoRecordCategory,
      MemoRecordType,
      PlanningLevel,
      MemoRecordBalanceDateDimension,
      TransactionDate,
      MemoRecordExpirationDateTime,
      MemoRecordStatus_2,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'MemoRecordStatus_2'
      MemoRecordStatus,
      BankAccountInternalID,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      AmountInTransactionCurrency,
      TransactionCurrency,
      CashFlowReconciliationBundle,
      CashPlanningGroup,
      LiquidityItem,
      cast( BankStatementShortID as kukey_eb preserving type ) as BankStatementShortID,
      cast( BankStatement as aznum_lg_eb preserving type )     as BankStatement,
      cast( BankStatementItem as esnum_eb preserving type )    as BankStatementItem,
      ProfitCenter,
      Fund,
      GrantID,
      MemoRecordStatisticsIndicator,
      MemoRecordCharacteristic,
      MemoRecordInternalReference,
      BankStatementDate,
      ControllingArea,
      FinancialManagementArea,
      CreationDate,
      LastChangeDate,
      BankAccountNumber,
      MemoRecordStatusCriticality,
      MemoRecdExprtnCritlty,
      LastChangeDateTime,
      LocalLastChangeDateTime,
      CreatedByUser,
      CreationDateTime,
      LastChangeByUser,
      CompanyCodeName,
      MemoRecdOffstgCoCodeName,
      ProfitCenterValidityEndDate,
      //      MemoRecordChannel,
      HouseBank,
      HouseBankAccount,
      MemoRecordImport,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      AmountInCompanyCodeCurrency,
      CompanyCodeCurrency,
      GLAccount,
      PostingDate,
      MemoRecordIsLeadingDocument,
      MemoRecdOffsettingCompanyCode,
      MemoRecordOffsettingHouseBank,
      MemoRecdOffstgHouseBankAccount,
      MemoRecordPairingReason,
      MemoRecdOffstgBkAcctInternalID,
      OffsettingMemoRecord,
      MemoRecdOffstgTransactionDate

}
```
