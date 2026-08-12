---
name: I_ORGANIZATIONALCHANGETEXT
description: "Organizationalchangetext"
app_component: FI-GL-OC-2CL
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
  - FI-GL-OC
  - interface-view
  - text-view
  - text
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGANIZATIONALCHANGETEXT

**Organizationalchangetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
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
| `OrganizationalChange` | ✓ | |  | `orgl_change` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `OrganizationalChangeName` |  | |  | `orgl_change_name` |  |  |
| `LastChangeDateTime` |  | |  | `last_changed_on` |  |  |
| `LastChangedByUser` |  | |  | `last_changed_by` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCORGLCHGT'
@EndUserText.label: 'Language Dependent Orgl Change Attributes - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OrganizationalChange'
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:  [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SEARCHABLE_ENTITY,
    #LANGUAGE_DEPENDENT_TEXT
]

define view I_OrganizationalChangeText
  as select from finoc_orglchgt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key orgl_change      as OrganizationalChange,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu            as Language,
      @Semantics.text
      orgl_change_name as OrganizationalChangeName,
      last_changed_on  as LastChangeDateTime,
      last_changed_by  as LastChangedByUser,
      _Language
}
```
