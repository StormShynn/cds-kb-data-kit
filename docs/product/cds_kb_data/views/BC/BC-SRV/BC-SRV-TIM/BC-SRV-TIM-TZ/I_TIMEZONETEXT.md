---
name: I_TIMEZONETEXT
description: "Timezonetext"
app_component: BC-SRV-TIM-TZ
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-TIM
  - interface-view
  - text-view
  - text
  - component:BC-SRV-TIM-TZ
  - lob:Basis Components
---
# I_TIMEZONETEXT

**Timezonetext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeZoneID` | ✓ | |  | `tzone` | `CHAR(6)` | Time Zone |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TimeZoneText` |  | |  | `descript` | `CHAR(30)` | Time Zone Text |
| `_TimeZone` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeZone` | `I_TimeZone` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ITIMEZONETEXT'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : {dataExtraction.enabled : true}

@EndUserText.label: 'Time Zone Text'

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TimeZoneID'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_TimeZoneText as select from ttzzt
    association [0..1] to I_TimeZone as _TimeZone
        on $projection.TimeZoneID = _TimeZone.TimeZoneID
    association [0..1] to I_Language as _Language
        on $projection.Language = _Language.Language
 {
    @ObjectModel.foreignKey.association: '_TimeZone'
    key ttzzt.tzone as TimeZoneID, 
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'    
    key ttzzt.langu as Language, 
    
    @Semantics.text    
    ttzzt.descript as TimeZoneText,
    
    _TimeZone,
    _Language
}
```
