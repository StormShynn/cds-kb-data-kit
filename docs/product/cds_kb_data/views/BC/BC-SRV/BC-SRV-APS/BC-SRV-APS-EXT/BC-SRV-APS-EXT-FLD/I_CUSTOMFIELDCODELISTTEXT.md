---
name: I_CUSTOMFIELDCODELISTTEXT
description: "Customfieldcodelisttext"
app_component: BC-SRV-APS-EXT-FLD
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - text-view
  - text
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# I_CUSTOMFIELDCODELISTTEXT

**Customfieldcodelisttext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-FLD` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomFieldID` | ✓ | |  | `name` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `Code` | ✓ | |  | `code` |  |  |
| `Description` |  | |  | `description` |  |  |
| `_Code` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Code` | `I_CustomFieldCodeListValue` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Custom Field Code List Value Description'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
}
@Search.searchable
@ObjectModel.representativeKey: 'Code'
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_CustomFieldCodeListText as select from cfd_w_rep_code_t
association [1..1] to I_CustomFieldCodeListValue as _Code on $projection.Code          = _Code.Code and
                                                             $projection.CustomFieldID = _Code.CustomFieldID
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key name        as CustomFieldID,
  @Semantics.language: true 
  key language    as Language,
  @ObjectModel.text.element: [ 'Description' ]
  @Search.defaultSearchElement: true 
  key code        as Code,  
  @Semantics.text:true  
  @Search.defaultSearchElement: true
  description as Description,
  _Code,
  _Language
} 
where version = 'A'
```
