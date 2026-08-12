---
name: I_INSPSPECADDLCODEGROUPTEXT
description: "Inspspecaddlcodegrouptext"
app_component: QM-PT-2CL
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
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECADDLCODEGROUPTEXT

**Inspspecaddlcodegrouptext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
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
| `InspSpecAdditionalCatalog` | ✓ | |  | `katalogart` |  |  |
| `InspSpecAdditionalCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspSpecAddlCodeGroupText` |  | |  | `kurztext` |  |  |
| `_InspSpecAdditionalCatalog` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_InspSpecAddlCodeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSpecAdditionalCatalog` | `I_InspSpecAdditionalCatalog` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_InspSpecAddlCodeGroup` | `I_InspSpecAddlCodeGroup` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Addl Code Group of Master Charc - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #M,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspSpecAdditionalCodeGroup'
}
@Analytics.technicalName: 'IINSPADDCODEGRPT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecAddlCodeGroupText
  as select from qpgt

  association [1..1] to I_InspSpecAdditionalCatalog as _InspSpecAdditionalCatalog on $projection.InspSpecAdditionalCatalog = _InspSpecAdditionalCatalog.InspSpecAdditionalCatalog
  association [1..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [1..1] to I_InspSpecAddlCodeGroup     as _InspSpecAddlCodeGroup     on $projection.InspSpecAdditionalCatalog = _InspSpecAddlCodeGroup.InspSpecAdditionalCatalog
                                                                                 and $projection.InspSpecAdditionalCodeGroup = _InspSpecAddlCodeGroup.InspSpecAdditionalCodeGroup

{
      @ObjectModel.foreignKey.association: '_InspSpecAdditionalCatalog'
  key qpgt.katalogart       as InspSpecAdditionalCatalog,
  key qpgt.codegruppe       as InspSpecAdditionalCodeGroup,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key qpgt.sprache          as Language,

      @Semantics.text: true
      @EndUserText: { label: 'Additional Code Group Text', quickInfo: 'Additional Code Group Text' }
      qpgt.kurztext         as InspSpecAddlCodeGroupText

      //  qpgt.ltextv,
      //  qpgt.inaktiv

      /* Associations */
      ,_InspSpecAdditionalCatalog
      ,_Language
      ,_InspSpecAddlCodeGroup

}
where not(
       qpgt.katalogart = '1'
    or qpgt.katalogart = '3'
  )
```
