---
name: I_SALESSPCFCPRODUCTGROUP1
description: Salesspcfcproductgroup 1
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
  - product
  - component:LO-AB
  - lob:Logistics General
---
# I_SALESSPCFCPRODUCTGROUP1

**Salesspcfcproductgroup 1**

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
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Specific Product Group 1'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SalesSpcfcProductGroup1',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION ,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE,
    #VALUE_HELP_PROVIDER 
  ],
  usageType: {
    serviceQuality: #A,
    dataClass:      #CUSTOMIZING,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  technicalName: 'ISLSSPCPRODGRP1',
  internalName: #LOCAL, 
  dataExtraction.enabled: false
} 
@Metadata: {
  ignorePropagatedAnnotations: true, 
  allowExtensions: false
}
@Consumption.ranked: true

define root view entity I_SalesSpcfcProductGroup1
  as select from I_AdditionalMaterialGroup1

  composition [0..*] of I_SalesSpcfcProductGroup1Text as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key AdditionalMaterialGroup1 as SalesSpcfcProductGroup1,

      /* Associations */
      _Text
};
```
