---
name: I_CAINSTALLMENTPLANHEADER
description: "Cainstallmentplanheader"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAINSTALLMENTPLANHEADER

**Cainstallmentplanheader**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInstallmentPlan` | ✓ | |  | `rpnum` |  |  |
| `CAInstallmentPlanCategory` |  | |  | `rpcat` |  |  |
| `CAInstlmntPlanDeactivationDate` |  | |  | `deadt` |  |  |
| `CAInstlmntPlanDeactivationType` |  | |  | `deman` |  |  |
| `CADeactivationOpenAmountInTC` |  | |  | `deoff` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CAInstlmntPlanDactvtnRsn` |  | |  | `deagd` |  |  |
| `CAInstallmentPlanStartDate` |  | |  | `sttdt` |  |  |
| `CAInstallmentPlanEndDate` |  | |  | `enddt` |  |  |
| `CANumberOfInstallments` |  | |  | `ninst` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `BusinessPartner` |  | |  | `gpart` |  |  |
| `CAContract` |  | |  | `vtref` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `CAInstlmntPlanIntrstCalcType` |  | |  | `dzins` |  |  |
| `CAIntrstAndChargesAreDistrd` |  | |  | `gzver` |  |  |
| `CAInterestDueCategory` |  | |  | `faein` |  |  |
| `CAInstlmntPlanDactvtnEntryDate` |  | |  | `dpudt` |  |  |
| `CAInstlmntPlanDactvtnEntryTime` |  | |  | `dputm` |  |  |
| `CAWorkflowCheckReason` |  | |  | `c4eye` |  |  |
| `CAWorkflowCheckProcess` |  | |  | `c4eyp` |  |  |
| `CASubApplication` |  | |  | `subap` |  |  |
| `CANumberOfAddlIntrstInstlmnts` |  | |  | `anzintrt` |  |  |
| `CAInterestCalculationStartDate` |  | |  | `sttin` |  |  |
| `CAInstlmntPlnIsChgdByInvoicing` |  | |  | `invip` |  |  |
| `CAPredecessorInstallmentPlan` |  | |  | `orig_rpnum` |  |  |
| `CAInstlmntPlanGoodwillValue` |  | |  | `gwval` |  |  |
| `CAInstallmentPlanIssueDate` |  | |  | `cpudt` |  |  |
| `CAInstallmentPlanIssueTime` |  | |  | `cputm` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAInstallmentPlanCategory` | | ✓ | | | | |
| `_CAPredecessorInstallmentPlan` | | ✓ | | | | |
| `_CAInstlmntPlanDactvtnRsn` | | ✓ | | | | |
| `_CAProviderContract` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CAWorkflowCheckReason` | | ✓ | | | | |
| `_CAWorkflowCheckProcess` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CAInstallmentPlanCategory` | `I_CAInstallmentPlanCategory` | [1..1] |
| `_CAPredecessorInstallmentPlan` | `I_CAInstallmentPlanHeader` | [0..1] |
| `_CAInstlmntPlanDactvtnRsn` | `I_CAInstlmntPlanDactvtnRsn` | [0..1] |
| `_CAProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CAWorkflowCheckReason` | `I_CAWorkflowCheckReason` | [0..1] |
| `_CAWorkflowCheckProcess` | `I_CAWorkflowCheckProcess` | [0..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [1..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_Extension` | `E_CAInstallmentPlan` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Contract Accounting Installment Plan'

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true } }
                               
@Metadata: { ignorePropagatedAnnotations: true, 
             allowExtensions:true }

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAInstallmentPlan',
                sapObjectNodeType.name: 'ContrAcctgInstallmentPlan',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,                                      
                                         #ANALYTICAL_PROVIDER,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XXL } }

@VDM.viewType: #BASIC

define view entity I_CAInstallmentPlanHeader
  as select from fkk_instpln_head

  association [1..1] to I_BusinessPartner           as _BusinessPartner              on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CAInstallmentPlanCategory as _CAInstallmentPlanCategory    on  $projection.CAInstallmentPlanCategory = _CAInstallmentPlanCategory.CAInstallmentPlanCategory
  association [0..1] to I_CAInstallmentPlanHeader   as _CAPredecessorInstallmentPlan on  $projection.CAPredecessorInstallmentPlan = _CAPredecessorInstallmentPlan.CAInstallmentPlan
  association [0..1] to I_CAInstlmntPlanDactvtnRsn  as _CAInstlmntPlanDactvtnRsn     on  $projection.CAInstlmntPlanDactvtnRsn = _CAInstlmntPlanDactvtnRsn.CAInstlmntPlanDactvtnRsn
  association [0..1] to I_CAProviderContractHeader  as _CAProviderContract           on  $projection.CASubApplication = 'P'
                                                                                     and $projection.CAContract       = _CAProviderContract.CAProviderContract
  association [0..1] to I_CASubApplication          as _CASubApplication             on  $projection.CASubApplication = _CASubApplication.CASubApplication //SUBAP
  association [0..1] to I_CAWorkflowCheckReason     as _CAWorkflowCheckReason        on  $projection.CAWorkflowCheckReason = _CAWorkflowCheckReason.CAWorkflowCheckReason
  association [0..1] to I_CAWorkflowCheckProcess    as _CAWorkflowCheckProcess       on  $projection.CAWorkflowCheckProcess = _CAWorkflowCheckProcess.CAWorkflowCheckProcess
  association [1..1] to I_ContractAccountHeader     as _ContractAccount              on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [1..1] to I_ContractAccountPartner    as _ContractAccountPartner       on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                                     and $projection.ContractAccount = _ContractAccountPartner.ContractAccount
  association [1..1] to I_CompanyCode               as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Currency                  as _TransactionCurrency          on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to E_CAInstallmentPlan         as _Extension                 on $projection.CAInstallmentPlan           = _Extension.CAInstallmentPlan
{
  key rpnum      as CAInstallmentPlan,

      @ObjectModel.foreignKey.association: '_CAInstallmentPlanCategory'
      rpcat      as CAInstallmentPlanCategory,
      deadt      as CAInstlmntPlanDeactivationDate,
      deman      as CAInstlmntPlanDeactivationType,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      deoff      as CADeactivationOpenAmountInTC,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers      as TransactionCurrency,
      @ObjectModel.foreignKey.association: '_CAInstlmntPlanDactvtnRsn'
      deagd      as CAInstlmntPlanDactvtnRsn,
      sttdt      as CAInstallmentPlanStartDate,
      enddt      as CAInstallmentPlanEndDate,
      ninst      as CANumberOfInstallments,

      /* organizational and master data */
      @ObjectModel.foreignKey.association: '_ContractAccount'
      vkont      as ContractAccount,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      gpart      as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CAProviderContract'
      vtref      as CAContract,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs      as CompanyCode,

      dzins      as CAInstlmntPlanIntrstCalcType,
      @Semantics.booleanIndicator
      gzver      as CAIntrstAndChargesAreDistrd,
      faein      as CAInterestDueCategory,
      dpudt      as CAInstlmntPlanDactvtnEntryDate,
      dputm      as CAInstlmntPlanDactvtnEntryTime,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckReason'
      c4eye      as CAWorkflowCheckReason,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckProcess'
      c4eyp      as CAWorkflowCheckProcess,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap      as CASubApplication,
      anzintrt   as CANumberOfAddlIntrstInstlmnts,
      sttin      as CAInterestCalculationStartDate,
      invip      as CAInstlmntPlnIsChgdByInvoicing,
      @ObjectModel.foreignKey.association: '_CAPredecessorInstallmentPlan'
      orig_rpnum as CAPredecessorInstallmentPlan,
      gwval      as CAInstlmntPlanGoodwillValue,
      cpudt      as CAInstallmentPlanIssueDate,
      cputm      as CAInstallmentPlanIssueTime,

      _BusinessPartner,
      _CAInstallmentPlanCategory,
      _CAInstlmntPlanDactvtnRsn,
      _CAPredecessorInstallmentPlan,
      _CAProviderContract,
      _CASubApplication,
      _CAWorkflowCheckProcess,
      _CAWorkflowCheckReason,
      _CompanyCode,
      _ContractAccount,
      _ContractAccountPartner,
      _TransactionCurrency
}
```
