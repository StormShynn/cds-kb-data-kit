---
name: I_CASRVCDISCONNECTIONREQUEST
description: Casrvcdisconnectionrequest
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASRVCDISCONNECTIONREQUEST

**Casrvcdisconnectionrequest**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAServiceDisconnectionRequest` | `dscpnr` |
| key `CASrvcDisconncnReqIsInvalid` | `xdpinv` |
| key `CASrvcDisconncnReqIsObsolete` | `xiobs` |
| `CASrvcDisconncnReqStatus` | `cast( case when xdpinv = 'X' then 'I' when xiobs = 'X' then 'O' else 'V' end as disreq_status_kk preserving type )` |
| `CAMassRunDate` | `laufd` |
| `CAMassRunID` | `laufi` |
| `BusinessPartner` | `cast( gpart as bu_partner preserving type )` |
| `ContractAccount` | `cast( vkont as vkont_gfn_kk preserving type )` |
| `CAContract` | `cast( vtref as vtref_kk preserving type )` |
| `CASubApplication` | `subap` |
| `CompanyCode` | `bukrs` |
| `Division` | `spart` |
| `CADunningAmount` | `mbetm` |
| `TransactionCurrency` | `waers` |
| `CreatedByUser` | `uname` |
| `CreationDate` | `crdate` |
| `CreationTime` | `crtime` |
| `_BusinessPartner` | *Association* |
| `_CAProviderContract` | *Association* |
| `_CASrvcDisconncnReqStatus` | *Association* |
| `_CASubApplication` | *Association* |
| `_CompanyCode` | *Association* |
| `_ContractAccountPartner` | *Association* |
| `_ContractAccount` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_Division` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CAProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CASrvcDisconncnReqStatus` | `I_CASrvcDisconncnReqStatus` | [1..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [1..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_Division` | `I_Division` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]

@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #FACT,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true } }

@EndUserText.label: 'Service Disconnection Request'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgServiceDisconncnReq',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType:{ dataClass: #TRANSACTIONAL,
                            serviceQuality: #A,
                            sizeCategory: #S } }

@VDM.viewType: #BASIC


/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CASrvcDisconnectionRequest

  as select from dfkk_disco_proph

  association [1..1] to I_BusinessPartner          as _BusinessPartner          on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CAProviderContractHeader as _CAProviderContract       on  $projection.CAContract       = _CAProviderContract.CAProviderContract
                                                                                and $projection.CASubApplication = 'P'
  association [1..1] to I_CASrvcDisconncnReqStatus as _CASrvcDisconncnReqStatus on  $projection.CASrvcDisconncnReqStatus = _CASrvcDisconncnReqStatus.CASrvcDisconncnReqStatus
  association [0..1] to I_CASubApplication         as _CASubApplication         on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_ContractAccountPartner   as _ContractAccountPartner   on  $projection.ContractAccount = _ContractAccountPartner.ContractAccount
                                                                                and $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
  association [1..1] to I_ContractAccountHeader    as _ContractAccount          on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [1..1] to I_Currency                 as _TransactionCurrency      on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Division                 as _Division                 on  $projection.Division = _Division.Division


{
  key dscpnr                                        as CAServiceDisconnectionRequest,
  key xdpinv                                        as CASrvcDisconncnReqIsInvalid,
  key xiobs                                         as CASrvcDisconncnReqIsObsolete,

      @ObjectModel.foreignKey.association: '_CASrvcDisconncnReqStatus'
      cast( case
          when xdpinv = 'X' then 'I'
          when xiobs = 'X' then 'O'
          else 'V'
      end as disreq_status_kk preserving type )     as CASrvcDisconncnReqStatus,

      laufd                                         as CAMassRunDate,
      laufi                                         as CAMassRunID,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast( gpart as bu_partner preserving type )   as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccount'
      cast( vkont as vkont_gfn_kk preserving type ) as ContractAccount,
      @ObjectModel.foreignKey.association: '_CAProviderContract'
      cast( vtref as vtref_kk preserving type )     as CAContract,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                         as CASubApplication,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                         as CompanyCode,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                         as Division,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mbetm                                         as CADunningAmount,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                         as TransactionCurrency,

      uname                                         as CreatedByUser,
      crdate                                        as CreationDate,
      crtime                                        as CreationTime,

      /* associations */
      _BusinessPartner,
      _CAProviderContract,
      _CASrvcDisconncnReqStatus,
      _CASubApplication,
      _CompanyCode,
      _ContractAccount,
      _ContractAccountPartner,
      _Division,
      _TransactionCurrency
}
```
