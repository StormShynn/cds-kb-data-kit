---
name: I_CN_PAYTREQUISITIONTYPETEXT
description: CN Paytrequisitiontypetext
app_component: FI-LOC-CM-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CM
  - interface-view
  - text-view
  - text
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# I_CN_PAYTREQUISITIONTYPETEXT

**CN Paytrequisitiontypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentRequisitionType` | ✓ | |  | `cast(substring( domvalue_l, 1, 1 ) as payreqn_reqn_type preserving type)` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type)` |  |  |
| `PaymentRequisitionTypeName` |  | |  | `cast( ddtext as payreqn_reqn_type_name preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_RequisitionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNREQNTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PaymentRequisitionType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Payment Requisition Type - Text'  
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #EXTRACTION_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/
define view I_CN_PaytRequisitionTypeText
  as select from dd07t
  association to parent I_CN_PaymentRequisitionTypeVH as _RequisitionType
    on $projection.PaymentRequisitionType = _RequisitionType.PaymentRequisitionType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @ObjectModel.foreignKey.association: '_RequisitionType'
  @ObjectModel.text.element: ['PaymentRequisitionTypeName']
  key cast(substring( domvalue_l, 1, 1 ) as payreqn_reqn_type preserving type)   as PaymentRequisitionType,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true  
  key cast ( ddlanguage as spras preserving type)    as Language,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  @Semantics.text: true 
  cast( ddtext as payreqn_reqn_type_name preserving type)     as PaymentRequisitionTypeName,
  @Analytics.hidden: true
  @Consumption.hidden: true
  domvalue_l as DomainValue,
  
  _Language,
  _RequisitionType
}
where domname = 'PAYREQN_REQN_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000';
```
