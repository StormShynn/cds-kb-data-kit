---
name: I_EWM_STORAGEBEHAVIORTEXT
description: "Storage Behavior - Text"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBEHAVIORTEXT')/$value
semantic_en: "Storage Behavior - Text"
semantic_vi: "Storage Behavior - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "storage"
  - "behavior"
  - "text"
  - "language"
  - "desc"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_STORAGEBEHAVIORTEXT

**Storage Behavior - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBEHAVIORTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EWMStorageBehavior` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as /scwm/de_behav preserving type )` | `CHAR(1)` | Storage Behavior |
| `EWMStorageBehaviorDesc` |  | |  | `cast( ddtext as ewm_de_storbehaviordesc preserving type )` | `CHAR(60)` | Storage Behavior Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBEHAVIORTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBEHAVIORTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Storage Behavior - Text'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EWMStorageBehavior'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                           
define view entity I_EWM_StorageBehaviorText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true 
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                     as Language,
  key cast ( substring( dd07t.domvalue_l, 1, 1 ) as /scwm/de_behav preserving type ) as EWMStorageBehavior,
      @Semantics.text: true
      cast( ddtext as ewm_de_storbehaviordesc preserving type )                      as EWMStorageBehaviorDesc,

      /* Associations */
      _Language
}
where
      domname  = '/SCWM/DO_BEHAV'
  and as4local = 'A';
```
