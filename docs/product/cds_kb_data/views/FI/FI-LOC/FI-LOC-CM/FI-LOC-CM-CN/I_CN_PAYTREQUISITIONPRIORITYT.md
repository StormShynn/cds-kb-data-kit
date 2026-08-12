---
name: I_CN_PAYTREQUISITIONPRIORITYT
description: "CN Paytrequisitionpriorityt"
app_component: FI-LOC-CM-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CM
  - interface-view
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# I_CN_PAYTREQUISITIONPRIORITYT

**CN Paytrequisitionpriorityt**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentRequisitionPriority` | ✓ | |  | `cast(substring( domvalue_l, 1, 1 ) as payreqn_priority preserving type)` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type)` |  |  |
| `PaymentRequisitionPriorityName` |  | |  | `cast( ddtext as payreqn_priority_name preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_Priority` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNREQNPRIT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PaymentRequisitionPriority'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Payment Requisition Priority - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #EXTRACTION_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/                                     
define view I_CN_PaytRequisitionPriorityT as select from dd07t
  association to parent I_CN_PaytRequisitionPriorityVH as _Priority
    on $projection.PaymentRequisitionPriority = _Priority.PaymentRequisitionPriority
  association [0..1] to I_Language as _Language 
    on $projection.Language = _Language.Language
{
  @ObjectModel.foreignKey.association: '_Priority'
  @ObjectModel.text.element: ['PaymentRequisitionPriorityName']
  @Consumption.valueHelpDefinition: [{ entity: {name: 'I_CN_PaytRequisitionPriorityVH',
                                           element: 'PaymentRequisitionPriority'}, useAsTemplate: true }]
  key cast(substring( domvalue_l, 1, 1 ) as payreqn_priority preserving type)   as PaymentRequisitionPriority,

  @Semantics.language: true  
  @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type)     as Language,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  @Semantics.text: true
  cast( ddtext as payreqn_priority_name preserving type )         as PaymentRequisitionPriorityName,
  @Analytics.hidden: true
  @Consumption.hidden: true
  dd07t.domvalue_l as DomainValue,
  
  /* Associations */
  _Language,
  _Priority
}
where dd07t.domname = 'PAYREQN_PRIORITY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000';
```
