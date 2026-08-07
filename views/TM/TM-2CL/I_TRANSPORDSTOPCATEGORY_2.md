---
name: I_TRANSPORDSTOPCATEGORY_2
description: Transpordstopcategory 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSTOPCATEGORY_2

**Transpordstopcategory 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspOrdStopCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Stop Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TranspOrderStopCategory'
@ObjectModel.representativeKey: 'TranspOrdStopCategory'
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


define root view entity I_TranspOrdStopCategory_2
  as select from dd07l
  composition [0..*] of I_TranspOrdStopCategoryT_2 as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type) as TranspOrdStopCategory,

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
      domname                     =  '/SCMTMS/STOP_CATEGORY'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 1) <> 'S' //Stop Without Change of Main Resource
  and substring(domvalue_l, 1, 1) <> 'E' //Stop for Service Execution
```
