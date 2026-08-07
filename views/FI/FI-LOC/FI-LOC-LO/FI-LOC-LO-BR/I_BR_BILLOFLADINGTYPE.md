---
name: I_BR_BILLOFLADINGTYPE
description: BR Billofladingtype
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_BILLOFLADINGTYPE

**BR Billofladingtype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_BillOfLadingType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as logbr_bill_lading_type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_BillOfLadingTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRBILLLADTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Brazil Domain for Bill Of Lading Type'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_BillOfLadingType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_BillOfLadingType
as select from dd07l
  
  association [0..*] to I_BR_BillOfLadingTypeText as _Text on $projection.BR_BillOfLadingType = _Text.BR_BillOfLadingType                    
  
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 2 ) as logbr_bill_lading_type ) as BR_BillOfLadingType,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'LOGBR_BILL_LADING_TYPE' 
  and as4local = 'A'
```
