---
name: I_RESPACEGRPENABLEUSETYPETEXT
description: "Space Group Enable Use Type - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value
semantic_en: "Space Group Enable Use Type - Text"
semantic_vi: "Space Group Enable Use Type - Text — CDS view giao diện dựa trên tivipsgenusetypt."
keywords:
  - "space"
  - "group"
  - "enable"
  - "use"
  - "type"
  - "text"
  - "language"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - bo:project
---
# I_RESPACEGRPENABLEUSETYPETEXT

**Space Group Enable Use Type - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RESpaceGrpEnableUseType` | ✓ | |  | `iosgenableusetype` | `CHAR(4)` | Usage Enablement Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RESpaceGrpEnableUseTypeText` |  | |  | `xiosgenableusetype` | `CHAR(60)` | Description Usage Enablement Type |
| `_Language` | | ✓ | | | | |
| `_RESpaceGrpEnableUseType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value)*

```abap
@EndUserText.label: 'Space Group Enable Use Type - Text'
@AbapCatalog.sqlViewName: 'IREIOENUSTYPET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RESpaceGrpEnableUseType'
@ObjectModel.semanticKey: ['RESpaceGrpEnableUseType']

@Search.searchable: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

define view I_RESpaceGrpEnableUseTypeText
  as select from tivipsgenusetypt
//  association to parent I_RESpaceGrpEnableUseType as _RESpaceGrpEnableUseType on $projection.RESpaceGrpEnableUseType = _RESpaceGrpEnableUseType.RESpaceGrpEnableUseType
  association to parent I_RESpaceGrpEnableUseType as _RESpaceGrpEnableUseType on $projection.RESpaceGrpEnableUseType = _RESpaceGrpEnableUseType.RESpaceGrpEnableUseType
  association [1..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_RESpaceGrpEnableUseType'
      @ObjectModel.text.element: ['RESpaceGrpEnableUseTypeText']
  key iosgenableusetype  as RESpaceGrpEnableUseType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras              as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      xiosgenableusetype as RESpaceGrpEnableUseTypeText,
      _RESpaceGrpEnableUseType,
      _Language

}
```
