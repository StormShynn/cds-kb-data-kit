---
name: I_TRANSPORDITEMCATEGORY_2
description: "Transporditemcategory 2"
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
  - item-level
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDITEMCATEGORY_2

**Transporditemcategory 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Item Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TranspOrderItemCategory'
@ObjectModel.representativeKey: 'TranspOrdItemCategory'
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

define root view entity I_TranspOrdItemCategory_2
  as select from dd07l
  composition [0..*] of I_TranspOrdItemCategoryT_2 as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type) as TranspOrdItemCategory,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                           as DomainValue,


      /* Associations */
      _Text
}
where
      domname                     =  '/SCMTMS/ITEM_CATEGORY'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 3) <> 'SRV' //Service
  and substring(domvalue_l, 1, 3) <> 'SHL' //Schedule Line
  and substring(domvalue_l, 1, 3) <> 'BCR' //Booking Capacity Reservation
  and substring(domvalue_l, 1, 3) <> 'CT' //Compartment
  and substring(domvalue_l, 1, 3) <> 'TXT' //Text
  and substring(domvalue_l, 1, 3) <> 'EQI' //Equipment
  and substring(domvalue_l, 1, 3) <> 'DRV' //Driver
  and substring(domvalue_l, 1, 3) <> 'APM' //Auxiliary Packaging Material
```
