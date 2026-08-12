---
name: I_TRANSPORDCREATIONTYPE
description: "Transpordcreationtype"
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
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDCREATIONTYPE

**Transpordcreationtype**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderCrtnType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_creation_type preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Creation Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TranspOrderCreationType'
@ObjectModel.representativeKey: 'TransportationOrderCrtnType'
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
define root view entity I_TranspOrdCreationType
  as select from dd07l

  composition [0..*] of I_TranspOrdCreationTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_creation_type preserving type) as TransportationOrderCrtnType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                               as DomainValue,

      /* Associations */
      _Text
}
where
      domname                     =  '/SCMTMS/TOR_CREATION_TYPE'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> 'P' //Creation from Planning
  and substring(domvalue_l, 1, 2) <> 'B' //Bill of Lading Creation
  and substring(domvalue_l, 1, 2) <> 'S' //Creation from ERP Shipment
  and substring(domvalue_l, 1, 2) <> 'C' //Creation from a Customer Pick-Up/Self-Delivery Stage
  and substring(domvalue_l, 1, 2) <> 'R' //Manually Created Booking
  and substring(domvalue_l, 1, 2) <> 'A' //Import Booking Automatically Created from Export Booking
  and substring(domvalue_l, 1, 2) <> 'FR' //Freight Units Created from Export or Import Processing
  and substring(domvalue_l, 1, 2) <> 'I' //Creation of Initial Freight Unit
  and substring(domvalue_l, 1, 2) <> 'PB' //Creation from Freight Units by Unified Package Building
```
