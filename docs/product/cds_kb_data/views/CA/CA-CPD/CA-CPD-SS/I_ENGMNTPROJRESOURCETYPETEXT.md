---
name: I_ENGMNTPROJRESOURCETYPETEXT
description: "This CDS view provides descriptions of resource types in supported languages."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPETEXT')/$value
semantic_en: "This CDS view provides descriptions of resource types in supported languages."
semantic_vi: "Resource Type in Engmnt Project - Text — CDS view giao diện dựa trên Resource Type in Engmnt Project - Text."
keywords:
  - "resource"
  - "type"
  - "engmnt"
  - "project"
  - "text"
  - "engagement"
  - "language"
  - "proj"
tags:
  - CA
  - bo:project
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
---
# I_ENGMNTPROJRESOURCETYPETEXT

**This CDS view provides descriptions of resource types in supported languages.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectResourceType` | ✓ | |  | `/cpd/fc_rty_t.res_type_id` | `CHAR(4)` | Resource Type ID |
| `Language` | ✓ | |  | `/cpd/fc_rty_t.spras` | `LANG(1)` | Language Key |
| `EngagementProjResourceTypeText` |  | |  | `/cpd/fc_rty_t.description` | `CHAR(60)` | Resource Type Description |
| `_EngmntProjResourceType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngmntProjResourceType` | `I_EngmntProjResourceType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPETEXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPRESTYPET'
@EndUserText.label: 'Resource Type in Engmnt Project - Text'
@VDM.viewType:#BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'EngagementProjectResourceType'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 000
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
               supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE]
}
define view I_EngmntProjResourceTypeText
  as select from /cpd/fc_rty_t
  association [0..1] to I_EngmntProjResourceType as _EngmntProjResourceType on $projection.EngagementProjectResourceType = _EngmntProjResourceType.EngagementProjectResourceType
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_EngmntProjResourceType'
  key /cpd/fc_rty_t.res_type_id  as EngagementProjectResourceType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key /cpd/fc_rty_t.spras        as Language,
      @Semantics.text: true
      /cpd/fc_rty_t.description  as EngagementProjResourceTypeText,
      // @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _EngmntProjResourceType,
      _Language
}
```
