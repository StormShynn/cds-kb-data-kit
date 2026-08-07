---
name: I_SALESSPCFCPRODUCTGROUP1TEXT
description: Salesspcfcproductgroup 1TEXT
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
# I_SALESSPCFCPRODUCTGROUP1TEXT

**Salesspcfcproductgroup 1TEXT**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSpcfcProductGroup1` | ✓ | |  | `AdditionalMaterialGroup1` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SalesSpcfcProductGroup1Name` |  | |  | `AdditionalMaterialGroup1Name` |  |  |
| `_Language` | | ✓ | | | | |
| `_SalesSpcfcProductGroup1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Specific Product Group 1 - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SalesSpcfcProductGroup1',
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
  technicalName: 'ISLSSPCPRODGRP1T', 
  dataExtraction.enabled: false
}
@Metadata: {
  ignorePropagatedAnnotations: true, 
  allowExtensions: false
}

define view entity I_SalesSpcfcProductGroup1Text
  as select from I_AdditionalMaterialGroup1Text

  association        to parent I_SalesSpcfcProductGroup1 as _SalesSpcfcProductGroup1 on $projection.SalesSpcfcProductGroup1 = _SalesSpcfcProductGroup1.SalesSpcfcProductGroup1
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup1'
      @ObjectModel.text.element: ['SalesSpcfcProductGroup1Name']
  key AdditionalMaterialGroup1     as SalesSpcfcProductGroup1,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                     as Language,
      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      AdditionalMaterialGroup1Name as SalesSpcfcProductGroup1Name,

      /* Associations */
      _SalesSpcfcProductGroup1,
      _Language
};
```
