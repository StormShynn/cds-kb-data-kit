---
name: I_TRDCLASSFCTNNMBRTEXT
description: "Trdclassfctnnmbrtext"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
  - text-view
  - text
  - component:FT-ITR-CLS
  - lob:Other
---
# I_TRDCLASSFCTNNMBRTEXT

**Trdclassfctnnmbrtext**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdClassfctnNmbrSchmCntnt` | ✓ | |  | `nosct` |  |  |
| `TrdClassfctnNmbr` | ✓ | |  | `ccngn` |  |  |
| `ValidityStartDate` | ✓ | |  | `datab` |  |  |
| `TrdClassfctnNmbrTextType` | ✓ | |  | `ctstt` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ValidityEndDate` |  | |  | `datbi` |  |  |
| `TrdClassfctnNmbrName` |  | |  | `text` |  |  |
| `TrdClassfctnNmbrText` |  | |  | `text` |  |  |
| `TrdClassfctnNmbrSchmType` |  | | `_Content` | `TrdClassfctnNmbrSchmType` |  |  |
| `_TrdClassfctnNmbrSchmCntnt` | | ✓ | | | | |
| `_TrdClassfctnNmbrTextType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Date` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdClassfctnNmbrSchmCntnt` | `I_TrdClassfctnNmbrSchmCntnt` | [0..1] |
| `_TrdClassfctnNmbrTextType` | `I_TrdClassfctnNmbrTextType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Date` | `I_CalendarDate` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Number - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.sqlViewName: 'ITRDCLSNMBRTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'TrdClassfctnNmbr'

@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #LANGUAGE_DEPENDENT_TEXT                   ]
define view I_TrdClassfctnNmbrText
  as select from /sapsll/clsnrt
    inner join   I_TrdClassfctnNmbrSchmCntnt as _Content on _Content.TrdClassfctnNmbrSchmCntnt = nosct
  association [0..1] to I_TrdClassfctnNmbrSchmCntnt as _TrdClassfctnNmbrSchmCntnt on  $projection.TrdClassfctnNmbrSchmCntnt = _TrdClassfctnNmbrSchmCntnt.TrdClassfctnNmbrSchmCntnt
//  association [0..1] to I_TrdClassfctnNmbr          as _TrdClassfctnNmbr          on  $projection.TrdClassfctnNmbrSchmCntnt = _TrdClassfctnNmbr.TrdClassfctnNmbrSchmCntnt
//                                                                                  and $projection.TrdClassfctnNmbr          = _TrdClassfctnNmbr.TrdClassfctnNmbr
//                                                                                  and $projection.ValidityStartDate         = _TrdClassfctnNmbr.ValidityStartDate
  association [0..1] to I_TrdClassfctnNmbrTextType  as _TrdClassfctnNmbrTextType  on  $projection.TrdClassfctnNmbrTextType = _TrdClassfctnNmbrTextType.TrdClassfctnNmbrTextType
  association [0..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language
  association [0..1] to I_CalendarDate              as _Date                      on  $projection.ValidityStartDate = _Date.CalendarDate
{
      @ObjectModel.foreignKey.association: '_TrdClassfctnNmbrSchmCntnt'
  key nosct  as TrdClassfctnNmbrSchmCntnt,
//      @ObjectModel.foreignKey.association: '_TrdClassfctnNmbr'
  key ccngn  as TrdClassfctnNmbr,
      @Semantics.businessDate.from: true
      @ObjectModel.foreignKey.association: '_Date'
  key datab  as ValidityStartDate,
      @ObjectModel.foreignKey.association: '_TrdClassfctnNmbrTextType'
  key ctstt  as TrdClassfctnNmbrTextType,                
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu  as Language,
      @Semantics.businessDate.to: true
      datbi  as ValidityEndDate,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @Search.fulltextIndex.required
      text   as TrdClassfctnNmbrName,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @Search.fulltextIndex.required
      text   as TrdClassfctnNmbrText,
      _Content.TrdClassfctnNmbrSchmType,

      _TrdClassfctnNmbrSchmCntnt,
//      _TrdClassfctnNmbr,
      _TrdClassfctnNmbrTextType,
      _Date,
      _Language
}
```
