---
name: I_CN_PAYTREQNSTRATEGYSTATUST
description: "CN Paytreqnstrategystatust"
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
  - status
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# I_CN_PAYTREQNSTRATEGYSTATUST

**CN Paytreqnstrategystatust**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentReqnStrategyStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 2 ) as payreqn_stgy_status preserving type)` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PaymentReqnStrategyStatusName` |  | |  | `cast( ddtext as payreqn_stgy_status_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_StrategyStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNREQNSTGYSTST'
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@VDM.viewType:#BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey: 'PaymentReqnStrategyStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #META
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'PaymentRequisitionStrategy Status - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #EXTRACTION_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/
define view I_CN_PaytReqnStrategyStatusT as select from dd07t
  association to parent I_CN_PaytReqnStrategyStatusVH as _StrategyStatus
    on $projection.PaymentReqnStrategyStatus = _StrategyStatus.PaymentReqnStrategyStatus
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  //dd07t
  @ObjectModel.foreignKey.association: '_StrategyStatus'
  @ObjectModel.text.element: ['PaymentReqnStrategyStatusName']
  @Consumption.valueHelpDefinition: [{ entity: {name: 'I_CN_PaytReqnStrategyStatusVH',
                                           element: 'PaymentReqnStrategyStatus'}, useAsTemplate: true }]
  key cast( substring( domvalue_l, 1, 2 ) as payreqn_stgy_status preserving type)   as PaymentReqnStrategyStatus,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true  
  key cast ( ddlanguage as spras preserving type )    as Language,
  @Analytics.hidden: true
  @Consumption.hidden: true
  dd07t.domvalue_l as DomainValue,  
  @Semantics.text: true
  @Search.defaultSearchElement: true
  cast( ddtext as payreqn_stgy_status_name preserving type  )     as PaymentReqnStrategyStatusName,
  
  _Language,
  _StrategyStatus
}
where domname = 'PAYREQN_STGY_STATUS'
and as4local = 'A'
and dd07t.as4vers  = '0000';
```
