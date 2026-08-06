---
name: I_SECURITYACCOUNT
description: Securityaccount
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYACCOUNT

**Securityaccount**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `SecurityAccount.bukrs` |
| key `SecurityAccount` | `cast(SecurityAccount.rldepo as ftr_gen_security_account preserving type)` |
| `SecurityAccountName` | `cast(SecurityAccount.xldepo as ftr_gen_security_account_name preserving type)` |
| `SecurityAccountGroup` | `cast(SecurityAccount.sec_acc_grp as ftr_gen_sec_account_group preserving type)` |
| `SecurityAccountType` | `cast(SecurityAccount.secacc_type as ftr_gen_security_account_type preserving type )` |
| `DepositoryBank` | `cast(SecurityAccount.rdpbank as ftr_gen_partnr_depository_bank preserving type )` |
| `_CompanyCode` | *Association* |
| `_SecurityAccountType` | *Association* |
| `_SecurityAccountGroup` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SecurityAccountType` | `I_SecurityAccountType` | [0..1] |
| `_SecurityAccountGroup` | `I_SecurityAccountGroup` | [0..1] |

## Source Code

```abap
// harmonized annotations
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISECACCOUNT'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Security Account'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityAccount'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecuritiesAccount'

define view I_SecurityAccount
  as select from twd01 as SecurityAccount

  association to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_SecurityAccountType as _SecurityAccountType on $projection.SecurityAccountType = _SecurityAccountType.SecurityAccountType
  
  association [0..1] to I_SecurityAccountGroup as _SecurityAccountGroup on $projection.SecurityAccountGroup = _SecurityAccountGroup.SecurityAccountGroup
                                                                        and $projection.CompanyCode         = _SecurityAccountGroup.CompanyCode

{
      //--[ GENERATED:012:GlBfhyJl7kY4pGd}um{aL0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key SecurityAccount.bukrs                                              as CompanyCode,
      @ObjectModel.text.element: 'SecurityAccountName'
  key cast(SecurityAccount.rldepo      as ftr_gen_security_account preserving type)      as SecurityAccount,
      @Semantics.text: true
      cast(SecurityAccount.xldepo      as ftr_gen_security_account_name preserving type) as SecurityAccountName,
      cast(SecurityAccount.sec_acc_grp as ftr_gen_sec_account_group preserving type)     as SecurityAccountGroup,

      cast(SecurityAccount.secacc_type as ftr_gen_security_account_type preserving type ) as SecurityAccountType,
      cast(SecurityAccount.rdpbank     as ftr_gen_partnr_depository_bank preserving type ) as DepositoryBank,  
          
      _CompanyCode,
      _SecurityAccountType,
      _SecurityAccountGroup
      //      SecurityAccount.verkonto,
      //      SecurityAccount.rdepotnr,
      //      SecurityAccount.rertrk,
      //      SecurityAccount.rdpbank,
      //      SecurityAccount.rbgue,
      //      SecurityAccount.ssperrv,
      //      SecurityAccount.dsperr,
      //      SecurityAccount.rgsber,
      //      SecurityAccount.sskzb,
      //      SecurityAccount.jvermst,
      //      SecurityAccount.sudec,
      //      SecurityAccount.dedec,
      //      SecurityAccount.rfgeb,
      //      SecurityAccount.dfrei,
      //      SecurityAccount.tfrei,
      //      SecurityAccount.rerf,
      //      SecurityAccount.derf,
      //      SecurityAccount.terf,
      //      SecurityAccount.reher,
      //      SecurityAccount.rbear,
      //      SecurityAccount.dbear,
      //      SecurityAccount.tbear,
      //      SecurityAccount.rbher,
      //      SecurityAccount.rportb,
      //      SecurityAccount.sobjekt,
      //      SecurityAccount.srolextdep,
      //      SecurityAccount.srolextbeg,
      //      SecurityAccount.vvsloekz,
      //      SecurityAccount.ssperr,
      //      SecurityAccount.rahabki,
      //      SecurityAccount.rahktid,
      //      SecurityAccount.status,
      //      SecurityAccount.status_rbear,
      //      SecurityAccount.status_dbear,
      //      SecurityAccount.status_tbear,
      //      SecurityAccount.ext_sec_acc_no,
      //      SecurityAccount.flg_no_tax_map,
      //      SecurityAccount.budat                 as PostingDate
      //      SecurityAccount.country_var,
      //      SecurityAccount.sparte,
      //      SecurityAccount.stockbav
}
```
