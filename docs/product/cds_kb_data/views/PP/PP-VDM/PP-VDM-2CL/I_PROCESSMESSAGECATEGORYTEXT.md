---
name: I_PROCESSMESSAGECATEGORYTEXT
description: "Process Message Category - Text"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORYTEXT')/$value
semantic_en: "Process Message Category - Text"
semantic_vi: "Process Message Category - Text — CDS view giao diện dựa trên tc50t."
keywords:
  - "process"
  - "message"
  - "category"
  - "text"
  - "plant"
  - "language"
  - "name"
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
---
# I_PROCESSMESSAGECATEGORYTEXT

**Process Message Category - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `ProcessMessageCategory` | ✓ | |  | `cast(txt.costr as vdm_costr_pm preserving type)` | `CHAR(8)` | Process Message Category |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ProcessMessageCategoryName` |  | |  | `csktx` | `CHAR(40)` | Description of the Process Message or Instruction Category |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ProcessMessageCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORYTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPROCMESSCATTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProcessMessageCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Process Message Category - Text'

define view entity I_ProcessMessageCategoryText
  as select from tc50t as txt
  
  association [1..1] to I_Plant                  as _Plant    on $projection.Plant = _Plant.Plant
  association [0..1] to I_Language               as _Language on $projection.Language = _Language.Language
  association to parent I_ProcessMessageCategory as _ProcessMessageCategory
                                                              on  $projection.Plant                  = _ProcessMessageCategory.Plant  
                                                              and $projection.ProcessMessageCategory = _ProcessMessageCategory.ProcessMessageCategory
{
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks as Plant,
      @ObjectModel.foreignKey.association: '_ProcessMessageCategory'
      @ObjectModel.text.element: ['ProcessMessageCategoryName']
  key cast(txt.costr as vdm_costr_pm preserving type) as ProcessMessageCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.csktx as ProcessMessageCategoryName,

      // Associations
      _Plant,
      _ProcessMessageCategory,
      _Language
}
  where txt.cstyp = 'MS'; //process message categories only
```
