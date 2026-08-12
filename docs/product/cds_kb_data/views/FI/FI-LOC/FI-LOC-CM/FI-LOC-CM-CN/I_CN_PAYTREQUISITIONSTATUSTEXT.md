---
name: I_CN_PAYTREQUISITIONSTATUSTEXT
description: "CN Paytrequisitionstatustext"
app_component: FI-LOC-CM-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - status
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# I_CN_PAYTREQUISITIONSTATUSTEXT

**CN Paytrequisitionstatustext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentRequisitionStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as payreqn_reqn_status preserving type)` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PaymentRequisitionStatusName` |  | |  | `cast( ddtext as payreqn_reqn_status_name preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_RequisitionStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNREQNSTST'
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType:#BASIC
@Analytics.dataExtraction.enabled: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey: 'PaymentRequisitionStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Payment Requisition Status - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #EXTRACTION_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/
define view I_CN_PaytRequisitionStatusText 
  as select from dd07t
  association to parent I_CN_PaytRequisitionStatusVH as _RequisitionStatus
    on $projection.PaymentRequisitionStatus = _RequisitionStatus.PaymentRequisitionStatus
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  //dd07t
  @ObjectModel.foreignKey.association: '_RequisitionStatus'
  @ObjectModel.text.element: ['PaymentRequisitionStatusName']  
  key cast ( substring( domvalue_l, 1, 2 ) as payreqn_reqn_status preserving type)  as PaymentRequisitionStatus,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true  
  key cast ( ddlanguage as spras preserving type)    as Language,
  @Analytics.hidden: true
  @Consumption.hidden: true
  domvalue_l as DomainValue,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW  
  @Semantics.text: true
  cast( ddtext as payreqn_reqn_status_name preserving type)     as PaymentRequisitionStatusName,
  
//  _Status,
  _Language,
  _RequisitionStatus
}
where domname = 'PAYREQN_REQN_STATUS'
  and as4local = 'A'
  and dd07t.as4vers  = '0000';
```
