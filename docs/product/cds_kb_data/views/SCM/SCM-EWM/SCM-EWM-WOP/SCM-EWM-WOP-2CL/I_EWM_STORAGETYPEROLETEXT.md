---
name: I_EWM_STORAGETYPEROLETEXT
description: "Storage Type Role - Text"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPEROLETEXT')/$value
semantic_en: "Storage Type Role - Text"
semantic_vi: "Storage Type Role - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "storage"
  - "type"
  - "role"
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
# I_EWM_STORAGETYPEROLETEXT

**Storage Type Role - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPEROLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EWMStorageTypeRole` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as /scwm/de_st_role preserving type )` | `CHAR(1)` | Storage Type Role |
| `EWMStorageTypeRoleDesc` |  | |  | `cast( ddtext as ewm_de_stortyperoledesc preserving type )` | `CHAR(60)` | Storage Type Role Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPEROLETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPEROLETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Storage Type Role - Text'
@VDM.viewType: #BASIC 
@ObjectModel.representativeKey: 'EWMStorageTypeRole'
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
define view entity I_EWM_StorageTypeRoleText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                       as Language,
  key cast ( substring( dd07t.domvalue_l, 1, 1 ) as /scwm/de_st_role preserving type ) as EWMStorageTypeRole,
      @Semantics.text: true
      cast( ddtext as ewm_de_stortyperoledesc preserving type )                        as EWMStorageTypeRoleDesc,

      /* Associations */
      _Language
}
where
      domname  = '/SCWM/DO_ST_ROLE'
  and as4local = 'A';
```
