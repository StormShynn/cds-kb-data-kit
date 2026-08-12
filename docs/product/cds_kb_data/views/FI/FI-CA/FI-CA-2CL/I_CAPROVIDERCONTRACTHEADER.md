---
name: I_CAPROVIDERCONTRACTHEADER
description: "Caprovidercontractheader"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROVIDERCONTRACTHEADER

**Caprovidercontractheader**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAProviderContract` | ✓ | |  | `ProviderContract` |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CAProviderContractName` |  | |  |  |  |  |
| `CAProviderContractExtReference` |  | |  |  |  |  |
| `CAPrvdrContrStartDateTime` |  | |  |  |  |  |
| `CAPrvdrContrEndDateTime` |  | |  |  |  |  |
| `CAAuthorizationGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `TimeZoneID` |  | |  |  |  |  |
| `CAProviderContractCategory` |  | |  |  |  |  |
| `CAProviderContractMigrtnStatus` |  | |  |  |  |  |
| `CAProviderContractType` |  | |  |  |  |  |
| `CAProviderContractStatus` |  | |  |  |  |  |
| `CAProviderContractSender` |  | |  |  |  |  |
| `PrvdrContrEarliestEndDateTime` |  | |  |  |  |  |
| `MinNrOfMonthsForContractPeriod` |  | |  |  |  |  |
| `NrOfMonthsForContractRenewal` |  | |  |  |  |  |
| `NrOfDaysForContrNoticePeriod` |  | |  |  |  |  |
| `BudgetBillingPlanType` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_CAAuthorizationGroup` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |
| `_ProviderContractCategory` | | ✓ | | | | |
| `_ProviderContractMigrtnSts` | | ✓ | | | | |
| `_ProviderContractType` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_ProviderContractSender` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CAProviderContractHeader` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICAPRVDRCONTRH'

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking : #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true },
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Provider Contract Header'

@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }

@ObjectModel: { representativeKey: 'CAProviderContract',
                sapObjectNodeType.name: 'ContrAcctgProviderContract',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION  ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #B,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view I_CAProviderContractHeader
  as select from I_ProviderContract

  // Key User Extensibility. Is registered in transaction SCFD_REGISTRY. Do not change E_CAProviderContractHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CAProviderContractHeader as _Extension on $projection.CAProviderContract = _Extension.CAProviderContract
{
  key ProviderContract as CAProviderContract,

      BusinessPartner,
      CreationDate,
      CreationTime,
      CreatedByUser,
      IsMarkedForDeletion,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,
      CAProviderContractName,
      CAProviderContractExtReference,
      CAPrvdrContrStartDateTime,
      CAPrvdrContrEndDateTime,
      CAAuthorizationGroup,
      CompanyCode,
      TimeZoneID,
      CAProviderContractCategory,
      CAProviderContractMigrtnStatus,
      CAProviderContractType,
      CAProviderContractStatus,
      CAProviderContractSender,
      PrvdrContrEarliestEndDateTime,
      MinNrOfMonthsForContractPeriod,
      NrOfMonthsForContractRenewal,
      NrOfDaysForContrNoticePeriod,
      BudgetBillingPlanType,

      /* association */
      _BusinessPartner,
      _CreatedByUser,
      _LastChangedByUser,
      _CAAuthorizationGroup,
      _CompCode,
      _TimeZone,
      _ProviderContractCategory,
      _ProviderContractMigrtnSts,
      _ProviderContractType,
      _ProviderContractStatus,
      _ProviderContractSender

}
```
