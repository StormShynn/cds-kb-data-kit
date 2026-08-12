---
name: I_CHANGEMASTEROBJECTTYPETEXT
description: "These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPETEXT')/$value
semantic_en: "These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?"
semantic_vi: "Change Number Object Type - Text — CDS view giao diện dựa trên tcc02."
keywords:
  - "change"
  - "number"
  - "object"
  - "type"
  - "text"
  - "language"
  - "short"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTEROBJECTTYPETEXT

**These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberObjectType` | ✓ | |  | `aetyp` | `NUMC(2)` | Object Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ObjectTypeText` |  | |  | `cast ( tcc02.attxt as /plmb/attxt )` | `CHAR(30)` | Object Type Description |
| `ObjectTypeShortText` |  | |  | `atabr` | `CHAR(10)` | Object Type Short Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNOBJTYPETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ChangeNumberObjectType'
@ObjectModel.semanticKey: [ 'ChangeNumberObjectType' ]

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Object Type - Text'
define view I_ChangeMasterObjectTypeText
  as select from tcc02
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key tcc02.aetyp                         as ChangeNumberObjectType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key tcc02.spras                         as Language,

      @Semantics.text
      cast ( tcc02.attxt as /plmb/attxt ) as ObjectTypeText,
      @Semantics.text
      tcc02.atabr                         as ObjectTypeShortText,

      _Language
}
```
