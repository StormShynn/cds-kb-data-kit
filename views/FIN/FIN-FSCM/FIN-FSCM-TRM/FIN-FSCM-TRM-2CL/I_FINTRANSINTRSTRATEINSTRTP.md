---
name: I_FINTRANSINTRSTRATEINSTRTP
description: Fintransintrstrateinstrtp
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSINTRSTRATEINSTRTP

**Fintransintrstrateinstrtp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `CompanyCode` |
| key `FinancialTransaction` | `FinancialTransaction` |
| `TreasuryFinancialObject` | `TreasuryFinancialObject` |
| `CreatedByUser` | `CreatedByUser` |
| `FinTransCreationDate` | `FinTransCreationDate` |
| `FinTransCreationTime` | `FinTransCreationTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `FinInstrumentLastChangedTime` | `FinInstrumentLastChangedTime` |
| `TreasuryContractType` | `TreasuryContractType` |
| `FinancialInstrProductCategory` | `FinancialInstrProductCategory` |
| `FinancialInstrumentProductType` | `FinancialInstrumentProductType` |
| `FinInstrTransactionCategory` | `FinInstrTransactionCategory` |
| `FinancialInstrTransactionType` | `FinancialInstrTransactionType` |
| `FinTransProcessingCategory` | `FinTransProcessingCategory` |
| `TermStartDate` | `TermStartDate` |
| `TermStartDateIsInclusive` | `TermStartDateIsInclusive` |
| `FinTransNoticePeriod` | `FinTransNoticePeriod` |
| `FinTransNoticePeriodUnit` | `FinTransNoticePeriodUnit` |
| `FinTransFactoryCalendar1` | `FinTransFactoryCalendar1` |
| `FinTransFactoryCalendar2` | `FinTransFactoryCalendar2` |
| `Counterparty` | `Counterparty` |
| `FinancialInstrumentGuarantor` | `FinancialInstrumentGuarantor` |
| `Portfolio` | `Portfolio` |
| `TreasuryFinanceProject` | `TreasuryFinanceProject` |
| `FinancialInstrumentAssignment` | `FinancialInstrumentAssignment` |
| `FinancialInstrumentReference` | `FinancialInstrumentReference` |
| `FinancialInstrCharacteristic` | `FinancialInstrCharacteristic` |
| `TreasuryValuationClass` | `TreasuryValuationClass` |
| `BusinessArea` | `BusinessArea` |
| `CostCenter` | `CostCenter` |
| `HedgingClassification` | `HedgingClassification` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `TreasuryFacilityCompanyCode` | `TreasuryFacilityCompanyCode` |
| `TreasuryFacility` | `TreasuryFacility` |
| `FinancialInstrumentStatus` | `FinancialInstrumentStatus` |
| `FinTransReleaseStatus` | `FinTransReleaseStatus` |
| `TransactionCurrency` | `TransactionCurrency` |
| `FinInstrLastActiveActivity` | `FinInstrLastActiveActivity` |
| `FinTransIsRiskMitigating` | `FinTransIsRiskMitigating` |
| `TermEndDate` | `TermEndDate` |
| `ClassificationOfFinInstr` | `ClassificationOfFinInstr` |
| `FinTransIntrstHndlgAtRollover` | `FinTransIntrstHndlgAtRollover` |
| `RolloverDfrrdIntrstPyoutDte` | `RolloverDfrrdIntrstPyoutDte` |
| `_FinTransCondition` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Interest Rate Instrument - TP'
@VDM.viewType: #TRANSACTIONAL
@ObjectModel:{
    usageType : {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass: #TRANSACTIONAL
    }
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'FinTransIntrstRateInstr'
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
define root view entity I_FinTransIntrstRateInstrTP 
  provider contract transactional_interface
  as projection on R_FinTransIntrstRateInstrTP 
{

 key  CompanyCode,
 key  FinancialTransaction,

      TreasuryFinancialObject,
      CreatedByUser,
      FinTransCreationDate,
      FinTransCreationTime,
      LastChangedByUser,
      LastChangeDate,
      FinInstrumentLastChangedTime,
      TreasuryContractType,
      FinancialInstrProductCategory,
      FinancialInstrumentProductType,
      FinInstrTransactionCategory,
      FinancialInstrTransactionType,
      FinTransProcessingCategory,
      TermStartDate,
      TermStartDateIsInclusive,
      FinTransNoticePeriod,
      FinTransNoticePeriodUnit,
      FinTransFactoryCalendar1,
      FinTransFactoryCalendar2,
      Counterparty,
      FinancialInstrumentGuarantor,
      Portfolio,
      TreasuryFinanceProject,
      FinancialInstrumentAssignment,
      FinancialInstrumentReference,
      FinancialInstrCharacteristic,
      TreasuryValuationClass,
      BusinessArea,
      CostCenter,
      HedgingClassification,
      ProfitCenter,
      WBSElementInternalID,
      TreasuryFacilityCompanyCode,
      TreasuryFacility,
      FinancialInstrumentStatus,
      FinTransReleaseStatus,
      TransactionCurrency,
      FinInstrLastActiveActivity,
      FinTransIsRiskMitigating,
      TermEndDate,
      ClassificationOfFinInstr,
      
      FinTransIntrstHndlgAtRollover,
      RolloverDfrrdIntrstPyoutDte,
      
      //Associations
      _FinTransCondition
}
```
