---
name: I_SGLGREGORIANCALDATEFUNCTION
description: Sglgregoriancaldatefunction
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_SGLGREGORIANCALDATEFUNCTION

**Sglgregoriancaldatefunction**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DateFunction` | `DateFunction` |
| `DateFunctionStartDate` | `SystemDateFunctionValue.DateFunctionStartDate` |
| `DateFunctionEndDate` | `SystemDateFunctionValue.DateFunctionEndDate` |
| `DateFunctionStartDateTime` | `dats_tims_to_tstmp(DateFunctionStartDate, cast( '000000' as abap.tims), abap_user_timezone($session.user, $session.client, 'FAIL'), $session.client, 'FAIL' )` |
| `DateFunctionEndDateTime` | `dats_tims_to_tstmp(DateFunctionEndDate, cast( '235959' as abap.tims), abap_user_timezone($session.user, $session.client, 'FAIL'), $session.client, 'FAIL' )` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `SystemDateFunctionValue` | `I_DateFunctionValue` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISGLGCALDF'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Execute Single Function'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality:  #C
@ObjectModel.usageType.sizeCategory:  #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

define view I_SglGregorianCalDateFunction
  with parameters
    P_DateFunction : datefunctionid
  as select from I_DateFunctionValue
  association [1] to I_DateFunctionValue      as SystemDateFunctionValue on SystemDateFunctionValue.DateFunctionValidityDate = $session.system_date 
  and SystemDateFunctionValue.DateFunction = $parameters.P_DateFunction
{
  key DateFunction,
      SystemDateFunctionValue.DateFunctionStartDate,
      SystemDateFunctionValue.DateFunctionEndDate,
      dats_tims_to_tstmp(DateFunctionStartDate, cast( '000000' as abap.tims),
                   abap_user_timezone($session.user, $session.client, 'FAIL'),
                   $session.client,    'FAIL' ) as DateFunctionStartDateTime,
      dats_tims_to_tstmp(DateFunctionEndDate, cast( '235959' as abap.tims),
                   abap_user_timezone($session.user, $session.client, 'FAIL'),
                   $session.client,    'FAIL' ) as DateFunctionEndDateTime
}
where
      DateFunction             = $parameters.P_DateFunction
  and DateFunctionValidityDate = tstmp_to_dats(tstmp_current_utctimestamp(),
                   abap_user_timezone($session.user, $session.client, 'FAIL'),
                   $session.client,    'FAIL' )
```
