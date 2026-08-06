---
name: I_BR_NFPARTNERTYPETEXT
description: BR Nfpartnertypetext
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
  - text-view
  - text
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFPARTNERTYPETEXT

**BR Nfpartnertypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| key `BR_NFPartnerType` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_nfpartnertype preserving type )` |
| `BR_NFPartnerTypeDesc` | `cast(ddtext as logbr_nfpartnertypedescription preserving type )` |
| `_BR_NFPartnerType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFPartnerType` | `I_BR_NFPartnerType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Partner Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFPARTTYPET'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFPartnerType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFPartnerTypeText as select from dd07t
  association [1..1] to I_BR_NFPartnerType as _BR_NFPartnerType on $projection.BR_NFPartnerType = _BR_NFPartnerType.BR_NFPartnerType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFPartnerType'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_nfpartnertype preserving type ) as BR_NFPartnerType,  
  @Semantics.text
  cast(ddtext as logbr_nfpartnertypedescription preserving type ) as BR_NFPartnerTypeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]  
  _BR_NFPartnerType,
  _Language 
}
where domname = 'J_1BPARTYP' 
  and as4local = 'A'
```
