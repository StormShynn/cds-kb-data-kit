---
name: I_TRANSPORDSUBCONTRGSTATUS_2
description: "Transpordsubcontrgstatus 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - status
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSUBCONTRGSTATUS_2

**Transpordsubcontrgstatus 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrderSubcontrgSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_subcontr_status preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transp Order Subcontracting Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TranspOrdSubcontractingStatus'
@ObjectModel.representativeKey: 'TranspOrderSubcontrgSts'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_TranspOrdSubcontrgStatus_2
  as select from dd07l
  composition [0..*] of I_TranspOrdSubcontrgStsT_2 as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_subcontr_status preserving type) as TranspOrderSubcontrgSts,
      
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                              as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/TOR_SUBCONTR_STATUS'
  and as4local = 'A'
  and substring(domvalue_l, 1, 2)  <> '02' //In Tendering
```
