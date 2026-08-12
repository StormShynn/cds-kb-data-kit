---
name: I_PUBLICHOLIDAYCALENDARBASIC
description: "Publicholidaycalendarbasic"
app_component: BC-SRV-ASF-CAL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - component:BC-SRV-ASF-CAL
  - lob:Basis Components
---
# I_PUBLICHOLIDAYCALENDARBASIC

**Publicholidaycalendarbasic**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendarID` | ✓ | |  |  | `CHAR(32)` | Holiday calendar ID |
| `PublicHolidayCalendarLegacyID` |  | |  |  | `CHAR(2)` | Public Holiday Calendar |
| `PublHldayCalValidityStartDate` |  | |  |  | `DATS(8)` | Date (from) |
| `PublHldayCalValidityEndDate` |  | |  |  | `DATS(8)` | Date (to) |
| `_Text` | | ✓ | | | | |
| `_Assgn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PublHolidayCalendarBasicText` | [0..*] |
| `_Assgn` | `I_PublHldayCalendarAssignment` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Holiday Calendar'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'PublicHolidayCalendarID'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S


define view entity I_PublicHolidayCalendarBasic 
  as select from R_FHC_HCAL_COMBINED 
  
  association [0..*] to I_PublHolidayCalendarBasicText as _Text on $projection.PublicHolidayCalendarID = _Text.PublicHolidayCalendarID
  association [0..*] to I_PublHldayCalendarAssignment as _Assgn on $projection.PublicHolidayCalendarID = _Assgn.PublicHolidayCalendarID

{
        @ObjectModel.text.association: '_Text'
    key PublicHolidayCalendarID,
        PublicHolidayCalendarLegacyID,
        PublHldayCalValidityStartDate,
        PublHldayCalValidityEndDate,
        
        _Text,
        _Assgn
       
        
}
```
