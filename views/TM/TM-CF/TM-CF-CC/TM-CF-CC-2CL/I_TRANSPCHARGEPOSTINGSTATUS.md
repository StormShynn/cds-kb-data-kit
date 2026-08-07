---
name: I_TRANSPCHARGEPOSTINGSTATUS
description: Transpchargepostingstatus
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
  - status
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHARGEPOSTINGSTATUS

**Transpchargepostingstatus**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspChargePostingStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_posting_status preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION,
             internalName: #LOCAL}
@Consumption.ranked: true
@EndUserText.label: 'Transporation Charge Posting Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { sapObjectNodeType.name: 'TranspChargePostingStatus',
                representativeKey: 'TranspChargePostingStatus',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER],
                usageType: { serviceQuality: #A,
                          dataClass: #META,
                          sizeCategory: #S},
                dataCategory: #VALUE_HELP,
                resultSet.sizeCategory: #XS}
@Search.searchable: true
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspChargePostingStatus
  as select from dd07l
  composition [0..*] of I_TranspChrgPostgStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_posting_status preserving type) as TranspChargePostingStatus,
      @Analytics.hidden: false
      @Consumption.hidden: false
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                                as DomainValue,

      /* Associations */
      _Text
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
