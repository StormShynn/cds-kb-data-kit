---
name: I_SAPGUIICONTEXT
description: Sapguiicontext
app_component: BC-ABA-SC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-ABA
  - BC-ABA-SC
  - interface-view
  - text-view
  - text
  - component:BC-ABA-SC
  - lob:Basis Components
---
# I_SAPGUIICONTEXT

**Sapguiicontext**

| Property | Value |
|---|---|
| App Component | `BC-ABA-SC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `langu` |
| key `SAPGUIIconASCIICode` | `id` |
| `SAPGUIIconName` | `shorttext` |
| `_Language` | *Association* |
| `_SAPGUIIcon` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'SAP GUI Icon - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey:'SAPGUIIconASCIICode'
@ObjectModel.sapObjectNodeType.name: 'SAPGraphicalUIIconText'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType:{dataClass: #META, serviceQuality: #A, sizeCategory: #M }
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_SAPGUIIconText
  as select from icont
  association        to parent I_SAPGUIIcon as _SAPGUIIcon on $projection.SAPGUIIconASCIICode = _SAPGUIIcon.SAPGUIIconASCIICode
  association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu     as Language,

      @ObjectModel.text.element:['SAPGUIIconName']
      @ObjectModel.foreignKey.association: '_SAPGUIIcon'
  key id        as SAPGUIIconASCIICode,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      shorttext as SAPGUIIconName,
      _Language,
      _SAPGUIIcon
}
```
