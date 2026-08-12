---
name: I_WRNTYCLAIMDECISIONCODETEXT
description: "Wrntyclaimdecisioncodetext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - text-view
  - text
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMDECISIONCODETEXT

**Wrntyclaimdecisioncodetext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyClaimItemDecisionCode` | ✓ | |  | `rejcd` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `WrntyDecisionCodeText` |  | |  | `rejcd_txt` |  |  |
| `_WrntyClaimDecisionCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimDecisionCode` | `I_WrntyClaimDecisionCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Decision Code - Text'
@ObjectModel:{
    representativeKey: 'WarrantyClaimItemDecisionCode',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        }
}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory : #TEXT
@Analytics.technicalName: 'IWRNTYCLMDSNCTXT'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true

define view entity I_WrntyClaimDecisionCodeText
  as select from cwty003t
  association [1..1] to I_WrntyClaimDecisionCode as _WrntyClaimDecisionCode on $projection.WarrantyClaimItemDecisionCode = _WrntyClaimDecisionCode.WarrantyClaimItemDecisionCode
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
  key rejcd     as WarrantyClaimItemDecisionCode,
      @Semantics.language: true
  key spras     as Language,
      @Semantics.text:true
     rejcd_txt as WrntyDecisionCodeText,
      _Language,
     _WrntyClaimDecisionCode


}
```
