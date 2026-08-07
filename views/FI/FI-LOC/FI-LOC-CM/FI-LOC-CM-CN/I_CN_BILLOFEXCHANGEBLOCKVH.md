---
name: I_CN_BILLOFEXCHANGEBLOCKVH
description: CN Billofexchangeblockvh
app_component: FI-LOC-CM-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CM
  - interface-view
  - value-help
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# I_CN_BILLOFEXCHANGEBLOCKVH

**CN Billofexchangeblockvh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfExchangeIsBlocked` | ✓ | |  | `cast(substring( domvalue_l, 1, 1 ) as xfeld preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNBOEBLOCKVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Bill Of Exchange Block Indicator'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillOfExchangeIsBlocked'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'CN_BillOfExchangeIsBlocked'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SQL_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #VALUE_HELP_PROVIDER  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/     
define root view I_CN_BillOfExchangeBlockVH 
  as select from dd07l 
  composition [0..*] of I_CN_BillOfExchangeBlockText as _Text
{
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_ONLY
  key cast(substring( domvalue_l, 1, 1 ) as xfeld preserving type)   as BillOfExchangeIsBlocked,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text  
}
where dd07l.domname  = 'XFELD'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
