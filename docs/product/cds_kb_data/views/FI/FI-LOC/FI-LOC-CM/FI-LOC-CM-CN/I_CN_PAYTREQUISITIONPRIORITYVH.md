---
name: I_CN_PAYTREQUISITIONPRIORITYVH
description: "CN Paytrequisitionpriorityvh"
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
  - value-help
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# I_CN_PAYTREQUISITIONPRIORITYVH

**CN Paytrequisitionpriorityvh**

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
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNREQNPRIVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PaymentRequisitionPriority'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Payment Requisition Priority Description'
@ObjectModel.sapObjectNodeType.name: 'CN_PaymentRequisitionPriority'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SQL_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #UI_PROVIDER_PROJECTION_SOURCE,
                                        #VALUE_HELP_PROVIDER  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/                                        
define root view I_CN_PaytRequisitionPriorityVH   
  as select from dd07l 
  composition [0..*] of I_CN_PaytRequisitionPriorityT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring( domvalue_l, 1, 1 ) as payreqn_priority preserving type)   as PaymentRequisitionPriority,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text  
}
where dd07l.domname  = 'PAYREQN_PRIORITY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
