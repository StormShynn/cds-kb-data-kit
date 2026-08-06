---
name: I_SALESSPCFCPRODUCTGROUP2TEXT
description: Salesspcfcproductgroup 2TEXT
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - text-view
  - product
  - text
  - component:LO-AB
  - lob:Logistics General
---
# I_SALESSPCFCPRODUCTGROUP2TEXT

**Salesspcfcproductgroup 2TEXT**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesSpcfcProductGroup2` | `AdditionalMaterialGroup2` |
| key `Language` | `Language` |
| `SalesSpcfcProductGroup2Name` | `AdditionalMaterialGroup2Name` |
| `_Language` | *Association* |
| `_SalesSpcfcProductGroup2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Specific Product Group 2 - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SalesSpcfcProductGroup2',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,  
    #LANGUAGE_DEPENDENT_TEXT,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  technicalName: 'ISLSSPCPRODGRP2T', 
  dataExtraction.enabled: false
}
@Metadata: {
  ignorePropagatedAnnotations: true, 
  allowExtensions: false
}

define view entity I_SalesSpcfcProductGroup2Text
  as select from I_AdditionalMaterialGroup2Text

  association        to parent I_SalesSpcfcProductGroup2 as _SalesSpcfcProductGroup2 on $projection.SalesSpcfcProductGroup2 = _SalesSpcfcProductGroup2.SalesSpcfcProductGroup2
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup2'
      @ObjectModel.text.element: ['SalesSpcfcProductGroup2Name']      
  key AdditionalMaterialGroup2     as SalesSpcfcProductGroup2,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                     as Language,
      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      AdditionalMaterialGroup2Name as SalesSpcfcProductGroup2Name,

      /* Associations */
      _SalesSpcfcProductGroup2,
      _Language 
};
```
