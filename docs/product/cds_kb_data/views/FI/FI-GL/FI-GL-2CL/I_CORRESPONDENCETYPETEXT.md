---
name: I_CORRESPONDENCETYPETEXT
description: "Correspondencetypetext"
app_component: FI-GL-2CL
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
  - FI-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-2CL
  - lob:Finance
---
# I_CORRESPONDENCETYPETEXT

**Correspondencetypetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `Correspondence` | ✓ | |  | `event` |  |  |
| `CorrespondenceName` |  | |  | `ltext` |  |  |
| `CorrespondenceFirstDateName` |  | |  | `dtex1` |  |  |
| `CorrespondenceSecondDateName` |  | |  | `dtex2` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICRRSPNDNCTPTXT'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'Correspondence'
@AbapCatalog.buffering.status: #NOT_ALLOWED         
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@EndUserText.label: 'Correspondence Type - Text'
define view I_CorrespondenceTypeText as select from t048t association [0..1] to I_Language as _Language 
                                                                          on $projection.Language = _Language.Language {
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key spras as Language,
  key event as Correspondence,
  
  @Semantics.text: true
  ltext as CorrespondenceName,
  @Semantics.text: true
  dtex1 as CorrespondenceFirstDateName,
  @Semantics.text: true
  dtex2 as CorrespondenceSecondDateName,
  
  _Language  
  
}
```
