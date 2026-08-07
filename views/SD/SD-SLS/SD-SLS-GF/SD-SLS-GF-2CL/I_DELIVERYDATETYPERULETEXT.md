---
name: I_DELIVERYDATETYPERULETEXT
description: Deliverydatetyperuletext
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
  - text-view
  - delivery
  - text
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_DELIVERYDATETYPERULETEXT

**Deliverydatetyperuletext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DeliveryDateTypeRule` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as sd_delivery_date_type_rule preserving type )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `DeliveryDateTypeRuleDesc` |  | |  | `ddtext` |
| `_DeliveryDateTypeRule` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDateTypeRule` | `I_DeliveryDateTypeRule` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'DeliveryDateTypeRule',
  usageType:{
    dataClass: #META,
    serviceQuality: #A, 
    sizeCategory: #S
  }   
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
  sqlViewName: 'IDELDATTYPRULT',
  compiler.compareFilter:true
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY   ]
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Delivery Date Type Rule - Text'
@Search.searchable: true

define view I_DeliveryDateTypeRuleText as select from dd07t 

association [0..1] to I_DeliveryDateTypeRule as _DeliveryDateTypeRule on $projection.DeliveryDateTypeRule = _DeliveryDateTypeRule.DeliveryDateTypeRule
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{

    @ObjectModel.foreignKey.association: '_DeliveryDateTypeRule'
    key cast(substring(domvalue_l, 1, 1) as sd_delivery_date_type_rule preserving type ) as DeliveryDateTypeRule,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW    
    @Semantics.text: true
    ddtext as DeliveryDateTypeRuleDesc,
    
    _DeliveryDateTypeRule,
    _Language
    
}

where domname = 'SD_DELIVERY_DATE_TYPE_RULE' and as4local = 'A';
```
