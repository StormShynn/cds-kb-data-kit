---
name: I_TRANSPORDSTOPROLE_2
description: "Transpordstoprole 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSTOPROLE_2

**Transpordstoprole 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopRole` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_stop_role preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Stop Role'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TransportationOrderStopRole'
@ObjectModel.representativeKey: 'TranspOrdStopRole'
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

define root view entity I_TranspOrdStopRole_2
  as select from dd07l
  composition [0..*] of I_TranspOrdStopRoleT_2 as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_stop_role preserving type) as TranspOrdStopRole,
      
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                           as DomainValue,

      /* Associations */
      /* Associations */
      _Text
}
where
      domname                     =  '/SCMTMS/TOR_STOP_ROLE'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> 'FU' //Freight Unit Stop
  and substring(domvalue_l, 1, 2) <> 'SE' //Service Order: Execution Stop
  and substring(domvalue_l, 1, 2) <> 'FT' //Freight Unit: Transshipment Stop
  and substring(domvalue_l, 1, 2) <> 'FI' //Freight Unit: Subitem Stop
  and substring(domvalue_l, 1, 2) <> 'BT' //Freight Booking: Pre- or On-Carriage Transshipment Stop
  and substring(domvalue_l, 1, 2) <> 'EX' //External Stop
  and substring(domvalue_l, 1, 2) <> 'FS' //Freight Unit: Customer Self-Delivery Stop
  and substring(domvalue_l, 1, 2) <> 'FC' //Freight Unit: Customer Pick-Up Stop
  and substring(domvalue_l, 1, 2) <> 'TI' //Transportation Unit: Intermediate Stop
  and substring(domvalue_l, 1, 2) <> 'UD' //Undefined Delivery
  and substring(domvalue_l, 1, 2) <> 'UP' //Undefined Pickup
  and substring(domvalue_l, 1, 2) <> 'EP' //Empty Provisioning
  and substring(domvalue_l, 1, 2) <> 'ER' //Empty Return
```
