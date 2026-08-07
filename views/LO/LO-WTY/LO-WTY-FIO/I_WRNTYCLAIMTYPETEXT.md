---
name: I_WRNTYCLAIMTYPETEXT
description: "Wrntyclaimtypetext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
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
# I_WRNTYCLAIMTYPETEXT

**Wrntyclaimtypetext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyClaimType` | ✓ | |  | `clmty` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `WrntyClaimTypeText` |  | |  | `clmty_des` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warrnty Claim Type - Text'
@ObjectModel:{
    representativeKey: 'WarrantyClaimType',
    usageType:{
        dataClass       : #CUSTOMIZING,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
   //Start of KK001
     supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                #CDS_MODELING_ASSOCIATION_TARGET, 
                                #SQL_DATA_SOURCE,                                 
                                #CDS_MODELING_DATA_SOURCE, 
                                #EXTRACTION_DATA_SOURCE, 
                                #SEARCHABLE_ENTITY],
     modelingPattern: #LANGUAGE_DEPENDENT_TEXT
     }
 @Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true    
     //End of KK001


@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@ObjectModel.dataCategory : #TEXT
@Analytics.technicalName: 'IWRNTYCLMTYPETXT'
@VDM: {
  viewType: #BASIC,                          //#COMPOSITE,*******Modernization Task********
  //viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_WrntyClaimTypeText
  as select from cwty001t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key clmty     as WarrantyClaimType,
      @Semantics.language: true
  key spras     as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      clmty_des as WrntyClaimTypeText,
      _Language
}
```
