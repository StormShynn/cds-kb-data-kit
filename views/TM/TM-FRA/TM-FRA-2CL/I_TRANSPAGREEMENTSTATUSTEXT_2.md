---
name: I_TRANSPAGREEMENTSTATUSTEXT_2
description: Transpagreementstatustext 2
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - text
  - status
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPAGREEMENTSTATUSTEXT_2

**Transpagreementstatustext 2**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationAgreementStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_fag_root_status preserving type)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `TranspAgreementStatusText` |  | |  | `cast(ddtext as /scmtms/vdm_fag_status_desc preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Language` | | ✓ | | |
| `_TranspAgreementStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITFAGSTATUSTXT2'
@EndUserText:   {label: 'Transportation Agreement Status - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TransportationAgreementStatus',
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

define view entity I_TranspAgreementStatusText_2
  as select from dd07t
  association        to parent I_TranspAgreementStatus as _TranspAgreementStatus on $projection.TransportationAgreementStatus = _TranspAgreementStatus.TransportationAgreementStatus
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspAgreementStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_fag_root_status preserving type) as TransportationAgreementStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                       as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext     as  /scmtms/vdm_fag_status_desc preserving type )                as TranspAgreementStatusText,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                 as DomainValue,
      /* Associations */
      _TranspAgreementStatus,
      _Language
}
where
      domname                     =  '/SCMTMS/FAG_ROOT_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '03' //Deactivated
  and substring(domvalue_l, 1, 2) <> '04' //Deleted
  and substring(domvalue_l, 1, 2) <> '05' //Awaiting Approval
```
