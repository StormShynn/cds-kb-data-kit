---
name: I_SALESSPCFCPRODUCTGROUP4
description: "Salesspcfcproductgroup 4"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SALESSPCFCPRODUCTGROUP4

**Salesspcfcproductgroup 4**

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
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Specific Product Group 4'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SalesSpcfcProductGroup4',
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
  technicalName: 'ISLSSPCPRODGRP4',
  internalName: #LOCAL, 
  dataExtraction.enabled: false
}
@Metadata: {
  ignorePropagatedAnnotations: true, 
  allowExtensions: false
}
@Consumption.ranked: true

define root view entity I_SalesSpcfcProductGroup4
  as select from I_AdditionalMaterialGroup4

  composition [0..*] of I_SalesSpcfcProductGroup4Text as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key AdditionalMaterialGroup4 as SalesSpcfcProductGroup4,

      /* Associations */
      _Text 
};
```
