---
name: I_PURGTOTPRODMARKETABILITYSTS
description: Purgtotprodmarketabilitysts
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGTOTPRODMARKETABILITYSTS

**Purgtotprodmarketabilitysts**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurgAggrgdProdMarketabilitySts` | `cast( dd07l.domvalue_l as mmpur_pc_total_status_pma )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPGAGPCPMASTAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Compliance Status of Marketability'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'PurgAggrgdProdMarketabilitySts'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name:'PurgAggrgdProdMarketabilitySts'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_PurgTotProdMarketabilitySts 
  as select from dd07l 
  composition [0..*] of I_PurgTotProdMarketabilityStsT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as mmpur_pc_total_status_pma ) as PurgAggrgdProdMarketabilitySts,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text
} 
where dd07l.domname  = 'MMPUR_PC_TOTAL_STATUS_PMA'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
