---
name: I_MRPSAFETYSTOCKMETHOD
description: "Mrpsafetystockmethod"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPSAFETYSTOCKMETHOD

**Mrpsafetystockmethod**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPSafetyStockMethod` | ✓ | |  | `cast ( domvalue_l as mrp_sstock_method )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMRPSFTYSTKMETH'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'MRPSafetyStockMethod'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'ProductSafetyStockMethod'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API 
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Safety Stock Method'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_MRPSafetyStockMethod 
  as select from dd07l
  composition [0..*] of I_MRPSafetyStockMethodText as _Text 
{   
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as mrp_sstock_method ) as MRPSafetyStockMethod,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      dd07l.domvalue_l                         as DomainValue,

      _Text
}
where
      domname  = 'MRP_SSTOCK_METHOD'
  and as4local = 'A'
  and as4vers  = '0000';
```
