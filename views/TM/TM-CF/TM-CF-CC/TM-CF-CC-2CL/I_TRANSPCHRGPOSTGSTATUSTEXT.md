---
name: I_TRANSPCHRGPOSTGSTATUSTEXT
description: Transpchrgpostgstatustext
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-CF
  - TM-CF-CC
  - interface-view
  - text-view
  - text
  - status
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHRGPOSTGSTATUSTEXT

**Transpchrgpostgstatustext**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspChargePostingStatus` | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_posting_status preserving type)` |
| key `Language` | `ddlanguage` |
| `TranspChargePostingStatusDesc` | `cast(ddtext as /scmtms/vdm_chrg_postg_st_desc preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_TranspChargePostingStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Charge Posting Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {dataCategory: #TEXT,
               modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
               representativeKey: 'TranspChargePostingStatus',
               supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE],
               usageType:{
                        serviceQuality: #A,
                        dataClass: #META,
                        sizeCategory: #S
                        }}
@Search.searchable: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API } 

define view entity I_TranspChrgPostgStatusText
  as select from dd07t
  association        to parent I_TranspChargePostingStatus as _TranspChargePostingStatus on $projection.TranspChargePostingStatus = _TranspChargePostingStatus.TranspChargePostingStatus
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspChargePostingStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_posting_status preserving type) as TranspChargePostingStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                      as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_chrg_postg_st_desc preserving type )                 as TranspChargePostingStatusDesc,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                as DomainValue,

      /* Associations */
      _TranspChargePostingStatus,
      _Language
}
where
      domname                     =  '/SCMTMS/D_INVOICING_STAT_CODE'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '01' //Not Invoiced
  and substring(domvalue_l, 1, 2) <> '03' //Partially Invoiced
  and substring(domvalue_l, 1, 2) <> '04' //Completely Invoiced
  and substring(domvalue_l, 1, 2) <> '05' //Over-Invoiced
  and substring(domvalue_l, 1, 2) <> '06' //Not Up-to-Date
  and substring(domvalue_l, 1, 2) <> '07' //Cannot Invoice Automatically
```
