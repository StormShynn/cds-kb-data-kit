---
name: I_EWM_STORAGEBEHAVIORTEXT
description: "Storage Behavior - Text"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
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
