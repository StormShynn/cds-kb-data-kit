---
name: I_ORDERCONFIRMATIONTYPE
description: "Orderconfirmationtype"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_ORDERCONFIRMATIONTYPE

**Orderconfirmationtype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderConfirmationType` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as manur preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IORDCONFTYPE'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OrderConfirmationType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'OrderConfirmationType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Order Confirmation Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_OrderConfirmationType
  as select from dd07l as l
    composition [0..*] of I_OrderConfirmationTypeText as _Text
{ 
    @ObjectModel.text.association: '_Text'
    // cast to data element  
    key cast(substring(l.domvalue_l, 1, 1) as manur preserving type) as OrderConfirmationType,
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    l.domvalue_l                                                     as DomainValue,
  
    // Composition
    _Text
  }
  where l.domname = 'MANUR'
    and l.as4local = 'A'
    and l.as4vers  = '0000';
```
