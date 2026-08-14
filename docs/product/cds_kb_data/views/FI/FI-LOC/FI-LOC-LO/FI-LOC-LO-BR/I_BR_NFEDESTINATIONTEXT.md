---
name: I_BR_NFEDESTINATIONTEXT
description: "BR Nfedestinationtext"
semantic_vi: "View BR NFe Destination Text cung cấp mô tả địa điểm NFe Brazil trong nhiều ngôn ngữ. Nó được sử dụng để hiển thị mô tả địa điểm cho các địa điểm NFe Brazil."
keywords:
  - "sap"
  - "cds"
  - "view"
  - "br"
  - "nfe"
  - "destination"
  - "text"
  - "description"
  - "language"
  - "fi-loc-lo-br"
  - "finance"
  - "interface"
semantic_en: "The BR NFe Destination Text view provides Brazilian NFe destination descriptions in multiple languages. It is used to display the destination descriptions for NFe destinations in Brazil."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_BR_NFEDESTINATIONTEXT

**BR Nfedestinationtext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_NFeDestination` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_nfe_iddest preserving type )` |  |  |
| `BR_NFeDestinationDesc` |  | |  | `cast( ddtext as logbr_nfe_iddest_description preserving type )` |  |  |
| `_BR_NFeDestination` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFeDestination` | `I_BR_NFeDestination` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Destination - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEDESTT'
@ObjectModel.representativeKey: 'BR_NFeDestination'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true 

define view I_BR_NFeDestinationText
  as select from dd07t
  association [1..1] to I_BR_NFeDestination as _BR_NFeDestination on $projection.BR_NFeDestination = _BR_NFeDestination.BR_NFeDestination
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @Semantics.language
  key cast( ddlanguage as spras preserving type )                                as Language,
      @ObjectModel.foreignKey.association: '_BR_NFeDestination'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_nfe_iddest preserving type ) as BR_NFeDestination,
      @Semantics.text
      cast( ddtext as logbr_nfe_iddest_description preserving type )             as BR_NFeDestinationDesc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _BR_NFeDestination,
      _Language
}
where
      domname  = 'J_1BNFE_IDDEST'
  and as4local = 'A'
```
