---
name: I_CASRVCRECONNECTIONREQUEST
description: "Casrvcreconnectionrequest"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASRVCRECONNECTIONREQUEST

**Casrvcreconnectionrequest**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAServiceDisconnectionRequest` | ✓ | |  | `dscpnr` |  |  |
| `CAServiceReconnectionRequest` | ✓ | |  | `recpnr` |  |  |
| `CASrvcReconncnReqIsInvalid` | ✓ | |  | `xrpinv` |  |  |
| `CASrvcReconncnReqIsObsolete` | ✓ | |  | `xiobs` |  |  |
| `CASrvcReconncnReqStatus` |  | |  | `cast( case when xrpinv = 'X' then 'I' when xiobs = 'X' then 'O' else 'V' end as recreq_stat_kk preserving type )` |  |  |
| `BusinessPartner` |  | |  | `cast( gpart as bu_partner preserving type )` |  |  |
| `ContractAccount` |  | |  | `cast( vkont as vkont_gfn_kk preserving type )` |  |  |
| `CAContract` |  | |  | `cast( vtref as vtref_kk preserving type )` |  |  |
| `CASubApplication` |  | |  | `subap` |  |  |
| `CADunningAmount` |  | |  | `mbetm` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CAClearingAmountInClearingCrcy` |  | |  | `augbt` |  |  |
| `CAClearingCurrency` |  | |  | `augwa` |  |  |
| `CreatedByUser` |  | |  | `uname` |  |  |
| `CreationDate` |  | |  | `crdate` |  |  |
| `CreationTime` |  | |  | `crtime` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAProviderContract` | | ✓ | | | | |
| `_CASrvcReconncnReqStatus` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_ClearingCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CAProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CASrvcReconncnReqStatus` | `I_CASrvcReconncnReqStatus` | [1..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [1..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [1..1] |
| `_ClearingCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]

@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #FACT,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true } }

@EndUserText.label: 'Service Reconnection Request'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgServiceReconncnReq',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE],

                usageType:{ dataClass: #TRANSACTIONAL,
                            serviceQuality: #A,
                            sizeCategory: #S } }

@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CASrvcReconnectionRequest
  as select from dfkk_reco_prop

  association [1..1] to I_BusinessPartner          as _BusinessPartner         on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CAProviderContractHeader as _CAProviderContract      on  $projection.CASubApplication = 'P'
                                                                               and $projection.CAContract       = _CAProviderContract.CAProviderContract
  association [1..1] to I_CASrvcReconncnReqStatus  as _CASrvcReconncnReqStatus on  $projection.CASrvcReconncnReqStatus = _CASrvcReconncnReqStatus.CASrvcReconncnReqStatus
  association [0..1] to I_CASubApplication         as _CASubApplication        on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [1..1] to I_ContractAccountHeader    as _ContractAccount         on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [1..1] to I_ContractAccountPartner   as _ContractAccountPartner  on  $projection.ContractAccount = _ContractAccountPartner.ContractAccount
                                                                               and $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
  association [1..1] to I_Currency                 as _ClearingCurrency        on  $projection.CAClearingCurrency = _ClearingCurrency.Currency
  association [1..1] to I_Currency                 as _TransactionCurrency     on  $projection.TransactionCurrency = _TransactionCurrency.Currency

{
  key dscpnr                                        as CAServiceDisconnectionRequest,
  key recpnr                                        as CAServiceReconnectionRequest,
  key xrpinv                                        as CASrvcReconncnReqIsInvalid,
  key xiobs                                         as CASrvcReconncnReqIsObsolete,

      @ObjectModel.foreignKey.association: '_CASrvcReconncnReqStatus'
      cast( case
          when xrpinv = 'X' then 'I'
          when xiobs = 'X' then 'O'
          else 'V'
      end as recreq_stat_kk preserving type )       as CASrvcReconncnReqStatus,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast( gpart as bu_partner preserving type )   as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccount'
      cast( vkont as vkont_gfn_kk preserving type ) as ContractAccount,
      cast( vtref as vtref_kk preserving type )     as CAContract,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                         as CASubApplication,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mbetm                                         as CADunningAmount,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                         as TransactionCurrency,

      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      augbt                                         as CAClearingAmountInClearingCrcy,
      @ObjectModel.foreignKey.association: '_ClearingCurrency'
      augwa                                         as CAClearingCurrency,

      uname                                         as CreatedByUser,
      crdate                                        as CreationDate,
      crtime                                        as CreationTime,

      /* associations */
      _BusinessPartner,
      _CAProviderContract,
      _CASrvcReconncnReqStatus,
      _CASubApplication,
      _ClearingCurrency,
      _ContractAccount,
      _ContractAccountPartner,
      _TransactionCurrency
}
```
