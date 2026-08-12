---
name: I_REINTEGOBJSPACEGROUPTYPETEXT
description: "Real Estate Int Obj Spacegrp Type - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPETEXT')/$value
semantic_en: "Real Estate Int Obj Spacegrp Type - Text"
semantic_vi: "Real Estate Int Obj Spacegrp Type - Text — CDS view giao diện dựa trên tivipiosgtypet."
keywords:
  - "real"
  - "estate"
  - "int"
  - "obj"
  - "spacegrp"
  - "type"
  - "text"
  - "integ"
  - "space"
  - "group"
  - "language"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJSPACEGROUPTYPETEXT

**Real Estate Int Obj Spacegrp Type - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REIntegObjSpaceGroupType` | ✓ | |  | `iosgtype` | `CHAR(4)` | Group Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `REIntegObjSpaceGroupTypeText` |  | |  | `xiosgtype` | `CHAR(60)` | Description for Group Type |
| `_REIntegObjSpaceGroupType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REIntegObjSpaceGroupType` | `I_REIntegObjSpaceGroupType` | [0..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Real Estate Int Obj Spacegrp Type - Text'
@AbapCatalog.sqlViewName: 'IREINTOBJSGTYPET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REIntegObjSpaceGroupType'
@ObjectModel.semanticKey: ['REIntegObjSpaceGroupType']


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
 
define view I_REIntegObjSpaceGroupTypeText as 
select from tivipiosgtypet
  association [0..1] to I_REIntegObjSpaceGroupType as _REIntegObjSpaceGroupType on $projection.REIntegObjSpaceGroupType = _REIntegObjSpaceGroupType.REIntegObjSpaceGroupType
  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language{
    
  key iosgtype      as REIntegObjSpaceGroupType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras            as Language,
      @Semantics.text: true
      xiosgtype as REIntegObjSpaceGroupTypeText,
      _REIntegObjSpaceGroupType,
      _Language
    
}
```
