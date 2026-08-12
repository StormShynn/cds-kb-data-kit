---
name: I_PRDETERMINATIONCONTROLSTDVH
description: "Prdeterminationcontrolstdvh"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_PRDETERMINATIONCONTROLSTDVH

**Prdeterminationcontrolstdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PriceDeterminationControl` | ✓ | |  |  |  |  |
| `DomainValue` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IPRICEDETCTRLVH'
//@AbapCatalog.compiler.compareFilter: true
//@ClientHandling.algorithm: #SESSION_VARIABLE
//
//@VDM.viewType: #COMPOSITE
//
//@ObjectModel: {
//  dataCategory: #VALUE_HELP,
//  representativeKey: 'PriceDeterminationControl',
//  usageType: { dataClass: #MASTER,
//               serviceQuality: #A,
//               sizeCategory: #M
//  }
//}
//
//@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #NOT_REQUIRED
//@EndUserText.label: 'Price Determination Control'
//@Search.searchable: true
//@Consumption.ranked:true


@AbapCatalog.sqlViewName: 'IPRICEDETCTRLVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@EndUserText.label: 'Price Determination Control'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'PriceDeterminationControl'
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
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_PrDeterminationControlStdVH
  as select from I_PriceDeterminationControl
{
      @ObjectModel.text.association: '_Text'
  key PriceDeterminationControl,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      DomainValue,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
