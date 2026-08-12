---
name: I_TIMESHEETREJECTIONREASONTEXT
description: "Timesheetrejectionreasontext"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-TS
  - interface-view
  - text-view
  - text
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETREJECTIONREASONTEXT

**Timesheetrejectionreasontext**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `TimeSheetRejectionReason` | ✓ | |  | `reason` |  |  |
| `TimeSheetRejectionReasonText` |  | |  | `cast(text as catsrejetext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSTREJECTTXT'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TimeSheetRejectionReason'
@EndUserText.label: 'Rejection Reason for Timesheet - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_TimeSheetRejectionReasonText
  as select from tcatsdt
//      association[0..1] to I_TimeSheetRejectionReason as _TimeSheetRejectionReason      
//       on $projection.TimeSheetRejectionReason = _TimeSheetRejectionReason.TimeSheetRejectionReason
      association[0..1] to I_Language             as _Language                  
       on $projection.Language = _Language.Language
{

       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  langu  as Language,

//       @ObjectModel.foreignKey.association: '_TimeSheetRejectionReason'
       @ObjectModel.text.element: ['TimeSheetRejectionReasonText']
  key  reason as TimeSheetRejectionReason,

       //@EndUserText.label: 'Rejection Reason Text'
       //Commented Label in CE2111 For ATC Resolution As Part Of ES
       //Casting added for Label
       @Semantics.text: true
       cast(text as catsrejetext preserving type )   as TimeSheetRejectionReasonText,
       
       //Associations
//      _TimeSheetRejectionReason,
      _Language 

}
```
