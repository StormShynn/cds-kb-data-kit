---
name: I_BR_BILLOFLADINGTYPETEXT
description: "BR Billofladingtypetext"
app_component: FI-LOC-LO-BR
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
  - FI-LOC-LO
  - interface-view
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_BILLOFLADINGTYPETEXT

**BR Billofladingtypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_BillOfLadingType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as logbr_bill_lading_type )` |  |  |
| `BR_BillOfLadingTypeDesc` |  | |  | `ddtext` |  |  |
| `_BR_BillOfLadingType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_BillOfLadingType` | `I_BR_BillOfLadingType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRBILLLADTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Brazil Domain Bill Of Lading Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_BillOfLadingType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT


/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_BillOfLadingTypeText as select from dd07t

  association [1..1] to I_BR_BillOfLadingType as _BR_BillOfLadingType on $projection.BR_BillOfLadingType = _BR_BillOfLadingType.BR_BillOfLadingType
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language

{
  @Semantics.language
  key cast( ddlanguage as spras preserving type )                      as Language,
  
  @ObjectModel.foreignKey.association: '_BR_BillOfLadingType'
  key cast ( substring( domvalue_l, 1, 2 ) as logbr_bill_lading_type ) as BR_BillOfLadingType,
  
  @Semantics.text
  ddtext                                                               as BR_BillOfLadingTypeDesc,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_BillOfLadingType, 
  _Language  
  
}

where domname = 'LOGBR_BILL_LADING_TYPE' 
  and as4local = 'A'
```
