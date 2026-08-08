---
name: I_PROVIDERCONTRACT
description: "Providercontract"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACT

**Providercontract**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProviderContract` | ✓ | |  | `vtkey` |  |  |
| `BusinessPartner` |  | |  | `cast(gpart as bu_partner preserving type )` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `cast(ertim as ttet_dt_cr_time preserving type )` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `IsMarkedForDeletion` |  | |  | `cast(loevm as loevm preserving type )` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangeTime` |  | |  | `aetim` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `CAProviderContractName` |  | |  | `vtbez` |  |  |
| `CAProviderContractExtReference` |  | |  | `vtalt` |  |  |
| `CAPrvdrContrStartDateTime` |  | |  | `vtbeg` |  |  |
| `CAPrvdrContrEndDateTime` |  | |  | `vtend` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `CAAuthorizationGroup` |  | |  | `begru` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `TimeZoneID` |  | |  | `cast(tzone as tznzone preserving type )` |  |  |
| `CAProviderContractCategory` |  | |  | `vtcat` |  |  |
| `CAProviderContractMigrtnStatus` |  | |  | `migst` |  |  |
| `CAProviderContractType` |  | |  | `vtchr` |  |  |
| `CAProviderContractStatus` |  | |  | `statu` |  |  |
| `CAProviderContractSender` |  | |  | `sender` |  |  |
| `PrvdrContrEarliestEndDateTime` |  | |  | `vtend_min` |  |  |
| `MinNrOfMonthsForContractPeriod` |  | |  | `vtper_min` |  |  |
| `NrOfMonthsForContractRenewal` |  | |  | `vtper_rnwl` |  |  |
| `NrOfDaysForContrNoticePeriod` |  | |  | `vtper_canc` |  |  |
| `BudgetBillingPlanType` |  | |  | `uti_bbptype` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAAuthorizationGroup` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_ProviderContractCategory` | | ✓ | | | | |
| `_ProviderContractMigrtnSts` | | ✓ | | | | |
| `_ProviderContractType` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_ProviderContractSender` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CAAuthorizationGroup` | `I_CAAuthorizationGroup` | [0..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_ProviderContractCategory` | `I_ProviderContractCategory` | [1..1] |
| `_ProviderContractMigrtnSts` | `I_ProviderContractMigrtnSts` | [0..1] |
| `_ProviderContractType` | `I_ProviderContractType` | [1..1] |
| `_ProviderContractStatus` | `I_ProviderContractStatus` | [1..1] |
| `_ProviderContractSender` | `I_ProviderContractSender` | [0..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_TimeZone` | `I_TimeZone` | [1..1] |
| `_Extension` | `E_CAProviderContractHeader` | [1..1] |

## Source Code

```abap
@AbapCatalog: { compiler.compareFilter:true,
                preserveKey:true,
                sqlViewName: 'IPRVDRCONTR' }

@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking : #REQUIRED }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Provider Contract'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { representativeKey: 'ProviderContract',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #B,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view I_ProviderContract
  as select from dfkk_vt_h

  association [1..1] to I_BusinessPartner           as _BusinessPartner           on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CAAuthorizationGroup      as _CAAuthorizationGroup      on  $projection.CAAuthorizationGroup                 = _CAAuthorizationGroup.CAAuthorizationGroup
                                                                                  and _CAAuthorizationGroup.CAAuthorizationGroupObject = 'CA_BILLCTR'
  association [1..1] to I_CompanyCode               as _CompCode                  on  $projection.CompanyCode = _CompCode.CompanyCode
  association [1..1] to I_ProviderContractCategory  as _ProviderContractCategory  on  $projection.CAProviderContractCategory = _ProviderContractCategory.CAProviderContractCategory
  association [0..1] to I_ProviderContractMigrtnSts as _ProviderContractMigrtnSts on  $projection.CAProviderContractMigrtnStatus = _ProviderContractMigrtnSts.CAProviderContractMigrtnStatus
  association [1..1] to I_ProviderContractType      as _ProviderContractType      on  $projection.CAProviderContractType = _ProviderContractType.CAProviderContractType
  association [1..1] to I_ProviderContractStatus    as _ProviderContractStatus    on  $projection.CAProviderContractStatus = _ProviderContractStatus.CAProviderContractStatus
  association [0..1] to I_ProviderContractSender    as _ProviderContractSender    on  $projection.CAProviderContractSender = _ProviderContractSender.CAProviderContractSender

  association [1..1] to I_User                      as _CreatedByUser             on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                      as _LastChangedByUser         on  $projection.LastChangedByUser = _LastChangedByUser.UserID

  association [1..1] to I_TimeZone                  as _TimeZone                  on  $projection.TimeZoneID = _TimeZone.TimeZoneID

  // Key User Extensibility. Is registered in transaction SCFD_REGISTRY. Do not change E_CAProviderContractHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CAProviderContractHeader  as _Extension                 on $projection.ProviderContract = _Extension.CAProviderContract
{
  key vtkey                                           as ProviderContract,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast(gpart as bu_partner preserving type )      as BusinessPartner,
      erdat                                           as CreationDate,
      cast(ertim as ttet_dt_cr_time preserving type ) as CreationTime,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      ernam                                           as CreatedByUser,
      cast(loevm as loevm preserving type )           as IsMarkedForDeletion,
      aedat                                           as LastChangeDate,
      aetim                                           as LastChangeTime,
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      aenam                                           as LastChangedByUser,
      vtbez                                           as CAProviderContractName,
      vtalt                                           as CAProviderContractExtReference,
      vtbeg                                           as CAPrvdrContrStartDateTime,
      vtend                                           as CAPrvdrContrEndDateTime,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CAAuthorizationGroup'
      begru                                           as AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_CAAuthorizationGroup'
      begru                                           as CAAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_CompCode'
      bukrs                                           as CompanyCode,
      @ObjectModel.foreignKey.association: '_TimeZone'
      cast(tzone as tznzone preserving type )         as TimeZoneID,
      @ObjectModel.foreignKey.association: '_ProviderContractCategory'
      vtcat                                           as CAProviderContractCategory,
      @ObjectModel.foreignKey.association: '_ProviderContractMigrtnSts'
      migst                                           as CAProviderContractMigrtnStatus,
      @ObjectModel.foreignKey.association: '_ProviderContractType'
      vtchr                                           as CAProviderContractType,
      @ObjectModel.foreignKey.association: '_ProviderContractStatus'
      statu                                           as CAProviderContractStatus,
      @ObjectModel.foreignKey.association: '_ProviderContractSender'
      sender                                          as CAProviderContractSender,
      vtend_min                                       as PrvdrContrEarliestEndDateTime,
      vtper_min                                       as MinNrOfMonthsForContractPeriod,
      vtper_rnwl                                      as NrOfMonthsForContractRenewal,
      vtper_canc                                      as NrOfDaysForContrNoticePeriod,
      uti_bbptype                                     as BudgetBillingPlanType,

      /* association */
      _BusinessPartner,
      _CAAuthorizationGroup,
      _CompCode,
      _ProviderContractCategory,
      _ProviderContractMigrtnSts,
      _ProviderContractType,
      _ProviderContractStatus,
      _ProviderContractSender,
      _CreatedByUser,
      _LastChangedByUser,
      _TimeZone

}
```
