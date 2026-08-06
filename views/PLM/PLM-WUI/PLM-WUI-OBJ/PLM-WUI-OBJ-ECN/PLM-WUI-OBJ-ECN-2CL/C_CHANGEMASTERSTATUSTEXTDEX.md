---
name: C_CHANGEMASTERSTATUSTEXTDEX
description: Change MasterERSTATUSTEXTDEX
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - consumption-view
  - data-extraction
  - change-master
  - text
  - status
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# C_CHANGEMASTERSTATUSTEXTDEX

**Change MasterERSTATUSTEXTDEX**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ChangeNumberStatus` | `ChangeNumberStatus` |
| key `Language` | `Language` |
| `ChangeNumberStatusText` | `ChangeNumberStatusText` |
| `_Language` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Master Status - Text'
@ObjectModel.sapObjectNodeType.name: 'ChangeMasterStatusText'
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'ChangeNumberStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE ]
@Analytics:{
    internalName:#LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'T419T', role: #MAIN,
              viewElement: ['ChangeNumberStatus','Language'],
              tableElement: ['AENST', 'SPRAS'] }
          ]
        }
    }
}
define view entity C_ChangeMasterStatusTextDEX
  as select from I_ChangeMasterStatusText
{
  key ChangeNumberStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      @Semantics.text: true
      ChangeNumberStatusText,
      _Language

}
```
