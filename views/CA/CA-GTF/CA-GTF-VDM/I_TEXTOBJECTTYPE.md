---
name: I_TEXTOBJECTTYPE
description: Textobjecttype
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - text
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_TEXTOBJECTTYPE

**Textobjecttype**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TextObjectType` | ✓ | |  | `tdid` |
| `TextObjectCategory` | ✓ | |  | `tdobject` |
| `_TextObjectTypeText` | | ✓ | | |
| `_TextObjectCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectTypeText` | `I_TextObjectTypeText` | [0..*] |
| `_TextObjectCategory` | `I_TextObjectCategory` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'TextObjectType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ITEXTOBJECTTYPE'
@EndUserText.label: 'Text Object Type'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_TextObjectType
  as select from ttxid

  association [0..*] to I_TextObjectTypeText as _TextObjectTypeText on  $projection.TextObjectType     = _TextObjectTypeText.TextObjectType
                                                                    and $projection.TextObjectCategory = _TextObjectTypeText.TextObjectCategory

  association [0..1] to I_TextObjectCategory as _TextObjectCategory on  $projection.TextObjectCategory = _TextObjectCategory.TextObjectCategory
{

      @ObjectModel.text.association: '_TextobjectTypeText'
  key ttxid.tdid     as TextObjectType,
      @ObjectModel.foreignKey.association: '_TextObjectCategory'
  key ttxid.tdobject as TextObjectCategory,
      _TextObjectCategory,
      _TextObjectTypeText


}
```
