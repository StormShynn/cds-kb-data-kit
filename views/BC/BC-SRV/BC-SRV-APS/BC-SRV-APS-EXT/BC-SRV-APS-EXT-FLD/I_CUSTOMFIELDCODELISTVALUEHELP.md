---
name: I_CUSTOMFIELDCODELISTVALUEHELP
description: Customfieldcodelistvaluehelp
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
  - value-help
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# I_CUSTOMFIELDCODELISTVALUEHELP

**Customfieldcodelistvaluehelp**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-FLD` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomFieldID` | ✓ | |  |  |  |  |
| `Code` | ✓ | |  |  |  |  |
| `Description` |  | |  | `_CodeListDescription[1: Language = $session.system_language].Description` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Valuehelp View for Custom Field Codes'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_CustomFieldCodeListValueHelp as select from
   I_CustomFieldCodeListValue
{
  key CustomFieldID,
  
      @ObjectModel.text.element: [ 'Description' ]
      @Search.defaultSearchElement: true
  key Code        as Code,
      @Semantics.text:true
      @Search.defaultSearchElement: true
      _CodeListDescription[1: Language = $session.system_language].Description as Description
}
```
