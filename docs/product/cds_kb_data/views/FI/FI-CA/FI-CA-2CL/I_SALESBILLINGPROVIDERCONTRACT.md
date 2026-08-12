---
name: I_SALESBILLINGPROVIDERCONTRACT
description: "Salesbillingprovidercontract"
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
  - billing
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_SALESBILLINGPROVIDERCONTRACT

**Salesbillingprovidercontract**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesBillingProviderContract` | ✓ | |  | `ProviderContract` |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `CAProviderContractName` |  | |  |  |  |  |
| `CAPrvdrContrStartDateTime` |  | |  |  |  |  |
| `CAPrvdrContrEndDateTime` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `TimeZoneID` |  | |  |  |  |  |
| `CAProviderContractStatus` |  | |  |  |  |  |
| `CAProviderContractSender` |  | |  |  |  |  |
| `PrvdrContrEarliestEndDateTime` |  | |  |  |  |  |
| `MinNrOfMonthsForContractPeriod` |  | |  |  |  |  |
| `NrOfMonthsForContractRenewal` |  | |  |  |  |  |
| `NrOfDaysForContrNoticePeriod` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_ProviderContractSender` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CAProviderContractHeader` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #REQUIRED

@ObjectModel.representativeKey: 'SalesBillingProviderContract'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Provider Contract for Sales Billing'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #NONE

@Analytics.technicalName: 'ISlsBlgPrvCtr'

@VDM.viewType: #BASIC
define view entity I_SalesBillingProviderContract
  as select from I_ProviderContract

  // Key User Extensibility. Is registered in transaction SCFD_REGISTRY. Do not change E_CAProviderContractHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CAProviderContractHeader as _Extension on $projection.SalesBillingProviderContract = _Extension.CAProviderContract
{

  key ProviderContract as SalesBillingProviderContract,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,
      IsMarkedForDeletion,
      CAProviderContractName,
      CAPrvdrContrStartDateTime,
      CAPrvdrContrEndDateTime,
      CompanyCode,
      TimeZoneID,
      CAProviderContractStatus,
      CAProviderContractSender,
      PrvdrContrEarliestEndDateTime,
      MinNrOfMonthsForContractPeriod,
      NrOfMonthsForContractRenewal,
      NrOfDaysForContrNoticePeriod,

      /* Administrative Data */
      CreationDate,
      CreationTime,
      CreatedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,

      /* Associations */
      _BusinessPartner,
      _CompCode,
      _CreatedByUser,
      _LastChangedByUser,
      _TimeZone,
      _ProviderContractStatus,
      _ProviderContractSender
}
where
  CAProviderContractCategory = '1'
```
