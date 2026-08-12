---
name: I_CENTRALCLEARINGACCOUNT
description: "Central Clearing Account"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CENTRALCLEARINGACCOUNT')/$value
semantic_en: "Central Clearing Account"
semantic_vi: "Central Clearing Account — CDS view giao diện dựa trên treat_ext_acc."
keywords:
  - "central"
  - "clearing"
  - "account"
  - "company"
  - "code"
  - "name"
tags:
  - FIN
  - account
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_CENTRALCLEARINGACCOUNT

**Central Clearing Account**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CENTRALCLEARINGACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralClearingAccountUUID` | ✓ | |  | `cast(CentralClearingAccount.os_guid as ftr_gen_cntrl_clrng_accnt_uuid preserving type)` | `RAW(16)` | Internal ID of the Central Clearing Account |
| `CompanyCode` |  | |  | `company_code` | `CHAR(4)` | Company Code |
| `CentralClearingAccount` |  | |  | `cast(CentralClearingAccount.ext_account as ftr_gen_cntrl_clearing_account preserving type)` | `CHAR(10)` | Central Clearing Account |
| `CentralClearingAccountName` |  | |  | `cast(CentralClearingAccount.ext_account_text as ftr_gen_cntrl_clrng_accnt_name preserving type)` | `CHAR(30)` | Name of the Central Clearing Account |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CENTRALCLEARINGACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CENTRALCLEARINGACCOUNT')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ICNTRLCLRACC' 
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL 
@EndUserText.label: 'Central Clearing Account'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'CentralClearingAccountUUID'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC


define view entity I_CentralClearingAccount
  as select from treat_ext_acc as CentralClearingAccount 

  association to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode

{
  key  cast(CentralClearingAccount.os_guid as ftr_gen_cntrl_clrng_accnt_uuid preserving type) as CentralClearingAccountUUID,
       @ObjectModel.foreignKey.association: '_CompanyCode'
       CentralClearingAccount.company_code                                    as CompanyCode,
       cast(CentralClearingAccount.ext_account as ftr_gen_cntrl_clearing_account preserving type)
                                                                              as CentralClearingAccount,
       @Semantics.text: true
       cast(CentralClearingAccount.ext_account_text as ftr_gen_cntrl_clrng_accnt_name preserving type)
                                                                              as CentralClearingAccountName,

       _CompanyCode

       //CentralClearingAccount.ext_account_type,
       //CentralClearingAccount.ext_account_id,
       //      CentralClearingAccount.portfolio              as Portfolio
       //      CentralClearingAccount.rerf,
       //      CentralClearingAccount.derf,
       //      CentralClearingAccount.terf,
       //      CentralClearingAccount.reher,
       //      CentralClearingAccount.rbear,
       //      CentralClearingAccount.dbear,
       //      CentralClearingAccount.tbear,
       //      CentralClearingAccount.rbher,
       //      CentralClearingAccount.attribute_sa01,
       //      CentralClearingAccount.attribute_sa02,
       //      CentralClearingAccount.attribute_sa03,
       //      CentralClearingAccount.attribute_sa04,
       //      CentralClearingAccount.attribute_ma01,
       //      CentralClearingAccount.attribute_ma02,
       //      CentralClearingAccount.attribute_ma03,
       //      CentralClearingAccount.attribute_ma04,
       //      CentralClearingAccount.attribute_la01,
       //      CentralClearingAccount.attribute_la02,
       //      CentralClearingAccount.attribute_la03,
       //      CentralClearingAccount.attribute_la04,
       //      CentralClearingAccount.attribute_fr01,
       //      CentralClearingAccount.attribute_fr02,
       //      CentralClearingAccount.attribute_fr03,
       //      CentralClearingAccount.attribute_fr04,
       //      CentralClearingAccount.extension_oid,
       //      CentralClearingAccount.extension_cls
      

}      

where CentralClearingAccount.ext_account_type = '001'
```
