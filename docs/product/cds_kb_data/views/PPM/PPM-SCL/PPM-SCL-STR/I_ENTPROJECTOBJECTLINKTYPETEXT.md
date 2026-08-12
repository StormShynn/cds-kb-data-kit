---
name: I_ENTPROJECTOBJECTLINKTYPETEXT
description: "Entprojectobjectlinktypetext"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - text-view
  - project
  - text
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTOBJECTLINKTYPETEXT

**Entprojectobjectlinktypetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LanguageCode` | ✓ | |  | `language` |  |  |
| `ObjectLinkType` | ✓ | |  | `object_type` |  |  |
| `ObjectLinkTypeText` |  | |  | `text` |  |  |

## Source Code

```abap
@EndUserText.label: 'Object Link Type for Ent Projects – Text'
@ObjectModel.representativeKey: 'ObjectLinkType'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEPRJMOBLTYPETEXT'

@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjectObjectLinkTypeText as select from dpr_obl_obtyp_t {
    @Semantics.language: true 
    key dpr_obl_obtyp_t.language            as LanguageCode,
    @ObjectModel.text.element: ['ObjectLinkTypeText']
    key dpr_obl_obtyp_t.object_type         as ObjectLinkType,
    @UI.hidden: true
    @Semantics.text: true 
    @Search.defaultSearchElement: true
    dpr_obl_obtyp_t.text                    as ObjectLinkTypeText
}
```
