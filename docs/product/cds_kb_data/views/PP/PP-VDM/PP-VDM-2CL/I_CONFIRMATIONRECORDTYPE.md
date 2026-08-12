---
name: I_CONFIRMATIONRECORDTYPE
description: "Confirmationrecordtype"
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
# I_CONFIRMATIONRECORDTYPE

**Confirmationrecordtype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderConfirmationRecordType` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 3) as co_satza preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ConfirmationRecordTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ICONFRECORDTYPE'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OrderConfirmationRecordType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'OrderConfirmationRecordType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Confirmation Record Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_ConfirmationRecordType
  as select from dd07l as l
  association [0..*] to I_ConfirmationRecordTypeText as _Text on $projection.OrderConfirmationRecordType = _Text.OrderConfirmationRecordType
{ 
    @ObjectModel.text.association: '_Text'
    // cast to data element  
    key cast(substring(l.domvalue_l, 1, 3) as co_satza preserving type) as OrderConfirmationRecordType,
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    l.domvalue_l                                                        as DomainValue,
  
    // Associations
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
  }
  where l.domname = 'CO_SATZA'
    and l.as4local = 'A'
    and l.as4vers  = '0000';
```
