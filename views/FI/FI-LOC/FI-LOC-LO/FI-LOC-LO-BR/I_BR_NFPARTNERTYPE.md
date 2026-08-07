---
name: I_BR_NFPARTNERTYPE
description: BR Nfpartnertype
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
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFPARTNERTYPE

**BR Nfpartnertype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFPartnerType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_nfpartnertype )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFPartnerTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Partner Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFPARTTYPE'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFPartnerType'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFPartnerType
  as select from dd07l
  association [0..*] to I_BR_NFPartnerTypeText as _Text on $projection.BR_NFPartnerType = _Text.BR_NFPartnerType
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 )   as logbr_nfpartnertype  ) as BR_NFPartnerType,   
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname  = 'J_1BPARTYP' and as4local = 'A'
```
