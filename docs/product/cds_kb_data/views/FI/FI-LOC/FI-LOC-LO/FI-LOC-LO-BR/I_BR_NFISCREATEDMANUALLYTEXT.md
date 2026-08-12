---
name: I_BR_NFISCREATEDMANUALLYTEXT
description: "BR Nfiscreatedmanuallytext"
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
# I_BR_NFISCREATEDMANUALLYTEXT

**BR Nfiscreatedmanuallytext**

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
| `BR_NFIsCreatedManually` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_manual preserving type )` |  |  |
| `BR_NFIsCreatedManuallyDesc` |  | |  | `cast( ddtext as logbr_manualdescription preserving type )` |  |  |
| `_BR_NFIsCreatedManually` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFIsCreatedManually` | `I_BR_NFIsCreatedManually` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NF Created Manually Ind - Text'
@AbapCatalog.sqlViewName: 'IBRNFICMANUAT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFIsCreatedManually'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFIsCreatedManuallyText
  as select from dd07t
  association [1..1] to I_BR_NFIsCreatedManually as _BR_NFIsCreatedManually on $projection.BR_NFIsCreatedManually = _BR_NFIsCreatedManually.BR_NFIsCreatedManually
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @Semantics.booleanIndicator: true
  @ObjectModel.foreignKey.association: '_BR_NFIsCreatedManually'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_manual preserving type ) as BR_NFIsCreatedManually,
  @Semantics.text
  cast( ddtext as logbr_manualdescription preserving type ) as BR_NFIsCreatedManuallyDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFIsCreatedManually,
  _Language
}
where domname = 'J_1BMANUAL' 
  and as4local = 'A'
```
