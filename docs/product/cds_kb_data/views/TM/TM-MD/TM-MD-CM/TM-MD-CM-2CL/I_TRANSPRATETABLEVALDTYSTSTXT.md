---
name: I_TRANSPRATETABLEVALDTYSTSTXT
description: "Transpratetablevaldtyststxt"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPRATETABLEVALDTYSTSTXT

**Transpratetablevaldtyststxt**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateValidityLfcycStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tcmm_life_cycle_status preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspRateValidityLfcycStsText` |  | |  | `cast(ddtext as /scmtms/vdm_rate_lfcyc_sts_txt preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspRateTableValdtySts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITRATVLDTYSTSTXT'
@EndUserText:   {label: 'Rate Table Validity Status - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspRateValidityLfcycStatus',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateTableValdtyStsTxt
  as select from dd07t
  association        to parent I_TranspRateTableValdtySts as _TranspRateTableValdtySts on $projection.TranspRateValidityLfcycStatus = _TranspRateTableValdtySts.TranspRateValidityLfcycStatus
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language
{
        @ObjectModel.foreignKey.association: '_TranspRateTableValdtySts'
        @ObjectModel.text.element: ['TranspRateValidityLfcycStsText']
  key   cast(substring(domvalue_l, 1, 2) as /scmtms/tcmm_life_cycle_status preserving type) as TranspRateValidityLfcycStatus,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
  key   ddlanguage                                                                          as Language,
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #LOW
        @Semantics.text: true
        cast(ddtext as /scmtms/vdm_rate_lfcyc_sts_txt preserving type)                      as TranspRateValidityLfcycStsText,
        @Analytics.hidden: true
        @Consumption.hidden: true
        dd07t.domvalue_l                                                                    as DomainValue,

        /* Associations */
        _TranspRateTableValdtySts,
        _Language
}
where
      domname                     =  '/SCMTMS/TCMM_LIFE_CYCLE_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '02' //Deactivated
  and substring(domvalue_l, 1, 2) <> '03' //Awaiting Approval
  and substring(domvalue_l, 1, 2) <> '04' //Rate Change Requested
```
