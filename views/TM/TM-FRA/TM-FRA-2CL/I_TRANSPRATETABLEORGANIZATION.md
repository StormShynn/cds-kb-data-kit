---
name: I_TRANSPRATETABLEORGANIZATION
description: "Transpratetableorganization"
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
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPRATETABLEORGANIZATION

**Transpratetableorganization**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateTableOrgUUID` | ✓ | |  | `cast(db_key as /scmtms/transprate_org_uuid preserving type)` |  |  |
| `TransportationRateUUID` |  | |  | `cast(parent_key as /scmtms/transpratetable_uuid preserving type)` |  |  |
| `TranspPurgOrg` |  | |  | `purch_org` |  |  |
| `_TranspPurgOrg` | | ✓ | | | | |
| `_TransportationRate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspPurgOrg` | `I_TranspPurgOrg` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA'),
                 privilegedAssociations: ['_TransportationRate'] }
@Analytics.technicalName: 'ITRTORG'
@EndUserText:   { label:              'Transportation Rate Table Organization'}
@ObjectModel:   { sapObjectNodeType.name: 'TranspRateTableOrganization',
                  representativeKey:  'TranspRateTableOrgUUID',
                  semanticKey: ['TranspPurgOrg'],
                  usageType:          {serviceQuality: #A,
                                      sizeCategory:   #L,
                                      dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@Metadata.ignorePropagatedAnnotations: true
@VDM:           { viewType:           #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateTableOrganization
  as select from /scmtms/d_ratctr
  association        to parent I_TransportationRate as _TransportationRate on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID
  association [1..1] to I_TranspPurgOrg             as _TranspPurgOrg      on $projection.TranspPurgOrg = _TranspPurgOrg.TranspPurgOrg
{
  key cast(db_key   as /scmtms/transprate_org_uuid preserving type)    as TranspRateTableOrgUUID,
      @ObjectModel.foreignKey.association: '_TransportationRate'
      cast(parent_key as /scmtms/transpratetable_uuid preserving type) as TransportationRateUUID,
      purch_org                                                        as TranspPurgOrg,

      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _TransportationRate,
      _TranspPurgOrg
}
```
