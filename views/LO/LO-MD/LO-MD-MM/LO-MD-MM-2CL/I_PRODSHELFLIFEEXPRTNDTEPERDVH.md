---
name: I_PRODSHELFLIFEEXPRTNDTEPERDVH
description: Prodshelflifeexprtndteperdvh
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODSHELFLIFEEXPRTNDTEPERDVH

**Prodshelflifeexprtndteperdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShelfLifeExpirationDatePeriod` | ✓ | |  | `cast( dd07l.domvalue_l as shelflifeexpirationdateperiod )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdShelfLifeExprtnDtePerdT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDSHELFEXPPER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Shelf Life Expiration Date Period'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ShelfLifeExpirationDatePeriod'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.sapObjectNodeType.name:'ShelfLifeExpirationDatePeriod'
@Consumption.ranked: true 
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SEARCHABLE_ENTITY,
                                     #ANALYTICAL_DIMENSION ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_ProdShelfLifeExprtnDtePerdVH
  as select from dd07l
  association [0..*] to I_ProdShelfLifeExprtnDtePerdT as _Text on $projection.ShelfLifeExpirationDatePeriod = _Text.ShelfLifeExpirationDatePeriod
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as shelflifeexpirationdateperiod ) as ShelfLifeExpirationDatePeriod,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                          as DomainValue,
      _Text
}
where
      dd07l.domname  = 'DATTP'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
