---
name: I_SALESSPCFCPRODUCTGROUP3TEXT
description: Salesspcfcproductgroup 3TEXT
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
# I_SALESSPCFCPRODUCTGROUP3TEXT

**Salesspcfcproductgroup 3TEXT**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesSpcfcProductGroup3` | `AdditionalMaterialGroup3` |
| key `Language` | `Language` |
| `SalesSpcfcProductGroup3Name` | `AdditionalMaterialGroup3Name` |
| `_Language` | *Association* |
| `_SalesSpcfcProductGroup3` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Specific Product Group 3 - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SalesSpcfcProductGroup3',
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
  technicalName: 'ISLSSPCPRODGRP3T',
  dataExtraction.enabled: false
}
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}

define view entity I_SalesSpcfcProductGroup3Text
  as select from I_AdditionalMaterialGroup3Text

  association        to parent I_SalesSpcfcProductGroup3 as _SalesSpcfcProductGroup3 on $projection.SalesSpcfcProductGroup3 = _SalesSpcfcProductGroup3.SalesSpcfcProductGroup3
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup3'
      @ObjectModel.text.element: ['SalesSpcfcProductGroup3Name']
  key AdditionalMaterialGroup3     as SalesSpcfcProductGroup3,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                     as Language, 
      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      AdditionalMaterialGroup3Name as SalesSpcfcProductGroup3Name,

      /* Associations */
      _SalesSpcfcProductGroup3,
      _Language
};
```
