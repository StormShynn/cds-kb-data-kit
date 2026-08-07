---
name: I_CUSTOMFIELDCODELISTVALUE
description: "Customfieldcodelistvalue"
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
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# I_CUSTOMFIELDCODELISTVALUE

**Customfieldcodelistvalue**

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
| `Code` | ✓ | |  | `code` |  |  |
| `IsDisabled` |  | |  | `is_disabled` |  |  |
| `_CodeListDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CodeListDescription` | `I_CustomFieldCodeListText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Custom Field Code List Value'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION]
}
@Search.searchable: true
@ObjectModel.representativeKey: 'Code'
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_CustomFieldCodeListValue
  as select from cfd_w_rep_code
  association [0..*] to I_CustomFieldCodeListText as _CodeListDescription on  $projection.CustomFieldID = _CodeListDescription.CustomFieldID
                                                                          and $projection.Code          = _CodeListDescription.Code
{
  key name        as CustomFieldID,
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_CodeListDescription'
  key code        as Code,
      is_disabled as IsDisabled,
      _CodeListDescription
}
where
  version = 'A'
```
