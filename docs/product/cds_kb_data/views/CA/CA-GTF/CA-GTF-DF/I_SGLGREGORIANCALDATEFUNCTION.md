---
name: I_SGLGREGORIANCALDATEFUNCTION
description: "Sglgregoriancaldatefunction"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DateFunction` | ✓ | |  |  |  |  |
| `DateFunctionStartDate` |  | |  |  |  |  |
| `DateFunctionEndDate` |  | |  |  |  |  |
| `DateFunctionStartDateTime` |  | |  | `dats_tims_to_tstmp(DateFunctionStartDate, cast( '000000' as abap.tims), abap_user_timezone($session.user, $session.client, 'FAIL'), $session.client, 'FAIL' )` |  |  |
| `DateFunctionEndDateTime` |  | |  | `dats_tims_to_tstmp(DateFunctionEndDate, cast( '235959' as abap.tims), abap_user_timezone($session.user, $session.client, 'FAIL'), $session.client, 'FAIL' )` |  |  |

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
