---
name: I_TRANSPAGREEMENTSTATUS
description: "Transpagreementstatus"
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
  - status
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPAGREEMENTSTATUS

**Transpagreementstatus**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationAgreementStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/fag_root_status preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Analytics.technicalName: 'ITFAGSTATUS'
@Consumption.ranked: true
@EndUserText:{label: 'Agreement Status'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TransportationAgreementStatus',
                 representativeKey:  'TransportationAgreementStatus',
                 dataCategory: #VALUE_HELP,
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE,
                                         #VALUE_HELP_PROVIDER],
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 resultSet.sizeCategory: #XS}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspAgreementStatus
  as select from dd07l
  composition [0..*] of I_TranspAgreementStatusText_2 as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/fag_root_status preserving type) as TransportationAgreementStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                             as DomainValue,
      
      /* Associations */
      _Text
}
where
       domname    = '/SCMTMS/FAG_ROOT_STATUS'
   and as4local   = 'A'
   and substring(domvalue_l, 1, 2) <> '03' //Deactivated
   and substring(domvalue_l, 1, 2) <> '04' //Deleted
   and substring(domvalue_l, 1, 2) <> '05' //Awaiting Approval
```
