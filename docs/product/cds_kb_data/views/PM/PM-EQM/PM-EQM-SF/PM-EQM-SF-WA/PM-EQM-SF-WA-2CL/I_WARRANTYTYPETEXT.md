---
name: I_WARRANTYTYPETEXT
description: "Warrantytypetext"
app_component: PM-EQM-SF-WA-2CL
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
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - text-view
  - text
  - component:PM-EQM-SF-WA-2CL
  - lob:Plant Maintenance
---
# I_WARRANTYTYPETEXT

**Warrantytypetext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-WA-2CL` |
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
| `WarrantyType` | ✓ | |  | `gaart` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `WarrantyTypeName` |  | |  | `ktext` |  |  |
| `_WarrantyType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WarrantyType` | `I_WarrantyType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Warranty Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC

@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.representativeKey: 'WarrantyType'
@ObjectModel.semanticKey:  [ 'WarrantyType' ]

@AbapCatalog.sqlViewName: 'IWARRANTYTYPET'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true

define view I_WarrantyTypeText
  as select from t790g_t
  association [0..1] to I_WarrantyType as _WarrantyType on $projection.WarrantyType = _WarrantyType.WarrantyType
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_WarrantyType'
  key gaart as WarrantyType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu as Language,

      @Semantics.text: true
      ktext as WarrantyTypeName,

      /* Associations */
      _WarrantyType,
      _Language


}
```
