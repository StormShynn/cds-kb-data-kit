---
name: I_BR_NFEDOCUMENTSTATUS
description: BR Nfedocumentstatus
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - status
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEDOCUMENTSTATUS

**BR Nfedocumentstatus**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BR_NFeDocumentStatus` | `cast( substring( domvalue_l, 1, 1 ) as logbr_nfedocstatus preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFeDocumentStatusText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Document Status'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEDOCSTATUS'
@ObjectModel.representativeKey: 'BR_NFeDocumentStatus'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@AbapCatalog.preserveKey:true 

define view I_BR_NFeDocumentStatus
  as select from dd07l
  association [0..*] to I_BR_NFeDocumentStatusText as _Text on $projection.BR_NFeDocumentStatus = _Text.BR_NFeDocumentStatus
{
  @ObjectModel.text.association: '_Text'
  key cast( substring( domvalue_l, 1, 1 ) as logbr_nfedocstatus preserving type ) as BR_NFeDocumentStatus,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
   _Text
}
where domname  = 'J_1BNFEDOCSTATUS'
  and as4local = 'A'
```
