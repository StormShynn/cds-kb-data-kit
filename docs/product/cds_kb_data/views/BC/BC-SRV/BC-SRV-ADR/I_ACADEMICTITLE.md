---
name: I_ACADEMICTITLE
description: "Academictitle"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ACADEMICTITLE

**Academictitle**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AcademicTitle` | ✓ | |  | `title_key` | `CHAR(4)` | Academic Title: Key |
| `AcademicTitleName` |  | |  | `title_text` | `CHAR(20)` | Academic Title: Written Form |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AcademicTitleText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Academic Titles'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'AcademicTitle'
@Analytics.technicalName: 'IACADEMICTITLE'
@ObjectModel.sapObjectNodeType.name: 'AcademicTitle' 
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]


define view entity I_AcademicTitle as
    select distinct from tsad2 
association[0..*] to I_AcademicTitleText as _Text
  on $projection.AcademicTitle = _Text.AcademicTitle  
{
    
    @ObjectModel.text.association: '_Text'
    key title_key as AcademicTitle, 
    title_text as AcademicTitleName,
    
    _Text
}
```
