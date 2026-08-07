---
name: I_MFGORDNONMATRCVRACCTDETNMETH
description: Mfgordnonmatrcvracctdetnmeth
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_MFGORDNONMATRCVRACCTDETNMETH

**Mfgordnonmatrcvracctdetnmeth**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MfgOrdNonMatlRcvrAcctDetnMeth` | ✓ | |  | `cast( domvalue_l as fco_acct_determination_method)` |
| `MfgOrdNonMatlRcvrDetnMethName` |  | |  | `cast(ddtext as fco_acct_detn_meth_text)` |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #NOT_REQUIRED
}

@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #B,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
}
@ObjectModel.representativeKey: 'MfgOrdNonMatlRcvrAcctDetnMeth'
@Metadata: {
             ignorePropagatedAnnotations: true
           }
//@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName:'INMRVACCTDETNMETH'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@EndUserText.label: 'Non-Matl Rcvr Acct Determination Method'
define view entity I_MfgOrdNonMatRcvrAcctDetnMeth
  as select from dd07t
  //association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['MfgOrdNonMatlRcvrDetnMethName']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  //key cast( case when domvalue_l is initial then '00' else domvalue_l end as fco_acct_determination_method) as MfgOrdNonMatlRcvrAcctDetnMeth,
  key cast( domvalue_l as fco_acct_determination_method) as MfgOrdNonMatlRcvrAcctDetnMeth,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      cast(ddtext as fco_acct_detn_meth_text)                                                               as MfgOrdNonMatlRcvrDetnMethName
}
where
      as4local   = 'A'
  and as4vers    = '0000'
  and domname    = 'FCO_ACCT_DETERMINATION_METHOD'
  and ddlanguage = $session.system_language
```
