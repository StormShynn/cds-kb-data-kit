---
name: I_TRDGDOCEXECWRKBNTYPETEXT
description: "Trdg Exec Wrkbn Type of Trdg Doc - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPETEXT')/$value
semantic_en: "Trdg Exec Wrkbn Type of Trdg Doc - Text"
semantic_vi: "Trdg Exec Wrkbn Type of Trdg Doc - Text — CDS view cơ bản dựa trên R_TrdgDocExecWrkbnTypeText."
keywords:
  - "trdg"
  - "exec"
  - "wrkbn"
  - "type"
  - "doc"
  - "text"
  - "language"
tags:
  - LO
  - component:LO-GT
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCEXECWRKBNTYPETEXT

**Trdg Exec Wrkbn Type of Trdg Doc - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TrdgDocExecWrkbnType` | ✓ | |  |  | `CHAR(4)` | Trading Execution Workbench Type |
| `TrdgDocExecWrkbnTypeText` |  | |  |  | `CHAR(40)` | Description Text |
| `_Language` | | ✓ | | | | |
| `_TrdgDocExecWrkbnType` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Trdg Exec Wrkbn Type of Trdg Doc - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'TrdgDocExecWrkbnType',
   dataCategory: #TEXT,
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_TrdgDocExecWrkbnTypeText
  as select from R_TrdgDocExecWrkbnTypeText
  association to parent I_TrdgDocExecWrkbnType as _TrdgDocExecWrkbnType on $projection.TrdgDocExecWrkbnType = _TrdgDocExecWrkbnType.TrdgDocExecWrkbnType
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgDocExecWrkbnType'
      @ObjectModel.text.element: ['TrdgDocExecWrkbnTypeText']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false
  key TrdgDocExecWrkbnType,
      @Search.ranking: #LOW
      @Search.defaultSearchElement: true
      @Semantics.text: true
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocExecWrkbnTypeText,
      /* Associations */
      _Language,
      _TrdgDocExecWrkbnType
}
```
