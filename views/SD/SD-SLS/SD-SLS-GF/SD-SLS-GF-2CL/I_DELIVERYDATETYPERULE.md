---
name: I_DELIVERYDATETYPERULE
description: Deliverydatetyperule
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - delivery
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_DELIVERYDATETYPERULE

**Deliverydatetyperule**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DeliveryDateTypeRule` | `cast(substring(dd07l.domvalue_l, 1, 1) as sd_delivery_date_type_rule preserving type )` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DeliveryDateTypeRuleText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
  representativeKey: 'DeliveryDateTypeRule',
  sapObjectNodeType.name: 'DeliveryDateTypeRule',
  usageType:{
    dataClass: #META ,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
  sqlViewName: 'IDELDATTYPRUL',
  compiler.compareFilter:true
}
@EndUserText.label: 'Delivery Date Type Rule'
@ObjectModel.resultSet.sizeCategory: #XS
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true,
              internalName: #LOCAL }
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY  ]
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view I_DeliveryDateTypeRule as select from dd07l

association [0..*] to I_DeliveryDateTypeRuleText as _Text on $projection.DeliveryDateTypeRule = _Text.DeliveryDateTypeRule

{
    @ObjectModel.text.association: '_Text' 
    key cast(substring(dd07l.domvalue_l, 1, 1) as sd_delivery_date_type_rule preserving type ) as DeliveryDateTypeRule,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text
    
}

where domname = 'SD_DELIVERY_DATE_TYPE_RULE' and as4local = 'A';
```
