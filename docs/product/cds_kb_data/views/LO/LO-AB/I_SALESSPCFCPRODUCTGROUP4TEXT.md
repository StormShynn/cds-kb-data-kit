---
name: I_SALESSPCFCPRODUCTGROUP4TEXT
description: "Salesspcfcproductgroup 4TEXT"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SALESSPCFCPRODUCTGROUP4TEXT

**Salesspcfcproductgroup 4TEXT**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSpcfcProductGroup4` | ✓ | |  | `AdditionalMaterialGroup4` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SalesSpcfcProductGroup4Name` |  | |  | `AdditionalMaterialGroup4Name` |  |  |
| `_Language` | | ✓ | | | | |
| `_SalesSpcfcProductGroup4` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Specific Product Group 4 - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SalesSpcfcProductGroup4',
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
  technicalName: 'ISLSSPCPRODGRP4T', 
  dataExtraction.enabled: false
}
@Metadata: {
  ignorePropagatedAnnotations: true, 
  allowExtensions: false
}

define view entity I_SalesSpcfcProductGroup4Text
  as select from I_AdditionalMaterialGroup4Text

  association        to parent I_SalesSpcfcProductGroup4 as _SalesSpcfcProductGroup4 on $projection.SalesSpcfcProductGroup4 = _SalesSpcfcProductGroup4.SalesSpcfcProductGroup4
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup4'
      @ObjectModel.text.element: ['SalesSpcfcProductGroup4Name']      
  key AdditionalMaterialGroup4     as SalesSpcfcProductGroup4,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                     as Language,
      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      AdditionalMaterialGroup4Name as SalesSpcfcProductGroup4Name,

      /* Associations */
      _SalesSpcfcProductGroup4, 
      _Language
};
```
